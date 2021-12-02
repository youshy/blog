---
date: "2021-12-03T00:00:00Z"
title: Being a Chef
draft: true
tags: [chef, hackathon]
toc: true
---

My team has won the Chef's Automate for Good hackathon recently - here's a sneak peek into why we did it, how we did it and if we'd do it again. Featuring my good buddy and teammate Jason Field!

<!--more-->

I haven't written for a while, huh? Well, 2021 is about to end, my life won't be the same anymore (IYKYK) but in the meantime, I've managed to team up with a friend of mine, amazing devops fella, Jason Field, write a piece of code that has won the Automate for Good hackathon in "Most Promising Idea" category!

Without further adieu, let's dive into it.

## But Why?

Short answer is - because we've wanted to.

The long answer is - because I wanted a PS5 and we wanted to write some good Go code.

The submission is called Stylelia - and here's Jason to tell you more about what it is:

<Jason>

 Hey all, so I'm Jason, a long term Chef contributor and former board member of the Open Source [Sous-Chefs Org](https://github.com/sous-chefs). 

 Stylelia exists to solve a long term problem that we have seen in the industry, the auto remediation of static code analysis recommendations. As an industry we have a number of great tools out there to help keep our code neat and following best practices, in Ruby we have `rubocop`, for Python it's `pylint`, within Golang we have `golangci-lint` and so on and so on. In Chef the tool is called `cookstyle` and the aim of Stylelia is to automate the running of these tools, with an initial focus on `cookstyle` running and creating pull requests for the recommended fixes into GitHub.

The main aim of Stylelia is to ensure that the code is always in line with recommended standards from the tools making it quicker and easier to develop with.

</Jason>

## How?

The biggest thing was, that we TDD'd the living crap out of our code - albeit we had 8 weeks to build it, we've decided that we'll either build it proper, or not build it at all.

Whole thing is built using Go and leveraging [Cookstyle](https://github.com/chef/cookstyle) within AWS Lambda ecosystem.

## Would you do it again?

<Jason>

Personally I would do it again, my main aim in joining the hackathon was less to learn Chef but to learn GoLang. In this it was successful as Artur helped me to learn a lot during this process. I would recommend a hackathon if there is something you have been wanting to build for a while but not had time to or something you want to learn in a time box. For me having a deadline meant that I had to finish at a certain point and therefore didn't keep delaying things and delaying things. 

To summarise I found it a great experience when there is a clear vision and a timeline to learn something new in.

</Jason>

Me? Definitely yes. I like building stuff and also it helps finding your shortcomings.

## Listen to us rambling about it

If you really want, you can listen to us talking about Stylelia (and a lot more) on youtube:

[![Stylelia Chat](https://img.youtube.com/vi/FGQ6kZgIP2I/0.jpg)](https://www.youtube.com/watch?v=FGQ6kZgIP2I)
