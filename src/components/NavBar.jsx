import '../styles/navBarStyle.css'
import { navItems } from '../utils/navItems'
import NavBarItem from './NavBarItem'

const NavBar = () => {

    return (
        <div className="container-fluid">
            <div className="row pt-3">
                <ul className="nav nav-underline justify-content-evenly btn-group h5">
                    {
                        navItems.map((item) => (
                            <NavBarItem key={item} href={item} />
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default NavBar
