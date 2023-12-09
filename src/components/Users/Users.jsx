import React, { useState, useEffect } from "react";
import axios from "axios";
import Error from "../Error";

import './users.css'


let User = () => {
    const [userData, setUserData] = useState([])
    const [usrDtlFLg, setUsrDtlFlg] = useState(false)
    useEffect(() => {
        axios.get('http://localhost:8080/users')
            .then((response) => {
                setUserData(response.data)
                setUsrDtlFlg(true)
            }).catch((error) => {
                console.log(error);
                setUsrDtlFlg(true)
            })
    }, [])



    const [dataToUpdt, setDataToUpdt] = useState({
        id: '',
        name: '',
        email: '',
        mobile: '',
        location: ''
    })
    let handleSomething = (data) => {
        setDataToUpdt(data)
    }

    let handleDataChange = (event) => {
        const [name, value] = event.target;
        // setDataToUpdt({ ...dataToUpdt, name: value })

    }

    let deleteUserById = (id) => {
        axios.delete('http://localhost:8080/deleteUserById', {
            params: {
                userId: id
            }
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error
            );
        })
    }

    return (
        <>
            <h4>User Details</h4>

            {usrDtlFLg ? <Error /> :
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Mobile</th>
                            <th scope="col">Location</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.map((data) => {
                            return (
                                <tr key={data.id}>

                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.mobile}</td>
                                    <td>{data.location}</td>
                                    <td>
                                        <button
                                            className="btn btn-sm btn-primary mx-1"
                                            data-bs-toggle="modal"
                                            data-bs-target="#userDetailEditModal"
                                            onClick={() => { handleSomething(data) }}
                                        >
                                            Edit
                                        </button>
                                        {/* <button type="button" className="btn btn-sm">
                                        <img className="actionIcons" src={editIcon} alt="" srcset="" />
                                    </button>
                                    <button type="button" className="btn btn-sm">
                                        <img className="actionIcons" src={deleteIcon} alt="" srcset="" />
                                    </button> */}
                                        <button
                                            type="button"
                                            className="btn btn-sm btn-danger mx-1"
                                            onClick={() => { deleteUserById(data.id) }}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table >}
            <div
                className="modal fade"
                id="userDetailEditModal"
                tabIndex="-1"
                aria-labelledby="userDetailEditModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5>Edit User Details</h5>
                            <button
                                type="button" className="btn-close" data-bs-dismiss="modal"
                                aria-label="Close">
                            </button>

                        </div>
                        <div className="modal-body">

                            <form>
                                <div>
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="form-control form-control-sm"
                                        value={dataToUpdt.name}
                                        onChange={(event) => { handleDataChange(event) }}
                                    />
                                </div>
                            </form>

                        </div>
                        <div className="modal-footer">
                            <button
                                type="button" className="btn btn-sm btn-warning" data-bs-dismiss="modal"
                                aria-label="Close">
                                Close
                            </button>
                            <button
                                className="btn btn-sm btn-primary">
                                Save Changes
                            </button>
                        </div>
                    </div>

                </div>


            </div>
        </>
    )
}

export default User;