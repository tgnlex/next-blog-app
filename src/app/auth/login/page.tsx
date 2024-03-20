import Link from 'next/link';
export default function Login() {
  return (
    <main className="flex-col place-items-center">
      <h1>Login Form</h1>
      <form className="flex-col place-items-center">
        <label htmlFor="email">
          Email:
          <input id="email" type="email" name="email"/> 
        </label>
        <label htmlFor="password">
          Password:
          <input id="password" type="password" name="password" />
        </label>
        <input id="submit-btn" type="submit" value="Submit" />
      </form>
      <h1 className="text-4xl mt-10">Not a member?</h1>
      <Link className="text-2xl mt-5" href="/auth/register">Click here to Register</Link>
    </main>
  )
}