import React from 'react'

const LogoutBtn = () => {
    return (
        <div className='flex items-center justify-center'>
            <button className='text-red-500 w-5/6 flex items-center justify-center absolute bottom-4 transition delay-150 hover:outline-white hover:bg-red-500 hover:text-white rounded-md   font-bold px-4 py-2.5 bg-white' >
                <svg class="w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                <span>Logout</span>
            </button>
        </div>
    )
}

export default LogoutBtn