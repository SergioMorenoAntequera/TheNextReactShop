import React, { useEffect, useRef, useState } from 'react';
 
export default function useClickOutsideClose(whiteList) {
    whiteList = whiteList ?? [];
    const [show, setShow] = useState(false);
    const ref = useRef(null);

	useEffect(() => {
		document.addEventListener("click", function(e){
			
            let clickedInSafeArea = whiteList.map(a=>e.target.closest(a)).filter(a=>a!==null).length !== 0
            let elementGotDeleted = !e.target.closest("body")

			if(!ref.current?.contains(e.target) && !clickedInSafeArea && !elementGotDeleted)
                setShow(false)
			
		});
	}, [ref]);


    return [ref, show, setShow]
}
