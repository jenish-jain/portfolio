import { Header } from "../header";
import { Main } from "../main";
import { Footer } from "../footer/index";
import { useSettings } from "../../context/settings";
import { useEffect } from "react";
import ReactGA from "react-ga";

ReactGA.initialize(process.env.REACT_APP_GOOGLE_TRACKING_ID);
const Layout = ({ children }) => {
  const { darkMode } = useSettings();

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className={`outer ${darkMode ? "dark" : "light"}`}>
      <Header />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-M9D0F8MKP6"
      ></script>
      <script>
        window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'G-M9D0F8MKP6');
      </script>
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};

export default Layout;
