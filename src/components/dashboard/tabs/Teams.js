import React, { useEffect } from 'react'
import profile1 from "../../../assets/profile-picture-5.jpg"
import profile2 from "../../../assets/profile-picture-2.jpg"
import profile3 from "../../../assets/profile-picture-3.jpg"
import profile4 from "../../../assets/profile-picture-4.jpg"
import python from "../../../assets/python.png"
import php from "../../../assets/php.png"
import java from "../../../assets/java.svg"
import frontend from "../../../assets/fronted.png"








const Teams = () => {
  const teams = [
    {
      id: 1,
      name: "PHP developers",
      nOfUsers: 30,
      logo: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M9.585 11.692h4.328s2.432.039 2.432-2.35V5.391S16.714 3 11.936 3C7.362 3 7.647 4.983 7.647 4.983l.006 2.055h4.363v.617H5.92s-2.927-.332-2.927 4.282 2.555 4.45 2.555 4.45h1.524v-2.141s-.083-2.554 2.513-2.554zm-.056-5.74a.784.784 0 1 1 0-1.57.784.784 0 1 1 0 1.57z"></path><path d="M18.452 7.532h-1.524v2.141s.083 2.554-2.513 2.554h-4.328s-2.432-.04-2.432 2.35v3.951s-.369 2.391 4.409 2.391c4.573 0 4.288-1.983 4.288-1.983l-.006-2.054h-4.363v-.617h6.097s2.927.332 2.927-4.282-2.555-4.451-2.555-4.451zm-3.981 10.436a.784.784 0 1 1 0 1.57.784.784 0 1 1 0-1.57z"></path></svg>,

    },
    {
      id: 1,
      name: "Python developers",
      nOfUsers: 25,
      logo: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M9.585 11.692h4.328s2.432.039 2.432-2.35V5.391S16.714 3 11.936 3C7.362 3 7.647 4.983 7.647 4.983l.006 2.055h4.363v.617H5.92s-2.927-.332-2.927 4.282 2.555 4.45 2.555 4.45h1.524v-2.141s-.083-2.554 2.513-2.554zm-.056-5.74a.784.784 0 1 1 0-1.57.784.784 0 1 1 0 1.57z"></path><path d="M18.452 7.532h-1.524v2.141s.083 2.554-2.513 2.554h-4.328s-2.432-.04-2.432 2.35v3.951s-.369 2.391 4.409 2.391c4.573 0 4.288-1.983 4.288-1.983l-.006-2.054h-4.363v-.617h6.097s2.927.332 2.927-4.282-2.555-4.451-2.555-4.451zm-3.981 10.436a.784.784 0 1 1 0 1.57.784.784 0 1 1 0-1.57z"></path></svg>,

    },
    {
      id: 1,
      name: "JAVA developers",
      nOfUsers: 16,
      logo: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M9.585 11.692h4.328s2.432.039 2.432-2.35V5.391S16.714 3 11.936 3C7.362 3 7.647 4.983 7.647 4.983l.006 2.055h4.363v.617H5.92s-2.927-.332-2.927 4.282 2.555 4.45 2.555 4.45h1.524v-2.141s-.083-2.554 2.513-2.554zm-.056-5.74a.784.784 0 1 1 0-1.57.784.784 0 1 1 0 1.57z"></path><path d="M18.452 7.532h-1.524v2.141s.083 2.554-2.513 2.554h-4.328s-2.432-.04-2.432 2.35v3.951s-.369 2.391 4.409 2.391c4.573 0 4.288-1.983 4.288-1.983l-.006-2.054h-4.363v-.617h6.097s2.927.332 2.927-4.282-2.555-4.451-2.555-4.451zm-3.981 10.436a.784.784 0 1 1 0 1.57.784.784 0 1 1 0-1.57z"></path></svg>,

    },
    {
      id: 1,
      name: "Front developers",
      nOfUsers: 27,
      logo: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M9.585 11.692h4.328s2.432.039 2.432-2.35V5.391S16.714 3 11.936 3C7.362 3 7.647 4.983 7.647 4.983l.006 2.055h4.363v.617H5.92s-2.927-.332-2.927 4.282 2.555 4.45 2.555 4.45h1.524v-2.141s-.083-2.554 2.513-2.554zm-.056-5.74a.784.784 0 1 1 0-1.57.784.784 0 1 1 0 1.57z"></path><path d="M18.452 7.532h-1.524v2.141s.083 2.554-2.513 2.554h-4.328s-2.432-.04-2.432 2.35v3.951s-.369 2.391 4.409 2.391c4.573 0 4.288-1.983 4.288-1.983l-.006-2.054h-4.363v-.617h6.097s2.927.332 2.927-4.282-2.555-4.451-2.555-4.451zm-3.981 10.436a.784.784 0 1 1 0 1.57.784.784 0 1 1 0-1.57z"></path></svg>,

    }
  ]
  return (
    <div>
      <ul className='grid grid-cols-4 gap-4 my-4'>
        <li className='flex flex-col items-start space-y-2 border border-indigo-7'>
          <div className='flex flex-col items-start space-y-2 px-4 py-3'>
            <img src={python} width="80" height="80" />
            <h4 className='text-indigo-500 font-bold'>Python developers</h4>
            <p className='text-xs p-0 leading-1 text-indigo-500'> 30 users</p>
            <div class="flex mb-5 -space-x-4">
              <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src={profile1} alt="" />
              <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src={profile2} alt="" />
              <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src={profile3} alt="" />
              <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src={profile4} alt="" />
              <a class="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">+26</a>
            </div>
          </div>
          <div className='px-4 py-4 cursor-pointer bg-indigo-200 text-indigo-800 flex items-center justify-between w-full'>
            <p className='font-bold underline text-sm'>Learn more</p>
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
        </li>
        <li className='flex flex-col items-start space-y-2 border border-blue-700'>
          <div className='flex flex-col items-start space-y-2 px-4 py-3'>
            <img src={php} width="60" height="60" />
            <h4 className='text-indigo-500 font-bold'>Php developers</h4>
            <p className='text-xs p-0 leading-1 text-indigo-500'> 23 users</p>
            <div class="flex mb-5 -space-x-4">
              <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src={profile1} alt="" />
              <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src={profile2} alt="" />
              <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src={profile3} alt="" />
              <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src={profile4} alt="" />
              <a class="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">+19</a>
            </div>
          </div>
          <div className='px-4 py-4 cursor-pointer bg-blue-700 text-white flex items-center justify-between w-full'>
            <p className='font-bold underline text-sm'>Learn more</p>
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Teams