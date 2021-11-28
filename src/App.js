import { Layout } from './components/layout';
import { SEO } from './components/seo';
import Block from './components/block/index';
import Hero from './components/hero/index';

function App() {
  return [
    <SEO />,
    <Layout>
      <Block color='yellow'>
        <Hero />
      </Block>
    </Layout>,
  ];
}

export default App;
