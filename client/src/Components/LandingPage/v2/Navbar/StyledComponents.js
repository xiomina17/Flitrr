import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;
`;

export const Logo = styled(Link)`
	font-size: 60px;
	letter-spacing: 1px;
	font-weight: 700;
	text-decoration: none;
	color: inherit;

	&:hover {
		color: inherit;
	}
`;

export const Dropdown = styled.p``;

export const Modal = styled.div`
	display: none; /* Hidden by default */
	position: fixed; /* Stay in place */
	z-index: 1000; /* Sit on top */
	left: 0;
	top: 0;
	width: 100%; /* Full width */
	height: 100%; /* Full height */
	overflow: auto; /* Enable scroll if needed */
`;

export const ModalContent = styled.div`
	background-color: #fefefe;
	margin: ${(props) => (props.pos ? props.pos.bottom + 20 : 0)}px auto auto
		${(props) => (props.pos ? props.pos.left : 0)}px; /* 15% from the top and centered */
	box-shadow: 0 0 9px rgba(0, 0, 0, 0.2);
	border-radius: 5px;
	width: 666px; /* Could be more or less, depending on screen size */
	position: relative;
`;

export const CloseButton = styled.span`
	color: #aaa;
	position: absolute;
	top: 5px;
	right: 5px;
	font-size: 28px;
	font-weight: bold;

	&:hover,
	&:focus {
		color: black;
		text-decoration: none;
		cursor: pointer;
	}
`;

export const ProductMenuDiv = styled.div`
	text-align: left;
	display: flex;
`;

export const SolutionsMenu = styled.div`
	border-right: 2px solid #aaa;
	flex: 1 0 50%;
`;

export const Header = styled.h3`
	text-transform: uppercase;
	font-size: 1rem;
	color: #6e6e6e;
	padding-top: 20px;
	padding-left: 20px;
`;

export const Underlined = styled.span`
	border-bottom: 1px solid #6e6e6e;
	display: inline-block;
	width: calc(100% - 20px);
`;

export const SidePanel = styled.div`
	background-color: #f3f3f3;
	flex: 1 0 50%;
	padding: 20px;
`;

export const StyledLink = styled(Link)`
	text-decoration: none;
	color: inherit;

	&:hover {
		color: inherit;
	}
`;

export const ListItem = styled.div`
	&:hover {
		border-left: 3px solid orangered;
	}
`;
