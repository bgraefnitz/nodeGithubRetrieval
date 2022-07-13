import axios, { AxiosResponse } from 'axios';
import { PullRequest } from '../models/pull-request';

//get all
export class GithubService {
  public async getAllPullRequests(): Promise<PullRequest[]> {
    const pullRequestsForRepo = await axios.get(`https://api.github.com/repos/ramda/ramda/pulls`);
    return pullRequestsForRepo;
  }

}
const getAllPullRequests = "";

export default { getAllPullRequests };