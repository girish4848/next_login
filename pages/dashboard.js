import { useSession } from 'next-auth/react'
import React from 'react'
import ProtectedComponent from './protectedComponent'
import {signOut} from "next-auth/react"
import { useRouter } from "next/router"

export default function dashboard() {
    
    const { data, status } = useSession()

    if (status == "loading") {
        return <h1 className='min-h-screen text-black flex flex-1 flex-col items-center justify-center px-20 text-center bg-gray-300'>Loading...</h1>
    }

    const btnHandler = () => {
        setTimeout(() => {
            alert("TimeOut!!!")
          }, 5000);
    }
    const router = useRouter()
    const handlerSignout = (e) => {
        e.preventDefault()
        signOut()
    }

    return (
        <ProtectedComponent>
            
            
            <div className="min-h-full">
            <nav className="bg-gray-800">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                    <div className="flex-shrink-0">
                    <img className="h-8 w-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"/>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                        
                        <a href="#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Dashboard</a>

                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</a>

                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>

                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</a>

                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Reports</a>
                        </div>
                    </div>
                    </div>
                    <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                        <button type="button" className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">View notifications</span>
                        
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                        </svg>
                        </button>

                       
                        <div className="relative ml-3">
                        
                        <button onClick={handlerSignout} className=" rounded-2xl bg-black text-white px-10 py-2 font-semibold hover:bg-blue-800">Sign Out</button >   
            
                        </div>
                    </div>
                    </div>
                    
                </div>
                </div>

                
                <div className="md:hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                    
                    <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>

                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>

                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>

                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Reports</a>
                </div>
                <div className="border-t border-gray-700 pt-4 pb-3">
                    <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                        
                    </div>
                    <button type="button" className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">View notifications</span>
                        
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                        </svg>
                    </button>
                    </div>
                    <div className="mt-3 space-y-1 px-2">
                    <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Your Profile</a>

                    <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Settings</a>

                    <a href="#" onClick={handlerSignout} className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Sign out</a>
                    </div>
                </div>
                </div>
            </nav>

            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
                </div>
            </header>
            <main>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    
                
                <div className="px-4 py-6 sm:px-0 flex-col items-center justify-center">
                    
                    <div className="h-96 rounded-lg border-4 border-dashed border-gray-200 w-full flex-1 flex-col items-center justify-center">
                        <div className="grid grid-rows-3 grid-flow-col flex-1 flex-col items-center justify-center">
                            <div className="col-span-3 ..."><button onClick={btnHandler} className='bg-green-500 flex-col items-center justify-center text-white px-3 py-1 m-1 rounded-2xl'>Welcome to Dashboard</button></div>
                            <div className="col-span-2 ...">{JSON.stringify(data)}</div>
                            <div className="col-span-1 ...">{status}</div>
                        </div>
                        
                    </div>
                </div>
                
                </div>
            </main>
            <footer className='text-center p-3 bg-gray-300 border-solid border-2 border-white'>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Dashboard Page
                </a>
            </footer>
            </div>
        </ProtectedComponent>
    )
}

function Auth({ children }) {
    const { status } = useSession({ required: true })
    if (status === "loading") {
        return <div classNameName='min-h-screen text-black flex flex-1 flex-col items-center justify-center px-20 text-center bg-gray-300'>Loading...</div>
    }

    return children
}

