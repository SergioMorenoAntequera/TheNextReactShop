import styles from "@styles/ColumnBG.module.scss";
import React, {useEffect, useRef} from 'react';
import { useSpring, animated } from 'react-spring';

export default function ColumnBG({image1, image2, image3}) {
  const container = useRef(null);
  
  const p = useSpring({ 
    loop: true,
    config: { duration: 10000 },
    from: { y: "0" }, 
    to: { y: "-100vh" }
  });

  console.log(container);

  useEffect(() => {
    // var observer = new IntersectionObserver(function(entries) {
    //   if(entries[0].isIntersecting === true)
    //     console.log('Element has just become visible in screen');
    // }, { threshold: [0] });
  }, []);
  

  return <div className={styles.Column}>
      <animated.div className={styles['Column-Container']} style={p} ref={container}>
        <img src={image1} alt="alt" className={`${styles.image}`} />
        <img src={image2} alt="alt" className={`${styles.image}`} />
        <img src={image3} alt="alt" className={`${styles.image}`} />
      </animated.div>
  </div>;
}
