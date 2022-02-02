import React, { useContext } from 'react';
import AppContext from "@contexts/AppContext"
import Menu from "@components/Menu"
import MyOrder from "@containers/MyOrder"
import menu from "@icons/icon_menu.svg"
import cart from "@icons/icon_shopping_cart.svg"
import logo from "@logos/logo_yard_sale.svg"
import useClickOutsideClose from '@hooks/useClickOutsideClose';
import styles from '@styles/Header.module.scss'

const Header = () => {
	const { 
		productsInCartCount,
		toggleOrdersSafeArea, toggleOrders, setToggleOrders
	} = useContext(AppContext);

	const [toggleUserMenuSafeArea, toggleUserMenu, seToggleUserMenu] = useClickOutsideClose()
	const [toggleMenuSafeArea, toggleMenu, seToggleMenu] = useClickOutsideClose([".HeaderMobile"])
	console.log()
	
	return (<>
		<nav className={styles.Header}> 
			<img src={menu} alt="menu" className="menu" ref={toggleMenuSafeArea} onClick={()=>seToggleMenu(!toggleMenu)}/>
			<div className="navbar-left">
				<img src={logo} alt="logo" className="nav-logo" />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" ref={toggleUserMenuSafeArea}
						onClick={()=>{seToggleUserMenu(!toggleUserMenu)}}>
						platzi@example.com
					</li>
					<li className="navbar-shopping-cart" ref={toggleOrdersSafeArea}
						onClick={()=>{setToggleOrders(!toggleOrders)}}>

						<img src={cart} alt="shopping cart" />
						{productsInCartCount > 0 &&
							<div> {productsInCartCount} </div>
						}
					</li>
				</ul>
				{toggleUserMenu && <Menu/>}
				{toggleOrders && <MyOrder setToggleOrders={setToggleOrders}/>}
			</div>
		</nav>
		<div className='HeaderOffset'></div>
		<div className={`HeaderMobile ${toggleMenu ? 'show': ''}`} >
			<h2> CATEGORIES </h2>
			<ul>
				<li>
					<a href="/">All</a>
				</li>
				<li>
					<a href="/">Clothes</a>
				</li>
				<li>
					<a href="/">Electronics</a>
				</li>
				<li>
					<a href="/">Furnitures</a>
				</li>
				<li>
					<a href="/">Toys</a>
				</li>
				<li>
					<a href="/">Others</a>
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
				<li onClick={()=>{seToggleUserMenu(!toggleUserMenu)}} 
					className="sign-out">

					<div> Sign out </div>
				</li>
				
			</ul>
		</div>
	</>);
}

export default Header;
