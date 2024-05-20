interface StatFeedTarget {
  id: string;
  name: string;
  team_num: number;
}

export interface StatFeedEvent {
  event_name: string;
  main_target: StatFeedTarget;
  secondary_target: StatFeedTarget;
  type: string;
}
