import download from "../../assets/download.svg"

const Navbar = () => {
    return (
        <div className="w-[100%] sticky h-18 p-4 shadow-lg shadow-gray-600 justify-between flex text-white">
            Logo
            <div className="flex gap-8 justify-between items-center text-white text-lg">
                <button className="hover:text-[#9747FF]">Login/Signup</button>
                <button className="hover:text-[#299C00] flex gap-2 items-center">Download<img className="w-4" src={download} alt=""></img></button>
            </div>
        </div>
    );
}

export default Navbar;