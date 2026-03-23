import { Link } from "react-router"

function NavBar(){
    return(
        <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"about"}>About</Link>
            <Link to={"contact"}>Contact</Link>
        </nav>
    )
}
export default NavBar