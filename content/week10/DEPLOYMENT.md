# Deployment

Finally, let's deploy our application, making accessible not just from our local machine but to allow denizens of the web. As we've already described, our app has three key components:

- Our backend (Deno)
- Our frontend (React)
- Our database (currently SQLite)

The last component, SQLite poses a challenge. SQLite is lightweight database stored on disk. This is great for rapid development, but it isn't very suitable for deployment to the cloud. Have a read of the article below to learn more.

The diagram below shows how we'll deploy our application. Rather than using SQLite, we'll switch over PostgreSQL, a popular, powerful open source RDBMS.

![](https://user-images.githubusercontent.com/636814/101652312-63b32400-3a3e-11eb-91d6-af3e23355777.png)

## Switching to Postgres

The good news is the move from SQLite to PostgreSQL (commonly known as Postgres for short) should be fairly seamless. We'll start by installing Postgres locally using [Homebrew](https://formulae.brew.sh/formula/postgresql):

```
brew install postgresql
brew services start postgresql
```

Next we'll create a default DB user:

```
createuser -s postgres
```

And finally, we'll setup a database for our social new site:

```
createdb news
```

Ensure you can connect to our database using:

```
psql postgres://localhost:5432/social_news_development
```

(You should see something like):

```
psql (12.3)
Type "help" for help.
```

Now we just have to replace our SQLite connection with a PostgreSQL connection. Instead of:

```js
import { DB } from 'https://deno.land/x/sqlite/mod.ts'

const db = new DB('stories.db')
```

We'll write

```js
import { Client } from 'https://deno.land/x/postgres@v0.11.3/mod.ts'

const client = new Client('postgres://localhost:5432/my_project_name')
await client.connect()
```

Lastly, the API of the PostgreSQL Deno library is slightly different from the SQLite library, instead of:

```js
const stories = [...db.query('<FILL ME IN>').asObjects()]
```

We write:

```js
const stories = (await client.queryObject('<FILL ME IN>')).rows
```

There are also differences between the "dialects" of SQL supported by SQLite and PostgreSQL. However, broadly speaking Postgres is _more powerful_ than SQLite, so anything that works in SQLite is likely to work in PostgreSQL. However, you should check your app thoroughly to ensure everything is functioning correctly after switching database engines.

## Avoiding hardcoded configuration with environment variables

In order to get our application ready for deployment, we need to get avoid any instances where we've hardcoded details that are specific to our local setup - especially references to `localhost`. For example, on our local system we want our PostgreSQL DB connection to point to `localhost:5432`, but on Heroku it will point to a cloud-hosted instances of Postgres (something like `postgresql://@ec2-50-17-250-38.compute-1.amazonaws.com:5432/d5u8osf3cgtlg`). How do we use one URL in development and another in production, without maintaining two slightly different codebases? The answer is to use **environment variables**. Watch the video below for an introduction what environment variables are, and why they're useful:

There are plenty of ways to manage environment variables (for example we can add `EXPORT` statements to our `~/.bash_profile`) but we'll use a `.env` file, combined with [the `dotenv` library for Deno](https://deno.land/x/dotenv@v1.0.1). Let's add `.env.development` and `.env.production` files. Next in our app, and the following code:

```js
import { config } from 'https://deno.land/x/dotenv/mod.ts'

const DENO_ENV = Deno.env.get('DENO_ENV') ?? 'development'

config({ path: `./.env.${DENO_ENV}`, export: true })
```

This will now allow us to easily switch between development and production environment variables. Let's test out our setup. At the bottom of your `.js` file, add the line:

```js
console.log(
  `My favourite colour is ${Deno.env.get(
    'FAVE_COLOUR'
  )} and my favourite food is ${Deno.env.get('FAVE_FOOD')}`
)
```

and add the lines:

```
FAVE_COLOUR=red
FAVE_FOOD=rice
```

to `.env.development`, and the lines

```
FAVE_COLOUR=purple
FAVE_FOOD=pasta
```

to `.env.production`. Now if you run:

```
deno run --allow-net --allow-read --allow-env news.js
```

You should see `My favourite colour is red and my favourite food is rice`. On the other hand, running:

```
DENO_ENV=production deno run --allow-net --allow-read --allow-env news.js
```

should yield `My favourite colour is purple and my favourite food is pasta`. Now we can easily change the behaviour of our app, just my prefixing `DENO_ENV=production` to our launch command 🚀. Go ahead and replace our PostgreSQL connection URL (`postgres://localhost:5432/peg_development`) with an environment variable (e.g. `PG_URL`). Do the same for the port number (you should call this environment variable `PORT`). Set it to `8080` in `.env.development`, but omit it from `.env.production`.

## Deploying the backend to Heroku

Now we're ready to deploy the backend to Heroku. First, go ahead and sign up to Heroku, and install the Heroku toolchain. Next, in your app directory run:

```
heroku login
heroku create
```

Next, goo to the app settings:

![](https://res.cloudinary.com/practicaldev/image/fetch/s--cA-tOcPC--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/2qdd49ocji5o8hequh2i.png)

Next, go to the buildpack settings, and click Add buildpack:

![](https://res.cloudinary.com/practicaldev/image/fetch/s--1YBn3Gi4--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/pf7ih5upbyipod9n569r.png)

Add the following Buildpack URL:

```
https://github.com/chibat/heroku-buildpack-deno.git
```

Next, sign up for [ElephantSQL](https://www.elephantsql.com/) and create a free "Tiny Turle" Postgres instance. Make note of the URL of the Postgres database (it will look something like `postgres://sduaukrt:OvHIflXfrOScoyyzvg0tH0IP3lF_smfF@batyr.db.elephantsql.com/sduaukrt`). Add it to `.env.production` as `PG_URL`. Lastly, create a new file in the same directory as `news.js` called `Procfile`. This instructs Heroku on how to run our application. The contents of `Procfile` will be:

```
web: DENO_ENV=production deno run --allow-net --allow-read --allow-env --unstable news.js
```

Now we're ready to deploy our app. First we commit our changes:

```
git add .
git commit -m "Ready for deployment"
```

Then deploy by running `git push heroku master`. We can check everything succeeded by visiting:

```
http://arcane-lowlands-8408.herokuapp.com/stories
```

(with `arcane-lowlands-8408` replaced with your unique Heroku ID). You should see an empty JSON array (since we have no stories in our database yet).

## Deploying the frontend to Netlify

We also have a reference to `localhost` we need to deal with in our frontend: the url of API. Indeed you may be referencing `localhost:8080` in many places in your React app. Replace all instances with `process.env.REACT_APP_API_URL`, then add `REACT_APP_API_URL=http://localhost:8080` to `.env.development` and `REACT_APP_API_URL=http://your-app-id-1234.herokuapp.com` to `.env.production`.

Next, we'll deploy to Netlify. First, sign up to a Netlify account, then run:

```
npm install netlify-cli -g
netlify deploy
```

Which should deploy to a randomly generated `netlify.app` URL as show below:

![](https://cdn.netlify.com/d3cada3ff935545ac86a72c925409dcfd98d28f9/e6aef/img/blog/react-deploy-30-seconds.gif)

You can change the URL to something more friendly via your Netlify app settings. Once you've settled on a URL you like, you should go back and add a more restrictive CORS policy and redeploy your backend.
