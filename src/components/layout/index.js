import { Header } from '../header';
import { Main } from '../main';
import { Footer } from '../footer/index';
import { useSettings } from '../../context/settings';
import { useEffect } from 'react';
import ReactGA from 'react-ga';
import { config } from 'dotenv';

ReactGA.initialize(process.env.REACT_APP_GOOGLE_TRACKING_ID);
const Layout = ({ children }) => {
  const { darkMode } = useSettings();

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className={`outer ${darkMode ? 'dark' : 'light'}`}>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};

export default Layout;
