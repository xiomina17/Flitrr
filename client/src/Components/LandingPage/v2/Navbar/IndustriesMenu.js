import React from 'react';
import { IndustriesMenuDiv } from './StyledComponents';
import Link from './Link';

function IndustriesMenu(props) {
	return (
		<IndustriesMenuDiv>
			<Link to='#' title='Retail and eCommerce'>
				Deliver more than just a transaction
			</Link>
			<Link to='#' title='Financial Services'>
				Make service your strongest asset
			</Link>
			<Link to='#' title='Travel and Hospitality'>
				Provide first class customer service
			</Link>
			<Link to='#' title='Marketplace'>
				Make both buyers and sellers happy
			</Link>
			<Link to='#' title='Higher Education'>
				Ensure the student experience is A+
			</Link>
			<Link to='#' title='Government'>
				Better serve your constituents
			</Link>
		</IndustriesMenuDiv>
	);
}

export default IndustriesMenu;
