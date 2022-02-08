
import { ModalWithPortal, ModalConfirmWithPortal } from '@components/Modal';
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
                if(!show) return <> </>;
                return <> {children} </>;
            };
        break;

        case modalTypes.withProps:
            ModalComponent = ( props ) => {
                if(!show) return <> </>;
                return <ModalWithPortal setShowing={setShow} {...props} />;
            };
        break;

        case modalTypes.confirm:
            ModalComponent = ( props ) => {
                if(!show) return <> </>;
                return <ModalConfirmWithPortal setShowing={setShow} {...props}/>;
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
        ModalComponent
    ]);
}

export { modalTypes, useModal };