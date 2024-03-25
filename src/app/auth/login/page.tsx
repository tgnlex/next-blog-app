import {Suspense} from 'react';
import Loading from '@/app/loading';
import Header from '@/components/header';
import Link from 'next/link';
import '@/style/globals.css';
import '@/style/login.css';

export default function Login() {
  let heading = "Login!"
  return (
    <Suspense fallback={<Loading/>}>
    <div id="page">
        <Header text={heading} />
        <main className="flex flex-col place-items-center">
          <form id="login-form" 
          className="mt-20 flex flex-col place-items-center">
            <label htmlFor="email">
              Email:
              <input id="email" 
                    type="email" 
                    name="email" 
                    placeholder="Enter your Email"
                    required /> 
            </label>
            <label htmlFor="password">
              Password:
              <input id="password" 
                    type="password" 
                    name="password" 
                    required />
            </label>
            <input id="submit-btn" 
                   type="submit" 
                   value="Submit" />
          </form>
          <h1 className="text-4xl mt-20">Not a member?</h1>
          <Link id="register-link" className="text-2xl mt-5" href="/auth/register">
            Click here to Register
            </Link>
        </main>
      </div>
    </Suspense>
  )
}