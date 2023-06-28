import { useState, useEffect, useRef } from 'react'
import img1 from './assets/escritorio.svg'
import arrow from './assets/arrow.svg'
import img2 from './assets/mobile.svg'
import img3 from './assets/portal.svg'
import img4 from './assets/drawer.svg'
import img6 from './assets/polyline.svg'
import img5 from './assets/eyeinpic.svg'
import videoone from './assets/finaal.mp4'
import phoneVid from './assets/phone.mp4'
import animationVid from './assets/animated.mp4'
import buyingvid from './assets/buying.mp4'
import socialsvid from './assets/social.mp4'


import './App.scss'



const ContactForm = () => {

  return (
    <div className='formholder Snapper' netlify>
      <h2>Ponete en contacto con nosotros!</h2>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={handleMessageChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

function App() {
  const [slot, setSlot] = useState(1)
  const ref = useRef(null)

  useEffect(() => {
    console.log('slot', slot)
  }, [slot])

  function handleNavigator(direction) {
    if (direction === true) {
      if (slot < 4) {
        setSlot(slot + 1)
      }
    } else {
      if (slot > 1) {
        setSlot(slot - 1)
      }
    }
  }

  const names = ['E-shops', 'Portfolios', 'Landing Pages', 'Apps']

  return (
    <div className="App">
      <div className="Snapper"></div>
      <div className="videoHolder">
        <video src={videoone} frameBorder="0" className='backgroundvideo' disablePictureInPicture autoPlay loop muted></video>
        <h1>Soluciones personalisadas para tu negocio</h1>
      </div>
      <img src={arrow} alt="arrow" className='Intro_arrow' />
      <div ref={ref} className='Description '>
        <div className="Desc Snapper">
          <div className="Desc_spacer"></div>
          <video className='Desc_video' src={phoneVid} disablePictureInPicture autoPlay loop muted></video>
          <div className="Desc_content">
            <div className='Desc_imgcont'>
              <img src={img1} alt="" className='Desc_img' />
              <img src={img2} alt="" className='Desc_img' />
              <img src={img3} alt="" className='Desc_img' />
            </div>
            <h3>Paginas aptas para cualquier dispositivo</h3>
          </div>
        </div>
        <div className="Desc2 Snapper">
          <div className="Desc_content">
            <div className='Desc_imgcont'>
              <img src={img4} alt="" className='Desc_img' />
              <img src={img5} alt="" className='Desc_img' />
              <img src={img6} alt="" className='Desc_img' />
            </div>
            <h3>Animaciones personalisadas</h3>
          </div>
          <video className='Desc_video' src={animationVid} disablePictureInPicture autoPlay loop muted></video>
          <div className="Desc_spacer"></div>
        </div>
        <div className="Desc Snapper">
          <div className="Desc_spacer"></div>
          <video className='Desc_video' src={socialsvid} disablePictureInPicture autoPlay loop muted></video>
          <div className="Desc_content">
            <div className='Desc_imgcont'>
              <img src={img1} alt="" className='Desc_img' />
              <img src={img2} alt="" className='Desc_img' />
              <img src={img3} alt="" className='Desc_img' />
            </div>
            <h3>Integraciones con redes sociales</h3>
          </div>
        </div>
        <div className="Desc2 Snapper">
          <div className="Desc_content">
            <div className='Desc_imgcont'>
              <img src={img4} alt="" className='Desc_img' />
              <img src={img5} alt="" className='Desc_img' />
              <img src={img6} alt="" className='Desc_img' />
            </div>
            <h3>E-shops con categorias y filtros personalisados</h3>
          </div>
          <video className='Desc_video' src={buyingvid} disablePictureInPicture autoPlay loop muted></video>
          <div className="Desc_spacer"></div>
        </div>
      </div>
      <div className="Carrouselle_cont Snapper">
        <div className={"Carrouselle C" + slot} >
          <div className="Carrouselle_item eshop"></div>
          <div className="Carrouselle_item portfolio"></div>
          <div className="Carrouselle_item landingpage"></div>
          <div className="Carrouselle_item app"></div>
        </div>
      </div>
      <div className="Carrouselle_navigator">
        <img src={arrow} alt="" id='arrowleft' className='Carrouselle_arrow' onClick={() => handleNavigator(false)} />
        <div className="Carrouselle_navname"> <p>{names[slot - 1]}</p></div>
        <img src={arrow} alt="" id='arrowright' className='Carrouselle_arrow' onClick={() => handleNavigator(true)} />
      </div>
      <ContactForm />
      <footer>
        <div className="footer_section"><p>Cel / Whatsapp: +54 9 3513041288</p></div>
        <div className="footer_section"><p>Email: mirpocasas@gmail.com</p></div>
        <div className="footer_section"><p>More about me: </p></div>
      </footer>
    </div>
  )
}

export default App
