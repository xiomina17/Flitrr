import React, { useEffect, useRef, useState } from 'react';
import IndustriesMenu from './IndustriesMenu';
import ProductMenu from './ProductMenu';
import { Wrapper, Logo, Dropdown, Modal, ModalContent, CloseButton, SolutionsMenu } from './StyledComponents';

function Navbar(props) {
	const productModalRef = useRef();
	const productBtn = useRef();
	const [productRect, setProductRect] = useState(null);
	const [productOpen, setProductOpen] = useState(false);

	const industriesBtn = useRef();
	const industriesModal = useRef();
	const [industriesRect, setIndustriesRect] = useState(null);
	const [industriesOpen, setIndustriesOpen] = useState(false);

	// Handling product modal
	useEffect(() => {
		productBtn.current.onmouseover = () => {
			productModalRef.current.style.display = 'block';
			setProductOpen(true);
		};
		window.onclick = (e) => {
			if (e.target == productModalRef.current) {
				productModalRef.current.style.display = 'none';
				setProductOpen(false);
			}
		};
		window.onscroll = (e) => {
			productModalRef.current.style.display = 'none';
			setProductRect(productBtn.current.getBoundingClientRect());
			setProductOpen(false);
		};
		setProductRect(productBtn.current.getBoundingClientRect());

		return () => {
			productBtn.current.removeEventListener('mouseover');
			window.removeEventListener('click');
			window.removeEventListener('scroll');
		};
	}, []);

	// Handling Industries modal
	useEffect(() => {
		industriesBtn.current.onmouseover = () => {
			if (productOpen) {
				productModalRef.current.style.display = 'none';
				setProductOpen(false);
			}
			industriesModal.current.style.display = 'block';
		};
		window.onclick = (e) => {
			if (e.target == industriesModal.current) {
				industriesModal.current.style.display = 'none';
			}
		};
		window.onscroll = (e) => {
			industriesModal.current.style.display = 'none';
			setIndustriesRect(industriesBtn.current.getBoundingClientRect());
		};
		setIndustriesRect(industriesBtn.current.getBoundingClientRect());

		return () => {
			industriesBtn.current.removeEventListener('mouseover');
			// window.removeEventListener('click', (e) => {
			// 	if (e.target == industriesModal.current) {
			// 		industriesModal.current.style.display = 'none';
			// 	}
			// });
			// window.removeEventListener('scroll', (e) => {
			// 	industriesModal.current.style.display = 'none';
			// 	setIndustriesRect(industriesBtn.current.getBoundingClientRect());
			// });
		};
	}, []);
	return (
		<div className={`container-fluid ${props.className}`}>
			<div className='row'>
				<div className='col'>
					<Wrapper>
						<Logo to='/Flitrr'>Flitrr</Logo>
						<Dropdown id='product-link' ref={productBtn}>
							Product
						</Dropdown>
						<Dropdown id='industries-link' ref={industriesBtn}>
							Industries
						</Dropdown>
					</Wrapper>
					<Modal id='product-modal' ref={productModalRef}>
						<ModalContent pos={productRect}>
							<ProductMenu />
						</ModalContent>
					</Modal>
					<Modal id='industries-modal' ref={industriesModal}>
						<ModalContent pos={industriesRect} width={400}>
							<IndustriesMenu />
						</ModalContent>
					</Modal>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
