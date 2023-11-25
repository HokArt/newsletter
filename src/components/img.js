import desktopSvg from '../images/desktop.svg'
import mobileSvg from '../images/mobile.svg'
import '../styles/img.css'

function Img() {

  return (
    <>
      <div className='img'>        
        <img src={desktopSvg} alt="desktop svg" className='img1' />
        <img src={mobileSvg} alt="mobile svg" className='img2' />
      </div>
    </>
  )
}

export default Img