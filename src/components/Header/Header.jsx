import { Link, Outlet } from "react-router-dom";


const Header = () => {
    return (
        <div>

            <nav>Navbar</nav>
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
            <Link to = "users">Users</Link>
            
            <Link to="contact">Contact us</Link>

            <Outlet></Outlet>
        </div>
        
    );
};

export default Header;