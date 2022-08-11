<div align="center">
  <img src="/logo.png" alt="logo" width="500" />
   
  <h2>
    Full-Stack Nanodegree Classroom
  </h2>
  <p>
   Powered By
  </p>
  <p>
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript" />
    <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="postgresql" />
    <img src="https://img.shields.io/badge/Jasmine-8A4182?style=for-the-badge&logo=Jasmine&logoColor=white" alt="jasmine" />
    <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white" alt="jwt" />
    <img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E" alt="prettier" />
    <img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white" alt="eslint" />
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="node" />
    <img src="https://img.shields.io/badge/circleci-343434?style=for-the-badge&logo=circleci&logoColor=white" alt="circleci" />
    <img src="https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white" alt="aws" />
</p>
</div>
<p align="center">
  <a href="#-about">About</a> •
  <a href="#-disclaimer">Disclaimer</a> •
  <a href="#-prerequisites">Prerequisites</a> •
  <a href="#-goals">Goals</a> •
  <a href="#-content">Content</a> •
  <a href="#-setup">Setup</a> •
  <a href="#-questions">Questions</a> •
  <a href="#-contributions">Contributions</a> •
  <a href="#-license">License</a>
</p>

## 💡 About

This repo includes the live coding portion of my lectures for Udacity Full-Stack Javascript Nanodegree students.

We are building a backend application called **Udacity Hub** which functions as a hub for Udacity students and session leads.

In each session, I apply the Nanodegree topics to our application.

Starting from an empty project to a complete application that's deployable to AWS and utilizes CI/CD powered by CircleCI.

This repo will be continuously updated, improved, and iterated upon.

Each session includes a project folder, a list of additional learning resources, a breakdown of the session content, and a quiz.

Each folder contains an extensive list of commits that breaks each session into digestible chunks that are easy to follow.

## ⛔ Disclaimer

Please **DO NOT COPY** any of the code included in this repo into your project submission or you might face a plagiarism case.

The purpose of this repo is to serve as a reference for your self-study after our sessions.

Please don't misuse the code provided as a way to skip finishing your projects.

## 🧱 Prerequisites

Before attempting to start the program you should be familiar with the following topics.

- [JavaScript Essentials](https://www.youtube.com/watch?v=hdI2bqOjy3c)
- [Backend Fundamentals](https://www.youtube.com/watch?v=XBu54nfzxAQ)
- [Express Essentials](https://www.youtube.com/watch?v=L72fhGm1tfE)
- [SQL Essentials](https://www.youtube.com/watch?v=nWeW3sCmD2k)

So please click on the provided links to fill in the gaps in your knowledge.

## 🚀 Goals

By the end of session 10 you will be able to:

- Utilize some of the best features of TypeScript.
- Build comprehensive backend applications.
- Create complex and efficient SQL relationships.
- Retrieve data from SQL using Joins.
- Implement authentication / authorization.
- Implement password hashing, salting, and peppering.
- Create an extensive set of unit tests.
- Create and configure several cloud services.
- Set up and deploy our completed app to the cloud.
- Create a CI/CD pipeline to automate our deployment.

## 📖 Content

### Project 1: (Image Processing API)

- [Session 1](/Session%201)
- [Session 2](/Session%202)
- [Session 3](/Session%203)
- [Resource Hub](/Image-Processing-API-Resources.MD)
- [Project Tips & Tricks Video](https://www.youtube.com/watch?v=qCqAVsIavfQ)

### Project 2: (Build A Storefront Backend)

- [Session 4](/Session%204)
- [Session 5](/Session%205)
- [Session 6](/Session%206)
- [Session 7](/Session%207)
- [Resource Hub](/Build-A-Storefront-Backend-Resources.MD)

### Project 3: (Hosting a Full-Stack Application)

- [Session 8](/Session%208)
- [Session 9](/Session%209)
- [Session 10](/Session%2010)
- [Resource Hub](/Udagram-Deployment-Process.MD)

## 💻 Setup

Each folder functions as its own isolated and self-contained unit.
Meaning that you have to set up each folder individually.

To install the required packages please use

```
npm install
```

Inside the designated **udacity_hub** folder _NOT_ the session folder.

Some of the sessions include unit tests which can be executed using

```
npm run test
```

And starting from session 5 a set of migrations can be executed using

```
npx db-migrate X
```

With X being substituted with **up**, **down** or **reset**.

Starting from _Session 4_, a database will be needed

To create a database through **psql** please use

```
CREATE DATABASE DB_NAME;
```

### 🌟 Special Folders

Some sessions include special or additional data files such as **SQL_REFERENCE.sql** starting from _Session 4_ which includes the SQL commands used in the live session.

Or the **data_migrations** folder starting from _Session 6_ which includes a set of data to be used on your database to add some mock data. And the instructions on how to utilize it are included in the [README](/Session%206/README.md#-notes)

### 🔣 Environment Variables

Starting from _Session 5_ env files are used to pass important information so please check the **ENV-EXAMPLE** file in each session you want to run.

## 🖐 Questions

If you have any questions, ideas, or suggestions please head over to our [discussions board](https://github.com/HossamAbubakr/Udacity-Full-Stack-Classroom/discussions) where I will do my best to implement your ideas and answer your questions.

## 🎉 Contributions

Your contributions are welcome! Whether to:

- Report a bug
- Discuss the state of the code
- Submit a fix
- Propose new features
- Comment on a commit to explain it further.

Our [community](https://github.com/HossamAbubakr/Udacity-Full-Stack-Classroom/discussions) is also open for any of your ideas and questions.

Please note that we have a few self-imposed restrictions

- The changes need to fall under the content of the Nanodegree
- We can't use a different database system or use an ORM
- Change the application structure drastically.

Pull requests are the best way to propose changes to the codebase. We actively welcome your pull requests:

- Fork the repo and create your branch from master.
- If you've added code that should be tested, add tests.
- Ensure the test suite passes.
- Make sure your code lints.
- Issue that pull request!

Please note that any contributions you make will be under the MIT software license.

## 🧾 License

This project and its code are licensed under the [MIT license](http://choosealicense.com/licenses/mit/).

## ⚠️ Disclaimer

Udacity's name and logo are trademarked and owned by The Udacity™ Organization.
