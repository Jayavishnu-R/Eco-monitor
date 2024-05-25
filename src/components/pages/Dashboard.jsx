import React from 'react';
import Sidebar from '../Sidebar'
import RightBox from '../rightBox'
import DoughnutC from '../charts/donutChart';

const dashboard_data = {
    "box1": {
        title: "Carbon emission",
        reading: "170T",
        changes: 20,
    },
    "box2": {
        title: "Carbon contributions"
    }
}
const Dashboard = () => {
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

export default Dashboard;