import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <Header/>
      <div className="pt-10">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
