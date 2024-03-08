## Javascript Project

### Available Commands
---
* `dev` - Build and serve application with `watch` in files
* `build` - Only build application
----

### Available Scripts
Before anything you need install all dependencies:

```bash
npm install
```

#### Development
```bash
npm start
```
This command will run development steps into source code and serve with Browserify.

#### Development
```bash
npm run start-stand-alone
```
If you prefer serve the app more static, you can use this command and use [serve](https://www.npmjs.com/package/serve) to access the app.
This command will run development steps into source code and will not run browserify.

```bash
npm i -g serve
```

Once that's done, you can run this command inside your project's directory:

```bash
serve build -l 3005
```

Where `build` is the `folder` and `3005` is the `port`.

#### Production
```bash
npm run build
```
This command will run production steps (minify, uglify and no source map) and will not serve the app.
To test you can serve the app as your want in your server or use `serve` like the stand alone flow.


#### Documentation Standards

[References](https://make.wordpress.org/core/handbook/best-practices/inline-documentation-standards/javascript/)

#### Other Informations

- Error
```
Error: ENOSPC: System limit for number of file watchers reached, watch
```
- Solution
```
https://github.com/gatsbyjs/gatsby/issues/11406#issuecomment-458769756
```

- Error
```
hint: The '.husky/pre-commit' hook was ignored because it's not set as executable.
hint: You can disable this warning with `git config advice.ignoredHook false`.
```
- Solution
```
chmod ug+x .husky/_
chmod ug+x .git/hooks/_
```
