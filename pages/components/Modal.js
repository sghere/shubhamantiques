import React from 'react';
import { ImCross } from 'react-icons/im';

const Modal = ({ children, ModalToggle, setModalToggle }) => {
  return (
    <div className={'modalContainer ' + (ModalToggle ? 'Show' : 'Hide')}>
      <div class="modalCard">
        <div className="modalHeader">
          <h1>login</h1>
          <div
            className="modalCloseBtn"
            onClick={() => setModalToggle(!ModalToggle)}
          >
            <ImCross />
          </div>
        </div>
        <div class="modalBody">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
