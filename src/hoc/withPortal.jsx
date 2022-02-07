import React, { useEffect, useState } from 'react';
import reactDom from 'react-dom';

export default function withPortal(WrappedComponent) {
  return function WrappedComponentWithPortal(props) {

    const [mounted, setMounted] = useState(false);
    useEffect(() => {
      setMounted(true);
    }, []);
    
    return mounted ? 
        reactDom.createPortal(
          <WrappedComponent {...props}/>, 
          document.querySelector("#portals")
        )
      : null
  };
}
