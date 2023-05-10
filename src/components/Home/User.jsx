import React from 'react';
import { FaPen, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const User = ({ user, users, setUsers }) => {

    const { _id, name, email, gender, status } = user;

    const handleDelete = _id => {
       

    }
    return (
        <tr>
            <td>1</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{gender}</td>
            <td>{status}</td>
            <td>
                <Link to={`/updateUser/${_id}`}> <button className='active-btn'><FaPen></FaPen></button></Link>
                <Link><button className='active-btn' onClick={() => handleDelete(_id)}><FaTimes></FaTimes></button></Link>
            </td>
        </tr>
    );
};

export default User;