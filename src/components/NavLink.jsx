import { Link } from "react-router-dom"
const NavLink = ({route, text, index})=>{
    return(
        <li className="nav-link" style={{'--i':index}}><Link to={route}>{text}</Link></li>
    )
}
export default NavLink