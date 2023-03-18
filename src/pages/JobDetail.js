import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RequireAuth from '../auth/RequireAuth';
import api from '../data/fetchData';

function JobDetail() {
  const [job, setJob] = useState();
  const { id } = useParams();
  useEffect(() => {
    const fetch = async () => {
      const data = await api.getJob(id);
      setJob(data);
    };
    fetch();
  }, [id]);
  return (
    <div>
      <RequireAuth callback={() => {}}>
        <h1>{job?.title}</h1>
      </RequireAuth>
    </div>
  );
}

export default JobDetail;
