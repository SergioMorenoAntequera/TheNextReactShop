
import Modal from '@components/Modal';
import withPortal from '@hoc/withPortal';
import React, { useState } from 'react';

const modalTypes = Object.freeze({
    fullyCustom: 0,
    withProps: 1,
    confirm: 2,
     
});

function useModal(type) {

    const [show, setShow] = useState(false);
    let ModalComponent = null;

    switch (type) {
        case modalTypes.fullyCustom:
            ModalComponent = ({children}) => {
                if(!show) return <></>;
                return <> {children} </>;
            };
        break;

        case modalTypes.withProps:
            ModalComponent = ( props ) => {
                if(!show) return <></>;
                return<>
                    <Modal setShowing={setShow} {...props} />
                </>;
            };
        break;

        case modalTypes.confirm:
            ModalComponent = ( props ) => {
                if(!show) return <></>;
                return<>
                    <Modal setShowing={setShow} {...props} >
                        <p> {props.message} </p>
                        
                        <div style={{display:"flex","justifyContent": "end"}}>
                            <button onClick={()=>{setDeleteDialogShow(false)}}> Cancel </button>
                            <button onClick={()=>{removeProductFromCart(product); setDeleteDialogShow(false)}}> Delete </button>
                        </div>

                    </Modal>
                </>;
            };
        break;
    
        default: 
            ModalComponent = () => {
                return <> import modalTypes from useModal and add a Type to the Modal as parameter  </>;
            };
        break;
    }
    
    
    

    return([
        [show, setShow],
        withPortal(ModalComponent)
    ]);
}

export { modalTypes, useModal };