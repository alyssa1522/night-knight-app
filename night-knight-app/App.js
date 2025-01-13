import React, { useState, useEffect } from 'react';

const App = () => {
  const [alertMessage, setAlertMessage] = useState(null);

  useEffect(() => {
    // Polling function to check for alert updates
    const interval = setInterval(() => {
      fetch('http://127.0.0.1:5000/get_alert')  // Make sure you're using the correct endpoint
        .then(data => {
          console.log('Data received:', data); // Log the parsed data
          if (data.message) {
            setAlertMessage(data.message);  // Set the alert message
            alert(data.message);  // Trigger the native browser alert
          }
        })
        .catch(error => console.error('Error fetching alert:', error));
    }, 5000);  // Poll every 5 seconds

    // Clean up polling when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Bluetooth Alert System</h1>
      {alertMessage && <div className="alert">{alertMessage}</div>}
    </div>
  );
};

export default App;
