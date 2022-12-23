import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"


const config = {
    headers: {
        'Content-Type': 'application/json',
    },
}
export const authOptions = {
    pages: {
        signIn: "/"
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            callbacks: {
                async redirect() {
                    return '/'
                }
            },
            async authorize(credentials, req) {

                const res = await fetch('https://ujkp2xeahs.us-east-1.awsapprunner.com/api/v1/authenticate/login', {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" }
                })
                const user = await res.json()

                if (res.ok && user) {
                    return user
                }

                return null
            }
        })
    ],
}

export default NextAuth(authOptions)