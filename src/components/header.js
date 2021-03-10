import React from 'react';
import DesktopNav from '../components/desktopnav.js';
import MobileNav from '../components/mobilenav.js';

const Header = (props) => {
	return (
		<>
			<DesktopNav/>
			<MobileNav/>
		</>
	);
};

export default Header