import DropDown from "../baseComponents/DropDown";
import Tittle from "../baseComponents/Tittle";


const Manage = (props) => {
    const { data } = props;
    return (
        <div className="d-flex justify-content-between align-items-center">
            <Tittle
                tag={'h5'}
                title={"Checking account"}
            />
            <div className="d-flex align-items-center">
                {
                    data && Array.isArray(data) && data.map((data, i) => {
                        return (
                            <DropDown
                                key={i}
                                data={data}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Manage;