import React, { } from 'react'
import Sidebar from './dashboard/sidebar/Sidebar'
import Tabs from './dashboard/tabs/Tabs'

const Dashboard = () => {
    return (
        <div className='flex justify-start'>
            <Sidebar />
            <div className='flex-grow justify-start px-7 py-4 '>
                <div className='flex justify-between'>
                    <h1 className='text-left text-3xl font-light my-4'>My Organization</h1>
                    <div className='flex justify-around gap-3'>
                        <button className='py-1 px-4 my-2 md:w-52 bg-white border-2 border-indigo-500 text-indigo-500 flex items-center text-white rounded-md'>
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>                            <span className='ml-2 text-sm'>Buy Extra Operations</span>
                        </button>
                        <button className='py-2 px-4 my-2 md:w-52 bg-indigo-500 border-2 border-indigo-500 text-white0 flex items-center text-white rounded-md'>
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                            <span className='text-sm'>Create a new Scenario</span>
                        </button>
                    </div>
                </div>
                <Tabs />
            </div>
        </div>
    )
}

export default Dashboard