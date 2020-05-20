#### Structure of personal portfolio

This personal portfolio project hosts, or displays, many other projects.

#### prepare subprojects by doing the following in the source repo

1. Change all absolute paths (non react-router) to relative paths("./" or no slash at all. just a "/" is absolute). Add \<base href="%PUBLIC_URL%/"\> to index.html
2. If using react router, add basename={process.env.PUBLIC_URL} to BroswerRouter
3. Add req.baseUrl() to any res.redirect() calls
4. Initialize main index.js by using `app.use(appRouter)`, where appRouter is an instance of express.Router()

#### Everytime a project is added, must manually update

1. in ~/package.json: `"start": "npm run build --prefix projects/<project name>"`
2. in ~/package.json: `"heroku-postbuild": "npm i --prefix projects/<project name> && npm run build --prefix projects/<project name>"`
3. in ~/client/root/src/components/sections/projectsSection: edit allCardDetails.js. Add photo to ~/client/root/public
4. Edit heroku environment variables and authorized redirect uris for APIs.

#### everytime a project is updated:

1. Replace ~/projects/\<projectname\>
2. npm i in ~/projects/\<projectname\>
3. in ~/projects/\<project name\>/package.json: `"homepage": "/projects/<project name>"`

#### issues that may be improvable

- For manual updates 1, 2 and 3: Create an array containing project names, and all areas are automatically updated based on this array
