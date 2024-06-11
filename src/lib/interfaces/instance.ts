export interface Instance {
  url: string;
  regions: string[];
  operators: string[];
}

export type InstanceList = Record<string, Instance[]>;
