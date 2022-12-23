import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/router"

export default function NavBar() {
    const router = useRouter()
    const handlerSignout = (e) => {
        e.preventDefault()
        signOut()
    }
    return (
        <header className="flex  flex-col  justify-center py-2">
            <nav>
                <ul className="flex items-center  w-full">
                    <li>
                        <button onClick={handlerSignout} className="border-2 border-white rounded-2xl bg-black text-white px-10 py-2 font-semibold hover:bg-blue-800">Sign Out</button >
                    </li>
                    <li>
                        <Link className="border-2 border-white rounded-2xl bg-black text-white px-10 py-2 font-semibold hover:bg-blue-800" href="/">SignIn</Link>
                    </li>
                    <li>
                        <Link className="border-2 border-white rounded-2xl bg-black text-white px-10 py-2 font-semibold hover:bg-blue-800" href="/register">SignUp</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
