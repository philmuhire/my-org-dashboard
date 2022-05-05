import React, {  } from 'react'
import Sidebar from './dashboard/sidebar/Sidebar'
import Tabs from './dashboard/tabs/Tabs'

const Dashboard = () => {
    return (
        <div className='flex justify-start'>
            <Sidebar />
            <div className='flex-grow justify-start px-7 py-4 '>
                <h1 className='text-left text-3xl font-light my-4'>My Organization</h1>
                <Tabs/>
            </div>
        </div>
    )
}

export default Dashboard