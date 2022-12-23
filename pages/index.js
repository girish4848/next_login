import Head from 'next/head'
import {FaEnvelope, FaEye, FaEyeSlash} from "react-icons/fa";
import {MdLockOutline} from "react-icons/md";
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import {  useSelector } from 'react-redux'
import {  ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



  


export default function Home() {
  const router = useRouter()
  const auth = useSelector(state => state.auth)
  const [errors, setErrors] = useState('')
  const [isLoading, setIsLoading] = useState(false)
 
  

  const [authState, setAuthState] = useState({
    email: '',
    password: ''
  })


  const fieldOnchangeHandler = (e) => {
    setAuthState(old => ({ ...old, [e.target.id]: e.target.value }))
  }
  

  const submitHandler = async (e) => {
    e.preventDefault()
   
    signIn('credentials', {
      ...authState,
      redirect: false
    }).then(response => {
 
      if (!response.error) {
        toast.success("Login SuccessFul !")
        setTimeout(() => {
          router.push("/dashboard");}, 3000);
        
      } else {
        if (response.error == "CredentialsSignin") {
          toast.error("Username or Password is Wrong!")
        } else {
          toast.warn("You did not signup in this portal")
        }
      }
      
    }).catch(error => {
      console.log(error)
      toast.error(error)
      setTimeout(() => {
        toast.error("")
      }, 5000);
    })
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Login Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black flex w-full flex-1 flex-col items-center justify-center px-10 text-center ">
        <form className="bg-zinc-500 rounded-2xl shadow-2xl max-w-4xl mx-auto md:w-2/6  p-5 text-center"
        onSubmit={submitHandler}
        >
          <h1 className='underline text-3xl font-bold text-white mb-6'>
            Sign In
          </h1>
          
          <div className="bg-gray-200 w-full p-2 mb-3 text-left flex items-center rounded-2xl hover:bg-gray-100">
          
            <FaEnvelope className='text-black m-2 '></FaEnvelope>
            <input
              type="email"
              className=" bg-gray-200  py-1 px-2 outline-none flex-1 hover:bg-gray-100"
              id="email"
              value={authState.username}
              placeholder= 'E-Mail'
              autoFocus
              required
              onChange={fieldOnchangeHandler}
              
            />
          </div>
          <div className="bg-gray-200 w-full p-2 mb-3 text-left flex items-center rounded-2xl hover:bg-gray-100">
            <MdLockOutline className='text-black m-2'></MdLockOutline>
            <input
              type="password"
              className="bg-gray-200  py-1 px-2 outline-none flex-1 hover:bg-gray-100"
              id="password"
              value={authState.password}
              placeholder='Password'
              required
              onChange={fieldOnchangeHandler}
              
            />
           
                          
          </div>
          <div className='flex w-full mb-5 text-white justify-between'>
            <label className='flex items-center text-sm '>
              <input
                type="checkbox"
                id='remember'
                className='mr-1'
              />Remember Me</label>
              <a href="#" className='text-sm '>Forgot Password?</a>

          </div>
          <div className="mb-4 ">
            <button  className="border-2 border-white rounded-2xl bg-black text-white px-10 py-2 font-semibold hover:bg-blue-800"disabled={isLoading}>{isLoading ? 'Loading...' : 'Login'}</button>
            <ToastContainer />
          </div>
          <div className="mb-4 text-white ">
            Don&apos;t have an account? &nbsp;
            <span> </span>
            <Link href={`/register`} className="text-green-300">Sign up</Link>
          </div>
          
        </form>
      </main>
    </div>
  )
}


