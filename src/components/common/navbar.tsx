import React from 'react';
import { Link } from 'react-router';

const Navbar: React.FC = () => {
  return (
    <nav style={{ position: 'absolute', top: 10, left: 0, padding: '1rem' }}>
      <Link to={'/'} style={{ textDecoration: 'underline' }}>
        back to home
      </Link>
    </nav>
  );
};

export default Navbar;
