import React from 'react';
import Sidebar from '../Sidebar'
import RightBox from '../rightBox'

const dashboard_data = {
    "box1": {
        title: "Electricity Consumption",
        reading: "54MW",
        changes: 18,
    },
    "box2": {
        title: "Carbon contribution",
        reading: "30T",
    }
}

const Electricity = () => {
    return (
        <div className="row m-auto" style={{ height: "54rem" }}>
            <div className="col-2 bg-white">
                <Sidebar />
            </div>
            <div className="col-10 bg-light">
                <RightBox data={dashboard_data} />
            </div>
        </div>
    )
}

export default Electricity;