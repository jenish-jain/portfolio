import { useEffect, useState } from 'react';
import './style.css';
import { sitesInfo } from '../../configurations/constants';

const PostPreviews = function ({ posts }) {
  const [columns, setColumns] = useState(1);

  useEffect(() => {
    // this is pretty hacky and extremely fragile
    // we’re basically doing CSS calculations that will break if the CSS changes
    setColumns(Math.min(4, Math.floor((window.innerWidth * 0.9 + 48) / 298)));
  }, []);

  return (
    <div className='post-previews'>
      {posts.map((post, index) => (
        <div className='post-preview' key={`featured-post-${index}`}>
          {post.site && (
            <p className='post-preview-site'>
              <img src={`https://res.cloudinary.com/jenishjain/image/fetch/w_32,h_32,c_fill,g_face,q_auto,f_auto/${sitesInfo[post.site].icon}`} alt={sitesInfo[post.site].name} loading='lazy' height={16} width={16} />
              {sitesInfo[post.site].name}
            </p>
          )}
          {index < columns && <img src={post.image.match(/^https:\/\/res.cloudinary/) ? post.thumb || post.image : `https://res.cloudinary.com/jenishjain/image/fetch/w_500,h_250,c_fill,g_face,q_auto,f_auto/${post.image}`} alt='' className='post-preview-image' loading='lazy' width={250} height={125} />}
          <h3 className='post-preview-title'>
            <a href={post.url || `/${post.slug}`} className='post-preview-title-link'>
              {post.title}
            </a>
          </h3>
          <p className='post-preview-description'>{post.description}</p>
          <span aria-hidden='true' className='post-preview-link'>
            Read this post &rarr;
          </span>
        </div>
      ))}
    </div>
  );
};

export default PostPreviews;
