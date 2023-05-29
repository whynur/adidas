import React, { useEffect } from 'react';

const withUserAuth = (WrappedComponent) => {
  const WithUserAuth = (props) => {

    useEffect(() => {
      const isAuthenticated = localStorage.getItem('token');
      if (!isAuthenticated) {
       window.location.replace('/Login'); 
      }

      const userRole = localStorage.getItem('role');
      if (userRole !== 'admin') {
        window.location.replace('/Login');
      }
    });

    return <WrappedComponent {...props} />;
  };

  return WithUserAuth;
};

export default withUserAuth;
