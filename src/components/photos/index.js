import { useState } from 'react';
import { Image } from '../image';
import { useSfx } from '../../hooks/use-sfx';
import Button from '../button';
import './style.css';

const photos = [
  {
    publicId: 'v1638108545/portfolio/images/jenishjain',
    alt: 'Jenish Jain smiling',
    caption: 'This is Jenish’s most common profile photo.',
    width: 300,
    height: 400,
  },
  {
    publicId: 'v1640535281/portfolio/images/jenish-jain-take-a-break',
    alt: 'Jenish Jain chiling at Goa.',
    caption: 'Once in a while Jenish likes to take a break from work',
    //   credit: 'paint with stars',
    //   creditLink: 'https://paintwithstars.com/',
    width: 300,
    height: 400,
  },
  {
    publicId: 'v1640528439/portfolio/images/jenish-jain-1',
    alt: 'Jenish smiling ',
    caption: 'Smiling is Jenish’s favourite hobbie',
    //   credit: 'paint with stars',
    //   creditLink: 'https://paintwithstars.com/',
    width: 300,
    height: 400,
  },
];

function Thumb({ photo, handleClick }) {
  const { playClick, playPop } = useSfx();

  return (
    <li className='gallery-thumb'>
      <Button className='gallery-thumb-link' hoverSound={playPop} clickSound={playClick} handleClick={handleClick}>
        <Image publicId={photo.publicId} alt={photo.alt} width={50} height={50} transformations={['g_faces', 'c_thumb']} />
      </Button>
    </li>
  );
}

export function Photos(props) {
  const [currentImage, setCurrentImage] = useState(photos[0]);

  return (
    <div className={props.class}>
      <figure className='gallery-image'>
        <Image publicId={currentImage.publicId} alt={currentImage.alt} width={400} height={400} transformations={['g_faces', 'c_fill']} />
        <figcaption>
          {currentImage.caption}
          <div className='gallery-links'>
            <a className='gallery-fullsize-link' target='_blank' rel='noopener noreferrer' href={`https://res.cloudinary.com/jenishjain/image/upload/${currentImage.publicId}.jpg`}>
              open full size
            </a>
            {currentImage.credit ? (
              <span className='gallery-credit'>
                Photo: <a href={currentImage.creditLink}>{currentImage.credit}</a>
              </span>
            ) : (
              ''
            )}
          </div>
        </figcaption>
      </figure>
      <div className='gallery-options'>
        <h2 className='gallery-heading'>You can use any of these photos with credit:</h2>
        <ul className='gallery-thumbnails'>
          {photos.map((photo, index) => (
            <Thumb
              key={`photo-${index}`}
              photo={photo}
              isCurrent={currentImage.publicId === photo.publicId}
              handleClick={() => {
                setCurrentImage(photo);
              }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
