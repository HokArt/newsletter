import { useState } from "react"
import '../styles/form.css'
import { useNavigate } from "react-router-dom"


const Form = () => {

  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate()
  

  function handleChange(e) {
    setEmail(e.target.value)
  }

  function validation(e) {
    e.preventDefault()
    const emailRegex = /^[a-zA-Z0-9._-]+[@]{1}[a-zA-Z0-9._-]+[.]{1}[a-z]{2,10}$/
    const isValidEmail = emailRegex.test(email)
    const errorColor = document.querySelector('input')
    if (email === '') {
      setMessage('Email required')
      errorColor.style.backgroundColor = '#fae7ef'
      errorColor.style.borderColor = 'red'
    } else if (isValidEmail) {
      setMessage('')
      navigate('/newsletter/success')
    } else {
      setMessage('Valide email required')
      errorColor.style.backgroundColor = '#fae7ef'
      errorColor.style.borderColor = 'red'
    }
  }

  return (
    <>
      <div className="form">
        <form onSubmit={validation}>
          <label htmlFor="email">Email adress</label>
          {message && <p>{message}</p>}
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            placeholder="xyz@company.com"
            onChange={handleChange}
            autoComplete="autocomplete"
          />
          <button>Subscribe to monthly newsletter</button>
        </form>
      </div>
    </>
  )
}

export default Form

