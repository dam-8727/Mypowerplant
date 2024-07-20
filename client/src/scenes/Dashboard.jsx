import React, { useState } from 'react';
import { Grid, Paper, Typography, Box, TextField , useTheme} from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ResponsiveContainer, PieChart, Pie, Cell, Label, Tooltip, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, BarChart, Bar } from 'recharts';
import { green, red, blue } from '@mui/material/colors';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import SettingsIcon from '@mui/icons-material/Settings';
import{EnergyData} from '../data/EnergyData'
import { tokens } from "../theme";
import BoltIcon from '@mui/icons-material/Bolt';
import image1 from '../assets/image.jpeg'

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const historyData = [
    { name: 'Day', value: 343, color: blue[500] },
    { name: 'Month', value: 343, color: green[500] },
    { name: 'Year', value: 343, color: red[500] },
  ];
  const generationData = [
    { name: 'Jan', generation: 4000, consumption: 2400 },
    { name: 'Feb', generation: 3000, consumption: 1398 },
    { name: 'Mar', generation: 2000, consumption: 9800 },
    // More data...
  ];
  const data = [
    { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
    // More data...
  ];
  const consumptionHistoryData = [
    { name: 'Jan', consumption: 2400 },
    { name: 'Feb', consumption: 1398 },
    { name: 'Mar', consumption: 9800 },
    // More data...
  ];


  const unitStatus = [
    { name: 'Unit 1', status: 'ON', generation: '58649 MWh', lastUpdate: '19 Aug', icon: <WbSunnyIcon sx={{ color: '#50C878 ' }} /> },
    { name: 'Unit 2', status: 'OFF', generation: '865753 MWh', lastUpdate: '05 Aug', icon: <WbSunnyIcon sx={{ color: '#50C878 ' }} /> },
    { name: 'Aux 1', status: 'ON', generation: '846 MWh', lastUpdate: '29 Aug', icon: <SettingsIcon sx={{ color: '#EE4B2B' }} /> },
    { name: 'Aux 2', status: 'ON', generation: '897 MWh', lastUpdate: '29 Aug', icon: <SettingsIcon sx={{ color: '#EE4B2B' }} /> },
  ];
  
  return (
    <Grid container spacing={3} sx={{ p: 3 }}>
      <Grid item xs={12}>
        <Typography variant="h4">Status as on {selectedDate.toLocaleString()}</Typography>
        <Typography variant="subtitle1">Atria Brindavan Private Limited - 16 MW</Typography>
      </Grid>

      <Grid item xs={12} md={3}>
        <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="h6"color={theme.palette.mode === 'dark' ? 'white' : 'grey'}>Generation</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
            <Typography variant="h3" color={theme.palette.mode === 'dark' ? 'white' : 'primary'}>18450 kW</Typography>
            <WbSunnyIcon sx={{ color: '#50C878', ml: 1 }} fontSize="large" />
          </Box>
        </Paper>
      </Grid>

      <Grid item xs={12} md={3}>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="h6"color={theme.palette.mode === 'dark' ? 'white' : 'grey'}>Generation</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
            <Typography variant="h3" color={theme.palette.mode === 'dark' ? 'white' : 'primary'}>189kW</Typography>
            <SettingsIcon sx={{ color: '#EE4B2B', ml: 1 }} fontSize="large" />
          </Box>
        </Paper>
      </Grid>

      <Grid item xs={12} md={3}>
        <Paper elevation={3} sx={{ p: 2 }}> 
        <Typography variant="h6"color={theme.palette.mode === 'dark' ? 'white' : 'grey'}>Export</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
            <Typography variant="h3" color={theme.palette.mode === 'dark' ? 'white' : 'primary'}>18261 kW</Typography>
            <BoltIcon sx={{ color: '#f0e874', ml: 1 }} fontSize="large" />
          </Box>
        </Paper>
      </Grid>

      <Grid item xs={12} md={3}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>History - Mwh</Typography>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Date"
              value={selectedDate}
              onChange={(newValue) => setSelectedDate(newValue)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    ...params.InputProps,
                    readOnly: true,
                  }}
                  fullWidth
                />
              )}
              format="dd MMM yy"
            />
          </LocalizationProvider>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: '100%', mt: 2 }}>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={historyData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {historyData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                  <Label
                    content={({ viewBox: { cx, cy } }) => (
                      <g>
                        <text
                          x={cx}
                          y={cy - 10}
                          fill="#000"
                          textAnchor="middle"
                          dominantBaseline="central"
                          fontSize="24"
                          fontWeight="bold"
                          
                        >
                          21800
                        </text>
                        <text
                          x={cx}
                          y={cy + 15}
                          fill="#000"
                          textAnchor="middle"
                          dominantBaseline="central"
                          fontSize="14"
                        >
                          Avg kW
                        </text>
                      </g>
                    )}
                  />
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <Box sx={{ ml: 2 }}>
              <Typography variant="body2">Date: {selectedDate.toLocaleDateString()}</Typography>
              <Typography variant="body2">Year: {selectedDate.getFullYear()}</Typography>
              <Typography variant="body2">Month: {selectedDate.toLocaleString('default', { month: 'long' })}</Typography>
              <Typography variant="body2">Cumulative: 100%</Typography>
              {historyData.map((item) => (
                <Box key={item.name} sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                  <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: item.color, mr: 1 }} />
                  <Typography variant="body2">{item.name}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Paper>
      </Grid>
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
                src={image1}
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
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Latest 48 Hrs Gen, pattern - Live</Typography>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke={green[500]} />
              <Line type="monotone" dataKey="uv" stroke={red[500]} />
            </LineChart>
          </ResponsiveContainer>
        </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Status of the units</Typography>
          {unitStatus.map((unit) => (
            <Box key={unit.name} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              {unit.icon}
              <Typography variant="subtitle1" sx={{ ml: 1 }}>
                {unit.name}
              </Typography>
              <Box sx={{ ml: 'auto' }}>
                <Typography variant="body2" color={unit.status === 'ON' ? 'green' : 'red'}>
                  {unit.status}
                </Typography>
                <Typography variant="body2">{unit.generation}</Typography>
                <Typography variant="body2">{unit.lastUpdate}</Typography>
              </Box>
            </Box>
          ))}
        </Paper>
      </Grid>
      {/* energy mwh */}

      <Grid item xs={12}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>Energy - MWh</Typography>
          <Grid container spacing={2}>
            {EnergyData.map((item, index) => (
              <Grid item xs={12} md={3} key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="body2">{item.label}</Typography>
                  <Typography variant="h6">{item.value}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Grid>

      {/* Generation vs Consumption Chart */}
      <Grid item xs={12} md={6}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Generation vs Consumption</Typography>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={generationData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="generation" stroke={blue[500]} name="Generation" />
              <Line type="monotone" dataKey="consumption" stroke={red[500]} name="Consumption" />
            </LineChart>
          </ResponsiveContainer>
        </Paper>
      </Grid>
    
      <Grid item xs={12} md={6}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Consumption History</Typography>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Date"
              value={selectedDate}
              onChange={(newValue) => setSelectedDate(newValue)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    ...params.InputProps,
                    readOnly: true,
                  }}
                  fullWidth
                />
              )}
              format="dd MMM yy"
            />
          </LocalizationProvider>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={generationData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar type="monotone" dataKey="generation" fill={green[500]} name="Generation" />
              <Bar type="monotone" dataKey="consumption" fill={red[500]} name="Consumption" />
            </BarChart>
          </ResponsiveContainer>
        </Paper>
      </Grid>
    
      </Grid>
    
  );
};

export default Dashboard;
