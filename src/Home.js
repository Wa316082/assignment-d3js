import React from 'react'
import Dashbord from './components/contents/dashbord/Dashbord'
import Sidebar from './components/sidebar/Sidebar'

const Home = () => {
    return (
        <div className=' flex items-start justify-between'>
            <div className='w-1/5 h-screen overflow-y-scroll  scrollbar-thin shadow-md scrollbar-thumb-gray-400 bg-sidebar'>
                <Sidebar />
            </div>
            <div className='w-4/5 '>
                <Dashbord />
            </div>
        </div>
    )
}

export default Home