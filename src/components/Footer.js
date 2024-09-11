const Footer = () => {
    return (
        <div className="flex flex-col items-center h-full">
            <h1 className="pt-5 font-semibold text-white text-2xl">CONTACT ME</h1>
            <div>
                <div className="flex justify-center space-x-4 mt-6">
                    <a href="#" className="text-white hover:text-gray-300">
                    <img
                        src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png"
                        alt="Instagram"
                        className="w-8 h-8"
                    />
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                    <img
                        src="https://img.icons8.com/ios-filled/50/ffffff/telegram-app.png"
                        alt="Telegram"
                        className="w-8 h-8"
                    />
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                    <img
                        src="https://img.icons8.com/ios-filled/50/ffffff/twitter.png"
                        alt="Twitter"
                        className="w-8 h-8"
                    />
                    </a>
                    <a href="https://www.facebook.com/" className="text-white hover:text-gray-300">
                        <img
                            src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png"
                            alt="Facebook"
                            className="w-8 h-8"
                        />
                    </a>
                </div>
            </div>
            <h1 className="pt-5 text-white">#Soryapongs.t@gmail.com</h1>
            <h1 className="pt-5 text-black font-semibold">@THAN SORYAPONGS 2024</h1>
        </div>
    )
}
export default Footer;