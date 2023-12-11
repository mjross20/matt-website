import React, {useState} from 'react'
import Logo from '../assets/logo2.png'
import { Link } from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css'


function Navbar() {
    const [openLinks, setOpenLinks] = useState(false)
    const toggleNavBar = () => {
        setOpenLinks(!openLinks);
    }
  return (
    <div className="navbar">
        <div className="leftSide" id={openLinks ? "open" : "close"}>
            <Link to ="/"><img src={Logo} alt = ""/> </Link> 
            <div className="hiddenLinks">
                <Link to ="/"> Home </Link>
                <Link to ="/about"> About </Link>
                <Link to ="/experiences"> My Work </Link>
                <Link to ="/contact"> Contact </Link>
                <Link to ="/blog"> Blog </Link>
            </div>
        </div>

        <div className="rightSide">
            <Link to ="/"> Home </Link>
            <Link to ="/about"> About </Link>
            <Link to ="/experiences"> My Work </Link>
            <Link to ="/contact"> Contact </Link>
            <Link to ="/blog"> Blog </Link>
            <button onClick={toggleNavBar}>
                <ReorderIcon />
            </button>
        </div>
    </div>
  )
}

export default Navbar