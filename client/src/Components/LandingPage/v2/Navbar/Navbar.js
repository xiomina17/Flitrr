import React, { useEffect, useRef, useState } from 'react';
import ProductMenu from './ProductMenu';
import { Wrapper, Logo, Dropdown, Modal, ModalContent, CloseButton, SolutionsMenu } from './StyledComponents';

function Navbar(props) {
	const productModalRef = useRef();
	const productBtn = useRef();
	const productClose = useRef();
	const [rect, setRect] = useState(null);

	useEffect(() => {
		productBtn.current.onmouseover = () => {
			productModalRef.current.style.display = 'block';
		};
		productClose.current.onclick = () => {
			productModalRef.current.style.display = 'none';
		};
		window.onclick = (e) => {
			if (e.target == productModalRef.current) {
				productModalRef.current.style.display = 'none';
			}
		};
		window.onscroll = (e) => {
			productModalRef.current.style.display = 'none';
			setRect(productBtn.current.getBoundingClientRect());
		};
		setRect(productBtn.current.getBoundingClientRect());
	}, []);
	useEffect(() => {
		console.log(rect?.top, rect?.right, rect?.bottom, rect?.left);
	});
	return (
		<div className={`container-fluid ${props.className}`}>
			<div className='row'>
				<div className='col'>
					<Wrapper>
						<Logo to='/Flitrr'>Flitrr</Logo>
						<Dropdown id='product-link' ref={productBtn}>
							Product
						</Dropdown>
					</Wrapper>
					<Modal id='product-modal' ref={productModalRef}>
						<ModalContent pos={rect}>
							<CloseButton ref={productClose}>&times;</CloseButton>
							<ProductMenu />
						</ModalContent>
					</Modal>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
