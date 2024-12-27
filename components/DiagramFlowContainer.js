import React, { useState } from 'react';
import ReactFlow, { addEdge, MiniMap, Controls, Position } from 'react-flow-renderer';
import Sidebar from '../components/Sidebar';
import Modal from '../components/Modal'; 

const initialNodes =[
  {id:'3',Position:{x:200,y:200},type:'Position',data:{id:'3'}, label:'2'}
]

const initialEdges =[
  {id:"e1-2", source : '1', target : '2'}
]

const DiagramFlowContainer = () => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [selectedNode, setSelectedNode] = useState(null);

  const handleAddNode = (newNode) => {
    setNodes((prevNodes) => [...prevNodes, newNode]);
  };

  const handleDeleteNode = (nodeId) => {
    setNodes((prevNodes) => prevNodes.filter(node => node.id !== nodeId));
  };

  const handleAddEdge = (newEdge) => {
    setEdges((prevEdges) => addEdge(newEdge, prevEdges));
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar
        onAddNode={handleAddNode}
        onDeleteNode={handleDeleteNode}
        onAddEdge={handleAddEdge}
      />
      <div style={{ flex: 1, position: 'relative' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={setNodes}
          onEdgesChange={setEdges}
          onNodeClick={(event, node) => setSelectedNode(node)}
        >
          <MiniMap />
          <Controls />
        </ReactFlow>
      </div>
      {selectedNode && <Modal selectedNode={selectedNode} />}
    </div>
  );
};

export default DiagramFlowContainer;
