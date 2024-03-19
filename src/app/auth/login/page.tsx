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
    </main>
  )
}