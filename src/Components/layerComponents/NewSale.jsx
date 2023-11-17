import Tittle from "../baseComponents/Tittle";


const NewSale =({onClickHandler})=>{
    return (
        <div className="d-flex justify-content-between align-items-center">
            <Tittle
                tag={'h5'}
                title={"Invoice owned to you"}
            />
            <div className="d-flex align-items-center">
                <button className="btn text-success newsale-btn" data-toggle='modal' data-target='#uploadPopUp' onClick={(e)=>onClickHandler && onClickHandler({ target: { e } }, "onClick")}>
                    New Sales Invoices
                </button>
            </div>
        </div>
    )
}

export default NewSale;