import React from 'react';
import Topbar from '../../topbar/Topbar';
import Chart from '../Chart';
import Graphs from "../Graphs";
import InfoTable from "../InfoTable";

const Dashbord = () => {
    return (
        <>
            <Topbar />
            <div className='mt-20 px-6 w-full'>
                <div className=' w-full  shadow-lg rounded-lg flex justify-between  gap-2 mb-4'>

                    <Graphs />
                    <div className='w-1/4  bg-white rounded-md'>
                        <Chart />
                    </div>

                </div>

                <InfoTable />
                
            </div>


        </>
    )
}

export default Dashbord