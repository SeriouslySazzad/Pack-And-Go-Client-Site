import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Home/Footer/Footer';
import usePackages from '../SinglePackage/SinglePackage';

const UserOrder = () => {
    const { user } = useAuth();
    console.log(user);
    const { packageId } = useParams();

    const { packages } = usePackages();
    console.log(packages);

    const packageDetail = packages.find(pack => pack._id === packageId);
    console.log(packageDetail);

    // DELETE ORDER
    const handleDeletePackage = id => {
        const url = `https://serene-hamlet-40607.herokuapp.com/packages/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Deleted Successfully');
                }
            })
    }

    return (
        <div className="bg-secondary">
            <div className="App p-5">
                <h4 className="text-white">User Name : {user?.displayName}</h4>
                <h4 className="text-white">User Email : {user?.email}</h4>
                <hr />
                <hr />
                <h4 className="text-warning">Here is your package down below :</h4>
                <img src={packageDetail?.img} alt="" className="w-25" />
                <h4 className="text-white">Package Name : {packageDetail?.name}</h4>
                <h4 className="text-white">Price : ${packageDetail?.price}</h4>
                <button onClick={() => handleDeletePackage(packageDetail._id)} className="btn btn-danger me-2">Delete</button>
                <button className="btn btn-warning me-2">Update</button>
                <Link to="/place-order">
                    <button className="btn btn-success me-2">Place the Order</button>
                </Link>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default UserOrder;