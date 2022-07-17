import React, { useState } from 'react';
import { ListItem, StyledLink } from './StyledComponents';

function Link({ title, children, to }) {
	const [hovered, setHovered] = useState(false);
	const linkTitleStyles = {
		fontSize: '1.2rem',
		fontWeight: 700,
		marginBottom: '.3rem',
	};
	const linkSubTitleStyles = {
		fontSize: '.8rem',
		fontWeight: 400,
		marginBottom: '.9rem',
	};
	const linkStyles = {
		padding: hovered ? '0 20px 0 17px' : '0 20px',
	};
	return (
		<ListItem onMouseOver={() => setHovered(true)} onMouseOut={() => setHovered(false)}>
			<StyledLink to={to}>
				<div style={linkStyles}>
					<div style={linkTitleStyles}>{title}</div>
					<div style={linkSubTitleStyles}>{children}</div>
				</div>
			</StyledLink>
		</ListItem>
	);
}

export default Link;
