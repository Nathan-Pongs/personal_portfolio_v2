const Footer = () => {
    return (
        <div className="flex flex-col items-center h-full">
            <h1 className="pt-5 font-semibold text-white text-2xl">CONTACT ME</h1>
            <div>
                <div className="flex justify-center space-x-4 mt-6">
                <a href="https://web.facebook.com/konsva.jounoir" className="text-white hover:text-gray-300">
                <img
                    src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png"
                    alt="Facebook"
                    className="w-8 h-8"
                />
                </a>
                <a href="https://github.com/Nathan-Pongs" className="text-white hover:text-gray-300">
                <img
                    src="https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000"
                    alt="GitHub"
                    className="w-8 h-8"
                />
                </a>
                </div>
            </div>
            <h1 className="pt-5 text-white">#Soryapongs.t@gmail.com</h1>
            <h1 className="pt-10 text-white font-semibold">All right reserved @SORYAPONGS THAN</h1>
        </div>
    )
}
export default Footer;