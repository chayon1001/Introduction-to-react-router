import { Link } from "react-router-dom";


const User = ({user}) => {

    const {id, name , username} = user;

   
    return (
        <div className="border-2 p-4 bg-gray-500">
            <h3>User Name: {name}</h3>
            <p>Username = {username}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;