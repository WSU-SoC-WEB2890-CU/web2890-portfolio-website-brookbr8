function Footer() {
  return (
    <footer className="bg-primary text-white py-4">
      <div className="container text-center">
        <div className="d-flex justify-content-center gap-3">
          <a
            href="https://facebook.com"
            target="_blank"
            className="text-white p-2"
          >
            <i className="bi bi-facebook fs-2"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            className="text-white p-2"
          >
            <i className="bi bi-instagram fs-2"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            className="text-white p-2"
          >
            <i className="bi bi-linkedin fs-2"></i>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            className="text-white p-2"
          >
            <i className="bi bi-github fs-2"></i>
          </a>
        </div>
        <div className="mt-3 small">
          &copy; 2025 Brook Brown. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
