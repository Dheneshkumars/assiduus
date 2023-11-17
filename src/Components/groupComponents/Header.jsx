import icon from '../../images/icon.webp';
import SvgIcons from '../baseComponents/SvgIcons';
import girl from '../../images/girl.jpg';
import boy from '../../images/boy.jpg';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import DropdownComponent from '../baseComponents/DropdownComponent';
import { menuOpen } from '../../reducer/mainReducer';

const Header = () => {
    const [search, setSearch] = useState(true);
    const reduxData = useSelector(state => state.mainReducer);
    const dispatch = useDispatch();
    const onClickHandler = (e) => {
        e.target ? setSearch(false) : setSearch(true);
    }

    const handleClickOutside = (event) => {
        const inputBox = document.getElementById('search_box');
        if (inputBox.value) {
            setSearch(false);
        }
        else{
            setSearch(true);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    function getwindowDimension() {
        const { innerWidth: width, innerHeight: height } = window;
        return { width, height };
    }
    const [windowDimension, setWindowDimension] = useState(getwindowDimension());
    const [openmenu, setOpenmenu] = useState(true)
    const MenuClickHandler = (e) => {
        setOpenmenu(false);
        const menu_list = document.getElementById('menu_mobile');
        if (openmenu) {
            menu_list.classList.add('d-block');
            menu_list.classList.remove('d-none');
            dispatch(menuOpen(false));
        }
    }
    const CloseClickHandle = (e) => {
        setOpenmenu(true);
        dispatch(menuOpen(true));
        const menu_list = document.getElementById('menu_mobile');
        if (!openmenu) {
            menu_list.classList.add('d-none');
            menu_list.classList.remove('d-block');
        }
    }
    return (
        <header>
            {
                windowDimension.width < 768 ?
                    <div className='px-2'>
                        {
                            (reduxData.open || openmenu) ? <SvgIcons
                                iconType={'menu'}
                                menuClickHandle={(e) => { MenuClickHandler(e) }}
                            />
                                :
                                <SvgIcons
                                    iconType={'close'}
                                    menuCloseHandle={(e) => { CloseClickHandle(e) }}
                                />
                        }
                    </div>
                    :
                    <h3 className="dash_title">
                        <img src={icon} className="icon_img" alt="icon" />
                        <span className='head_title'>ASSIDUUS</span>
                        <span className='top_head'>Tm</span>
                    </h3>
            }
            <div className='account_head'>
                <span className='search_input_parent'>
                    <input type='serach' onClick={(e) => onClickHandler(e)} className='search_input' id='search_box' />
                    <span className='search_icon'>
                        {
                            search ?
                                <SvgIcons
                                    iconType={'search'}
                                />
                                :
                                null
                        }
                    </span>
                </span>
                <span>
                    <SvgIcons
                        iconType={'bell'}
                    />
                </span>
                <span className='d-flex'>
                    <img src={reduxData.activeAccount == "Hari" ? boy : girl} className='acc_img' alt="girl" />
                    <DropdownComponent />
                </span>
            </div>
        </header>
    )
}

export default Header;