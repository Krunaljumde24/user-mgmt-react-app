import React, { useState, useEffect } from "react";
import axios from "axios";



let User = () => {
    let fetchCustData = () => {
        axios.get('http://localhost:8080/users')
            .then((response) => {
                // console.log(response);
            }).catch((error) => {
                console.log(error);
            }).finally(() => {
                // console.log('API Executed.');
            });
    }

    const [userData, setUserData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8080/users')
            .then((response) => {
                // console.log(response.data);
                setUserData(response.data)
            }).catch((error) => {
                throw error;
            }).finally(() => {
                // console.log('API Executed.');
            })
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
                    {userData.map((data) => {
                        return (
                            <tr key={data.id}>

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
            <button className="btn btn-sm btn-success" onClick={fetchCustData}>Fetch User Data</button>
        </>
    )
}

export default User;