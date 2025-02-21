interface NodeData {
  id: string;
  region: string;
}

interface LinkData {
  id: string;
  source: string;
  target: string;
}

export {};

declare global {
  type GraphNode = NodeData;
  type GraphLink = LinkData;
}
