import  Layout  from './components/layout';
import { SEO } from './components/seo';
import Block from './components/block/index';
import Hero from './components/hero/index';
import Bio from './components/bio/index';
import  Writings from './components/writings/index';
import Sketches from './components/sketches/index';

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
    <Block id='writings' color='yellow'>
      <Writings/>
    </Block>
    <Block id='sketches' color='dirty-white'>
      <Sketches/>
    </Block>
    </Layout>,
  ];
}

export default App;
