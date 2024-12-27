import React, { useState } from 'react';

const Sidebar = ({ onAddNode, onDeleteNode, onAddEdge }) => {
  const [nodeLabel, setNodeLabel] = useState('');
  const [edgeSource, setEdgeSource] = useState('');
  const [edgeTarget, setEdgeTarget] = useState('');

  const handleAddNode = () => {
    const newNode = {
      id: `node-${Date.now()}`,
      data: { label: nodeLabel },
      position: { x: Math.random() * 400, y: Math.random() * 400 },
    };
    onAddNode(newNode);
    setNodeLabel('');
  };

  const handleAddEdge = () => {
    const newEdge = {
      id: `edge-${Date.now()}`,
      source: edgeSource,
      target: edgeTarget,
    };
    onAddEdge(newEdge);
    setEdgeSource('');
    setEdgeTarget('');
  };

  return (
    <div style={{ width: '250px', padding: '20px', borderRight: '1px solid #ccc' }}>
      <h3>Sidebar</h3>
      <input
        type="text"
        value={nodeLabel}
        onChange={(e) => setNodeLabel(e.target.value)}
        placeholder="Node label"
        style={{margin:'10px'}}
      />
      <button onClick={handleAddNode} style={{margin:"10px"}}>Add Node</button>

      <input
        type="text"
        value={edgeSource}
        onChange={(e) => setEdgeSource(e.target.value)}
        placeholder="Edge Source ID"
        style={{margin:'10px'}}
      />
      <input
        type="text"
        value={edgeTarget}
        onChange={(e) => setEdgeTarget(e.target.value)}
        placeholder="Edge Target ID"
      style={{margin:'10px'}}
      />
      <button onClick={handleAddEdge} style={{margin:'10px'}}>Add Edge</button>
    </div>
  );
};

export default Sidebar;
