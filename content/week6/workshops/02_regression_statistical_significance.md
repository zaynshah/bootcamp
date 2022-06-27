# Regression and statistical significance

> **We've taught this before!**
>
> See a previous version of this class [here](https://sigmalabs.rewatch.com/video/8822/regression-and-statistical-significance-coding-workshop-may-25-2021/)

## Learning Objectives

By the end of this session, an attendee should be able to

- Explain the difference between causation and correlation
- Understand the concept of an OLS (ordinary least squares) regression
- Explain how to apply a regression analysis to categorical data
- Perform a regression on a Pandas dataframe with the `statsmodels` library
- Use a regression model to make predictions on unseen examples
- Decide whether the results of a regression analysis are statistically significant or not

## Pre-work

### 1. Finding amusing correlations (5 mins)

Have a skim through a few pages this amusing website:

https://tylervigen.com/page?page=1

Find your favourite spurious correlation.

### 2. Thinking about correlation directions (20 - 30 mins)

**Setup:** If nobody has done so already, create a thread on Slack titled "Regression/Statistical Significance Research". You'll be sharing useful links in there.

Next, find any news article where researchers have established a link between two things. For example:

- "Research reveals link between widespread pain and heightened risk of dementia, stroke"
- "Researchers find ‘prevalent and under-recognized’ link between asthma, domestic violence"
- "Researchers find correlation between consistent mask-wearing and improved well-being"

Now, come up with a plausible hypothesis for:

- "Thing A causes Thing B"
- "Thing B causes Thing A"
- "Thing A and B are caused by something else"

For example, if a study shows a link between gambling and alcohol consumption, I could hypothesise:

- Gambling causes people to drink alcohol, as casinos often have cheap bars, and gamblers might "drown their sorrows"
- Alcohol causes people to gamble, as it lowers their inhibition towards risk
- Both gambling and alcohol consumption are more prevalent in young people. Youth is the real driver of both.

Be ready to discuss your hypotheses with the group!

## Workshop Details

### Discussion (15 mins)

Draw out an example of two continuous variables we would expect to be positively correlated, for example the price of a car and its maximum speed. Discuss how we might draw a line of best fit (perform an OLS linear regression), allowing us to predict the price of a car by its max speed, or vice versa.

Give an example of when two variables might be correlated but not meaningfully related (a spurious correlation).

Lastly, discuss logistic regressions and how they differ from linear regressions. Give an example of when we might use a logistic regression.

### Challenge (30 mins)

Live code a logistic regression model to predict whether a group was approached based on the size of the crowd, using Pandas and `statsmodels`.

You should call out:

- How and why we encode the boolean column (`crowd_approached`) as an integer
- How to inspect the mean crowd size of groups that were and weren't approached
- The key parts of the regression `.summary()` (p-value, correlation coefficient)
- How to make predictions on new data using the model
- How to calculate the mean squared error or mean absolute error of a set of predictions from the model

Be sure to leave time for questions and experimentation.
