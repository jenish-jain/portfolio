import Block from './components/block/index';
import Hero from './components/hero/index';

function App() {
  return (
    <div className='App'>
      <Block color='yellow'>
        <Hero/>
      </Block>
    </div>
  );
}

export default App;
