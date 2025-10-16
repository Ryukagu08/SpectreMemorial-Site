const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3 className="footer-title">ABOUT THIS SITE</h3>
            <p>This is a fan-made memorial site dedicated to Spectre Divide.</p>
          </div>
          <div className="footer-column">
            <h3 className="footer-title">OUR MISSION</h3>
            <p>To preserve the memory of the game and its community.</p>
          </div>
          <div className="footer-column">
            <h3 className="footer-title">DISCLAIMER</h3>
            <p>This site is not affiliated with the original game developers.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 | FAN-MADE MEMORIAL SITE</p>
          <a
            href="https://github.com/Ryukagu08/SpectreMemorial.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            CONTRIBUTE HERE
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
