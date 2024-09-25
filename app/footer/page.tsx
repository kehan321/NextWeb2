import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer mx-0 contact  " id="footer" >
      <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      <ul className="footerNavList">
        <li><Link href="/privacy">Privacy Policy</Link></li>
        <li><Link href="/terms">Terms of Service</Link></li>
        <li><Link href="/contact">Contact Us</Link></li>
      </ul>
    </footer>
  );
};

export default Footer;
