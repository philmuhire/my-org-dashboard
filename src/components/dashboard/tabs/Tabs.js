import React, { useState } from 'react'
import Organization from './Organization';
import Teams from './Teams';

const Tabs = () => {
    const [currentTab, setCurrentTab] = useState(Organization)
    const tabs = ["organization", "teams", "users", "subscription", "payments", "installed apps"];
    return (
        <div>
            <ul className='flex justify-start list-none'>
                {tabs.map((tab, index) => <li className={`capitalize border-b-4 px-5 py-2 text-gray-500 border-indigo-200 ${index == 0 ? "border-b-4 border-indigo-500 text-gray-800" : ""}`} >{tab}</li>)}
            </ul>
            {currentTab}
        </div>
    )
}

export default Tabs