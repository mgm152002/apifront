import React from 'react';
import Navbar from '@/components/navbar';


const BiobankAPIDocs = () => {
  return (
    <div className='bg-base-200'>
  <Navbar />
  <div className="container mt-3 bg-base-200 h-max  justify-center items-center text-center">
      <h1 className="text-2xl font-bold text-center">Biobank API Documentation</h1>
      <p>This page provides documentation for the Biobank REST API.</p>
      
      <h2 className="text-lg font-semibold mt-3">Endpoint</h2>
      <p>The endpoint for the Biobank API is:</p>
      <pre><code>{`http://localhost:3000/biobank/{yourapikey}`}</code></pre>
      <p>Replace {`{yourapikey}`} with your own API key.</p>
      
      <h2 className="text-lg font-semibold mt-3">Code Example</h2>
      <p>Here is an example of how to use the Biobank API in Node.js:</p>
      <pre><code>{`// Require the necessary modules
import axios from 'axios';
import { useEffect } from 'react';

const BiobankAPI = () => {
  const apiKey = '{yourapikey}';

  useEffect(() => {
    axios.get(\`http://localhost:3000/biobank/\${apiKey}\`)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return null; // You can return your UI elements here
};`}</code></pre>
      
      <h2 className="text-lg font-semibold mt-3">Rate Limit</h2>
      <p>Each API key is limited to 30 calls per day. If you exceed this limit, you will receive a 429 status code.</p>
    </div>
 
</div>

  );
};

export default BiobankAPIDocs;
