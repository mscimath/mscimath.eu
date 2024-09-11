import React, { useState, useEffect } from 'react';
function StickyHeader() {
   const [isSticky, setSticky] = useState(false);
   const [showBackToTop, setShowBackToTop] = useState(false); 
   const handleScroll = () => { 
     const windowScrollTop = window.scrollY; 
     if (windowScrollTop > 10) { 
      setSticky(true); 
      setShowBackToTop(true); 
    } else { 
        setSticky(false); 
        setShowBackToTop(false); 
      } 
    }; 
    const scrollToTop = () => { 
      window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
      }); 
    }; 
    useEffect(() => { 
      window.addEventListener('scroll', handleScroll); 
      return () => { 
        window.removeEventListener('scroll', handleScroll); 
      }; 
    }, []); 
    const items = [ 
    { 
      name: 'Home', 
      link: '/' 
    }, { 
      name: 'About', 
      link: '/about' 
    }, { 
      name: 'Contact',
       link: '/contact' 
    } 
    ]; 
    const data = [ 1, 2] 
    return ( 
    <div className="App"> 
    <header style={{ background: isSticky ? '#fff' : '', width: '100%', zIndex: '999',position:isSticky ?'fixed':'absolute' }}> 			{items.map(item => ( 
            <a href={item.link} key={item.name}> 
                {item.name} 
            </a> 
             ))} 
    </header>  
    <ul> 
        {data.map((x) => { 
            return (<li key={x}>{x}</li>) 
            }
        )} 
    </ul> 
    <div> 
        {showBackToTop && ( 
            <button onClick={scrollToTop}>Back to top</button> 
        )}
    </div> 
   </div> );}
export default StickyHeader;
