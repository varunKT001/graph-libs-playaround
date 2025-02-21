import React from 'react';
import Navbar from '@app/components/common/navbar';
import { Outlet } from 'react-router';

const Unovis: React.FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Unovis;
