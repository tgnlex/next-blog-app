export default function Register() {
  return (
    <main className="flex-col place-items-center">
      <h1>Registration Form</h1>
      <form id="signup" className="flex-col place-items-center">
        <label htmlFor="username">
          Email:
          <input id="email" type="email" name="email"/>
        </label>
        <label htmlFor="username">
          Username:
          <input id="username" type="text" name="username" />
        </label>
        <label htmlFor="password">
          Password:
          <input id="password" type="password" name="password" />
        </label>
        <label htmlFor="password">
          Password:
          <input id="password" type="password" name="password" />
        </label> 
        <label htmlFor="verify_pass`">
          Verify password:
          <input id="verify_pass" type="password" name="verify_pass" />
        </label>
        <label htmlFor="confirm">
          Confirm that you are not a robot:
          <input id="confirm" type="checkbox" name="confirm" />  
        </label>
        <input id="submit-btn "type="submit" value="submit" />
      </form>
    </main>
  )
}