import Navbar from "../header/header";
import { Fragment } from "react";
import monitor from '../../assets/monitor.svg'
import dots from '../../assets/dots.svg'
import mark from '../../assets/mark.svg'
import clock from '../../assets/clock.svg'
import { useEffect } from "react";

const Record = () => {
    return (
        <Fragment>
            <Navbar />
            <div className="flex gap-10 w-full py-6 items-center justify-center">
                <div className="w-[60%] text-2xl text-white text-center rounded-lg bg-gradient-to-r from-[#010409] to-[#5F5F5F] p-4">RECORD FILE</div>
                <div className="flex gap-2 items-center text-2xl text-white text-center rounded-lg bg-gradient-to-r from-[#010409] to-[#5F5F5F] border-[1px] border-white p-4">
                    Live Monitoring
                    <img src={monitor} alt="monitor"></img>
                </div>
            </div>
            <div className="flex items-center justify-center p-10">
                <div className="w-[82%] border-[1px] border-white justify-between flex text-lg text-white text-center rounded-lg bg-gradient-to-r from-[#010409] to-[#1a1a1a] p-4">
                    <div className="flex gap-8 items-center">
                        <img className="w-12" src={clock} alt="clock"></img>
                        <span>Network Details of Packet at 2 am</span>
                        <img className="w-4" src={mark} alt="mark"></img>
                        <span>45 attacks</span>
                    </div>
                    <div className="flex gap-8">
                        <div className="flex flex-col gap-2">
                            <span>Timestamp</span>
                            <span>3:25 AM</span>
                        </div>
                        <img src={dots} alt="dots"></img>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Record;