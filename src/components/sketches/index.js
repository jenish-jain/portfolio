import './style.css';
import sketches from './data';
import PostPreviews from '../postPreviews';
import Intro from '../intro';

const Sketches = function () {
  const featuredPosts = sketches.filter(post => post.featured);

  return (
    <section className='sketches'>
      <Intro headline='And yes, I draw sometimes too.'>
        <p>
          Jenish is creative by heart, he ocassionally shares his drawings <a href='https://drawings.jenishjain.in/posts/'>here</a>  
        </p>
      </Intro>
      <div>
        <PostPreviews posts={featuredPosts} />
      </div>
      <a href='https://drawings.jenishjain.in/posts' className='writing-button'>
        see all drawings{' '}
      </a>
    </section>
  );
};

export default Sketches;
