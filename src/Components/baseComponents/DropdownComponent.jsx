import React, { useState, useRef, useEffect } from 'react';
import SvgIcon from './SvgIcons';
import { useDispatch } from 'react-redux';
import { activeAccount, loaderAction } from '../../reducer/mainReducer';

const DropdownComponent = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);
    const dispatch = useDispatch();
    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleClickAccount = (e)=>{
        if(e.target.textContent){
            dispatch(activeAccount(e.target.textContent));
            setDropdownVisible(false);
            dispatch(loaderAction(true));
;        }
    }

    return (
        <div className='dropdown'>
            <div onClick={toggleDropdown}>
                <span>
                    <SvgIcon
                        iconType={'down_arrow'}
                    /></span>
            </div>

            {isDropdownVisible && (
                <div
                    ref={dropdownRef}
                    style={{
                        position: 'absolute',
                        top: '100%',
                        right: 0,
                        zIndex: 1,
                        opacity: 0.99,
                        background:"#fff",
                        width:"100px"
                    }}
                >
                    <ul className="list-unstyled">
                        <li className='pointer' value='hari' onClick={(e)=>handleClickAccount(e)}>Hari</li>
                        <li className='pointer' value='priya' onClick={(e)=>handleClickAccount(e)}>Priya</li>
                    </ul>
                </div>
            )}
        </div>
    );
};
// activeAccount
export default DropdownComponent;
