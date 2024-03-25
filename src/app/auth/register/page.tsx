import '@/style/globals.css';
import '@/style/register.css';
import Header from '@/components/header';
import Loading from '@/app/loading';
import {Suspense} from 'react';
export default function Register() {
  const heading = "Create an Account!"
  return (
    <Suspense fallback={<Loading/>}>
      <div id="page">
        <Header text={heading}/>
        <main className="flex flex-col place-items-center place-content-center">
          <form id="signup" className=" mt-20 flex flex-col place-content-center place-items-center">
            <label htmlFor="username">
              Email:
              <input 
                id="email" 
                type="email" 
                name="email"
                placeholder="Enter your email" 
                required
              />
            </label>
            <label htmlFor="username">
              Username:
              <input 
              className="" 
              id="username" 
              type="text" 
              name="username" 
              placeholder="Enter new Username" 
              required />
            </label>
            <label htmlFor="password">
              Password:
              <input 
                id="password" 
                type="password" 
                name="password" 
                placeholder="Enter new password"
                required/>
            </label>
            <label htmlFor="verify_pass`">
              Verify password:
              <input 
                id="verify_pass" 
                type="password" 
                name="verify_pass" 
                placeholder="Re-Enter your password"
                required />
            </label>
            <label htmlFor="confirm">
              Confirm that you are not a robot:
              <input 
                id="confirm" 
                type="checkbox" 
                name="confirm" 
                required/>  
            </label>
            <input 
              id="submit-btn"
              className="mt-10"
              type="submit" 
              value="submit" />
          </form>
        </main>
    </div>
    </Suspense>
  )
}