import { useState } from "react";
import SvgIcon from "../baseComponents/SvgIcons";
import { useDispatch } from "react-redux";
import { loaderAction, menuOpen } from "../../reducer/mainReducer";


const DashBoard = () => {
    const dashboard_menu = ["Dashboard", "Accounts", "Payroll", "Report", "Advisor", "Contacts"];
    const dispatch = useDispatch();
    function getwindowDimension() {
        const { innerWidth: width, innerHeight: height } = window;
        return { width, height };
    }
    const [windowDimension, setWindowDimension] = useState(getwindowDimension());

    const [selectedItem, setSelectedItem] = useState('Dashboard');

    const DashBoardClickHandler = (data) => {
        setSelectedItem(data);
        dispatch(loaderAction(true));
        const menu_list = document.getElementById('menu_mobile');
        if (menu_list) {
            menu_list.classList.add('d-none');
            menu_list.classList.remove('d-block');
            dispatch(menuOpen(true));
        }
    }

    return (
        <div className="dash_board">
            {
                windowDimension.width > 768 ?
                    <ul className="dash_menu">
                        <div>
                            {
                                dashboard_menu && Array.isArray(dashboard_menu) && dashboard_menu.map((data, i) => {
                                    return (

                                        <li key={i} onClick={() => DashBoardClickHandler(data)} className={selectedItem === data ? 'selected' : ''}>
                                            <span>
                                                <SvgIcon
                                                    iconType={data}
                                                />
                                            </span>
                                            {data}
                                        </li>
                                    )
                                })
                            }
                        </div>
                    </ul>
                    :
                    <div className="d-none menu_list p-o" id="menu_mobile">
                        <ul >
                            {
                                Array.isArray(dashboard_menu) && dashboard_menu.length > 0 && dashboard_menu.map((data, i) => {
                                    return (
                                        <li className="text-dark d-flex align-items-center justify-content-center my-2" onClick={() => DashBoardClickHandler(data)} key={i}>
                                            <span>{data}</span>
                                            <SvgIcon
                                                iconType={data}
                                                className={"text-dark mx-2"}
                                            />
                                        </li>


                                    )
                                })
                            }
                        </ul>
                    </div>
            }
        </div>
    )
}

export default DashBoard;