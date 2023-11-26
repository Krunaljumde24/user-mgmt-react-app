import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

let AddUser = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    let onSubmit = (data) => {
        let reqBody = {
            'uName': data.uName,
            'uEmail': data.uEmail,
            'uMobile': data.uMobile,
            'uLocation': data.uLocation
        }
        axios.post('http://localhost:8080/addUser', reqBody)
            .then((response) => {
                console.log(response);
            }).catch((error) => {
                throw error;
            });
    }

    return (
        <>
            <div className="formContainer">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-1 row">
                        <label htmlFor="name" className="col-sm-3 col-form-label">Name</label>
                        <div className="col-sm">
                            <input type="text"
                                className="form-control form-control-sm"
                                required
                                name="uName" id="name"
                                {...register("uName", { required: true })}
                            />
                        </div>
                    </div>
                    <div className="mb-1 row">
                        <label htmlFor="name" className="col-sm-3 col-form-label">Email</label>
                        <div className="col-sm">
                            <input
                                type="email"
                                required
                                className="form-control form-control-sm"
                                name="uEmail"
                                id="email"
                                {...register("uEmail")}
                            />
                        </div>
                    </div>
                    <div className="mb-1 row">
                        <label htmlFor="name" className="col-sm-3 col-form-label">Mobile</label>
                        <div className="col-sm">
                            <input
                                type="text"
                                required
                                className="form-control form-control-sm"
                                name="uMobile"
                                id="mobile"
                                {...register("uMobile")}
                            />
                        </div>
                    </div>
                    <div className="mb-1 row">
                        <label htmlFor="name" className="col-sm-3 col-form-label">Location</label>
                        <div className="col-sm">
                            <input
                                type="text"
                                required
                                className="form-control form-control-sm"
                                name="uLocation"
                                id="location"
                                {...register("uLocation")}
                            />
                        </div>
                    </div>
                    <input type="submit" className="btn btn-sm btn-primary" value="Submit" />
                </form>
            </div>
        </>
    )
}
export default AddUser;