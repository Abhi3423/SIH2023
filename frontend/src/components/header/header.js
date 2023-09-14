import download from "../../assets/download.svg"
import logo from "../../assets/logo.svg"
import { useNavigate } from "react-router-dom";
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';

const Navbar = () => {
    const navigate = useNavigate()


    const logOut = () => {
        googleLogout();
        navigate('/')
        deleteCookie('token')
        window.location.reload()
    };


    return (
        <div className="w-[100%] sticky h-18 py-4 px-8 bg-gradient-to-r from-[#101908] via-transparent to-[#262626] justify-between flex text-white border-b-[0.3px] border-[#c6c6c6]">
            <img onClick={() => navigate('/')} className="cursor-pointer w-40" src={logo} alt=""></img>
            <div className="flex gap-8 justify-between items-center text-white text-lg">
                {
                    getCookie('token') === undefined ?
                        <GoogleLogin
                            onSuccess={credentialResponse => {
                                console.log(jwt_decode(credentialResponse.credential).sub)
                                setCookie('token', jwt_decode(credentialResponse.credential).sub)
                                navigate('/record')
                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        />
                        :
                        <div onClick={() => { logOut() }} className="cursor-pointer bg-white px-4 py-1 rounded-md text-black hover:bg-black hover:text-white">Logout</div>
                }

            </div>
        </div>
    );
}

export default Navbar;