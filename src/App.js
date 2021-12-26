import { Layout } from './components/layout';
import { SEO } from './components/seo';
import Block from './components/block/index';
import Bio from './components/bio';
import Hero from './components/hero/index';

function App() {
  return [
    <SEO />,
    <Layout>
      <Block color='yellow'>
        <Hero />
      </Block>
      <Block id='bio'>
        <Bio />
      </Block>
    </Layout>,
  ];
}

export default App;
