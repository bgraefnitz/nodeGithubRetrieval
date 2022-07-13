import { GithubService } from './services/github';

//init service
const githubService = new GithubService('ramda','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');

//get all PRs for repo
githubService.getAllReposWithPullRequests('all')
.then(function(response)
{
  const repos = response;
  const allPullRequets = repos.flatMap(function(repo) { return repo.pull_requests});
  console.log(`${allPullRequets.length} pull requests in ${repos.length} repos`);
});
