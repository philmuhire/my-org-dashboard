import React from 'react'
import SidebarLink from './SidebarLink'
import SidebarLinks from './SidebarLinks'
import LogoutBtn from '../../buttons/LogoutBtn'

const Sidebar = () => {
  return (
    <aside className='relative fixed h-screen overflow-y-auto w-60 h-screen bg-gradient-to-b from-purple-500 to-indigo-900 px-2'>
      <div className='flex justify-around h-16'>
        <svg xmlns="http://www.w3.org/2000/svg" className='py-2.5 px-5' style={{ fill: "white" }}>
          <path d="M21.579 6.855c.14-.465 0-.806-.662-.806h-2.193c-.558 0-.813.295-.953.619 0 0-1.115 2.719-2.695 4.482-.51.513-.743.675-1.021.675-.139 0-.341-.162-.341-.627V6.855c0-.558-.161-.806-.626-.806H9.642c-.348 0-.558.258-.558.504 0 .528.79.65.871 2.138v3.228c0 .707-.127.836-.407.836-.743 0-2.551-2.729-3.624-5.853-.209-.607-.42-.852-.98-.852H2.752c-.627 0-.752.295-.752.619 0 .582.743 3.462 3.461 7.271 1.812 2.601 4.363 4.011 6.687 4.011 1.393 0 1.565-.313 1.565-.853v-1.966c0-.626.133-.752.574-.752.324 0 .882.164 2.183 1.417 1.486 1.486 1.732 2.153 2.567 2.153h2.192c.626 0 .939-.313.759-.931-.197-.615-.907-1.51-1.849-2.569-.512-.604-1.277-1.254-1.51-1.579-.325-.419-.231-.604 0-.976.001.001 2.672-3.761 2.95-5.04z">
          </path>
        </svg>
      </div>
      <div className='text-gray-200 flex justify-start items-center '>
        <h4 className='uppercase text-left text-gray-200 text-sm pl-6 pr-4'>my organization</h4>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
      </div>
      <SidebarLink name={"Organization"} url={"/organization"} svg={<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>} />
      <div className='text-gray-200 flex justify-start items-center '>
        <h4 className='uppercase text-left text-gray-200 text-sm pl-6 pr-4'>my team</h4>
      </div>
      <SidebarLinks />
      <hr className='text-red-300 my-2'/>
      <LogoutBtn/>
    </aside>
  )
}

export default Sidebar