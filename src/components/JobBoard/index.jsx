import { useState, useEffect } from "react";
import "./styles.css";

const API = "https://hacker-news.firebaseio.com/v0/jobstories.json";
const LIMIT = 6;

const JobBoard = () => {
  const [jobIdsList, setJobIdsList] = useState([]);
  const [jobDetailsList, setJobDetailsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);

  const getFormatTime = (unixSeconds) => {
    const date = new Date(unixSeconds * 1000);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    const ampm = hours >= 12 ? "PM" : "AM";

    hours = (hours % 12 || 12).toString().padStart(2, "0");

    return `${day}/${month}/${year}, ${hours}:${minutes}:${seconds} ${ampm}`;
  };

  const getJobIdsFetchList = async () => {
    let jobs = jobIdsList;
    if (!jobs.length) {
      try {
        const response = await fetch(API);
        if (!response.ok) {
          alert("Opps something went wrong, please try again!");
          return;
        }
        jobs = await response.json();
        setJobIdsList(jobs);
      } catch (error) {
        alert(`Server error`);
      }
    }
    const startIndex = page * LIMIT;
    const endIndex = startIndex + LIMIT;
    return jobs.slice(startIndex, endIndex);
  };

  const getJobDetails = async () => {
    const jobs = await getJobIdsFetchList();
    setIsLoading(true);
    const jobForPage = await Promise.all(
      jobs.map((jobId) =>
        fetch(`https://hacker-news.firebaseio.com/v0/item/${jobId}.json`).then(
          (response) => response.json()
        )
      )
    );

    const updatedJobDetailsList = [...jobDetailsList, ...jobForPage];
    setJobDetailsList(updatedJobDetailsList);
    setIsLoading(false);
  };

  const handleLoadMoreJobs = () => setPage((prevPage) => prevPage + 1);

  const hasMoreJobs = () =>
    jobDetailsList.length && jobDetailsList.length < jobIdsList.length;

  useEffect(() => {
    getJobDetails();
  }, [page]);

  return (
    <div>
      {jobDetailsList.map((job) => (
        <div key={job?.id} className="job-card">
          <p className="title">{job?.title}</p>
          <div className="by-date-container">
            <p>{`By ${job?.by}`}</p>
            <p>{getFormatTime(job?.time)}</p>
          </div>
        </div>
      ))}
      {hasMoreJobs() ? (
        <button onClick={handleLoadMoreJobs} className="btn">
          {!isLoading ? "Load more jobs" : "Loading..."}
        </button>
      ) : null}
    </div>
  );
};

export default JobBoard;
