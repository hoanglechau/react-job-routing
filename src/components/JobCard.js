import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { Link, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import SkillsPaper from './SkillsPaper';

// Card wrapper
const CardStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  border: '1px solid black',
  width: '100%',
  maxWidth: '350px',
  minWidth: '270px',
  height: '275px',
  margin: 'auto',
  backgroundColor: theme.palette.primary.light,
}));

function JobCard({
  description, skills, id, title,
}) {
  const location = useLocation();
  /*
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClickMore = () => {
    // eslint-disable-next-line react/destructuring-assignment
    if (auth.user) {
      navigate(`job/${id}`, { state: { backgroundLocation: location } });
    } else {
      navigate('/login', { state: { backgroundLocation: location } });
    }
  };
  */

  return (
    <CardStyle ariant="outlined">
      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        height="95%"
        padding="5px"
      >
        <CardContent sx={{ p: '5px' }}>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ textAlign: 'center', color: (theme) => theme.palette.common.white }}
          >
            {title}
          </Typography>
          <Divider />
          <SkillsPaper skills={skills} />
          <Typography sx={{ fontSize: '0.8em', color: (theme) => theme.palette.common.white }}>
            {description}
          </Typography>
        </CardContent>
        <Button
          variant="contained"
          component={Link}
          to={`job/${id}`}
          state={{ backgroundLocation: location }}
          sx={{
            width: '130px', backgroundColor: '#df9e0b', color: 'black', p: '2px',
          }}
        >
          Learn More
        </Button>
      </Stack>
    </CardStyle>
  );
}

export default JobCard;
