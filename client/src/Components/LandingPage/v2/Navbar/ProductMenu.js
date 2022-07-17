import React from 'react';
import {
	ProductMenuDiv,
	SolutionsMenu,
	Header,
	SidePanel,
	StyledLink,
	Underlined,
	DropdownButton,
} from './StyledComponents';
import Link from './Link';

function ProductMenu(props) {
	return (
		<ProductMenuDiv>
			<SolutionsMenu>
				<Header>
					<Underlined>Solutions</Underlined>
				</Header>
				<Link to='#' title='Customer Service'>
					Transform how customers and agents interact
				</Link>
				<Link to='#' title='Self-Service'>
					Reduce support volume at scale
				</Link>
				<Link to='#' title='Artificial Intelligence'>
					Maximize productivity with Flitrr IQ
				</Link>
				<Link to='#' title='CRM for Customer Service'>
					Minimize costs with a new CRM for customer service
				</Link>
			</SolutionsMenu>
			<SidePanel>
				<DropdownButton>Integrations</DropdownButton>
				<DropdownButton>Pricing</DropdownButton>
			</SidePanel>
		</ProductMenuDiv>
	);
}

export default ProductMenu;
