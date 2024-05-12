import { Photos } from '../photos';
import './style.css';

function BioText() {
  return (
    <div className="bio">
      <strong>Jenish Jain </strong>
      <span>
        is a Senior Product Engineer on the Pricing team at{" "}
        <a href="https://rapido.bike/">Rapido</a>.
      </span>
      <span>
        &nbsp;There, he tackles the challenge of building products that
        dynamically adjust marketplace pricing based on real-time business
        needs.
      </span>
      <span>
        &nbsp;Passionate about sharing knowledge, Jenish enjoys expressing his
        ideas and experiences through{" "}
        <a href="https://blog.jenishjain.in">blog posts</a>.
      </span>
      &nbsp; When he's not immersed in the world of product development, Jenish
      unleashes his creative side by drawing{" "}
      <a href="https://www.instagram.com/p/BsBp5eDB1UK4ktjQDzdh9bhEyWWcbLf1Ulddww0/">
      cartoons
      </a>
      . He also enjoys unwinding with a good movie stream. He lives in{" "}
      <a href="https://goo.gl/maps/YwjhHvZvzX3je9Q7A">Surat</a>, Gujarat.
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
                id: 'linkedin',
                svg: (
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 240 240'  width="150" >
                    <defs />
                    <g clipPath='url(#clip0)'>
                      <path fill='#6B6971' fillRule='evenodd' d='M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z' clipRule='evenodd' />
                    </g>
                  </svg>
                ),
                src: '/images/linkedin.svg',
                link: 'https://www.linkedin.com/in/jenish-jain/',
                label: 'Linkedin',
              },
              {
                id: 'github',
                svg: (
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 80 80'>
                    <defs />
                    <g clipPath='url(#clip0)'>
                      <path fill='#6B6971' fillRule='evenodd' d='M40.5 0C18.4 0 .5 17.9.5 40c0 17.68 11.467 32.658 27.354 37.962 1.99.368 2.726-.86 2.726-1.94 0-.958-.025-3.462-.05-6.802-11.123 2.407-13.48-5.353-13.48-5.353C15.233 59.251 12.606 58 12.606 58c-3.635-2.48.27-2.431.27-2.431 4.002.294 6.138 4.125 6.138 4.125 3.56 6.114 9.356 4.346 11.64 3.315.368-2.578 1.4-4.346 2.529-5.353-8.865-.982-18.196-4.42-18.196-19.742 0-4.371 1.547-7.931 4.126-10.73-.418-1.032-1.793-5.084.368-10.584 0 0 3.364-1.08 11 4.1 3.193-.883 6.606-1.325 10.019-1.35 3.389.025 6.826.467 10.018 1.35 7.637-5.18 11.001-4.1 11.001-4.1 2.185 5.5.81 9.577.393 10.583 2.554 2.8 4.1 6.36 4.1 10.73 0 15.372-9.355 18.736-18.268 19.743 1.424 1.228 2.725 3.683 2.725 7.416 0 5.353-.049 9.65-.049 10.976 0 1.08.712 2.308 2.75 1.915C69.057 72.658 80.5 57.68 80.5 40.024 80.5 17.902 62.6 0 40.5 0z' clipRule='evenodd' />
                    </g>
                  </svg>
                ),
                src: '/images/github.svg',
                link: 'https://github.com/jenish-jain',
                label: 'GitHub',
              },
              {
                id: 'instagram',
                svg: (
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 100 100' width="60">
                    <defs />
                    <g clipPath='url(#clip0)'>
                      <path fill='#6B6971' fillRule='evenodd' d='M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z' clipRule='evenodd' />
                    </g>
                  </svg>
                ),
                src: '/images/instagram.svg',
                link: 'https://www.instagram.com/jenishjain6/',
                label: 'Instagram',
              },
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
            ].map(profile => (
              <li className='bio-profile' key={profile.id}>
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
