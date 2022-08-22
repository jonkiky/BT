#Way to deploy React app to github page. 

1.1 Your package.json file should consist a field `homepage`: 

```javascript
  "homepage": "https://<github-username>.github.io/<project-repo>"
```

1.2 Update your routes basepath to {project-repo}. As the app would not run from root. The URL for your app would be "https://<github-username>.github.io/<project-repo>" . 

```javascript	
const LandingRoutes = {
    path: '/{project-repo}',
    element: <Homepage />
};
```

2.1. Install `gh-pages` via npm:

```javascript
  npm i --save-dev gh-pages
```

2.2. Or yarn:

```javascript
  yarn add --dev gh-pages
```

3.1. Add new `script` to `package.json` via `yarn`:

```javascript
    "predeploy": "yarn run build",
    "deploy": "gh-pages -d build"
```

3.2. Or `npm`:

```javascript
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
```