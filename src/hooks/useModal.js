import withPortal from '@hoc/withPortal';
import React, { useState } from 'react';

const modalTypes = Object.freeze({
    fullyCustom: 0,
    withProps: 1,    
})

function useModal(type) {

    const [show, setShow] = useState(false);
    let ModalComponent = null

    switch (type) {
        case modalTypes.fullyCustom:
            ModalComponent = ({children}) => {
                if(!show) return <></>
                return <> {children} </>
            };
        break;

        case modalTypes.withProps:
            ModalComponent = ({children}) => {
                if(!show) return <></>
                return <> {children} </>
            };
        break;
    
        default: 
            ModalComponent = () => {
                return <> import modalTypes from useModal and add a Type to the Modal as parameter  </>
            };
        break;
    }
    
    
    

    return([
        [show, setShow],
        withPortal(ModalComponent)
    ])
}

export { modalTypes, useModal };