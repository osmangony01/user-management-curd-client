import { Link } from 'react-router-dom';
import './Home.css';
import { FaPen, FaTimes, FaUser } from 'react-icons/fa';


const Home = () => {
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
                        <tr>
                            <td>1</td>
                            <td>kahini</td>
                            <td>kahini@gmail.com</td>
                            <td>male</td>
                            <td>active</td>
                            <td><button className='active-btn'><FaPen></FaPen></button> <button  className='active-btn'><FaTimes></FaTimes></button></td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>kahini</td>
                            <td>kahini@gmail.com</td>
                            <td>male</td>
                            <td>active</td>
                            <td><button><FaPen></FaPen></button> <button><FaTimes></FaTimes></button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;