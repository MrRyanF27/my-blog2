import { Link } from "react-router-dom";


const NotFound = () => {


    return ( 
        <div className="content">
            <h1>Oops sorry not Found</h1>
            <Link to='/'>
                <h5>Back to Homepage</h5>
            </Link>
        </div>
     );
}
 
export default NotFound;