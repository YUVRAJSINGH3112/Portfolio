import Footer from './Footer'
import Project from './Project'
import infos from '../assets/info'
import { motion } from 'motion/react'
import Skills from './Skills'
const Home = () => {

  
  return (
    <>
    <section className='home' id='home'>
     <div className="home-container">
     {infos.map((info,idx) =>{
        return (
          <div key={idx} className="info">
            <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "anticipate",
              duration: 0.2
            }}
            >{info.greet}</motion.h1>
            <h1>I&apos;m <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "anticipate",
              duration: 0.2
            }}
            drag
            dragConstraints={{
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            }}
            whileHover={{scale:1.1}}  
              whileTap={{ scale: 0.9 }} 
             className='blue name'>{info.name}</motion.span></h1>
            <h2>{info.job_title}</h2>
            <p>{info.description}</p>
            <div className='connect'>
            <motion.a 
            whileTap={{scale:0.9}}
            href="" className='connect-btn'>View Resume</motion.a>
            <motion.a
            whileTap={{scale:0.9}}
             href="" className='connect-btn'>Let&apos;s Talk</motion.a>
            </div>
          </div>
        )
     })}
     </div>
    </section>
     <Skills/>
     <Project/>
    <Footer/>
    </>
  )
}

export default Home
