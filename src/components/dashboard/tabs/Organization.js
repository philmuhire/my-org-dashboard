import React from 'react'
import chartpng from "../../../assets/chart.png"
import Discover from '../windows/Discover'

const Organization = () => {
    return (
        <div className='flex-col justify-start'>
            <div className='flex justify-start gap-8 w-2/3'>
                <div className='flex flex-col justify-start'>
                    <h4 className='text-sm font-bold my-2 text-left'>Subscription</h4>
                    <button className='py-2 px-4 md:w-52 bg-indigo-500 text-white rounded-md'>Free</button>
                    <h4 className='text-sm font-bold mt-2 text-left'>Subscription</h4>
                    <h4 className='text-sm font-light text-left text-gray-500'>28 Mar 2022, 09:33:59</h4>
                    <button className='py-2 px-4 my-2 md:w-52 bg-white border-2 border-indigo-500 text-indigo-500 flex items-center text-white rounded-md'>
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                        <span className='ml-2 text-sm'>Buy Extra Operations</span>
                    </button>
                    <button className='py-2 flex justify-center mt-2 px-4 md:w-52 bg-white border-2 border-indigo-500 text-indigo-500 flex items-center text-white rounded-md'>
                        <span className='text-sm'>Upgrade</span>
                    </button>
                </div>
                <div className='flex-col flex-grow space-y-4'>
                    <div className='flex-grow'>
                        <div className='flex justify-between text-sm w-1/2 items-center'><h4 className='font-bold my-2 text-left'>Actice Scenarios</h4><span className='text-xs'>0/2</span></div>
                        <div className='w-1/2 h-3 bg-gray-300'></div>
                    </div>
                    <div className=''>
                        <div className='flex justify-between text-sm w-1/2 items-center'>
                            <div className='flex justify-start gap-3 text-sm items-center'>
                                <h4 className='font-bold my-2 text-left'>Operations</h4>
                                <svg class="w-3 h-3 bg-blue-700 text-blue-700 rounded-full" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <span className='text-xs'>Used 0% of 1000</span>
                        </div>
                        <div className='w-1/2 h-3 bg-gray-300'></div>
                    </div>
                    <img src={chartpng} className="w-full h-24" />
                </div>
            </div>

            <div className='h-1 my-3 bg-gray-200'></div>
            <h1 className='text-left text-xl font-light my-4'>Active Scenarios</h1>
            <div className='flex flex-col items-center gap-3'>
                
                <p className='text-gray-500'>There are no active scenarios in this organization</p>
                <div className="w-24 h-24">
                    <span className='flex items-center'> 
                            <svg class="w-20 h-20" fill="violet" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <svg class="w-10 h-10" fill="indigo" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
                    </span>
                </div>
                <h4 className='text-sm font-bold my-2 text-left'>Subscription</h4>
                    <p className='text-center text-xs w-72'>Eu duis quis esse fugiat labore anim.Eu duis quis esse fugiat labore anim.Eu duis quis esse fugiat labore anim.</p>
            </div>
            <Discover/>

        </div>
    )
}

export default Organization