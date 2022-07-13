# nodeGithubRetrieval

## Getting Started

Clone repo
``` 
git clone https://github.com/bgraefnitz/nodeGithubRetrieval.git
```

Create github access token by going to github.com, logging in, going to settings, developer settings, and then personal access tokens.

Create .env file in root of the project directory with this structure:
``` 
ACCESS_TOKEN=<Token_From_Github>
```

Install packages from npm
``` 
npm i
```

Build ts-node to transpile and run
``` 
npm run start
```

Depending upon development preferences, it may be helpful to run with nodemon (so saved changes cause auto-restart)
``` 
npm run dev
```

Both of the above npm commands use npx so that ts-node and nodemon don't have to be installed globally. Alternatively, if you have ts-node and nodemon installed globally or any location included in PATH env variable, you can run like this if you'd prefer
``` 
ts-node src/app.ts
and
nodemon src/app.ts
```