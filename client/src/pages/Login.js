import { useState } from 'react'


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function loginUser(event) {

    event.preventDefault()
    
    const response = await fetch('http://localhost:1337/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password,
      })
    })

    const data = await response.json()

    if(data.user) {
      alert('Login Successfull')
      window.location.href = '/dashboard'
    } else{
      alert('Check Your username and password')
    }
  }

  return <div className="">
    <h1>Login</h1>
    <form onSubmit={loginUser}>
      <input type="Email" value={email} onChange={(e) => setEmail(e.target.value)}placeholder="email"/>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}placeholder="Password"/>
      <button type="submit" value="Login" >Submit</button>
    </form>
  </div>
}

export default Login;
