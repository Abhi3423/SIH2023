import Navbar from "../header/header";
import { Fragment, useEffect, useState } from "react";
import circles from '../../assets/circles.svg'
import normal from '../../assets/normal.svg'
import ddos from '../../assets/ddos.svg'
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';


const Dashboard = () => {

    const data = JSON.parse(sessionStorage.getItem('network_data'));

    useEffect(() => {
        setTimeout(() => {
            console.log(data);
        }, 2000);

    }, []);


    return (
        <Fragment>
            <Navbar />
            {/* <div className="px-8 py-2 flex justify-between bg-white">
                <span>random_ddos.csv</span>
                <button className="py-1 px-3 bg-white border-2 border-[#010409] text-[#3A3A3A] font-bold rounded-md">Take Again</button>
            </div> */}
            <div className="flex items-center justify-center py-8 px-20">
                <div className="flex">
                    <div className="relative w-[80%]">
                        <img src={circles} alt="circles" ></img>
                        <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-white bg-[#114200] rounded-full w-6 h-6"></div>
                        {data.map((item, index) => (
                            <div
                                key={index}
                                className={`w-4 h-4 rounded-full absolute top-[${item.top}%] left-[${item.left}%]  ${item.predicted_value === 'BENIGN' ? 'bg-[#767676]' : 'bg-[#FF0000]'
                                    }`}
                            >{console.log(item.top)}</div>
                        ))}

                        {/* {Object.keys(data).map((key, index) => (
                            <div key={index}>
                                <h2>{key}</h2>
                                <ul>
                                    {data[key].map((value, valueIndex) => (
                                        <img
                                            key={index}
                                            className={`absolute top-[${value}%] left-[${data.left[index]}%] transform -translate-x-1/2 -translate-y-1/2`}
                                            src={normal}
                                            alt={data.prediction[index]}
                                        />
                                    ))}
                                </ul>
                            </div>
                        ))} */}
                        {/* <img
                            className={`absolute top-[20%] left-[40%] transform -translate-x-1/2 -translate-y-1/2`}
                            src={normal}
                        />
                        <img
                            className={`absolute top-[30%] left-[80%] transform -translate-x-1/2 -translate-y-1/2`}
                            src={ddos}
                        />
                        <img
                            className={`absolute top-[50%] left-[20%] transform -translate-x-1/2 -translate-y-1/2`}
                            src={ddos}
                        />
                        <img
                            className={`absolute top-[80%] left-[80%] transform -translate-x-1/2 -translate-y-1/2`}
                            src={normal}
                        />
                        <img
                            className={`absolute top-[60%] left-[80%] transform -translate-x-1/2 -translate-y-1/2`}
                            src={normal}
                        />
                        <img
                            className={`absolute top-[90%] left-[20%] transform -translate-x-1/2 -translate-y-1/2`}
                            src={ddos}
                        />
                        <img
                            className={`absolute top-[75%] left-[50%] transform -translate-x-1/2 -translate-y-1/2`}
                            src={ddos}
                        /> */}
                    </div>
                </div>
                <div className="flex flex-col gap-8 w-[60%] items-center text-white">
                    <div className="rounded-md p-6 bg-gradient-to-r from-[#010409] to-[#171717] shadow-sm shadow-[#666565] text-2xl text-center font-bold w-full">Network Details</div>
                    <div className="flex gap-10 justify-between w-full">
                        <div className="flex flex-col rounded-md py-4 w-[80%] from-[#010409] to-[#171717] shadow-sm shadow-[#666565] text-2xl font-medium px-4 justify-between">
                            <span className="text-xs">Source IP</span>
                            <span className="tracking-wide">10.0.0.1</span>
                        </div>
                        <div className="flex flex-col rounded-md py-4 w-[80%] from-[#010409] to-[#171717] shadow-sm shadow-[#666565] text-2xl font-medium px-4 justify-between">
                            <span className="text-xs">Destination IP</span>
                            <span className="tracking-wide">10.8.0.1</span>
                        </div>
                    </div>
                    <div className="flex gap-10 justify-between w-full">
                        <div className="flex flex-col rounded-md py-4 w-[80%] from-[#010409] to-[#171717] shadow-sm shadow-[#666565] text-2xl font-medium px-4 justify-between">
                            <span className="text-xs">Protocol</span>
                            <span className="tracking-wide">10</span>
                        </div>
                        <div className="flex flex-col rounded-md py-4 w-[80%] from-[#010409] to-[#171717] shadow-sm shadow-[#666565] text-2xl font-medium px-4 justify-between">
                            <span className="text-xs">Port</span>
                            <span className="tracking-wide">5762</span>
                        </div>
                    </div>
                    <div className="flex gap-10 justify-between w-full">
                        <div className="flex flex-col rounded-md py-4 w-[80%] from-[#010409] to-[#171717] shadow-sm shadow-[#666565] text-2xl font-medium px-4 justify-between">
                            <span className="text-xs">Timestamps</span>
                            <span className="tracking-wide">13/08/2023 09:52AM</span>
                        </div>
                        <div className="flex flex-col rounded-md py-4 w-[80%] from-[#010409] to-[#171717] shadow-sm shadow-[#666565] text-2xl font-medium px-4 justify-between">
                            <span className="text-xs">Prediction</span>
                            <span className="tracking-wide">DDoS</span>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Dashboard;