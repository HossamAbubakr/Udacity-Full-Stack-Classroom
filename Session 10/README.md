# Session 10

## 📖 Overview

In Today's session we concluded our cloud deployment journey.

We started by expanding our knowledge about the cloud and deployment.

Then we learned about the inner-workings of Elastic Beanstalk and the steps it takes.

Afterwards we learned about the popular CI/CD platform. Learning what it is and how does it work.

And then we took a step back and took a general look and we learned how to approach an application for CI/CD.

We understood all the steps we need to go from source code to production and created all the necessary scripts.

We then started creating our CircleCI script and learned about Orbs and Jobs and how to use them to apply our deployment steps.

We finally finished our CircleCI script, deployed the our projects and troubleshot most common issues that come from a CI/CD pipeline.

For today's bonus content we learned how to create diagrams of our infrastructure and CI/CD pipeline for software documentation purposes.

## 👨‍🏫 Session Summary

#### Section 1: Thinking like a computer

<details>
<summary>Section Part 1 Details</summary>
<br>
<ul>
<li>We revised our knowledge of how Elastic Beanstalk works under the hood.</li>
<li>We configured our environment variables to run correctly in BeanStalk.</li>
<li>We created logical start, build and deploy scripts for our application.</li>
</ul>
</details>
<br>
<details>
<summary>Section Part 2 Details</summary>
<br>
<ul>
<li>We provisioned the cloud resources needed for deploying our application.
</li>
<li>We configured our resources and successfully deployed our application.</li>
<li>We created and tested the deployment script.</li>
</ul>
</details>

#### Section 2: Practical CI/CD

<details>
<summary>Section Details</summary>
<br>
<ul>
<li>We learned about HOW CircleCI works and how it functions under the hood.</li>
<li>We understood the meaning, configuration, and usage of CircleCI orbs.</li>
<li>We created a logical CircleCI configuration file and successfully used it.</li>
<li>We connected CircleCI to the repo and successfully deployed the app.</li>
<li>We pushed a commit and observed CircleCi Continuously deploy.</li>
</ul>
</details>

#### Section 3: Documenting Our Pipeline

<details>
<summary>Section Details</summary>
<br>
<ul>
<li>We did an overview of the project’s rubric and learned about all the required documentation.</li>
<li>Did a quick overview of how to use CloudCraft to make easy cloud diagrams.</li>
</ul>
</details>

## 🔗 Resources

### 🚀 Cloud Deployment

- [How to create/set environment variables in Elastic Beanstalk using the CLI](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb3-setenv.html)
- [AWS EB CLI Cheat Sheet - Elastic Beanstalk (init/create/use/deploy etc)](https://www.cloudvedas.com/2017/12/aws-eb-cli-cheat-sheet-elastic-beanstalk.html)

### ⏩ CI/CD

- [What is CircleCI?](https://www.rootinstall.com/tutorial/what-is-circleci/)
- [Why use CircleCi?](https://www.kofi-group.com/why-circleci-is-best-for-continuous-integration-and-delivery/)
- [CircleCI's Alternatives](https://www.g2.com/products/circleci/competitors/alternatives)

## 🔗 Essentials

- [What is a Job? (CircleCI)](https://support.circleci.com/hc/en-us/articles/115015711148-What-is-a-job-)
- [What is an Orb? (CircleCI)](https://octopus.com/blog/reusable-yaml-with-circleci-orbs)
- [CircleCI configuration basics.](https://circleci.com/docs/2.0/configuration-reference/)
- [Configuring a Node.js Application on CircleCI](https://circleci.com/docs/2.0/language-javascript/)

## 📚 Extra Resources

- [CloudCraft - Create AWS diagrams.](https://www.cloudcraft.co/)
