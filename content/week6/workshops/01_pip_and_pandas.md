# Pip, dependency management and Pandas

> **We've taught this before!**
>
> See a previous version of this class [here](https://sigmalabs.rewatch.com/video/8768/dependency-management-intro-to-pandas-coding-workshop-may-24-2021/)

## Learning Objectives

By the end of this session, an attendee should be able to

- Explain why we use external dependencies, and the role of a package manager like `pip`
- Understand the complexities involved in dependency management, including transitive dependencies
- Install a fresh instance of Python 3, `pip` and Pandas
- Launch a Python REPL, import Pandas and load a dataframe from a local CSV file
- Extract individual rows and columns from a dataframe for further analysis
- Extract ranges of rows and columns from a dataframe for further analysis

## Pre-work

### 1. Setup

If you haven't already, make sure you have Python and `pip` installed. You can find the install instructions [here](/getting-setup.md#38-python--pip)

### 2. Research

**Setup:** If nobody has done so already, create a thread on Slack titled "Dependency Management Research". You'll be sharing useful links in there.

Research and find answers to the following questions

1. What is dependency management?
2. What is a transitive dependency?
3. What is a circular dependency?
4. What is dependency hell 😈?

## Workshop Details

### Discussion (10 mins)

Discuss dependency management as it relates to Python. Go through the answers to the question in the pre-work. Discuss how dependency management is different in Python compared to Deno.

Draw out or show an example of a dependency graph (e.g. https://npmgraph.js.org/?q=glob). Discuss transitive dependencies and dependency conflicts.

Lastly, briefly introduce other alternative approaches to dependency management in Python, such as:

- [Anaconda](https://www.anaconda.com/products/individual)
- [Miniconda](https://docs.conda.io/en/latest/miniconda.html)
- [virtualenv](https://virtualenv.pypa.io/en/latest/)
- [Poetry](https://python-poetry.org/)
- [PDM](https://github.com/pdm-project/pdm/)

### Challenge (30 mins)

Launch a Python REPL, ideally using [`ptpython`](https://github.com/prompt-toolkit/ptpython). Import `pandas` and load `yorkshiredales_spending_data.csv` for some interactive exploration.

You should call out:

- What happens when you try to print the whole dataframe
- How to show the rows at the beginning and end of the dataframe
- How to show a numerical range of row (e.g. rows 20 - 40)
- How to show a subset of columns
- How to calculate an aggregate function (like `mean`) on a dataframe or some rows of a dataframe
- How to fill in or remove missing values

Be sure to leave time for questions and experimentation.
