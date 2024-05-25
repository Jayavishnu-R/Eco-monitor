import React from 'react'
import Barnew from './charts/barChart';
import DoughnutC from './charts/donutChart';
import HeatMap from './heatmap/App';

const StatBox = ({ heading, reading, changes }) => {
    return (
        <>
            {
                (heading === "Carbon contributions") ?
                    <div className="card col-5 my-4 rounded-4 p-auto border-0 bg-white mx-auto " style={{ height: "18rem" }}>
                        <DoughnutC />
                    </div> :
                    <div className="card col-5 my-4 rounded-4 p-auto border-0 bg-white mx-auto " style={{ height: "18rem" }}>
                        <div className="h5 mt-5 fw-bold">{heading}</div>
                        <div className="h2 m-auto mt-5 fw-bold display-3">{reading}</div>
                        {changes ? <div className="h6 m-auto mt-3 fw-semibold"><span className='text-danger'> {changes}%</span>since last month</div> : ""}
                    </div>
            }
        </>
    )
}
const BarBox = () => {
    return (
        <div className="col-11 mx-auto my-4 card rounded-4 border-0" style={{ height: '26rem' }}>
            <Barnew />
        </div>
    )
}

const RightBox = ({ data }) => {
    return (
        <>
            <div className="container">
                <span className='display-4'>
                    Hello, Admin
                </span>
            </div>

            <div className="row">

                <div className='col-6'>
                    <div className='row'>
                        <StatBox heading={data.box1.title} reading={data.box1.reading} changes={data.box1.changes} />
                        <StatBox heading={data.box2.title} reading={data.box2.reading} />
                    </div>
                    <div className="row">
                        <BarBox />
                    </div>
                </div>

                <div className="col-6 card border-0 mt-4" style={{ height: "47rem" }}>
                    <HeatMap />
                </div>
            </div>
        </>
    )
}

export default RightBox;