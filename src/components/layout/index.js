import { Header } from '../header';
import { Main } from '../main';
import { Footer } from '../footer/index';
import { useSettings } from '../../context/settings';

export function Layout({ children }) {
    const { darkMode } = useSettings();
  
    return (
      <div className={`outer ${darkMode ? 'dark' : 'light'}`}>
        <Header />
        <Main>{children}</Main>
        <Footer/>
      </div>
    );
  }
  