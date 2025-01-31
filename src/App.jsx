import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from './features/jobSlice';
import './index.css';

const App = () => {
  const dispatch = useDispatch();
  const { jobList, status, error } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  return (
    <div className="app-container">
      <h1>Job Portal Dashboard</h1>
      {status === 'loading' && <p>Loading jobs...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      <div className="job-list">
        {jobList.map((job, index) => (
          <div className="job-card" key={index}>
            <h3>{job.title}</h3>
            <p>{job.location}</p>
            <a href={job.url} target="_blank" rel="noopener noreferrer">
              View Job
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;


