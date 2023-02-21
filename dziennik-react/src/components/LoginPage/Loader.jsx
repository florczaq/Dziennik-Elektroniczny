import React from 'react';
import ReactModal from 'react-modal';

const Loader = ({ showLoader }) => {

  const customStyles = {
    content: {
      position: "absolute",
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      width: "30%",
      height: '20%',
      transform: 'translate(-50%, -50%)',
      borderRadius: "50px"
    },
    overlay: {
      backgroundColor: 'transparent'
    }
  };

  React.useEffect(() => ReactModal.setAppElement(".login-container"), [])


  return (
    <ReactModal
      isOpen={showLoader}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className='modal-container'>
        <p>Logowanie...</p>
      </div>
    </ReactModal>
  );
}

export default Loader;
