import axios, { AxiosResponse } from 'axios';
import { Repo } from '../models/repo';
import { PullRequest } from '../models/pull-request';
const githubLinkHeaderParser = require("parse-link-header");

//get all
export class GithubService {
  constructor(private org: string, private token: string) {}

  private githubEndpoint = axios.create({
    baseURL: 'https://api.github.com/',
    headers: {'Authorization': 'Bearer '+ this.token}
  })

  public async getAllReposWithPullRequests(pullRequestStatus: string = 'open'): Promise<Repo[]> {
    const repos = await this.getReposForOrg();
    for (var repo of repos) {
      repo.pull_requests = await this.getPullRequestsForRepo(repo.name, pullRequestStatus);
    }
    //const allPullRequets = repos.flatMap(function(repo) { return repo.pull_requests});
    return repos;
  }

  private async getReposForOrg(): Promise<Repo[]> {
    return await (await this.getAllPagesFromApi(`/orgs/${this.org}/repos?per_page=100`));
  }
  
  private async getPullRequestsForRepo(repo: string, status: string): Promise<PullRequest[]> {
    return await (await this.getAllPagesFromApi(`/repos/${this.org}/${repo}/pulls?per_page=100&state=${status}`));
  }

  private async getAllPagesFromApi (apiPath: string, accumulatedData: any = []): Promise<any[]> {
    const response = await this.githubEndpoint.get(apiPath);
    accumulatedData = response.data;

    if (response.headers.link)
    {
      var githubLinks = githubLinkHeaderParser(response.headers.link);
      if (githubLinks?.next) {
        const pageData = await this.getAllPagesFromApi(githubLinks.next.url, accumulatedData);
        accumulatedData.push(...pageData);
      }
    }
    return accumulatedData;
  }
}