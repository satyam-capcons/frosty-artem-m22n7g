import React, { useEffect, useState } from "react";

async function fetchData(url, token) {
  try {
    const response = await fetch(url, {
      method: "GET", // Specifies the request method
      headers: {
        Authorization: `Bearer ${token}`, // Adds the Bearer token for authorization
        "Content-Type": "application/json", // Sets the content type to JSON
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json(); // Parses the JSON response body
    return data;
  } catch (error) {
    console.error("Fetching data failed:", error);
    return null; // Return null or handle the error as needed
  }
}

function App() {
  const [data, setData] = useState(null);
  const token =
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay1qZjIxbEBjYXBjb25zLXByb2QuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJhdWQiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS9nb29nbGUuaWRlbnRpdHkuaWRlbnRpdHl0b29sa2l0LnYxLklkZW50aXR5VG9vbGtpdCIsImV4cCI6MTcxMzI1NzgzOSwiaWF0IjoxNzEzMjU0MjM5LCJzdWIiOiJmaXJlYmFzZS1hZG1pbnNkay1qZjIxbEBjYXBjb25zLXByb2QuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJ1aWQiOiIwQlkzZTdwaThHVlFuWU92Wk9zNTNWdWRzbWUyIn0.b02yiPYwKigqUdzCovaNlEpAexRzorjMVvfx8EtXzxSm3-uBrls3W-27nUTByQRMjWFPzeEf84EB_04kBQxGmVxNAVRnGiJf1zFqT-VfvwTDgdhS3Q6D9KABmsoDdpFCEX_DPmhFD0QKbyHaf-fAdury5VzugepxI2fBOyByYzcMb60OA4lROT8g5PnX0hST_n_8KIeoit-5gchNzkvltvG92bqOHl3tEBmwQdzEhMeHH98VU1TPbvVWEQXHQOYvnIqsKLyrzT5cr1AIrUAQQFvz7G7-eMXrrKeg20LgHgwIBnJfW6VbjPW_6yp9suiJprBX9g7Noq9w7lKN2ELSgw"; // Your actual token
  const apiUrl = "https://capcons.com/go-auth/allUsers?circle=capcons"; // Your API endpoint

  useEffect(() => {
    fetchData(apiUrl, token)
      .then((fetchedData) => {
        setData(fetchedData);
      })
      .catch((error) => {
        console.log("Error fetching data: ", error);
      });
  }, [2]); // Empty dependency array means this effect will only run once after the component mounts

  return (
    <div>
      <h1>Data from API</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
}

export default App;
