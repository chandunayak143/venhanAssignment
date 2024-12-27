import React, { useState } from 'react';

const Modal = ({ selectedNode }) => {
  const [nodeData, setNodeData] = useState(selectedNode.data.label);

  const handleChange = (e) => setNodeData(e.target.value);

  const handleSave = () => {
    selectedNode.data.label = nodeData;
  };

  return (
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '20px', borderRadius: '5px' }}>
      <h4>Edit Node</h4>
      <input type="text" value={nodeData} onChange={handleChange} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Modal;
