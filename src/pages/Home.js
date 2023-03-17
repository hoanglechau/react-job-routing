import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';
import { styled } from '@mui/material/styles';
import api from '../data/fetchData';
import JobCard from '../components/JobCard';

// eslint-disable-next-line no-unused-vars
const CenterPagination = styled(Pagination)(({ theme }) => ({
  ul: {
    justifyContent: 'center',
  },
}));

function Home() {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [pagesTotal, setPagesTotal] = useState(0);
  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    const fetch = async () => {
      const data = await api.getJobs(page);
      setJobs(data.jobs);
      setPagesTotal(data.pagesTotal);
    };
    fetch();
  }, [page]);

  return (
    <Container sx={{ p: 3 }} maxWidth="lg">
      <Grid container spacing={3}>
        {jobs.map((job) => (
          <Grid key={job.id} item md={4} sm={6} xs={12}>
            <JobCard
              id={job.id}
              title={job.title}
              description={job.description}
              skills={job.skills}
            />
          </Grid>
        ))}
      </Grid>
      <CenterPagination
        sx={{ marginTop: '15px' }}
        count={pagesTotal}
        color="error"
        onChange={handleChange}
      />
    </Container>
  );
}

export default Home;
