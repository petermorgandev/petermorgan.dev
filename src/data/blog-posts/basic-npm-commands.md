---
title: Basic NPM Commands
slug: basic-npm-commands
description: This blog post - a reference for basic NPM commands - was originally a GitHub Gist.
publishDate: 4/22/19
modifiedDate: 9/9/22
tags: [javascript, nodejs, npm]
---

## Misc

- Create a package.json file: `npm init`
- Run npm in a production environment: `NODE_ENV=production npm install`

## Install a package

- Install local package: `npm install <package_name>`
- Install global package: `npm install <package_name> -g`
- Install local package and save as dependency: `npm install <package_name> --save`
- Install local package and save as a development dependency: `npm install <package_name> --save-dev`

## Update a package

- Check for outdated packages: `npm outdated`
- Update local package: `npm update`
- Update global package: `npm update <package name> -g`

## Uninstall a package

- Uninstall a local package: `npm uninstall <package name>`
- Uninstall a local package and keep it in package.json: `npm uninstall <package name> --no-save`
- Uninstall a local package and remove it from package.json: `npm uninstall <package name> --save`
- Uninstall a local development package and remove it from package.json: `npm uninstall <package name> --save-dev`
- Uninstall a global package: `npm uninstall <package name> -g`
