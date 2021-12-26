import './styles.css';

function BioText(){
    return (
        <div>
          <strong>Jenish Jain </strong>
          <span>
            works at <a href='https://rapido.bike/'>Rapido </a> as a Product Engineer in pricing team working on
            products to control marketplace according to business needs. He likes to share his ideas and experiences
            as <a href='https://medium.com/@jenishjain6'>blogs.</a> He likes to create stuffs in his free time and 
            i (the website) is an output of his free weekend time 😁. He lives in Surat, Gujarat.
          </span>
        </div>
      );
}

function SocialMedia(){
    return (<svg viewBox="328 355 335 276" xmlns="http://www.w3.org/2000/svg">
  <path d="
    M 630, 425
    A 195, 195 0 0 1 331, 600
    A 142, 142 0 0 0 428, 570
    A  70,  70 0 0 1 370, 523
    A  70,  70 0 0 0 401, 521
    A  70,  70 0 0 1 344, 455
    A  70,  70 0 0 0 372, 460
    A  70,  70 0 0 1 354, 370
    A 195, 195 0 0 0 495, 442
    A  67,  67 0 0 1 611, 380
    A 117, 117 0 0 0 654, 363
    A  65,  65 0 0 1 623, 401
    A 117, 117 0 0 0 662, 390
    A  65,  65 0 0 1 630, 425
    Z"
    fill="#3BA9EE"
    />
</svg>)
}

function Bio() {
  return (
   <BioText/>,
   <div className='bio-profiles'>
       <SocialMedia/>
   </div>
  );
}

export default Bio;
