---
date: "2021-06-24T00:00:00Z"
title: A Love Letter To Hugo
draft: false
tags: [hugo]
toc: true
---

How Go has improved yet another thing in my life - this time - blogging!

<!--more-->

## Go is awesome

This week has been sponsored by my migration to [hugo](https://gohugo.io/). These are all of my findings from a few days, moving from Jekyll x Github Pages combo to Hugo x Netlify.

In case you don't know what Hugo is - Hugo is Go-powered, open-source, static site generator. It makes everything fast and neat. And it's markdown compatible, so I can stay within one single domain (I do write documentation in markdown on a daily basis, as probably every other dev) and not learn some new formatting tools.

Or, god forbid, writing that stuff in some nice, accessible CMS on some proper blog-hosting site. I want to do EEEEEVVEEEERYYYYTHIIINGGG in my terminal and VIM.

> Kudos if you got the little reference there!

## Migration is a bliss

A lot of the blog posts are mentioning that the migration from Jekyll to Hugo is a rather time-consuming thing. And you couldn't be more wrong to be honest.

The major thing I've used was a nice python script written by [coderzh](https://github.com/coderzh/ConvertToHugo) which took the whole Jekyll blog and rebuilt the posts.

Also, it'd be a crime if I wouldn't say that [hugo](https://gohugo.io/getting-started/) documentation is AMAZING. Anything you need - is probably there already.

## Themes are amazing

You want a minimal theme? Clean? Dark? Mobile? Fast? [Hugo themes](https://themes.gohugo.io/) got you covered.

I can't design, I can't see stuff and my area of expertise is everything terminal-based. That's why, this bit has been the most fun one - I could just go in, pick and match what I need.

And thanks to [templates](https://golang.org/pkg/html/template/) in Go, every part of the theme can be extended and reused.

## Netlify is beautiful

I remember, that deploying on GitHub Pages has never been the most painless experience ever. Also, gh-pages are set up to work with [Jekyll first](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#static-site-generators) and I had some issues with working out nooks and crannies of that deployment (normally, you should be good with adding `.nojekyll` file to the root of your publishing source.

So, after wrestling with gh-pages for a while, I gave [Netlify](https://www.netlify.com/) a go.

And that was AN AMAZING IDEA. The longest bit was changing my DNS setup but, apart from that, everything took less than 3 minutes.

## Content setup

I like stuff that's automated and I don't really have to do much if it's automated once. Most probably [nju](https://github.com/youshy/nju) will see a massive overhaul over the weekend, as I want the blogging to be as seamless as possible. Hugo has opened up an array of new possibilities.

> Also, please don't judge me on the package, it's old but it worked like a bliss since I've started blogging. And it's more than 2 years old at the moment!

Let's checkout what I've found so far:

```
date: "2021-06-24T00:00:00Z"
title: A Love Letter To Hugo
draft: true
tags: [hugo]
toc: true
```

* Date - it's simple. The fun bit, is that I can build my local development server by running `hugo server --buildDrafts --buildFuture` which takes care of building the draft post (noted by `draft: true`) and building the future post (I'm writing this post a day earlier now). Although simple, it's a massive quality-of-life improvement!
* Tags - Hugo automatically gets all the tags I use and packs them neatly under [tags](https://akondas.com/tags/) tab on this blog.
* TOC - aka Table of Contents - again, it's automatic! Hugo automatically gets all `##` headers and builds the table of contents. And if you'll use any lower level (`###`), it'll create nested paragraphs there. So good!

And, if I want to have a custom summary, other than the first 20 words of the post - the only thing I have to do is to write the it after the params block and add `<!--more-->` at the new line below how I want to summarize my post.

## Nitty gritty

Let's look into a few bits from `config.toml` used to tailor this blog.

> I'm using a great [terminal](https://github.com/panr/hugo-theme-terminal) theme made by panr - your mileage may wary.

```toml
[...]
[permalinks]
  posts = "/blog/:title"

[params]
  showMenuItems = 6

  favicon = "images/favicon.ico"

[languages]
  [languages.en]
  [...]
    [languages.en.menu]
      [[languages.en.menu.main]]
        identifier = "About"
        name = "About"
        url = "/about"
```

I've chosen the bits I really like - and a few that took me a second of reverse engineering my theme to understand how it actually works.

* `posts = "/blog/:title"` - because my Jekyll blog had `akondas.com/blog/:title` url per each post, I wanted to keep the same for the V2. If I'll ever want to change it, I just have to change it there, Hugo will take care of it.
* `showMenuItems = 6` - if I'll ever extend a bit more, I can either print all menu items out-of-the-box - or, I can wrap them for a neater, cleaner experience.
* `favicon` - my theme looks for the `favicon.ico` icon under `static/images`
* `languages` - yes, by default, I can have MULTIPLE language options on my blog and I can have them sorted automagically. AND, I can get my menu items set by the language.

## This is great

![This is great](https://media.giphy.com/media/xHMIDAy1qkzNS/giphy.gif)

This blog is my fourth or fifth blog over the years. I've been on almost every platform that's available for free and I have to say - this is the most fun I had ever.

The ease of use, the self-automation, the expandability - it's all here.

## Plans for the future

I'll just go with everything I want - let's see how far I can push the envelope:

* A search bar - I've been putting off playing with [Elasticsearch](https://www.elastic.co/) for ages now, I want to see how easy it'll be to plug that here
* Extra layouts - I have a few ideas for the modular layouts system I want to use
* At the end of each post, propose my last most popular post
* New `nju` package - my idea is:
  * When writing a post, set the post parameters before even starting writing the posts from the list of ever-expanding properties (that'd mean either a scrapper of all tags I've used so far probably)
  * When finishing my VIM session, let's ask the user (me) if that's a draft or not
  * Time of the post should be pickable from the CLI - do I want to post it now? In the future? How far?
  * Show me all posts that are in `draft` state so I could go and finish them
  * And most importantly - bring `nju` from late 2018 to 2021!

As you can see, that's a lot. But we're not in any rush, it'll be fun!

If that post helped you in any way, shape or form - let me know! I'm happy to discuss more and help you - of course if you'll need help. I believe in you!

