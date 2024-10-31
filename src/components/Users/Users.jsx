import { useLoaderData } from "react-router-dom";
import User from "../User/User";


const Users = () => {
    const user = useLoaderData();
    return (
        <div>
            <h3 className="bg-red-300">Users:{user.length} </h3>
            <div >
                {
                    user.map((user) => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;