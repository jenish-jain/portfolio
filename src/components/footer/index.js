import './style.css';

export function Footer() {
  return (
    <footer className="footer">
      <span>powered by jake peralta's cools</span>
      <nav className="footer-nav">
        <a href="/posts">posts</a>
        <a href="https://github.com/jenish-jain/portfolio">source code</a>
      </nav>
    </footer>
  );
}
