import React from "react"
import { Heading } from "./Heading"

export const Contact = () => {
  return (
    <>
      <div className='contact'>
        <div className='container'>
          <Heading title='Keep In Touch' />
          <div className='content flexsb contact-section'>
            <div className='right'>
              <form>
                <div className='flex'>
                  <input type='text' placeholder='Name' data-aos='flip-left' />
                  <input type='email' placeholder='Email' data-aos='flip-right' />
                </div>
                <input type='email' placeholder='Subject' data-aos='flip-up' />
                <textarea name='' id='' cols='30' rows='10' data-aos='flip-down'></textarea>
                <button>Submit</button>
              </form>
            </div>
            <div className='left'>
                <div className='box' data-aos='zoom-in'>
                  <img src="	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQukleU1059SFH-flP36qRWECpm9pQfQ7f50Q&s"></img>
                  <p>Himachal Pradesh</p>
                  <p>India</p>
                  <p>+91 0000089999</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}