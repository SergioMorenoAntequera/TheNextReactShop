import React, { useContext } from 'react';
import AppContext from "@contexts/AppContext";
import Menu from "@components/Menu";
import MyOrder from "@containers/MyOrder";
import menu from "@icons/icon_menu.svg";
import cart from "@icons/icon_shopping_cart.svg";
import logo from "@logos/logo_yard_sale.svg";
import useClickOutsideClose from '@hooks/useClickOutsideClose';
import styles from '@styles/Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
	const { 
		productsInCartCount,
		toggleOrdersSafeArea, toggleOrders, setToggleOrders
	} = useContext(AppContext);

	const [toggleUserMenuSafeArea, toggleUserMenu, seToggleUserMenu] = useClickOutsideClose();
	const [toggleMenuSafeArea, toggleMenu, seToggleMenu] = useClickOutsideClose([`.${styles.HeaderMobile}`]);
	
	return (<>
		<nav className={styles.Header}> 
			<div className={styles.menu} ref={toggleMenuSafeArea} onClick={()=>seToggleMenu(!toggleMenu)}>
				<Image src={menu} alt="menu"/>
			</div>
			
			<div className={styles.navbarLeft}>
				<Link href="/" passHref>
					<div className='logoContainer'>
						<Image src={logo} alt="logo" className={styles['nav-logo']} />
					</div>
				</Link>
				<ul>
					<li>
						<Link href="/">All</Link>
					</li>
					<li>
						<Link href="/">Clothes</Link>
					</li>
					<li>
						<Link href="/">Electronics</Link>
					</li>
					<li>
						<Link href="/">Furnitures</Link>
					</li>
					<li>
						<Link href="/">Toys</Link>
					</li>
					<li>
						<Link href="/">Others</Link>
					</li>
				</ul>
			</div>
			<div className={styles.navbarRight}>
				<ul>
					<li className={styles['navbar-email']} ref={toggleUserMenuSafeArea}
						onClick={()=>{seToggleUserMenu(!toggleUserMenu);}}>
						platzi@example.com
					</li>
					<li className={styles['navbar-shopping-cart']} ref={toggleOrdersSafeArea}
						onClick={()=>{setToggleOrders(!toggleOrders);}}>

						<Image src={cart} alt="shopping cart" />
						{productsInCartCount > 0 &&
							<div> {productsInCartCount} </div>
						}
					</li>
				</ul>
				{toggleUserMenu && <Menu/>}
				{toggleOrders && <MyOrder setToggleOrders={setToggleOrders}/>}
			</div>
		</nav>
		
		<div className={styles.HeaderOffset}></div>
		<div className={`${styles.HeaderMobile} ${toggleMenu ? styles.show: ''}`} >
			<h2> CATEGORIES </h2>
			<ul>
				<li>
					<Link href="/">All</Link>
				</li>
				<li>
					<Link href="/">Clothes</Link>
				</li>
				<li>
					<Link href="/">Electronics</Link>
				</li>
				<li>
					<Link href="/">Furnitures</Link>
				</li>
				<li>
					<Link href="/">Toys</Link>
				</li>
				<li>
					<Link href="/">Others</Link>
				</li>

				<div className='separator'>
					<div></div>
				</div>

				<li>
 					<div>
						My Orders
					</div>
				</li>

				<li>
					<div> My Account </div>
				</li>
				<li onClick={()=>{seToggleUserMenu(!toggleUserMenu);}} 
					className="sign-out">

					<div> Sign out </div>
				</li>
				
			</ul>
		</div>
	</>);
};

export default Header;
