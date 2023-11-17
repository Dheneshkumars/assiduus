import { useDispatch } from "react-redux";
import { loaderAction } from "../../reducer/mainReducer";
import SvgIcon from "./SvgIcons";

const MobileMenu = () => {
    const dashboard_menu = ["Dashboard", "Accounts", "Payroll", "Report", "Advisor", "Contacts"];
    const dispatch = useDispatch();
    const DashBoardClickHandler = () => {
        dispatch(loaderAction(true));
    }
    return (
        <div className="d-none menu_list p-o">
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
    )
}

export default MobileMenu;