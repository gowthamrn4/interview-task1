import React from 'react';
import { PropTypes } from "prop-types";


function ModalBox({ children, close }) {
  return (
    <div className="modal d-flex justify-content-center overlay p-3" tabIndex="-1">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <button type="button" className="btn-close" onClick={close} data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
               { children }
            </div>
            </div>
        </div>
    </div>
  )
}

ModalBox.propTypes = {
    close: PropTypes.func,
    children: PropTypes.node
}

export default ModalBox 