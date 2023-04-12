import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>My Blog</h1>

            <div className="Links">
                <Link to="/">Home</Link>
                <Link to="/Create" style={ {
                    backgroundColor: "green",
                    color:"white",
                    borderRadius:"8px"
                } }>New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;