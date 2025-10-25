import React, { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import DescriptionDetails from '../components/descriptionPage/DescriptionDetails';
import Layout from '../layouts/Layout';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function Description() {
  const navigate = useNavigate();
  const { id } = useParams(); // نجيب الـ id من الرابط
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://68f8f8e8deff18f212b83fba.mockapi.io/jobs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setJob(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  return (
    <Layout>
      {/* الهيدر */}
      <Box
        sx={{
          width: '100%',
          minHeight: { xs: 80, sm: 100 },
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#F4F5F7',
          px: { xs: 2, sm: 4, md: 6 },
          gap: 2,
        }}
      >
        <Button
          variant="outlined"
          startIcon={<ArrowBackIosNewIcon />}
          onClick={() => navigate(-1)}
          sx={{
            minWidth: 0,
            padding: { xs: '4px 8px', sm: '6px 12px' },
            fontSize: { xs: '0.7rem', sm: '0.9rem' },
          }}
        >
          Back
        </Button>

        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' },
            fontWeight: 500,
            textAlign: 'center',
            flexGrow: 1,
          }}
        >
          {loading ? 'Loading...' : `${job?.title} - ${job?.company}`}
        </Typography>
      </Box>

      {/* تفاصيل الوصف */}
      <Box sx={{ px: { xs: 2, sm: 4, md: 8 }, py: { xs: 4, sm: 6, md: 8 } }}>
        <DescriptionDetails jobDetail={job} loading={loading} />
      </Box>
    </Layout>
  );
}

export default Description;
