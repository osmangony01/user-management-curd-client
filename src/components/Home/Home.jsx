import { Link, useLoaderData } from 'react-router-dom';
import './Home.css';
import { FaPen, FaTimes, FaUser } from 'react-icons/fa';
import { useState } from 'react';
import User from './User';


const Home = () => {

    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    return (
        <div className='home'>
            <div><Link to="/addUser"><button className='new-user'>New User <FaUser ></FaUser> </button></Link></div>
            <div>
                <table className='user-table'>
                    <thead className='user-thead'>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='user-tbody'>
                        {
                            users.map(user => <User
                                key={user._id}
                                user={user}
                                users={users}
                                setUsers={setUsers}
                            ></User>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;