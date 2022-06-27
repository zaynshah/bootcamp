Week 5 - Mastery quiz (answers)
====

<hr>

Question 1.

**Answer**: Vitamin Y.

**Explanation**: Although the observed effect is larger for the Vitamin X, the high p-value means that we'd be likely (have a 60% chance) of seeing an equivalent effect given our null hypothesis (Vitamin X has no impact on disease recovery). On the other hand, although our observed effect for Vitamin Y is more modest, the chance is very low that we'd observe the effect given our null hypothesis.

**If you got this wrong**: Go over the material on p-values again:

- [:link: - p-values: What they are and how to interpret them (10 min watch)](https://www.youtube.com/watch?v=vemZtEM63GY)

<hr>

Question 2.

**Answer & explanation**: Probably not, because we've observed *correlation* but we've claimed *causation*. For example, it may be that students who grasp the course content in lectures find they enjoy the course more and thus spend more time studying - whereas those who don't understand lectures become frustrated with the course and don't study afterwards. In other words, study time is a *result* of mastery of the material, rather than being the *cause* of the mastery of the material.

**If you got this wrong**: Review the material below on causation and correlation:

- [:link: - Correlation does not imply causation (Wikipedia)](https://en.wikipedia.org/wiki/Correlation_does_not_imply_causation)
- [:link: - Correlation vs Causation: Understand the Difference for Your Product](https://amplitude.com/blog/causation-correlation)

<hr>

Question 3.

**Answer**:

```python
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
[n * n for n in nums if n * n % 2 == 0]
```

Note that `[n * n for n in nums if n % 2 == 0]` will still work, but only because an even number squared is even (and an odd number squared is odd). The answer above is a more faithful translation of our JS version.

**If you got this wrong**: Review the *Learn X in Y minutes, Where X=Python* tutorial, especially the section on list comprehensions:

- [:link: - Learn X in Y minutes, Where X=Python](https://learnxinyminutes.com/docs/python/) (~60 min exercise)

<hr>

Question 4.

**Answer**:

```python
df[df.borough == 'Brooklyn' & df.patroncount >= 100 & df.patroncount <= 200]
```

**If you got this wrong**: Review the Pandas documentation on boolean indexing:

- [:link: - Pandas User Guide > Boolean indexing](https://pandas.pydata.org/pandas-docs/stable/user_guide/indexing.html#boolean-indexing)

<hr>

Question 5.

**Answer & explanation**: There's no hard and fast answer to this question, but I'd argue that mean substitution is reasonable for shoe size, but not for customer satisfaction. We know that shoe size follows a [normal distribution](https://en.wikipedia.org/wiki/Normal_distribution), so in the absense of data, assuming someone will have average size feet is reasonable. However, we can't draw the same conclusion about customer satisfaction. If our data shows that 5 people had a 1 star experience, and 5 people had a 5 star experience, then our mean subsituted "guess" that a customer will have had a 3 star experience is likely to be wrong.

**If you got this wrong**: Review the below material on imputation:

- [:link: - Imputation (Wikipedia)](https://en.wikipedia.org/wiki/Imputation_(statistics))
- [:link: - To Impute or not to Impute? A practical example when careless Imputation could lead to wrong conclusions](https://towardsdatascience.com/to-impute-or-not-to-impute-a-practical-example-when-imputation-could-lead-to-wrong-conclusions-fd1e340d779a)

<hr>

Question 6.

**Answer & explanation**: A semi-trick question: `dropna()` doesn't modify our dataframe by default, so there are still 1862 rows. We'd need to add `inplace=True` or say `df = df.dropna()`.

**If you got this wrong**: Review the *Working with missing data* section of the Pandas docs:

- [:link: - Pandas User Guide > Boolean indexing](https://pandas.pydata.org/pandas-docs/stable/user_guide/missing_data.html)

<hr>

Question 7.

**Answer & explanation**:

- There is a weak negative correlation. The correlation is negative since our coefficient for `average_income` is negative. The correlation is weak because a) our correlation coefficient is close to 0, b) our R-squared number is close to 0.
- We could state that "as average income increases, petrol consumption (slightly) decreases".
- The p-value is too high for the result to be generally considered to be statistically significant. It's rare to consider p-values above 0.05 as significant, and sometimes we require stricter thresholds (0.01, 0.005 etc.)

**If you got this wrong**: Revisit the material on correlation coefficients, and p-values:

- [:link: - p-values: What they are and how to interpret them (10 min watch)](https://www.youtube.com/watch?v=vemZtEM63GY)
- [:link: - What is the Correlation Coefficient r ?](https://www.youtube.com/watch?v=z37oW9fTqAY) (10 min watch)

<hr>

Question 8.

**Answer & explanation**: We need to pass `self` as the first argument to all of the methods we define inside our `Dog` class (or indeed any class in Python):

```python
class Dog():
  def __init__(self, name):
    self.name = name
  
  def say_hello(self):
    print("Woof! Hello I'm " + self.name)

fido = Dog("Fido")
fido.say_hello()
```

**If you got this wrong**: Review the *Learn X in Y minutes, Where X=Python* tutorial, especially the section on classes:

- [:link: - Learn X in Y minutes, Where X=Python](https://learnxinyminutes.com/docs/python/) (~60 min exercise)

<hr>

Question 9.

**Answer & explanation**: It calculates the largest crowd observed and each kind of amenity in each borough. Since we have 5 boroughs, and 13 amenity types, I'd expect a number of rows close to 65. In reality we get 61, since there aren't instances of every combination of amenity + borough (for example, there are no observed Chess areas in Staten Island).

**If you got this wrong**: Review the Pandas documentation on grouping:

- [:link: - Pandas User Guide > Group by](https://pandas.pydata.org/pandas-docs/stable/user_guide/groupby.html)

<hr>

Question 10.

**Answer**:

- I would most likely make a scatter plot, where each data point is a customer visit. My x-axis would be shoe size, and my y-axis would be customer satisfaction.
- If my theory is correct, I'd expect the my cloud of points tending towards a line of fit moving up and to the right, like so:

<img src='https://user-images.githubusercontent.com/636814/119826949-e0f12900-bef8-11eb-9665-5f5acd9580b5.png' width=600>

- To formalise my analysis, I would do a linear regression. I'd then check the p-value was sufficiently low (e.g. < 0.05) to confirm my findings were statistically significant.

**If you got this wrong**: Review the week's materials on visualisation, and statistical significance.