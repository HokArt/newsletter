import iconSuccess from '../images/icon-success.svg'
import '../styles/success.css'

function Success() {

  return (
    <>
      <div className='success'>
        <div>
          <img src={iconSuccess} alt="icon success svg" />
          <h1>Thanks for<br/> subscribing!</h1>
          <p>
            A confirmation email has been sent to<br/>
            email account. Please open it and click<br/>
            the button inside to confirm your subscription
          </p>
        </div>
        <div>
          <button>Dismiss message</button>
        </div>
      </div>
    </>
  )
}

export default Success