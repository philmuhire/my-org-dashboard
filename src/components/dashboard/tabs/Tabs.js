import React, { useState } from 'react'
import Organization from './Organization';
import Teams from './Teams';

const Tabs = () => {
    const [currentTab, setCurrentTab] = useState("organization")
    const [currentComp, setCurrentComp] = useState(Teams)

    const changeTab = (label) => {
        switch (label) {
            case "organization":
                setCurrentComp(Organization)
                break;
            case "teams":
                setCurrentComp(Teams)
                break;
            default:
                setCurrentComp(Organization)
                break;
        }
        setCurrentTab(label)
    }
    const tabs = ["organization", "teams", "users", "subscription", "payments", "installed apps"];
    return (
        <div>
            <ul className='flex justify-start list-none'>
                {tabs.map((tab, index) =>
                    <li className={`capitalize cursor-pointer hover:bg-indigo-100 border-b-4 px-5 py-2 text-gray-500 border-indigo-200 ${currentTab == tab ? "border-b-4 border-indigo-500 text-gray-800" : ""}`} onClick={() => changeTab(tab)} >
                        {tab}
                    </li>)}
            </ul>
            {currentComp}
        </div>
    )
}

export default Tabs