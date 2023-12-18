#!/bin/sh

echo "*** Deployment has been scheduled."

if [[ $(git status -s) ]]
then
    echo "*** The working directory is dirty. Please commit any pending changes."
    exit 1;
fi

echo "*** Deleting old publication"
rm -rf public
mkdir public
git worktree prune
rm -rf .git/worktrees/public/

echo "*** Checking out master branch into public"
git worktree add -B main public origin/main

echo "*** Removing existing files"
rm -rf public/*

echo "*** Running yarn build"
yarn build

echo "*** Adding CNAME"
cd public
echo kevinoh.me >> CNAME

echo "*** Updating main branch with new output"
git add -A && git commit -m "Publishing to main (publish.sh)"
git push


echo "*** Cleaning build files "
cd ..
rm -rf static
mkdir static
touch static/.gitkeep

