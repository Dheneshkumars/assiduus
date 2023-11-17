import Tittle from "../baseComponents/Tittle";


const TotalCashFlow = () => {
    return (
        <div className="d-flex justify-content-between align-items-center">
            <Tittle
                tag={'h5'}
                title={"Total cash flow"}
            />
            <div className="d-flex align-items-center">
                <div>
                    <div className="box-light"></div>
                    <span>In</span>
                </div>
                <div>
                    <div className="box-dark"></div>
                    <span>Out</span>
                </div>
            </div>
        </div>
    )
}

export default TotalCashFlow;