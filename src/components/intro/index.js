import './style.css'

const Heading = ({ children, post, ...props }) =>
  post ? <h1 {...props}>{children}</h1> : <h2 {...props}>{children}</h2>;

const Intro= function({ headline, children, post = false }) {
  return [
    <div class="intro">
      <Heading class="intro-headline" post={post}>
        {headline}
      </Heading>
      <div class="intro-lede">{children}</div>
    </div>,
  ];
}


export default Intro