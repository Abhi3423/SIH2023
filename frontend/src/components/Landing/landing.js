import Navbar from "../header/header";
import heroicon from "../../assets/heroicon.svg"
import map from "../../assets/map.svg"
import Frame from "../../assets/Frame.svg"
import settings from "../../assets/settings.svg"
import './landing.css';


const Landing = () => {
    return (
        <div className="flex flex-col gap-12">
            <Navbar />

            {/* Hero Section */}
            <div className="flex items-center justify-center p-4 text-white">
                <div className="w-[80%] h-[80vh] flex gap-20 justify-center items-center">
                    <div>
                        <img src={heroicon} className='h-96'></img>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="text-4xl font-medium">
                            <h1>The most advanced</h1>
                            <h2>FIrewall vulnerability indicator</h2>
                        </div>
                        <span className="w-[28vw]">
                            Kali Linux is an open-source, Debian-based Linux distribution geared towards various information security tasks, such as Penetration Testing, Security Research, Computer Forensics and Reverse Engineering.
                        </span>
                        <div className="flex gap-12">
                            <button className={`w-48 flex justify-center items-center gap-2 px-4 py-2 bg-white border-solid border-[#299C00] border-2 rounded-lg text-lg text-[#6ABF00] hover:bg-[#299C00] hover:text-white ${'download'}`}>
                                Download
                                <svg width="22" height="20" viewBox="0 0 22 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.54541 29.7279H20M10.7727 2.0461V23.5764M10.7727 23.5764L18.4621 15.887M10.7727 23.5764L3.08329 15.887" stroke="#6ABF00" stroke-width="3.07576" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                            <button className={`w-48 flex justify-center items-center gap-2 px-4 py-2 bg-white border-solid border-[#9747FF] border-2 rounded-lg text-lg text-[#9747FF] hover:bg-[#9747FF] hover:text-white ${'documentation'}`}>
                                Documentation
                                <svg width="29" height="26" viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.403809 2.25848C0.403809 1.903 0.545026 1.56207 0.796394 1.3107C1.04776 1.05933 1.38869 0.918114 1.74418 0.918114H9.34497C11.5378 0.918114 13.4858 1.97254 14.7064 3.60064C15.3304 2.76652 16.1405 2.08964 17.0722 1.62392C18.004 1.1582 19.0316 0.916514 20.0733 0.918114H27.6598C28.0153 0.918114 28.3562 1.05933 28.6076 1.3107C28.8589 1.56207 29.0001 1.903 29.0001 2.25848V21.0237C29.0001 21.3791 28.8589 21.7201 28.6076 21.9714C28.3562 22.2228 28.0153 22.364 27.6598 22.364H19.6051C19.077 22.364 18.5541 22.468 18.0662 22.6701C17.5784 22.8722 17.1351 23.1684 16.7617 23.5418L15.6501 24.6516C15.3987 24.9026 15.0581 25.0436 14.7029 25.0436C14.3477 25.0436 14.007 24.9026 13.7557 24.6516L12.6441 23.5418C12.2707 23.1684 11.8274 22.8722 11.3395 22.6701C10.8516 22.468 10.3288 22.364 9.80069 22.364H1.74418C1.38869 22.364 1.04776 22.2228 0.796394 21.9714C0.545026 21.7201 0.403809 21.3791 0.403809 21.0237L0.403809 2.25848ZM13.3625 20.7091L13.3696 11.6429L13.3661 7.61639C13.3651 6.55054 12.9411 5.52868 12.1871 4.77534C11.4331 4.02201 10.4108 3.59885 9.34497 3.59885H3.08455V19.6833H9.79891C11.0596 19.6832 12.2948 20.0388 13.3625 20.7091ZM16.0504 7.61996L16.0432 20.7055C17.1104 20.0373 18.3441 19.683 19.6033 19.6833H26.3176V3.59885H20.0715C19.005 3.59885 17.9822 4.0225 17.2281 4.77661C16.474 5.53071 16.0504 6.5535 16.0504 7.61996Z" fill="#9747FF" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            {/* Working Model */}
            <div className="p-8 flex flex-col gap-10 items-center justify-center">
                <h1 className="bg-gradient-to-r from-[#299C00] to-[#97D700] bg-clip-text inline-block text-transparent text-5xl font-bold">REAL TIME WORK OF OUR MODEL</h1>
                <div className="relative text-white">
                    <img src={map} alt="map" className="w-full h-auto" />
                    <div className="absolute top-[30%] left-[20%] transform -translate-x-1/2 -translate-y-1/2 w-72">Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt ut labore </div>
                    <div className="absolute top-[30%] left-[65%] transform -translate-x-1/2 -translate-y-1/2 w-72">Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt ut labore </div>
                    <div className="flex justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full justify-self-center text-white">
                        <img src={Frame} className='w-[90%] justify-self-center flex'></img>
                    </div>
                    <div className="absolute bottom-[20%] left-[40%] transform -translate-x-1/2 -translate-y-1/2 w-72">Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt ut labore </div>
                    <div className="absolute bottom-[20%] left-[85%] transform -translate-x-1/2 -translate-y-1/2 w-72">Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt ut labore </div>
                </div>
            </div>


            {/* Our Services */}
            <div className="p-8 flex flex-col text-center justify-center items-center text-white">
                <h1 className="py-6 bg-gradient-to-r from-[#299C00] to-[#97D700] bg-clip-text inline-block text-transparent text-5xl font-bold">OUR SERVICES</h1>
                <h2 className="font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </h2>
                <h3 className="font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </h3>
                <div className="flex flex-wrap gap-10 py-16 w-[80%] items-center justify-evenly">

                    <div className="flex gap-2 w-72 items-start">
                        <img src={settings} alt="settings"></img>
                        <div className="flex flex-col gap-2 w-60 text-left">
                            <span className="font-bold text-lg">HELP - 01</span>
                            <span >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</span>
                        </div>
                    </div>

                    <div className="flex gap-2 w-72 items-start">
                        <img src={settings} alt="settings"></img>
                        <div className="flex flex-col gap-2 w-60 text-left">
                            <span className="font-bold text-lg">HELP - 02</span>
                            <span >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</span>
                        </div>
                    </div>


                    <div className="flex gap-2 w-72 items-start">
                        <img src={settings} alt="settings"></img>
                        <div className="flex flex-col gap-2 w-60 text-left">
                            <span className="font-bold text-lg">HELP - 03</span>
                            <span >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</span>
                        </div>
                    </div>


                    <div className="flex gap-2 w-72 items-start">
                        <img src={settings} alt="settings"></img>
                        <div className="flex flex-col gap-2 w-60 text-left">
                            <span className="font-bold text-lg">HELP - 04</span>
                            <span >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</span>
                        </div>
                    </div>

                    <div className="flex gap-2 w-72 items-start">
                        <img src={settings} alt="settings"></img>
                        <div className="flex flex-col gap-2 w-60 text-left">
                            <span className="font-bold text-lg">HELP - 05</span>
                            <span >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</span>
                        </div>
                    </div>
                </div>
            </div>


            {/* Technologies */}
            <div className="p-8 flex flex-col text-center justify-center items-center text-white">
                <h1 className="pb-10 bg-gradient-to-r from-[#299C00] to-[#97D700] bg-clip-text inline-block text-transparent text-5xl font-bold">TECHNOLOGIES WE RELY ON</h1>
                <h2 className="font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </h2>
                <h3 className="font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </h3>
                <div className="py-16">

                </div>
            </div>
        </div>
    );
}

export default Landing;