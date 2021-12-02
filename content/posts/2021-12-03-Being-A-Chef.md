---
date: "2021-12-03T00:00:00Z"
title: Being a Chef
draft: false
tags: [chef, hackathon]
toc: true
---

My team has won the Chef's Automate for Good hackathon recently - here's a sneak peek into why we did it, how we did it and if we'd do it again. Featuring my good buddy and teammate [Jason Field](https://www.linkedin.com/in/jasonfield1/)!

<!--more-->

I haven't written for a while, huh? Well, 2021 is about to end, my life won't be the same anymore (IYKYK) but in the meantime, I've managed to team up with a friend of mine, amazing devops fella, Jason Field, and write a piece of code that has won the Automate for Good hackathon in "Most Promising Idea" category!

And yes, we are representing ECS Europe ([we're hiring!](https://ecs.co.uk/careers/)) - come check us out!

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

Whole thing is built using Go and leveraging [Cookstyle](https://github.com/chef/cookstyle) within AWS Lambda ecosystem. We've chose it as it allows us for basically infinite scalling - however much horsepower we need under the hood, we can have.

Another thing - it's all plug'n'play. We do have our own in-memory store, we have Redis implementation and we do have interfaces for almost everything. For uninitiated - interfaces in Go allows us for literally changing anything as we see fit as long as the interface is satisfied.

<Jason>

For me we needed to build it to be scalable and pluggable, there is little value if for each and every type of static code analysis tool we have to build a unique tool/stack for them.

The other imporant thing is context in the Pull Requests and Git history, so we have ensured that the reasons for the changes which the tool informs us of are used for the commit and pull request body, ensuring the reviewer understands why. The added benefit is if the reviewer decides that is not the desired behaviour they have all the information required to update a config file in the repo (The one the static code analysis tool would be looking at for it's config, e.g. `rubocop.yml`) to disable or change the behaviour.

Fundamentally the tool is doing the same things a developer can do locally so it should not add complexity when deciding what rules to tune or disable.

</Jason>

## Would you do it again?

<Jason>

Personally I would do it again, my main aim in joining the hackathon was less to learn Chef but to learn Golang. In this, it was successful as Artur helped me to learn a lot during this process. I would recommend a hackathon if there is something you have been wanting to build for a while but not had time to or something you want to learn in a time box. For me having a deadline meant that I had to finish at a certain point and therefore didn't keep delaying things and delaying things. 

To summarise I found it a great experience when there is a clear vision and a timeline to learn something new in.

</Jason>

Me? Definitely yes. I like building stuff and also it helps finding your shortcomings. Apart from COUNTLESS memes and laughs we've had with Jason, I've learned a lot about the Chef ecosystem and I can see myself writing some more code for them in the future.

And also new PlayStation 5 is pretty sweet. Got Deathloop and Hitman 3 right out of the gate - both are amazing!

## Listen to us rambling about it

If you really want, you can listen to us talking about Stylelia (and a lot more) on youtube:

[![Stylelia Chat](https://img.youtube.com/vi/FGQ6kZgIP2I/0.jpg)](https://www.youtube.com/watch?v=FGQ6kZgIP2I)

## I want to do hackathons with you guys!

Talk to us on LinkedIn if you have an idea and let's make it a reality!

Also, amazing people from Abbey Road, please do another hackathon and allow me to write code inside of Studio A! (They did [one edition](https://www.abbeyroad.com/hackathon) in 2019, I hope they'll do another in 2022!)

Hopefully we'll talk before end of the year but if we won't - have a really chill and happy xmas and a proper new year!
