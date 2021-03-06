import React from 'react';
import styles from "@styles/Modal.module.scss";
import withPortal from '@hoc/withPortal';
import { FaTimes } from "react-icons/fa";

function Modal({ title, children, setShowing, customClasses, modal }, props) {
    customClasses = customClasses ?? ""
    modal = modal ?? false

    console.log(customClasses);
    
    function hideIfClickedOut(event) {
        if(modal) return;
        if(event.target.matches(`.${styles['modal-dialog-container']}`))
            if(setShowing) setShowing(false)
    }

    return <>
         <div className={`${styles['modal-dialog-container']} ${customClasses}`} onClick={hideIfClickedOut} {...props}>
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

function ModalConfirm({title, message, confirmAction, setShowing, modal}) {
    return <>
        <div className={`${styles['modal-dialog-container']}`}>
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
                    <p className={styles.message}> {message} </p>
                    
                    <div className={styles.ctas}>
                        <button className={styles.secondary} onClick={()=>{setShowing(false)}}> Cancel </button>
                        <button className={styles.primary} onClick={confirmAction}> Connfirm </button>
                    </div>
                </div>
            </div>
        </div>
    </>
};


const ModalWithPortal = withPortal(Modal);
const ModalConfirmWithPortal = withPortal(ModalConfirm);

export { 
    ModalWithPortal, 
    ModalConfirmWithPortal 
};