import React, { useEffect, useState } from 'react';
import { VisGraph, VisSingleContainer } from '@unovis/react';
import { computeCircularLayout } from './utils';
import { links, nodes } from './data';

const GraphComponent: React.FC = () => {
  const [precomputedLayout, setPrecomputedLayout] = useState<{
    [key: string]: { x: number; y: number };
  }>({});

  useEffect(() => {
    setPrecomputedLayout(computeCircularLayout(nodes));
  }, []);

  return (
    <div style={{ width: '100%', height: '800px' }}>
      <VisSingleContainer
        style={{ width: '100%', height: '100%' }}
        data={{
          nodes: nodes.map((n) => ({
            id: n.id,
            label: n.id,
            fx: precomputedLayout[n.id]?.x,
            fy: precomputedLayout[n.id]?.y,
          })),
          links,
        }}
      >
        <VisGraph
          nodeSize={25}
          nodeFill={(n: GraphNode) => (n.id.includes('main') ? 'red' : 'blue')}
          nodeLabel={(n: GraphNode) => n.id.split('-')[0]}
          linkWidth={() => 2}
          linkStroke={() => 'gray'}
        />
      </VisSingleContainer>
    </div>
  );
};

export default GraphComponent;
