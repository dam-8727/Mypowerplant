import React from 'react';
import { Container, Grid, Box, Typography, Paper, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import hydro from '../assets/hydro2.jpeg'; // Adjust the path as needed
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SettingsIcon from '@mui/icons-material/Settings';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import BoltIcon from '@mui/icons-material/Bolt';
import { tokens } from "../theme";
import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  position: 'relative', // Added for positioning the FlashOnIcon
}));

const iconStyle = { fontSize: '3rem', marginBottom: '0.5rem' };

const Home = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1, mt: 4 }}>
        <Link to="/dashboard" style={{ textDecoration: 'none' ,color: 'inherit'}}>
          <Typography variant="h4" gutterBottom>
            Status as on 04-12-2021, 19:55 Hrs - Mannapitlu Mini Hydel Scheme-15 MW
          </Typography>
        </Link>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} md={4}>
            <Item>
              <WbSunnyIcon style={{ ...iconStyle, position: 'absolute', top: '12px', right: '12px', color: colors.greenAccent[500] }} />
              <Typography variant="h6" sx={{ color: colors.greenAccent[600], fontWeight: 'bold' }}>
                Generation
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                1150kw
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Item>
              <SettingsIcon style={{ ...iconStyle, position: 'absolute', top: '12px', right: '12px', color: colors.redAccent[500] }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: colors.greenAccent[500] }}>
                Consumption
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                135 kw
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Item>
              <BoltIcon style={{ ...iconStyle, position: 'absolute', top: '12px', right: '12px', color: colors.greenAccent[1000] }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: colors.greenAccent[600] }}>
                Export
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                1015kw
              </Typography>
            </Item>
          </Grid>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: '100%',
                borderRadius: '8px',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src={hydro}
                alt="Hydel Scheme"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '400px',
                  borderRadius: '8px',
                  objectFit: 'cover',
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={3} sx={{ height: '100%' }}>
              <Grid item xs={12}>
                <Item>
                  {/* <BatteryChargingFullIcon style={iconStyle} /> */}
                  <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                    Energy - Mwh
                  </Typography>
                  <Grid container spacing={0}>
                    <Grid item xs={3}>
                      <Box sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)', pr: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: colors.greenAccent[600] }}>
                          Day
                        </Typography>
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>56</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={3}>
                      <Box sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)', pr: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: colors.greenAccent[600] }}>
                          Month
                        </Typography>
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>2765</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={3}>
                      <Box sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)', pr: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: colors.greenAccent[600] }}>
                          Year
                        </Typography>
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>8765</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography variant="h6" sx={{ fontWeight: 'bold', color: colors.greenAccent[600] }}>
                        Cumulative
                      </Typography>
                      <Typography variant="h4" sx={{ fontWeight: 'bold' }}>78654</Typography>
                    </Grid>
                  </Grid>
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item>
                  <Grid container spacing={0}>
                    <Grid item xs={3}>
                      <Box sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)', pr: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: colors.greenAccent[600] }}>
                          Day
                        </Typography>
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>2</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={3}>
                      <Box sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)', pr: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: colors.greenAccent[600] }}>
                          Month
                        </Typography>
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>45</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={3}>
                      <Box sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)', pr: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: colors.greenAccent[600] }}>
                          Year
                        </Typography>
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>86</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography variant="h6" sx={{ fontWeight: 'bold', color: colors.greenAccent[600] }}>
                        Cumulative
                      </Typography>
                      <Typography variant="h4" sx={{ fontWeight: 'bold' }}>408</Typography>
                    </Grid>
                  </Grid>
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item>
                  <Grid container spacing={0}>
                    <Grid item xs={3}>
                      <Box sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)', pr: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: colors.greenAccent[600] }}>
                          Day
                        </Typography>
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>54</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={3}>
                      <Box sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)', pr: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: colors.greenAccent[600] }}>
                          Month
                        </Typography>
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>2720</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={3}>
                      <Box sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)', pr: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: colors.greenAccent[600] }}>
                          Year
                        </Typography>
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>8679</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography variant="h6" sx={{ fontWeight: 'bold', color: colors.greenAccent[600] }}>
                        Cumulative
                      </Typography>
                      <Typography variant="h4" sx={{ fontWeight: 'bold' }}>78246</Typography>
                    </Grid>
                  </Grid>
                </Item>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
