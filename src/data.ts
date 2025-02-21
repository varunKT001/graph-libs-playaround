import { getRandomElements } from './utils';

export const nodes: GraphNode[] = [
  { id: 'r1-main', region: 'Region 1' },
  { id: 'r2-main', region: 'Region 2' },
  { id: 'r3-main', region: 'Region 3' },
  { id: 'r4-main', region: 'Region 4' },
  { id: 'r5-main', region: 'Region 5' },

  ...Array.from({ length: 10 }, (_, i) => ({
    id: `r1-node${i + 1}`,
    region: 'Region 1',
  })),
  ...Array.from({ length: 15 }, (_, i) => ({
    id: `r2-node${i + 1}`,
    region: 'Region 2',
  })),
  ...Array.from({ length: 20 }, (_, i) => ({
    id: `r3-node${i + 1}`,
    region: 'Region 3',
  })),
  ...Array.from({ length: 25 }, (_, i) => ({
    id: `r4-node${i + 1}`,
    region: 'Region 4',
  })),
  ...Array.from({ length: 30 }, (_, i) => ({
    id: `r5-node${i + 1}`,
    region: 'Region 5',
  })),
];

export const links: GraphLink[] = [
  ...nodes
    .filter((node) => !node.id.includes('main'))
    .map((node) => {
      const mainNodeId = nodes.find(
        (n) => n.region === node.region && n.id.includes('main')
      )?.id;
      return {
        id: `link-${node.id}`,
        source: mainNodeId || '',
        target: node.id,
      };
    })
    .filter((link) => link.source !== ''),

  ...nodes
    .filter((node) => node.id.includes('main'))
    .map((mainNode, i, mainNodes) => {
      const nextMainNode = mainNodes[(i + 1) % mainNodes.length];
      return {
        id: `link-main-${mainNode.id}-to-${nextMainNode.id}`,
        source: mainNode.id,
        target: nextMainNode.id,
      };
    }),

  ...(() => {
    const intraRegionLinks: GraphLink[] = [];
    const regionGroups = new Map<string, GraphNode[]>();

    nodes.forEach((node) => {
      if (!node.id.includes('main')) {
        if (!regionGroups.has(node.region)) regionGroups.set(node.region, []);
        regionGroups.get(node.region)?.push(node);
      }
    });

    regionGroups.forEach((regionNodes) => {
      const numLinks = Math.min(regionNodes.length, 5);
      for (let i = 0; i < numLinks; i++) {
        const [node1, node2] = getRandomElements(regionNodes, 2);
        if (node1.id !== node2.id) {
          intraRegionLinks.push({
            id: `intra-region-${node1.id}-to-${node2.id}`,
            source: node1.id,
            target: node2.id,
          });
        }
      }
    });

    return intraRegionLinks;
  })(),

  ...(() => {
    const interRegionLinks: GraphLink[] = [];
    const nonMainNodes = nodes.filter((node) => !node.id.includes('main'));

    for (let i = 0; i < 10; i++) {
      const [node1, node2] = getRandomElements(nonMainNodes, 2);
      if (node1.region !== node2.region) {
        interRegionLinks.push({
          id: `cross-region-${node1.id}-to-${node2.id}`,
          source: node1.id,
          target: node2.id,
        });
      }
    }
    return interRegionLinks;
  })(),
];
