import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';

const Header = () => {
	const [isActive, setIsActive] = useState(false);
	const { isOpen, setIsOpen } = useContext(SidebarContext);
	const { itemAmount } = useContext(CartContext);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
		})
	}, []);

	return <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all lg:px-[80px]`}>
		<div className="container mx-auto flex items-center justify-between h-full">
			<Link to={'/'}>
				<div>
					<img
						className="h-[40px]"
						src={logo} alt="logo" />
				</div>
			</Link>
			<div
				className="cursor-pointer flex relative"
				onClick={() => setIsOpen(!isOpen)}>
				<BsBag className='text-2x1' />
				<div className="absolute -right-2 -bottom-2 text-[8px] 
                        w-[16px] h-[16px] bg-red-500 text-white rounded-full flex 
                        justify-center items-center">{itemAmount}</div>
			</div>
		</div>
	</header>
};

export default Header;