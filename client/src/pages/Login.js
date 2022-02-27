import { useState } from 'react'


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function loginUser(event) {

    document.addEventListener("mousemove", loginUser);
    
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

    console.log(data)
  }

  return <div className="">
    <h1>Login</h1>
    <form onSubmit={loginUser}>
      <input type="Email" value={email} onChange={(e) => setEmail(e.target.value)}placeholder="email"/>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}placeholder="Password"/>
      <button type="submit" value="Register" >Submit</button>
    </form>
  </div>
}

export default Login;
