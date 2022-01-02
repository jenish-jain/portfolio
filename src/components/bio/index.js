import { Photos } from '../photos';
import './style.css';

function BioText() {
  return (
    <div className='bio'>
      <strong>Jenish Jain </strong>
      <span>
        works at <a href='https://rapido.bike/'>Rapido</a> as a Product Engineer in pricing team.
      </span>
      <span>&nbsp; He and his team are responsible for building products to control realtime marketplace pricing according to business needs.</span>
      <span>
        &nbsp; He likes to share his ideas and experiences as <a href='https://medium.com/@jenishjain6'>blogs</a>.
      </span>
      &nbsp; In his free time he likes to draw cartoons and stream movies. He lives in <a href='https://goo.gl/maps/YwjhHvZvzX3je9Q7A'>Surat</a>, Gujarat.
    </div>
  );
}

function Bio() {
  return (
    <section className='bio-container'>
      <div>
        <div className='bio-heading'>Who is He?</div>
        <BioText />
        <div className='bio-social'>
          <h2 className='bio-connect'>Connect With Jenish:</h2>
          <ul className='bio-profiles'>
            {[
              {
                id: 'twitter',
                svg: (
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 80 80'>
                    <defs />
                    <path fill='#6B6971' d='M25.158 72.502c30.19 0 46.701-25.011 46.701-46.7 0-.711 0-1.418-.048-2.122A33.396 33.396 0 0080 15.184a32.762 32.762 0 01-9.427 2.582 16.47 16.47 0 007.216-9.078 32.895 32.895 0 01-10.423 3.984 16.429 16.429 0 00-27.97 14.97 46.6 46.6 0 01-33.828-17.15 16.426 16.426 0 005.082 21.91A16.292 16.292 0 013.2 30.35v.207a16.419 16.419 0 0013.168 16.09 16.388 16.388 0 01-7.411.282A16.432 16.432 0 0024.29 58.326 32.934 32.934 0 010 65.13a46.467 46.467 0 0025.158 7.36' />
                  </svg>
                ),
                src: '/images/twitter.svg',
                link: 'https://twitter.com/jenishjain6',
                label: 'Twitter',
              },
              {
                id: 'github',
                svg: (
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 81 80'>
                    <defs />
                    <g clipPath='url(#clip0)'>
                      <path fill='#6B6971' fillRule='evenodd' d='M40.5 0C18.4 0 .5 17.9.5 40c0 17.68 11.467 32.658 27.354 37.962 1.99.368 2.726-.86 2.726-1.94 0-.958-.025-3.462-.05-6.802-11.123 2.407-13.48-5.353-13.48-5.353C15.233 59.251 12.606 58 12.606 58c-3.635-2.48.27-2.431.27-2.431 4.002.294 6.138 4.125 6.138 4.125 3.56 6.114 9.356 4.346 11.64 3.315.368-2.578 1.4-4.346 2.529-5.353-8.865-.982-18.196-4.42-18.196-19.742 0-4.371 1.547-7.931 4.126-10.73-.418-1.032-1.793-5.084.368-10.584 0 0 3.364-1.08 11 4.1 3.193-.883 6.606-1.325 10.019-1.35 3.389.025 6.826.467 10.018 1.35 7.637-5.18 11.001-4.1 11.001-4.1 2.185 5.5.81 9.577.393 10.583 2.554 2.8 4.1 6.36 4.1 10.73 0 15.372-9.355 18.736-18.268 19.743 1.424 1.228 2.725 3.683 2.725 7.416 0 5.353-.049 9.65-.049 10.976 0 1.08.712 2.308 2.75 1.915C69.057 72.658 80.5 57.68 80.5 40.024 80.5 17.902 62.6 0 40.5 0z' clipRule='evenodd' />
                    </g>
                    <defs>
                      <clipPath id='clip0'>
                        <path fill='#fff' d='M0 0h80v80H0z' transform='translate(.5)' />
                      </clipPath>
                    </defs>
                  </svg>
                ),
                src: '/images/github.svg',
                link: 'https://github.com/jenish-jain',
                label: 'GitHub',
              },
            ].map(profile => (
              <li className='bio-profile'>
                <a
                  href={profile.link}
                  key={profile.id}
                  className='bio-link'
                  onMouseDown={event => {
                    event.stopPropagation();
                  }}
                  onKeyDown={event => {
                    if (event.key !== 'Enter') return;
                    event.stopPropagation();
                  }}
                >
                  {profile.svg}
                  <span className='visually-hidden'>{profile.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Photos className='bio-image-container' />
    </section>
  );
}

export default Bio;
