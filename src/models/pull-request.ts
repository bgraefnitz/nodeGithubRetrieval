export interface PullRequest {
  url: string;
  id: number;
  node_id: string;
  title: string;
  body: string;
  created_at: Date;
  updated_at: Date;
  closed_at: Date;
  merged_at: Date;
}
