#!/bin/bash
if git diff-index --quiet HEAD --; then # Check to make sure there are no uncommited changes
    set -o errexit; # Exit on error
    # Save the current branch
    branch_name=$(git symbolic-ref -q HEAD)
    branch_name=${branch_name##refs/heads/}
    branch_name=${branch_name:-HEAD}
    npm run clean;
    npm run build;
    git add .;
    git commit -m "Create new production build";
    git checkout -b gh-pages;
    git merge branch_name;
else
  echo Please commit or stash your changes first.;
fi
