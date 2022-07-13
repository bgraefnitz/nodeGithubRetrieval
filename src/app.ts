import axios, { AxiosResponse } from 'axios';
import { PullRequest } from './models/pull-request';

//get all
const pullRequestsForRepo = axios.get(`https://api.github.com/repos/ramda/ramda/pulls`)
  .then(function(response)
  {
    console.log(response);
  });