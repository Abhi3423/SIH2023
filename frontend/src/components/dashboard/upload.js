import axios from "axios"
import { Fragment, useState } from "react";
import Navbar from "../header/header";
import { useNavigate } from "react-router-dom";
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';

const Upload = () => {

    const [file, setFile] = useState(null); // State to store the selected file
    const navigate = useNavigate()

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };


    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();

        if (file) {
            formData.append('file', file); // Append the file to the FormData object
        }

        axios
            .post('http://127.0.0.1:5000/home', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Important for file uploads
                },
            })
            .then(function (response) {
                console.log(response); // Assuming the API returns data
                const data = response.data.predictions
                for (let key in data) {
                    // Generate random numbers between 15 and 85
                    let top = Math.floor(Math.random() * (60 - 15 + 1)) + 15;
            
                    // Add the 'top' property to the original object
                    data[key]['top'] = top;
                }
                for (let key in data) {
                    // Generate random numbers between 15 and 85
                    let left = Math.floor(Math.random() * (40 - 15 + 1)) + 55;
            
                    // Add the 'top' property to the original object
                    data[key]['left'] = left;
                }
                window.sessionStorage.setItem('network_data', JSON.stringify(data));
                setTimeout(() => {
                    navigate('/dashboard');
                }, 1000);
            })
            .catch(function (error) {
                console.log(error);
            });
    };


    return (
        <Fragment>
            <Navbar />
            <div className="flex flex-col justify-center items-center">
                <div className="flex w-full text-white px-20 text-2xl items-center py-10 text-center">
                    <span className="w-full flex justify-center">Upload Files</span>
                    {/* <button className="p-2 px-8 bg-green-600 rounded-md" type="submit">Publish Now</button> */}
                </div>
                <div className="p-20 w-[80%] h-[40vh] flex items-center justify-center">
                    <form className="flex flex-col gap-8 rounded-lg bg-white w-full items-center p-10" onSubmit={handleSubmit}>
                        <input type="file" onChange={handleFileChange} />
                        <button className="p-2 px-8 bg-green-600 rounded-md" type="submit">Publish Now</button>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}

export default Upload;