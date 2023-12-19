import React, { useContext } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { Store } from '../utils/Store';
import Cookies from 'js-cookie';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Link,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Switch,
} from '@mui/material';

export default function Layout({ title, description, children }) {
  const { state, dispatch } = useContext(Store);
  const { darkMode } = state;
  const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' });
    const newDarkMode = !darkMode;
    Cookies.set('darkMode', newDarkMode ? 'ON' : 'OFF');
  };
  
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
    },
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#f0c000',
      },
      secondary: {
        main: '#208080',
      },
    },
  });
  
  return (
    <div>
      <Head>
        <title>{title ? `${title} - Next Amazona` : 'Next Amazona'}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" sx={{ backgroundColor: '#203040',
    '& a': {
      color: '#ffffff',
      marginLeft: 5,
    }}}>
          <Toolbar>
            <NextLink href="/" passHref>
              {/* <Link> */}
                <Typography sx={{fontWeight: 'bold',
    fontSize: '1.5rem'}}>amazona</Typography>
              {/* </Link> */}
            </NextLink>
            <div style={{flexGrow: 1}}></div>
            <div>
            <Switch
                checked={darkMode}
                onChange={darkModeChangeHandler}
              ></Switch>
              <NextLink href="/cart" passHref>
                {/* <Link> */}Cart{/* </Link> */}
              </NextLink>
              <NextLink href="/login" passHref>
                {/* <Link> */}Login{/* </Link> */}
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
        <Container sx={{minHeight: '80vh'}}>{children}</Container>
        <footer style={{marginTop: 10,
    textAlign: 'center'}}>
          <Typography>All rights reserved. Next Amazona.</Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
}