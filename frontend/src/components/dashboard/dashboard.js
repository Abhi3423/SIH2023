import axios from "axios"
import { useState } from "react";

const Dashboard = () => {

    const [file, setFile] = useState(null); // State to store the selected file

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
            })
            .catch(function (error) {
                console.log(error);
            });
    };


    return (
        <div className="bg-white">
            <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <button className="bg-green-400 w-fit rounded-lg p-3" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Dashboard;