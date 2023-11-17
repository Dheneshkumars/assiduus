import { useDispatch, useSelector } from "react-redux";
import HistogramChart from "../baseComponents/HistogramChart";
import WaveDataVisual from "../baseComponents/waveDataVisual";
import Manage from "../layerComponents/Manage";
import { useEffect, useState } from "react";
import { loaderAction } from "../../reducer/mainReducer";
import NewSale from "../layerComponents/NewSale";
import TotalCashFlow from "../layerComponents/TotalCashFlow";
import HistogramFlow from "../baseComponents/HistogramFlow";
import AccountWatchlistChart from "../baseComponents/AccountWatchList";
import AccountWatchLayer from "../layerComponents/AccountWatchLayer"


const ContentPage = ({onClickHandler}) => {
    const [curve, setCurve] = useState([]);
    const [manage, setManageData] = useState([]);
    const [flow,setFlow] = useState([])
    const reduxData = useSelector(state => state.mainReducer);
    const dispatch = useDispatch();
    const loader = reduxData && reduxData.loader;
    const activeAccount = reduxData && reduxData.activeAccount;
  
    // chart data
    const curveData = [
        {
            name: "Priya",
            range: [70, 80, 125, 140, 125, 80, 70, 80, 125, 140, 125, 80]

        },
        {
            name: "Hari",
            range: [35, 50, 85, 120, 145, 80, 70, 80, 125, 140, 125, 80]
        }
    ]
    const manageData = [
        {
            selected: "Manage",
            option: [
                "Month"
            ]
        },
        {
            selected: "January",
            option: [
                "February",
                "March",
                "April",
                "May",
                "June"
            ]
        }
    ]
    const histogram = [
        {
            name: "Priya",
            bar: [5, 12, 8, 7, 10, 5, 6]
        },
        {
            name: "Hari",
            bar: [3, 4, 10, 7, 5, 6, 2]
        }
    ]
    const flowData = [
        {
            name: "Priya",
            bar: [8, 12, 2, 7, 10, 5, 6]
        },
        {
            name: "Hari",
            bar: [6, 8, 10, 7, 5, 4, 8]
        }
    ]
    useEffect(() => {
        setTimeout(() => {
            dispatch(loaderAction(false));
        }, 1000);
        if (activeAccount) {
            Array.isArray(curveData) && curveData.filter(data => data.name == activeAccount && setCurve(data.range));
            Array.isArray(histogram) && histogram.filter(data => data.name == activeAccount && setManageData(data.bar));
            Array.isArray(flowData) && flowData.filter(data => data.name == activeAccount && setFlow(data.bar));
        }
    }, [loader, activeAccount])

    return (
        loader ?
            null
            :
            <div className="content_page">
                <section className="content_page_parent row">
                    <div className="chart-container">
                        <div className="manage">
                            <Manage
                                data={manageData}
                            />
                        </div>
                        <div className="curve-chart">
                            <WaveDataVisual
                                data={curve}
                            />
                        </div>

                    </div>
                    <div className="chart-container">
                        <div className="manage">
                            <NewSale
                                onClickHandler={onClickHandler}
                            />
                        </div>
                        <HistogramChart
                            data={manage}
                        />
                    </div>
                    <div className="chart-container">
                        <div className="manage">
                            <TotalCashFlow />
                        </div>
                        <HistogramFlow
                            data={flow}
                        />
                    </div>
                    <div className="chart-container">
                        <div className="manage">
                            <AccountWatchLayer />
                        </div>
                        <AccountWatchlistChart />
                    </div>
                </section>
            </div>

    )
}

export default ContentPage;