import React, { useContext } from 'react';
import styles from '@styles/AmountModifier.module.scss';
import AppContext from '@contexts/AppContext';

export default function AmountModifier({product}) {
    const {
		changeAmount
	} = useContext(AppContext);

    return <div className={styles.AmountModifier}> 
        <div className={styles.Minus} onClick={()=>{changeAmount(product, -1);}}> - </div>
        <div className={styles.Amount}> {product.amount} </div>
        <div className={styles.Plus} onClick={()=>{changeAmount(product, +1);}}> + </div>
    </div>;
}
