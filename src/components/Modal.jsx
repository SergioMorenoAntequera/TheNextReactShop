import React from 'react';
import styles from "@styles/Modal.module.scss";
import { FaTimes } from "react-icons/fa";

export default function Modal({ title, children, setShowing, customClasses, modal }) {
    customClasses = customClasses ?? ""
    modal = modal ?? false
    
    function hideIfClickedOut(event) {
        if(modal) return;
        if(event.target.matches(`.${styles['modal-dialog-container']}`))
            if(setShowing) setShowing(false)
    }

    return <>
         <div className={`${styles['modal-dialog-container']} ${customClasses}`} onClick={hideIfClickedOut}>
            <div className={styles['modal-dialog']}>
                {!!title &&
                    <div className={styles.header}>
                        <h3> {title} </h3>
                        {!modal && 
                            <span className={styles.x} onClick={()=>{setShowing(false)}}> <FaTimes className={styles.closeIcon}/> </span>
                        }
                    </div>
                }
                <div className={styles.body}>
                    { children }
                </div>
            </div>
        </div>
    </>;
}
