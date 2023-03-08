import React, { useState, useEffect } from 'react';

const [data, setData] = useState([]);

  useEffect(() => {
    fetch('../backend/index.php')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

const CSVReader = () => {
	return (
		<div>
      <table>
        <thead>
          <tr>
            <th>Card Number</th>
            <th>Pin</th>
            <th>Track1</th>
            <th>Track2</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.card}</td>
              <td>{row.pin}</td>
              <td>{row.track1}</td>
              <td>{row.track2}</td>
              <td>{row.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
	);
};

export default CSVReader;