import download from "../../assets/download.svg"
import logo from "../../assets/logo.svg"

const Navbar = () => {
    return (
        <div className="w-[100%] sticky h-18 py-4 px-8 bg-gradient-to-r from-[#101908] via-transparent to-[#262626] justify-between flex text-white border-b-[0.3px] border-[#c6c6c6]">
            <img className="w-40" src={logo} alt=""></img>
            <div className="flex gap-8 justify-between items-center text-white text-lg">
                <button className="hover:text-[#9747FF] hover:font-bold">Login/Signup</button>
                <button className="hover:text-[#299C00] hover:font-bold flex gap-2 items-center">Download<img className="w-4" src={download} alt=""></img></button>
            </div>
        </div>
    );
}

export default Navbar;