import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { SEO } from './components/seo';
import HomePage from './components/home';
import Resume from './components/resume/index';

const HomePageWithSEO = () => (
  <>
    <SEO />
    <HomePage />
  </>
);

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePageWithSEO} />
        <Route exact path="/resume" component={Resume} />
      </Switch>
    </Router>
  );
}

export default App;
