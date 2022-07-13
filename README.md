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

Build typescript solution
``` 
tsc
```

Run the app
``` 
node out/app.js
```