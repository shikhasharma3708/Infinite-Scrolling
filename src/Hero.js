import React, { useEffect } from "react"
import Typewriter from "typewriter-effect"

export const Hero = () => {
  return (
    <>
      <section className='hero'>
          <div className='heroContent'>
            <h3 className='fontSize' data-aos='fade-right'>
               HELLO I'M
            </h3>
            <h1>
              <Typewriter
                options={{
                  strings: [`Shikha Sharma`, `Software Engineer`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p data-aos='fade-left'>Software Engineer with over 3 years of experience in developing scalable applications using React and Node.js. Skilled in managing MongoDB and MySQL databases. Proven track record of delivering customized solutions that prioritize scalability and maintainability. Effective communicator, proficient in translating client requirements into API designs and database architectures. Dedicated problem solver focused on optimizing processes to improve project efficiency.</p>
            <button className='primaryBtn cv-btn' data-aos='fade-up-right'>
              Download CV
            </button>
          </div>

      </section>
    </>
  )
}