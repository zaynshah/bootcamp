# How The Internet Works

## Learning Objectives

- Define what a Browser is and it's role on the internet
- Define what an IP address is and it's role on the internet
- Describe what a DNS server is and what it's role is in the internet
- Describe what a router (i.e. a home router) is and what it's role is in the internet
- Describe what TCP, UDP and Websocket connections are and how they differ

## Pre-work

### Setup

If it hasn't been created, create a thread in #workshops called 'Week 7: How the Internet Works Pre Work'.

### Watch

[How the Internet Works in Five Minutes](https://www.youtube.com/watch?v=7_LPdttKXPc)

### Concept Map

Based on your current understanding of how the internet works draw a [concept map](https://ctl.byu.edu/tip/concept-mapping) of how the different components fit together.

You are welcome to draw it in as much granularity as you like. Don't worry too much if you don't understand most of it - we'll cover it in this session.

**Share** your concept map in the thread in Slack.

## Workshop

### Live Example

#### Setup

For this exercise we're going to draw out a concept map in real time.

Steps that should be drawn are highlighted by with this syntax

> CONCEPT

To begin, add two boxes a good distance apart

> CONCEPT Draw a box with "My Computer" in it
> CONCEPT Draw a box with "www.google.com" in it

#### Challenges

On the internet we've got a few key challenges to solve

1. How do we connect to the internet?
2. How do we know where other servers are?
3. How do we communicate with them?

#### How do we connect to the internet?

In this room, there are probably 30-40 devices all connected to the internet. To be able to talk to each other we'll need a computer sitting in the middle coordinating all of us otherwise it would be mayhem.

> CONCEPT: Add a box and write the word Router in it
> CONCEPT: Connect My Computer and Router with a bi-directional arrow

The router's key job is to make sure that every computer connected to our WiFi network is given a unique address. You can find out your unique address by running this command in the terminal

`ipconfig getifaddr en0`

> Next, get a student to shout our there IP address and run `ping <THEIR_IP_ADDRESS>` to show that I can find them on the network

Now that we can send data to each other, how would we send data to servers not in the room?

#### How do we know where other servers are?

Every website (and server) on the planet has an IP address. This is a unique address that means that anyone can find them.

> You can demonstrate this by showing `ping www.sigmalabs.co.uk` or `ping www.google.com` in the terminal. You can show that if you type in the ip address that is pinged it will send us to Google.

However - we've got a problem - how do we know what IP address correspond with which address?

This is where DNS - Domain Name Servers - come in. These are servers that store large databases of which website lives where.

> CONCEPT Draw a box and write DNS in it
> CONCEPT Connect this box to the Router and connect them with a bi-directional arrow

When we type in an address in our browser, our browser is going to go to different places to try to find the IP Address of the website we want. If it can't find it, then it'll go to the next level up.

1. Our Router (it keeps a small list of websites)
2. A Local DNS Server (e.g for our city)
3. A Larger DNS Server (e.g for our country)
4. A Global DNS Server (e.g for the world)

When it finds the IP address of the website it will come back and tell our Browser about it.

> CONCEPT Draw a bi-directional arrow from our Router to "www.google.com"

#### How do we communicate with them?

Great! We've got the IP Address of the website we want to visit - next how do we communicate with them?

Generally on the internet we use the HTTP protocol to communicate. This is a standardised way that computers will communicated with others as we've been exploring this week (e.g. HTTP Header Methods)

There are several different connection types that we can use to talk to servers or websites with three major ones being

- TCP
- UDP
- Web Sockets

> Split the class into groups and ask them to research one of these topics each. Feed back with their findings about 5-10 minutes.

To wrap up, explain that predominately on the Web we use TCP.

### Concept Map - Again

Based on your updated understanding of how the internet works draw a [concept map](https://ctl.byu.edu/tip/concept-mapping) of how the different components fit together.

### Recap

1. What is a DNS Server?
2. What is TCP?
3. What is UDP?
4. What are Web Sockets?
5. What is an IP Address?
6. What is a router and what is it useful for?
7. What is a Browser and what is it use on the internet?
