import { GithubService } from './services/github';
const dotenv = require("dotenv").config();

//init service with org name and access token from .env
const orgName = 'ramda';
const pullRequestStatus = 'all';
const accessToken = process.env.ACCESS_TOKEN;
if (typeof accessToken === 'string') {
  const githubService = new GithubService(orgName, accessToken);

  //get all PRs for repo
  githubService.getAllReposWithPullRequests(pullRequestStatus)
  .then(function(response)
  {
    const repos = response;
    const allPullRequets = repos.flatMap(function(repo) { return repo.pull_requests});
    console.log(`${allPullRequets.length} pull requests in ${repos.length} repos`);
  });
}
else {
  throw console.error('no token');
}