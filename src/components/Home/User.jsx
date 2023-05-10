import React from 'react';
import { FaPen, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const User = ({ user, users, setUsers }) => {

    const { _id, name, email, gender, status } = user;

    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/user/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                        const remaining = users.filter(user => user._id !== _id);
                        setUsers(remaining);

                    })
            }
        })

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