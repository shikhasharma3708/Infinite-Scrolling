import React from "react"
import { Heading } from "./Heading"

export const About = () => {
  return (
    <>
      <section className='about'>
        <div className='about-section flex'>
            <>
              <div data-aos='fade-down-right'>
                <img src="https://img.freepik.com/free-photo/professional-employee-workplace_23-2147650830.jpg" alt='' />
              </div>
              <div data-aos='fade-down-left'>
                <Heading title='About Me' />
                <p>Shikha Sharma</p>
                <button>Download CV</button>
              </div>
            </>
        </div>
      </section>
    </>
  )
}