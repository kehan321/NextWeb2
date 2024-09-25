"use client"
import Link from 'next/link';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState, useEffect, useRef } from 'react';

const AppBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef<HTMLUListElement>(null); // Reference to the drawer

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the drawer when clicking outside of it
  const handleClickOutside = (event: MouseEvent) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener on mount
    document.addEventListener('mousedown', handleClickOutside);
    
    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Function to close the menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="appBar flex items-center justify-between p-4 bg-blue-600">
      <img 
        src="https://up.yimg.com/ib/th?id=OIP.nyLAzWYdvc-wb9ntq1cU7QHaHa&pid=Api&rs=1&c=1&qlt=95&w=114&h=114" 
        className="image h-10 w-10 rounded-full" 
        alt="Logo" 
      />
      <ul ref={drawerRef} className={`navList ${isOpen ? 'show' : 'hidden'} transition-all duration-300`}>  
        <li><Link href="/" onClick={closeMenu}>Home</Link></li>
        <li><Link href="/about" onClick={closeMenu}>About</Link></li>
        <li><Link href="#footer" onClick={closeMenu}>Contact</Link></li>
        <li><Link href="/login" onClick={closeMenu}>Login</Link></li>
        {/* <li><Link href="/detail" onClick={closeMenu}>Detail</Link></li> Added Detail link */}
      </ul>
      <div className="drawerIcon cursor-pointer" onClick={toggleMenu}>
        <i className={`fa-solid fa-${isOpen ? 'times' : 'bars'}`}></i> {/* Change icon based on state */}
      </div>
    </nav>
  );
};

export default AppBar;
