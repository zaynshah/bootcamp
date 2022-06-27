Week 5 - Mastery quiz
====

<hr>

1. I'm investigating the impact of two vitamins (Vitamin X and Vitamin Y) on recovery from some disease. In trial 1, I find a strong positive correlation between the levels of Vitamin X and recovery rates, with a p-value of 0.6. In trial 2, I find a weak positive correlation between the levels of Vitamin Y and recovery rates, with a p-value of 0.001. Which Vitamin is more promising as a treatment for the disease, and why?

<hr>

2.  I run a study on final year university students. I find that students who study 0-5 hours/week (outside of lectures) attain an average final mark of 62%, those who study 5-10 hours a week attain 71%, and those who study 10-20 hours a week attain 78%. I confirm my findings with a linear regression, which finds a strong positive correlation with a low p-value. I conclude:

> Spending additional hours studying positively impacts a student's final grade.

Is this a reasonable conclusion? Why or why not?

<hr>

3. The code below calculates the positive even [square numbers](https://en.wikipedia.org/wiki/Square_number) between 1 - 100 in JavaScript

```js
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
nums.map(n => n * n).filter(sq => sq % 2 === 0)
```

How would you write this snippet using a **list comprehension** in Python (i.e. without using the `map()` or `filter()` methods)?

<hr>

4. How would I select all rows from a dataframe of my Covid parks dataset, where the crowd was encountered in Brooklyn, and contained 100 - 200 people?

<hr>

5. I have a dataset for a shoe shop. The data includes (among other things) a customer's shoe size, and their satisfaction with their shopping experience (on a scale of 1 to 5). I'm missing a few datapoints for these two columns, and decide to fix that using imputation with mean substitution. Is this reasonable? Why or why not?

<hr>

6. What's the output of running the last line of this script?:

```python
>>> df = pd.read_csv('parks.csv')

# How many rows in our dataframe?
>>> len(df)
1862

# How many null values in the amenity column?
>>> df.amenity.isna().sum()
687

>>> df.dropna()
# How many rows in our dataframe now?
>>> len(df)
# ???
```

<hr>

7. With my petrol consumption dataset, I run a linear regression to see if there's a relationship between income and petrol consumption. I run the following:

```python
df = pd.read_csv('petrol_consumption.csv')
sm.ols(formula="petrol_consumption ~ average_income", data=df).fit().summary()
```

And I get the following results:

```
                            OLS Regression Results
==============================================================================
Dep. Variable:     petrol_consumption   R-squared:                       0.060
Model:                            OLS   Adj. R-squared:                  0.040
Method:                 Least Squares   F-statistic:                     2.934
Date:                Thu, 27 May 2021   Prob (F-statistic):             0.0935
Time:                        13:57:22   Log-Likelihood:                -292.56
No. Observations:                  48   AIC:                             589.1
Df Residuals:                      46   BIC:                             592.9
Df Model:                           1
Covariance Type:            nonrobust
==================================================================================
                     coef    std err          t      P>|t|      [0.025      0.975]
----------------------------------------------------------------------------------
Intercept        779.3632    119.330      6.531      0.000     539.164    1019.562
average_income    -0.0478      0.028     -1.713      0.093      -0.104       0.008
==============================================================================
Omnibus:                       24.960   Durbin-Watson:                   1.323
Prob(Omnibus):                  0.000   Jarque-Bera (JB):               43.934
Skew:                           1.575   Prob(JB):                     2.88e-10
Kurtosis:                       6.471   Cond. No.                     3.23e+04
==============================================================================
```

- Do I see a positive or negative correlation? Is the correlation strong or weak?
- How would you explain the relationship in plain English?
- Would my result generally be considered to be statistical significant? Why or why not?

<hr>

8. What's the problem with the code below?:

```python
class Dog():
  def __init__(name):
    self.name = name
  
  def say_hello():
    print("Woof! Hello I'm " + self.name)

fido = Dog("Fido")
fido.say_hello()
```

<hr>

9. In plain English, what will the snippet below calculate? Approximately how many values would you expect to get back?:

```python
df.groupby(['park_borough', 'amenity']).patroncount.max()
```

<hr>

10. When analysing my shoe shop dataset, I have a theory that customers with a larger shoe size are more satisfied with their store visits. 

- What exploratory data visualisation could I create to get a clue as to whether my hunch is right?
- What should I expect to see (visually) to provisionally confirm my theory?
- How would I formalise my analysis, and ensure my result is statistically significant?
