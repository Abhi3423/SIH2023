import download from "../../assets/download.svg"
import logo from "../../assets/logo.svg"

const Navbar = () => {
    return (
        <div className="w-[100%] sticky h-18 py-4 px-8 bg-gradient-to-r from-[#101908] via-transparent to-[#262626] justify-between flex text-white border-b-[0.3px] border-[#c6c6c6]">
            <img className="w-40" src={logo} alt=""></img>
            <div className="flex gap-8 justify-between items-center text-white text-lg">
                <button className="transition-colors duration-300 hover:text-[#9747FF]">Login/Signup</button>
                <button className="transition-colors duration-300 relative group flex gap-2 items-center hover:text-[#299C00]">
                    Download
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="20"
                        viewBox="0 0 22 32"
                        className="stroke-current group-hover:stroke-current"
                    >
                        <path
                            d="M1.54541 29.7279H20M10.7727 2.0461V23.5764M10.7727 23.5764L18.4621 15.887M10.7727 23.5764L3.08329 15.887"
                            strokeWidth="3.07576"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>


            </div>
        </div>
    );
}

export default Navbar;