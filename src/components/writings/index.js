import './style.css';
import writings from './data';
import PostPreviews from '../postPreviews';
import Intro from '../intro';

const Writings = function () {
  const featuredPosts = writings.filter(post => post.featured);

  return (
    <section className='writing'>
      <Intro headline='Some of Jenish’s Posts.'>
        <p>
          Jenish likes to share this experience and knowledge gains in form of <a href='/posts'>blogs</a>, He is not a regular contributor but here are few of his writings.  
        </p>
      </Intro>
      <div>
        <PostPreviews posts={featuredPosts} />
      </div>
      <a href='https://medium.com/@jenishjain6' className='writing-button'>
        see all posts{' '}
      </a>
    </section>
  );
};

export default Writings;
