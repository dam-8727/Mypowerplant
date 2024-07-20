import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    TextField,
    Button,
    Container,
    Typography,
    Box,
    Paper,
    CssBaseline,
    Grid,
    Link,
    Switch,
    FormControlLabel,
    Divider,
    useMediaQuery,
} from '@mui/material';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../mode';
import illustration from '../assets/login.webp';
import energy from '../assets/logo2.png';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isDarkMode, setIsDarkMode] = useState(false);
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateLogin(email, password)) {
            localStorage.setItem('isLoggedIn', true);
            window.location.href = '/';
            navigate('/');
            onLogin(email, password);
        } else {
            alert('Invalid credentials');
        }
    };

    const validateLogin = (email, password) => {
        return email === 'admin@gmail.com' && password === 'admin123';
    };

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <Container component="main" maxWidth="md">
                <CssBaseline />
                <Paper elevation={3} sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    padding: { xs: 2, sm: 4 }, 
                    mt: { xs: 2, sm: 8 }
                }}>
                    <Typography component="h1" variant="h4" align="center" sx={{ mb: { xs: 2, sm: 4 } }}>
                      
                    </Typography>
                    <Grid container spacing={2}>
                        {!isMobile && (
                            <Grid item xs={12} md={6}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                    <img src={illustration} alt="Illustration" style={{ maxWidth: '100%', height: 'auto' }} />
                                </Box>
                            </Grid>
                        )}
                        <Grid item xs={12} md={isMobile ? 12 : 6}>
                            {!isMobile && <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', md: 'block' }, mx: 2 }} />}
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                                <Box sx={{ boxShadow: 3, p: { xs: 2, sm: 3 }, borderRadius: 4, width: '100%', mb: 3 }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', mb: 2 }}>
                                        <img
                                            src={energy}
                                            alt="Logo"
                                            style={{ width: 80, height: 80, objectFit: 'contain', borderRadius: '50%' }}
                                        />
                                        <Typography variant="h6" sx={{ mt: 2, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                                            Login To Your Account
                                        </Typography>
                                    </Box>
                                    <FormControlLabel
                                        control={<Switch checked={isDarkMode} onChange={toggleTheme} />}
                                        label="Dark Mode"
                                        sx={{ mb: 2 }}
                                    />
                                    <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
                                        <TextField
                                            margin="dense"
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email"
                                            name="email"
                                            autoComplete="email"
                                            autoFocus
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <TextField
                                            margin="dense"
                                            required
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            autoComplete="current-password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            color="primary"
                                            sx={{ 
                                                mt: 3, 
                                                mb: 2, 
                                                borderRadius: '50px',
                                                textTransform: 'none'
                                            }}
                                        >
                                            Log In
                                        </Button>
                                        <Grid container justifyContent="space-between">
                                            <Grid item>
                                                <Link href="#" variant="body2">
                                                    Forgot password?
                                                </Link>
                                            </Grid>
                                            <Grid item>
                                                <Link href="#" variant="body2">
                                                    {"Don't have an account? Sign Up"}
                                                </Link>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </ThemeProvider>
    );
};

export default Login;