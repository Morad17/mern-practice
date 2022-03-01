import { useState } from 'react'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function registerUser(event) {

    document.addEventListener("mousemove", registerUser);

    const response = await fetch('http://localhost:1337/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        password,
      })
    })

    const data = await response.json()

    console.log(data)
  }

  return <div className="">
    <h1>Register</h1>
    <form onSubmit={registerUser}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}placeholder="Name"/>
      <input type="Email" value={email} onChange={(e) => setEmail(e.target.value)}placeholder="email"/>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}placeholder="Password"/>
      <button type="submit" value="Register" >Submit</button>
    </form>
  </div>
}

export default Register;
