import { PullRequest } from "./pull-request";

export interface Repo {
  url: string;
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  created_at: Date;
  updated_at: Date;
  pull_requests: PullRequest[];
}