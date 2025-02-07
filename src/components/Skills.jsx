import infos from '../assets/info'
import {motion} from 'motion/react'
const Skills = () => {
  return (
<section className="skills" id="skills">
    <h2 className='skill-title'>What I Bring to the Table</h2>
    <div className="skillbox">
{infos[0].skills.map((skill,idx)=>{
       return (
         <motion.h3 
         key={idx}
         className="skill-card"
         initial={{ y: 100 }}
         animate={{ y: 0 }}        
         whileHover={{ scale: 1.1 }}   
         whileTap={{ scale: 0.9 }} 
         transition={{ duration: 0.1 }}
        >
         <h3>{skill.name}</h3>
         </motion.h3>
       )
     })}
     </div>
</section>
  )
}

export default Skills
