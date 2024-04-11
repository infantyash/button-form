

import React, { useState } from 'react';

const CreateMonitorForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    Message: '',
    Name: '',
    Query: '',
    Type: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    // Optionally, reset the form after submission
    setFormData({
      Message: '',
      Name: '',
      Query: '',
      Type: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="message">Message:</label>
        <input
          type="Text"
          id="Message"
          name="Message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="query">Query:</label>
        <input
          type="text"
          id="query"
          name="query"
          value={formData.query}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="type">Type:</label>
        <input
          type="text"
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Create Monitor</button>
    </form>
  );
};

const MonitorPopup = ({ onClose, onSubmit }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className="popup">
      <button onClick={handleClose}>Close</button>
      <h2>Create New Monitor</h2>
      <CreateMonitorForm onSubmit={onSubmit} />
    </div>
  );
};

const ap = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleCreateMonitor = (formData) => {
    // Submit formData to Datadog API to create a new monitor
    console.log('Form data:', formData);
    // Close the popup after submission
    setShowPopup(false);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <h1>React App</h1>
      <table>
        {/* Your table content here */}
      </table>
      <button onClick={togglePopup}>Create New Monitor</button>
      {showPopup && (
        <MonitorPopup onClose={togglePopup} onSubmit={handleCreateMonitor} />
      )}
    </div>
  );
};

export default ap;
