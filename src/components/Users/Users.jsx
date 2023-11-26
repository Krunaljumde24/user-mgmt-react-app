import React from "react";

let User = () => {
    return (
        <>
            <h4>User Details</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Location</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Krunal Jumde</td>
                        <td>KrunalJumde24@gmail.com</td>
                        <td>Nagpur</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default User;