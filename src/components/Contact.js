import React, { Component } from 'react'
import profile from './profile.png'
export default class Contact extends Component {
  render() {
    return (
      <div className='container d-flex text-light m-5'>
        <div className="container w-50 "><img style={{ borderRadius: "10px", width: "70%" }} src={profile} alt="Hello Guys Chia Pilo" /></div>
        <div className="container w-40">
          <h1 className='display-3'>Contact Me</h1>
          <h4>👋 Hi, I'm Lakshay Kumar Kashyap!</h4>
          <p>Lakshay Kumar Kashyap is a DIY MERN stack developer and a trained musician. He is passionate about building web applications and creating music. He has been learning web development and music for the past few years, and he is always looking for new ways to improve his skills.
            Lakshay is proficient in a variety of web development technologies, including HTML, CSS, JavaScript, Node.js, Express, MongoDB, and React.In addition to his technical skills, Lakshay is also a strong communicator and team player. He is always willing to help others, and he is always looking for ways to improve his work.
            If you are looking for a web developer who is passionate about their work and who is always willing to go the extra mile, then Lakshay is the perfect person for you. You can contact him on LinkedIn or through his website.
          </p>
          <div className="social-button m-2">
            <button  className="btn btn-secondary m-2" ><a  rel="noreferrer" style={{textDecoration:"none",listStyle:"none",color:"white"}}href="https://www.linkedin.com/in/lakshaykumar9347/" target='_blank'>Linkedin</a></button>
            <button className="btn btn-secondary m-2"><a  rel="noreferrer" style={{textDecoration:"none",listStyle:"none",color:"white"}}href="https://github.com/LakshayKumar9347" target='_blank'>Github</a></button>
            <button className="btn btn-danger m-2"><a rel="noreferrer" style={{textDecoration:"none",listStyle:"none",color:"white"}} href="https://github.com/LakshayKumar9347/FilesServing/blob/4fd278d06cef7fa4fc48a7721ff82ae738680589/Resume%20Lakshay%20Kumar%20Kashyap.pdf" target='_blank'>View Resume</a></button>
          </div>
        </div>
      </div>
    )
  }
}
