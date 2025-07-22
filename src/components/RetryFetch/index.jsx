import React, { useEffect } from "react";

const RetryFetch = () => {
  const retryFetch = async (url, retries = 3, delay = 1000) => {
    try {
      const response = await fetch(url);
      if(!response.ok){
        if(retries === 0){
            console.log("error");
            return;
        }
        await new Promise((res) => setTimeout(res, delay));
        return retryFetch(url, retries - 1);
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      if (retries === 0) {
        console.log(error);
      }
      await new Promise((res) => setTimeout(res, delay));
      return retryFetch(url, retries - 1, delay);
    }
  };

  useEffect(() => {
    retryFetch("https://jsonplaceholder.typicode.com/posts123");
  }, []);
  return <div>index</div>;
};

export default RetryFetch;
