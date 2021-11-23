import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import Footer from '../Home/Footer/Footer';
import './AddPackages.css';


const AddPackages = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('https://serene-hamlet-40607.herokuapp.com/packages', data)
            .then(res => {
                if(res.data.insertedId) {
                    alert('Package Addeded Successfully!')
                    reset();
                }
            })
    }
    return (
        <div className="">
            <div className="App add-package bg-secondary p-5">
                <h1 style={{ fontWeight: '700', fontSize: '40px' }} className="text-light mb-3">Please Add a Package :</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("id",)} placeholder="Package Id" />
                    <input {...register("name",)} placeholder="Package Name" />
                    <input {...register("img",)} placeholder="IMAGE URL" />
                    <textarea {...register("desc",)} placeholder="Package Description" />
                    <input type="number" {...register("price",)} placeholder="Package Price" />
                    <input className="btn btn-success" type="submit" />
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddPackages;