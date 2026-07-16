---
date: 2022-09-02
title: How to manage multiple git users on a single system
seo_title: Manage Multiple Git Users on One System | Developer Productivity Guide
slug: manage-multiple-git-user-on-1-system
description: Boost your developer productivity by managing multiple GitHub profiles seamlessly. Learn how to configure Git for work and personal accounts on a single system using gitconfig. Essential engineering tool for developers.
category: productivity
tags: [git, productivity, developer-tools, github, engineering, software-engineering, version-control]
cta: productivity
site: blogsite
thumb: https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/52a130141409355.62566a5b6114b.jpg
image : /images/multiple-git-profiles.jpg
---

Having problems managing your multiple personalities? <br />
well this can be resolved for git using these simple steps.🪄

## Problem

Most of us have atleast two github profiles one for work and another personal and contributing to both of them with separate accounts could be a pain. while one can always remember and switch their profiles, but we can do a better job here using some configurations.

## Solution

Assuming you have a usual setup of a workspace and a personalspace which you use to organise your work and personal projects and the structure looks something like this.

<br />

  ![folder structure](https://res.cloudinary.com/jenishjain/image/upload/v1662190325/portfolio/blog-assets/folder-structure.png)

<br />
We can take advantage of gitconfigs here to instruct git to use a particular set of credentials in a given space.
<br />

We have a *.gitconfig* file at the root level which maintains your global git configuration. what we are gonna do is store individual git config in your pesonal and work folders and tell *.gitconfig* to replace the user and credentials according to the space you are in.

### create space specific config files

we will have to create *.config* files in each folder something like this.
<br />

![git-config](https://res.cloudinary.com/jenishjain/image/upload/v1662191687/portfolio/blog-assets/git-config.png)

<br />
after creating both the config files your folders should looks like this.
<br />

![folders-with-gitconfig](https://res.cloudinary.com/jenishjain/image/upload/v1662192358/portfolio/blog-assets/folder-with-gitconf.png)

### configuring your global git config
now in your global ```~/.gitconfig``` file we need to replace the [user] block with the one shown below ( for me both workspace and personal space were present on desktop)
<br />

![global git config](https://res.cloudinary.com/jenishjain/image/upload/v1662192762/portfolio/blog-assets/global-git-config.png)

## Thats All 🎉 

now you can simply navigate to your desired space and work without worrying about commiting with correct git profile.

## Test if this is working 👀

we can test this by simply creating a test project and initialising git in it. on checking the local config you should see the appropirate username and email configured.
<br />

![personalspace-test](https://res.cloudinary.com/jenishjain/image/upload/v1662193809/portfolio/blog-assets/personalpace-test.png)

![workspace-test](https://res.cloudinary.com/jenishjain/image/upload/v1662193809/portfolio/blog-assets/workspace-test.png)

## References

* [https://gist.github.com/Jonalogy/54091c98946cfe4f8cdab2bea79430f9](https://gist.github.com/Jonalogy/54091c98946cfe4f8cdab2bea79430f9)
