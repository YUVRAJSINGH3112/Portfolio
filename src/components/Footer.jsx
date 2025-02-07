import social from '../assets/social'
const footer = () => {
  // const year=document.getElementById("year").textContent = new Date().getFullYear();

  return (
    <footer id="footer" className="footer">
    {social.map((handle,idx)=>{
      return (
        <div key={idx}>
          <a href={handle.link}>{handle.name}</a>
        </div>
      )
    })}
    <p>&copy; <span id="year"></span> Yuvraj Singh. All Rights Reserved.</p>
    </footer>
  )
}

export default footer
