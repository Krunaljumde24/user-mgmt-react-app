import React, { useEffect, useState } from "react";
import axios from "axios";

let User = () => {

    const [userDetails, setUserDetails] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8080/users')
            .then((resp) => {
                setUserDetails(resp.data)
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])


    return (
        <>
            <h4>User Details</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">Location</th>
                    </tr>
                </thead>
                <tbody>
                    {userDetails.map((data) => {
                        return (
                            <tr>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.mobile}</td>
                                <td>{data.location}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default User;