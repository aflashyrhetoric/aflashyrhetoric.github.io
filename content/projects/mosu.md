+++
title = "Mosu"
project = "mosu"
+++

## LinkedIn, Hired, Vettery, Indeed, Monster......:no_good:

[Mosu](https://mosu.io) (NOW RETIRED) arose out of my personal frustration with the process of job hunting. There are something like a dozen different "job board" websites, each with their own quirks. I found myself running around between ten different accounts, trying to remember which job applications were in which "state":

- Saved, or "To Be Applied To"
- Application sent
- Currently interviewing
- Successfully received an offer

The experience was complete :poop: . I decided to build a tool for myself to manage the chaos, since I figured the job search would last at least a few months.

I sat down with some coffee and planned an organization app. The idea was that each **Job Application** goes through a pipeline, compromised of the 4 "states" mentioned above. 

I used Laravel to build a back-end API for a user system, as well as a basic CRUD application for saving "job applications." ReactJS was used on the front-end to display data and allow users to manage their job applications, keeping track of information like salary, location (of the position), whether it was a remote position, URLs to the job posting online, and the state of the application. Color indicators allowed you to see, at a glance, what status a particular job application was in.

I have since taken down the pre-alpha application (which used to reside at [Mosu.io](https://mosu.io)) to work on a proper alpha version. With some simple promotion, I managed to acquire around 20 semi-regular users, who, after about a year, stopped using the app - hopefully they got a job! 

## Planned Features (RETIRED)

This project is archived. Below are an overview of ideas I had for cool features to add.

#### Integration with LinkedIn ::

LinkedIn is the de-facto "home base" for job-seekers. LinkedIn integration would allow for simple sign up and login, and the ability to pull any existing data you may have.

#### Saving Documents

I'm not out to create another Dropbox, but some basic file storage might come in handy for things like resumes.

#### Aggregate Job Board

Different job boards have different job listings. Viewing them in one place could come in very, very handy.

#### "Live Apply" Chrome Extension

Each "job board" site requires different pieces of information. Some require a "long bio" while others prohibit biographies that are longer than 200 words or so.

Write your content all in one place, and visit a job listing. The Chrome extension can detect your current website and show only the relevant information.

---

> **NOTE**: Mosu is not actively maintained and is not compliant with the newest GDPR regulations.
