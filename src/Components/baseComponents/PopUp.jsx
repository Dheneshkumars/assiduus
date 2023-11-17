import React from 'react';
import Modal from 'react-modal';
import Tittle from './Tittle';

const PopUpModal= ({ isOpen, onRequestClose, children, onRequestSave }) => {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
            width: "80%",
            maxWidth: "500px",
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
    };

    // Update the width property based on screen width
    const updateModalWidth = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth <= 600) {
            customStyles.content.width = '90%';
        } else {
            customStyles.content.width = '80%';
        }
    };

    // Attach the event listener to update modal width on window resize
    React.useEffect(() => {
        updateModalWidth();
        window.addEventListener('resize', updateModalWidth);
        return () => {
            window.removeEventListener('resize', updateModalWidth);
        };
    }, []);

    return (
        <Modal
            isOpen={isOpen}
            contentLabel="Modal"
            style={customStyles}
        >
            <div>
                <Tittle tag='h4' title='Upload File:' />
                <div className='mb-2'>
                    {children}
                </div>
                <button onClick={onRequestClose} className='btn btn-outline-primary mx-1'>Close</button>
                <button onClick={onRequestSave} className='btn btn-outline-success mx-1'>Save</button>
            </div>
        </Modal>
    );
};

export default PopUpModal
