import { Layout } from './components/layout';
import { SEO } from './components/seo';
import Block from './components/block/index';
import Hero from './components/hero/index';
import Bio from './components/bio/index';

function App() {
  return [
    <SEO />,
    <Layout>
      <Block color='dirty-white'>
        <Hero />
      </Block>
      <Block id='bio'>
        <Bio  />
      </Block>
    </Layout>,
  ];
}

export default App;
