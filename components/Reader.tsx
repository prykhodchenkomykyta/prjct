import { useState } from 'react';

function Reader () {
  const [csvFile, setCsvFile] = useState(null);
  const [xmlData, setXmlData] = useState(null);

  // Func of sending of CSV to the server
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Making object FormData and sending CSV into it
    const formData = new FormData();
    formData.append('csv_file', csvFile);
    
    // Sending request to the server
    const response = await fetch('path/to/php/script.php', {
      method: 'POST',
      body: formData
    });
    
    // Getting format in JSON
    const data = await response.json();
    
    // Updating state component with XML data
    setXmlData(data.data);
  }

  // Function of handling changes in field CSV file
  const handleFileChange = (event) => {
    setCsvFile(event.target.files[0]);
  }

  return (
    <div>
      <h1>converter CSV in XML</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="csv_file">Choose CSV-file:</label>
        <input type="file" id="csv_file" name="csv_file" onChange={handleFileChange} />
        <button type="submit">Convert</button>
      </form>
      {xmlData && (
        <div>
          <h2>Data XML:</h2>
          <pre>{xmlData}</pre>
        </div>
      )}
    </div>
  );
}

export default Reader;