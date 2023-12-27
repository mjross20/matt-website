import '../styles/Footer.css'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <div className="footer"> 
      <div className="socialMedia">
        <InstagramIcon /> <LinkedInIcon /> <GitHubIcon />
      </div>
      <p> &copy; 2023 | mattjross.com</p>
    </div>
  )
}
export default Footer