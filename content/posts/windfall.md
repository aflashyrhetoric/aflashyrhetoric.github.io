+++
date = "2017-05-25T16:33:48-04:00"
title = "windfall"
slug = "windfall"
series = "Windfall"
ogdescription = "Windfall is a planned software project"
+++

:rotating_light: DRAFT 0.0.1 :rotating_light:

# Summary & Introduction

*Windfall is a planned software project.*

Windfall scrapes/fetches data from **news** and **social media** sources and processes it to predict stock market prices in real-time. It also seeks to retroactively generate stock-related insights by analyzing correlations between news coverage and stock performance. Lastly, it seeks to provide users with a panel through which they can navigate this nuanced data and strategize to maximize their returns.

Even without that last piece, Windfall seeks to algorithmically examine the relationship - if any - between the news we consume and the way our financial markets respond in kind. Windfall doesn't seek to beat out similar software, but rather to approach the situation in its own way.

Research into the various fields are being done before any official development takes place, both for literacy in the rigorous subject matter, and to help ensure that:

- the algorithms are mathematically sound and provide *significant* (as opposed to *meaningless*) data
- any conclusions drawn from the gleaned data are directly and logically derived from the data

Windfall will be composed of a series of modules. The sections below lightly detail the modules that are planned so far, and provide an overview on how they should work together.

Cheers, here's to making this pipe dream of an application into reality. :beer:

---

# Getting Started

## Scraping Module, or `scraper`
This module is responsible for the scraping of various news sources.

It will use "official" **News** sources, such as:

- Bloomberg.com
- BBC.co.uk
- The Wall Street Journal (WSJ)

... as well as **Social Media** sources with an API, such as Twitter. For sources without an API, data will be gathered via the [Scrapy](scrapy.org) library.

Support for [GraphQL](http://graphql.org/) is being considered.

| Methods | Parameters | Description | Returns
|---|---|---|---|
| parseNewsSource | sourceId | Parses a single News source using respective Scraper or API| JSON
| parseSocialSource | sourceId | Parses a single Social source using respective Scraper or API| JSON

---

## Source Listener Module, or `listener`
This module is responsible for listening (via polling) for new publications and posts across all **sources** and then direct successful requests to the `scraper`. 

| Methods | Parameters | Description | Returns
|---|---|---|---|
| handle | - | Handles the `newSourceDetected` event | `articleURL`, `sourceId`, ``

---

# Approach

## 1. Listen for new publications.

#### For News Sources
When new posts are published, the `listener` should catch the story and pass the `articleURL` and `sourceId` to the `scraper`. Blog posts will be considered "official news sources," since a certain baseline of grammar is guaranteed.

#### For Social Sources
When new comments or tweets are published, the `listener` should catch the story and pass the `articleURL` and `sourceId` to the `scraper`.

---

## 2. Process data.
Once the data is retrieved, we will have a corpus of text data to be analyzed.

#### Sentiment Analysis & NLP

Sentiment Analysis and other NLP analytical processes will be applied to the text, ultimately outputting a "score action". The term `action` here is used in the context of [Redux](http://redux.js.org/) actions. 

These generated [Actions](http://redux.js.org/docs/basics/Actions.html), coupled with [Reducers](http://redux.js.org/docs/basics/Reducers.html), will serve to mutate and calibrate a master `object` that represents Windfall's current understanding of the health of each stock.

This operation will be done asynchronously, as per [this documentation](http://redux.js.org/docs/advanced/AsyncActions.html).

With an asynchronous, redux-based implementation, we should be able to amass an extremely navigable record of changes. By observing the patterns in these changes, we can prescribe a course of action in that taunting binary choice that commands the stock market: *invest*, or *don't*?

--- 

#### Machine Learning

Financial records are immaculately preserved, and serve as a potent resource for machine learning training. It is possible that by retroactively parsing news resources and pairing them semantically with news coverage patterns within the same units of time, we can synthesize an understanding of the following:

- which news resources are the most accurate & most consistent predictors of stock market behavior (whether by cause or effect)
- which kinds of vocabulary most directly correlates with which kind of stock market behavior

These two data points will allow us to hone our news parsing algorithm by assigning *weights* to data gleaned from **Source A** vs **Source B**, ultimately resulting in a far more accurate model over all.

**ALTERNATIVELY**, as a practical consideration and following the software principle that software should *complement*, rather than *completely replace* the element of *human decision*, we may simply opt to provide a GUI-friendly portal to this historical stock data instead of using it as a factor relevant to the scoring.

---

# Implementation
Details regarding the architecture for the site.

## Summary
There will be several modules. A dedicated parser/scraper API, a server for users and back-end data, and a ReactJS front-end. The software is, ultimately, intended for use by people and not developers. Thus, the API will be internal use only. 

---

### Back-end

#### Processing
A server running Flask will contain processes that are polling all data sources at some yet-undetermined interval. `cron` or some *daemon* will be deployed to listen for new news stories and parse them upon release. This server will contain the code for the `scraper` and the `listener`. 

#### User Base & Data
A second server running [Laravel](http://laravel.com/) or [Echo](https://echo.labstack.com/) with the [GORM ORM](https://github.com/jinzhu/gorm) will be deployed. This server will contain the code controlling user sign up and user-specific data, such as *stocks to track*, as well as interactively generate personalized financial projections.

---
### Front-end

#### Historical View
The Laravel server from previously will also "dumbly" serve static past stock historical data, using AJAX and a search engine like [Apache Solr](http://lucene.apache.org/solr/) and [D3](https://d3js.org/) to allow for swift browsing of stock histories. These can just use Blade templates.

#### Admin Panel
A third server will serve a React-powered front-end. This "admin panel" of sorts will allow you to view your timeline of promising stocks, track specific stocks, create manual mappings between stocks and keywords, etc.

---

#### Basic DevOps & Environments
There will be staging environments for each component. Jenkins CI will be used to build each application as necessary on EC2 instances. `nginx` will be used. 

#### Libraries

Although the exact libraries used are obviously difficult to predict, some likely libraries will be:

- Scrapy
- SciPy
- Natural Language Tool Kit, or NLTK

Back-end libraries/frameworks will include Flask for the scraping API, either Laravel or Echo for the main web application back-end. 

Front-end libraries will include Bulma, along with Google WebFonts and TypeKit. Webpack will be used to build, bundle, and optimize assets. 

ReactJS will be used to power the "dashboard" or "admin panel" aspect. Redux will be used as the state container. ES6 features, such as promises, will likely be used fairly often, so Babel will be used to transpile. 

---

# FAQ

#### How long will this take?
Legit, it could take 30 years. I have no idea if I'm legit enough for this project. But it's fascinating and I would love to give it a try.

#### Are you open to collaborators?
No. The project doesn't exist in a tangible state yet. Managing a project of this scale would also be extremely difficult. 

#### Do you even know NLP, machine learning, the stock market, or any of that?
No, but I know more than I did a year ago, and next year I'll know more than I do today. And so it goes.

#### Will Internet Explorer / MS Edge be supported?
No.

#### Who is the target userbase?
Not sure as of yet. This, along with tons of other design decisions, will be made iteratively along the way.