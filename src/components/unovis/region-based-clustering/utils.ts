export const getRandomElements = (arr: GraphNode[], count: number) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const computeCircularLayout = (nodes: GraphNode[]) => {
  const layout: { [key: string]: { x: number; y: number } } = {};
  const mainNodes = nodes.filter((n) => n.id.includes('main'));

  const totalRegions = mainNodes.length;
  const baseSpacing = 125;
  const maxSpacing = 1200;

  const regionSpacing = Math.min(baseSpacing * totalRegions, maxSpacing);

  mainNodes.forEach((mainNode, i) => {
    const angle = (i / totalRegions) * 2 * Math.PI;
    const centerX = Math.cos(angle) * regionSpacing;
    const centerY = Math.sin(angle) * regionSpacing;

    layout[mainNode.id] = { x: centerX, y: centerY };

    const regionNodes = nodes.filter(
      (n) => n.region === mainNode.region && n.id !== mainNode.id
    );
    const regionRadius = Math.max(regionNodes.length * 10, 150);

    regionNodes.forEach((node, index) => {
      const nodeAngle = (index / regionNodes.length) * 2 * Math.PI;
      layout[node.id] = {
        x: centerX + Math.cos(nodeAngle) * regionRadius,
        y: centerY + Math.sin(nodeAngle) * regionRadius,
      };
    });
  });

  return layout;
};
