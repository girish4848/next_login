import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import {CgProfile} from "react-icons/cg";
import {FaEnvelope} from "react-icons/fa";
import {MdLockOutline} from "react-icons/md";

export default function register() {
    const router = useRouter()
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })
    const [isLoading,setIsLoading]=useState(false)

    const fieldOnchangeHandler = (e) => {
        setUser(old => ({ ...old, [e.target.id]: e.target.value }))
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        let res = await userRegister(user)
        setIsLoading(false)
        if (res) {
            router.push('/')
        } else {
            console.log('register error');
        }
    }

    const userRegister = async (data) => {

        try {
            const res = await fetch('https://ujkp2xeahs.us-east-1.awsapprunner.com/api/v1/authenticate/register', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json" }
            })

            const user = await res.json()

            if (res.ok && user) {
                console.log("successfully register");
                return true
            } else {
                console.log("Already Exist");
                return false
            }
        } catch (error) {
            console.log(error + "register failed");
        }

    }

    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
            <Head>
                <title>Signup page</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-black flex w-full flex-1 flex-col items-center justify-center px-10 text-center ">
                <form
                    className="bg-zinc-500 rounded-2xl shadow-2xl max-w-4xl mx-auto md:w-2/6  p-5 text-center"
                    onSubmit={submitHandler}
                >
                    <h1 className='underline text-3xl font-bold text-white mb-6'>
                        Sign Up
                    </h1>
                    <div className="bg-gray-200 w-full p-2 mb-3 text-left flex items-center rounded-2xl hover:bg-gray-100">
                    
                        <CgProfile className='text-black m-2 '></CgProfile>
                        <input
                            type="text"
                            className="bg-gray-200  py-1 px-2 outline-none flex-1 hover:bg-gray-100"
                            id="name"
                            placeholder='Name'
                            autoFocus
                            required
                            onChange={fieldOnchangeHandler}
                        />
                    </div>
                    <div className="bg-gray-200 w-full p-2 mb-3 text-left flex items-center rounded-2xl hover:bg-gray-100">
                        {/* <label htmlFor="email">Email</label> */}
                        <FaEnvelope className='text-black m-2 '></FaEnvelope>
                        <input
                            type="email"
                            className="bg-gray-200  py-1 px-2 outline-none flex-1 hover:bg-gray-100"
                            id="email"
                            placeholder='E-Mail'
                            required
                            onChange={fieldOnchangeHandler}
                        />
                    </div>
                    <div className="bg-gray-200 w-full p-2 mb-3 text-left flex items-center rounded-2xl hover:bg-gray-100">
                        {/* <label htmlFor="password">Password</label> */}
                        <MdLockOutline className='text-black m-2'></MdLockOutline>
                        <input
                            type="password"
                            className="bg-gray-200  py-1 px-2 outline-none flex-1 hover:bg-gray-100"
                            id="password"
                            placeholder='Password'
                            required
                            onChange={fieldOnchangeHandler}
                        />
                    </div>
                    <div className="mb-4">
                        <button className="primary-button border-2 border-white rounded-2xl bg-black text-white px-10 py-2 font-semibold hover:bg-blue-800"disabled={isLoading}>{isLoading ? 'Loading...' : 'Sign Up'}</button>
                    </div>
                    <div className="mb-4 text-white">
                        Already have an account?    
                        <span> </span>
                        <Link href={`/`} className=" text-green-300">Sign in</Link>
                    </div>
                </form>
            </main>
        </div>
    )
}
