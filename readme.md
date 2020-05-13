#### Structure of personal portfolio

This personal portfolio project hosts, or displays, many other projects.

#### Everytime a project is added, must manually update

1. in ~/package.json: `"start": "npm run build --prefix client/projects/<project name>"`
2. in ~/package.json: `"heroku-postbuild": "npm i --prefix=client/projects/<project name> && npm run build --prefix=client/projects/<project name>"`
3. in ~/client/projects/\<project name\>/package.json: `"homepage": "/client/projects/<project name>/build"`
4. in ~/client/root/src/components/sections/projectsSection: edit allCardDetails.js and create \${projectName}Details.js. Add photo to ~/client/root/public
5. If project has a server, must prepend projects/\<project name\> to all routes

#### issues that may be improvable

- For manual updates 1, 2 and 3: Create an array containing project names, and all areas are automatically updated based on this array
- during development, must build project to view changes, which takes some time
