import React from 'react';

import About from './about.js';
import Button from '../buttons/action-button.js';
//import CloseButton from '../buttons/close-button.js';
import FormInput from './form-input.js';

class Modal extends React.Component {
	render() {
		return(
			<div className={this.props.modalData.isModalOpen}>
				<div className="modal-bg">
					<div className="modal-container">
						<div className ="modal-header">
							<Button value="X" type="close-button" action={this.props.closeAction} />
							<h2>{this.props.modalData.title}</h2>
						</div>
						<div className="modal-content">
							{ this.props.modalData.formModal ? (
								<FormInput />
							) : (
								<About />
							)}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Modal;