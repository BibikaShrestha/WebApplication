function Footer() {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-blue-500 text-base-content p-4 h-[5vh] text-white text-center">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - Task Tracker by{" Bibika"}
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
