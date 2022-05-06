import React from 'react'
import circlesvg from '../../../assets/circle-outline-svgrepo-com.svg'

const Discover = () => {
    return (
        <div className='fixed bottom-3 right-3 w-72 shadow-lg border border-gray-200'>
            <div className='bg-indigo-500 py-4 px-3 text-gray-100 w-full flex justify-between items-center rounded'>
                <h4 className='font-bold text-sm '>Discover</h4>
                <svg class="w-4 h-4" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
            <h3 className='font-bold text-left px-3 py-4 text-gray-700'>Let's get started 🚀</h3>
            <p className='text-left text-sm px-3 text-gray-600'>Click on each item to explore how Make works</p>
            <span className='text-xs text-right'>45%</span>
            <div className='px-2'>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div class="bg-blue-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
                </div>
            </div>
            <ul className='bg-white'>
                <li className='flex space-x-2 items-center'>
                    <svg class="w-6 h-6" fill="green" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <div>
                        <h4 className='text-sm font-bold mt-2 text-left text-gray-500 line-through'>Subscription</h4>
                        <p className='text-sm -p-2 text-left text-gray-400 line-through'>Verify your email address</p>
                    </div>
                </li>
                <li className='flex pl-1 space-x-2 items-center'>
                    <img src={circlesvg} className='w-4 h-4' />
                    <div>
                        <h4 className='text-sm font-bold mt-2 text-left text-gray-500 line-through'>Subscription</h4>
                        <p className='text-sm -p-2 text-left text-gray-400 line-through'>Verify your email address</p>
                    </div>
                </li>
                <li className='flex pl-1 space-x-2 items-center'>
                    <img src={circlesvg} className='w-4 h-4' />
                    <div>
                        <h4 className='text-sm font-bold mt-2 text-left text-gray-400 line-through'>Subscription</h4>
                        <p className='text-sm -p-2 text-left text-gray-300 line-through'>Verify your email address</p>
                    </div>
                </li>
                <li className='flex pl-1 space-x-2 items-center'>
                    <img src={circlesvg} className='w-4 h-4' />
                    <div>
                        <h4 className='text-sm font-bold mt-2 text-left text-gray-300 line-through'>Subscription</h4>
                        <p className='text-sm -p-2 text-left text-gray-200 line-through'>Verify your email address</p>
                    </div>
                </li>
            </ul>
            <p className='text-gray-400 text-right text-xs py-3 px-2 '>Dismiss checklist</p>
            <hr />
            <ul>
                <li className='flex items-center px-2 text-gray-700'>
                    <svg class="w-6 h-6" fill="white" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                    <p className='text-sm pl-3 py-3'>Getting started videos</p>
                </li>
                <li className='flex items-center px-2 text-gray-700'>
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <div className='w-full flex justify-between items-center'>
                        <p className='text-sm pl-3 py-3'>help</p>
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    </div>
                </li>
                <li className='flex items-center px-2 text-gray-700'>
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <p className='text-sm pl-3 py-3'>Contact Customer Care</p>
                </li>
            </ul>
        </div>
    )
}

export default Discover