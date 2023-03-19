import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SkillsPaper from '../components/SkillsPaper';
import api from '../data/fetchData';
import RequireAuth from '../auth/RequireAuth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', md: 600 },
  bgcolor: 'background.paper',
  borderRadius: 2,
  border: 'none',
};

function JobDetail() {
  const [job, setJob] = useState();
  const { id } = useParams();
  // const navigate = useNavigate();
  // const from = navigate.state?.from?.pathname || '/';

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
        <Box sx={style}>
          <Card
            sx={{
              border: 'none',
              boxShadow: 0,
              backgroundColor: (theme) => theme.palette.primary.light,
              color: (theme) => theme.palette.common.white,
            }}
          >
            <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h5" component="div" sx={{ alignSelf: 'center' }}>
                {job?.title}
              </Typography>
              <SkillsPaper skills={job?.skills} sx={{ justifyContent: 'center' }} />
              <Typography>{job?.description}</Typography>
              <Typography variant="h6" component="div">
                City:
                {' '}
                {job?.city}
              </Typography>
              <Typography variant="h6" component="div">
                Salary Range:
                {'  $'}
                {job?.salaryLow.toLocaleString('en-US')}
                {' '}
                -
                {'  $'}
                {job?.salaryHigh.toLocaleString('en-US')}
              </Typography>
              <Typography variant="h6" component="div">
                Years of Experience:
                {' '}
                {job?.yrsXPExpected}
              </Typography>
              <Typography variant="h6" component="div">
                Remote:
                {' '}
                {job?.remote ? 'Yes' : 'No'}
              </Typography>
              <Button
                variant="contained"
                component={Link}
                to="/"
                sx={{
                  margin: '5px 0 0', alignSelf: 'center', width: '130px', backgroundColor: '#df9e0b', color: 'black', p: '2px',
                }}
              >
                Back to Home
              </Button>
            </CardContent>
          </Card>
        </Box>
      </RequireAuth>
    </div>
  );
}

export default JobDetail;
