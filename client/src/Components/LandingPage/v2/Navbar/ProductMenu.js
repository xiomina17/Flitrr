import React from 'react';
import {
	ProductMenuDiv,
	SolutionsMenu,
	Header,
	SidePanel,
	StyledLink,
	Underlined,
	DropdownButton,
	CompareLink,
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
				<Header>
					<Underlined>Compare Flitrr vs</Underlined>
				</Header>
				<ul style={{ padding: 0, margin: 0 }}>
					<li style={{ listStyle: 'none', padding: 0, margin: 0 }}>
						<CompareLink to='#'>Zendesk</CompareLink>
					</li>
					<li style={{ listStyle: 'none', padding: 0, margin: 0 }}>
						<CompareLink to='#'>Salesforce Service Cloud</CompareLink>
					</li>
					<li style={{ listStyle: 'none', padding: 0, margin: 0 }}>
						<CompareLink to='#'>Freshdesk</CompareLink>
					</li>
					<li style={{ listStyle: 'none', padding: 0, margin: 0 }}>
						<CompareLink to='#'>Oracle</CompareLink>
					</li>
					<li style={{ listStyle: 'none', padding: 0, margin: 0 }}>
						<CompareLink to='#'>Gladly</CompareLink>
					</li>
					<li style={{ listStyle: 'none', padding: 0, margin: 0 }}>
						<CompareLink to='#'>Intercom</CompareLink>
					</li>
					<li style={{ listStyle: 'none', padding: 0, margin: 0 }}>
						<CompareLink to='#'>Gorgias</CompareLink>
					</li>
				</ul>
			</SidePanel>
		</ProductMenuDiv>
	);
}

export default ProductMenu;
