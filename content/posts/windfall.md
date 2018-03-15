+++
date = "2017-05-25T16:33:48-04:00"
title = "windfall"
slug = "windfall"
series = "Windfall"
ogdescription = "Windfall is a planned software project"
draft = true
+++

:rotating_light: Draft 0.0.2 :rotating_light:

# Summary & Introduction
*Windfall is a planned software project.*

Windfall scrapes/fetches data from **news** and **social media** sources and applies machine learning principles to predict stock market prices in real-time. It also seeks to provide users with a panel through which they can navigate this nuanced data and strategize to maximize their returns.

Windfall seeks to algorithmically examine the relationship - if any - between the news we consume and the way our financial markets respond in kind. Windfall doesn't seek to “beat” similar software - and trust us, we know we’re not the first - but rather to approach the situation in its own unique way.

Continued research into the many relevant fields is being done before any official development takes place, both for literacy in the rigorous subject matter, and to help ensure that:

 * the algorithms are mathematically sound and provide *significant* data

Windfall will be composed of a series of modules. The sections below lightly detail the modules that are planned so far, and provide an overview on how they will work together.

Cheers, here's to making this pipe dream of an application into reality. :beer:

---

# Getting Started
Below is a list of the 5 primary modules that will comprise Windfall’s back-end. In addition to these modules, there will be a dedicated front-end and a “site” front-end that will provide a simple user CRUD system.

## Data Scraping Module, or `scraper`
This module is responsible for:

1. Crawling the websites from the `listener` module.
2. Gleaning all data
3. Packaging the data in an iterable and analyzable format (JSON)
4. Handing off the data to the `analyzer`.
Other data spaces are being explored.

Support for [GraphQL](http://graphql.org/) is being considered as a way to retrieve data from the API, although it is uncertain whether this application will have a public API or be offered “as-is.”

---

## Source Listener Module, or `listener`
This module is responsible for:

1. Listening (via interval polling) for new publications and posts across all **sources**
2. Directing successful HTTP requests to the `scraper`. 

## Analyzer Mediator or `analysis-mediator`
This mediator module is responsible for: 

1. Coordinating data among the `analyzer` submodules, which will each yield insight in different ways. In other words, it is the synchronous endpoint to which the following `analysis-*` submodules will resolve.

### Sentiment Analysis Submodule, or `analysis-sa`

The goal of this submodule is to produce a “score” for each individual article/post. The hypothesis is that this score, when multiplied by the weight associated with the article’s origin (as produced by the next module below), will allow for a more accurate score overall.

This submodule is responsible for:

1. Performing sentiment analysis on the given text corpus
2. Producing a “score” that will factor into the final prediction

### Retroactive Multivariate Regression Submodule, or `analysis-mr`

The goal of this submodule is to produce coefficients (or “weights”) that describe the reliability of various news sources as predictors of stock performance.

This submodule is responsible for:

1. Retroactively analyzing past correlations between published data and stock performance
2. Determining which sources (as in authors as well as publications) are the best for predicting stock performance.

## Prediction Module, or `predictor`
Finally, the goal of this module is to “stitch” all the information so far into a bundle of information that is easy to understand.

Below are some “User Stories” of how this module’s data might be used.

1. Click “Featured” to see promising stock predictions in general
2. Check a specific stock to see its current performance as well as a list of articles that indicate its reliability

---

# Broader Overview
The above section detailed the modules involved. This section discusses some implementation-specific information, as *distinct* from the core *Windfall Engine*.

#### Sentiment Analysis & NLP

Sentiment Analysis and other NLP analytical processes will be applied to the text, ultimately outputting a "score action". The term `action` here is used in the context of [Redux](http://redux.js.org/) actions. 

These generated [Actions](http://redux.js.org/docs/basics/Actions.html), coupled with [Reducers](http://redux.js.org/docs/basics/Reducers.html), will serve to mutate and “train” a master `object` that represents Windfall's current understanding of the health of each stock.


Inasmuch as possible, this operation will be done asynchronously, as per [this documentation](http://redux.js.org/docs/advanced/AsyncActions.html), to prepare Windfall as an “always-on, always-analyzing” engine that is minimally capped by low-spec hardware.

With an asynchronous, redux-based implementation, we should be able to amass an extremely navigable record of changes. By observing the patterns in these changes, we can prescribe a course of action in that taunting binary choice that commands the stock market: *invest*, or *don't*?

--- 

#### Retroactive supervised machine learning

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

#### Primary App Server
A server running Flask will contain processes that are polling all data sources at some yet-undetermined interval. `cron` or some *daemon* will be deployed to listen for new news stories and parse them upon release. This server will contain the code for the primary modules mentioned above.

#### Site Server
A second server running [Laravel](http://laravel.com/) or [Echo](https://echo.labstack.com/) with the [GORM ORM](https://github.com/jinzhu/gorm) will be deployed. This server will contain the code controlling user sign up and user-specific data, such as *stocks to track*, as well as interactively generate personalized financial projections.

---
### Front-end

#### Historical View
The Laravel server will also "dumbly" serve static past stock historical data, using AJAX and a search engine like [Apache Solr](http://lucene.apache.org/solr/) and [D3](https://d3js.org/) to allow for swift browsing of stock histories. These can just use Blade templates.

#### Admin Panel
A third server will serve a React-powered front-end. This "admin panel" of sorts will allow you to view your timeline of promising stocks, track specific stocks, create manual mappings between stocks and keywords, etc.

---

### Basic DevOps & Environments
There will be staging environments for each component. Jenkins CI will be used to build each application as necessary on EC2 instances. `nginx` will be used. 

### Libraries
Although the exact libraries used are obviously difficult to predict, some likely libraries will be:

- Scrapy
- SciPy / NumPy
- Natural Language Tool Kit, or NLTK
- Scikit-learn

Back-end libraries/frameworks will include Flask for the scraping API, either Laravel or Echo for the main web application back-end. 

Front-end libraries will include Bulma, along with Google WebFonts and TypeKit. Webpack will be used to build, bundle, and optimize assets. 

ReactJS will be used to power the "dashboard" or "admin panel" aspect. Redux will be used as the state container. ES6 may be used, although the Python versions of ES6-esque features (such as “promises” ) is being researched.

---

# FAQ
#### How long will this take?
No idea. I’ll probably never finish.

#### You know that this has been done a million times before, right?
Yes.

#### You know that there are massive corporations pouring billions into software just like this, right? Teams of people who are years ahead of you.
Yes, I’m aware. It’s essentially a pipe dream.

#### Then why do it?
A sacrosanct desire to leverage the immense computational power available to us to empower and equip the lower/middle class so that they might auspiciously compete in that global financial arena which has, for too long, been bloodied by the-

#### Ok, damn lol chill
Sorry bro I just get so heated u know

#### It’s okay. How are you doing?
I’ve been better. I’ve been getting caffeine headaches.

#### Take some Tylenol. It’ll take the edge off.
Oh, okay. Thank you.

#### So are you open to collaborators?
No. The project doesn't even exist in a tangible state yet. I’d like to have more than just the first draft of a theoretical overview before I ask people to join in.

#### Do you even know NLP, machine learning, the stock market, or any of that?
No, but I know more than I did last year. And I’ll know more next year than I do now. And so it goes.

#### Who is the target user base?
For now, just me. Later, anyone who wants to use it.

#### If this fails, what’s your fallback?
*I’ve always wanted to be a baker.*