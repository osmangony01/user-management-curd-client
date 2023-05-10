import React from 'react';
import { FaAngleDoubleLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateUser = () => {

    const user = useLoaderData();
    const { _id, name, email, gender, status } = user;
    console.log(user);

    const handleUpdateUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const gender = form.gender.value;
        const status = form.status.value;

        const updateUser = { name, email, gender, status };
        console.log(updateUser);
        fetch(`http://localhost:5000/user/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'User Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div className="add-user-panel">
            <div><Link to="/"><button className='all-user-btn'> <FaAngleDoubleLeft></FaAngleDoubleLeft>All User</button></Link></div>
            <div>
                <h2 className="add-user-title">New User</h2>
                <p className="add-user-info">Use this form to create a New User Account</p>
                <div className='add-user-form'>
                    <form action="" onSubmit={handleUpdateUser}>
                        <div>
                            <label htmlFor="" className="input-label">Name</label>
                            <input type="text" className="input-control" name='name' placeholder='Enter name' defaultValue={name} />
                        </div>
                        <div>
                            <label htmlFor="" className="input-label">Email</label>
                            <input type="text" className="input-control" name='email' placeholder='Enter email' defaultValue={email} />
                        </div>
                        <div className='add-user-radio'>
                            <p>Gender</p>
                            <div className='add-user-g1'>
                                <input type="radio" name="gender" value="male" />
                                <span className='g1-name'>Male</span>
                            </div>
                            <div>
                                <input type="radio" name="gender" value="female" />
                                <span className='g1-name'>Female</span>
                            </div>
                        </div>
                        <div className='add-user-radio'>
                            <p>Status</p>
                            <div className='add-user-g1'>
                                <input type="radio" name="status" value="active" />
                                <span className='g1-name'>Active</span>
                            </div>
                            <div>
                                <input type="radio" name="status" value="inactive" />
                                <span className='g1-name'>Inactive</span>
                            </div>
                        </div>
                        <div>
                            <button className='add-user-btn' type='submit'>Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateUser;