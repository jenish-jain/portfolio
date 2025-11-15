import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/layout';
import { SEO } from './components/seo';
import Block from './components/block/index';
import Hero from './components/hero/index';
import Bio from './components/bio/index';
import Writings from './components/writings/index';
import Sketches from './components/sketches/index';
import Resume from './components/resume/index';

// Home page component
const HomePage = () => (
  <>
    <SEO />
    <Layout>
      <Block color='dirty-white'>
        <Hero />
      </Block>
      <Block id='bio'>
        <Bio />
      </Block>
      <Block id='writings' color='yellow'>
        <Writings />
      </Block>
      <Block id='sketches' color='dirty-white'>
        <Sketches />
      </Block>
    </Layout>
  </>
);

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/resume" component={Resume} />
      </Switch>
    </Router>
  );
}

export default App;
