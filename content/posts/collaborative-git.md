+++
ogdescription = "collaborative-git"
date = "2017-05-26T13:11:55-04:00"
title = "collaborative git"
slug = "collaborative-git"
series = "tooling101"
draft = true
+++

## Summary
This will be a non-trivial project on using features of `git` and Github.com. When this project is complete, the contents will be used in the actual Adelie website, which is currently being designed. 

When all is said and done, you should have a better knowledge of the following essentials:

1. `git` basics
2. Github basics
3. Git branching workflow
4. Using Github as a project management tool
5. Issuing Pull Requests for peer review
6. Merging Pull Requests
7. Resolving merge conflicts.
8. Dealing with different environments, like `staging` / `beta` / `dev`
9. Helpful tools like `git gutter` and `tig` to help you navigate your branches effortlessly
10. Probably some other junk idk man :fire:

These are essential skills that any developer should have, and typically the ones that newer developers struggle with the most, since learning these skills is hard to learn alone.

## Steps
1. Clone the repository:
```bash
git clone git@github.com:adelie/member-info.git
```
2. Check the Github issues page [here]() to check for the **issue number** corresponding to your name
2. Checkout a new branch to add your own information, including the issue number in the branch name:
```bash
# assume Adam Smith's issue number is 2
# syntax is: git checkout -b issue_id/add_YOUR_NAME_bio
git checkout -b 2/add_adam_smith_bio
```
3. Add a markdown file to `adelie/content/posts/` folder called `YOUR_FULL_NAME_BIO.md`. If your name is Adam Smith, it should be called `adam_smith_bio.md`
4. Follow the format below for your post. (I will follow all the following steps for an imaginary person "Adam Smith".) Replace all the values for the variables between the "+++" lines with the proper values. Do not replace the "series" value though.)

```markdown
+++
title = "Adam Smith: Bio"
series = "adg"
slug = "adam_smith_bio"
ogdescription = "adam_smith_bio"
+++

## Summary
[Write a short generic summary here, 2 sentences max and written in the 3rd person.] 

Something like: "Adam Smith is a web developer based in Nevada. He works with ReactJS and likes cats."

## Current Work
[Write a paragraph or two on your primary projects. It can be work-related or otherwise. Informal tone.] 

Something like: I've currently got two major projects. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, quaerat cum enim voluptatum porro nemo! Deleniti magni, quaerat magnam, error impedit quidem odio alias autem eligendi quae quos quasi distinctio!

Also, lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis voluptatem expedita et ex soluta hic doloribus reiciendis harum repellendus, impedit delectus porro quod perspiciatis nam, enim accusamus ducimus sequi iusto atque suscipit recusandae animi eum. Cum aut, sint vel eveniet.

## Preferred Tech
[Write on the web-dev technologies you like. Minimum 2 sentences.]

## Hated Tech
[Write about the web-dev tech you hate and why. Don't be inflammatory or use profanity. Minimum 2 sentences.(It's meant to be a fun, lighthearted section.)]

## IF YOU HAVE anything else to say about yourself, like hobbies or an extended bio, let us know! Max 3 paragraphs.

```
5. `git add` your changes
6. When you commmit your changes, include your issue number in the commit message, like so:
```bash
git commit -m "#2 "
```
7. On the repository page for this project, create a Pull Request to merge your branch into the `beta` branch. Assign the Pull Request to another member on the team according to this chart:

You | Assign your PR to
----|-------------------|
Bob | Sarah
Sarah | Lee
Lee | Bob

8. Look around to see Pull Requests assigned to you. Review their PR and look for typos and ensure they followed this document properly.
9. If it looks good, click to merge the PR to the `beta` branch.
10. Kevin will review the beta branch and selectively merge it to `master` once the work is done.