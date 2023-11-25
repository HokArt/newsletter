import iconSvg from '../images/icon-list.svg'
import '../styles/information.css'


const Informations = () => {

  const arr = [
    {
      icon: iconSvg,
      info: 'Produuct discovery and building what matters',
      id: '1' 
    },
    {
      icon: iconSvg,
      info: 'Measuring to ensure updates are a success',
      id: '2'
    },
    {
      icon: iconSvg,
      info: 'And much more!',
      id: '3'
    }
  ]

  const formatedInfo = arr.map((element) => (
    <div className='info' key={element.id}>
      <img src={element.icon} alt="icon svg" />
      <p>{element.info}</p>
    </div>
  ))
  return (
    <>
      <div className='edem'>{formatedInfo}</div>
    </>
  )
}

export default Informations