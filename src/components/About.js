const About = () => {
    return (
        <div className="h-full justify-center text-center">
            <div className="bg-white p-10 rounded-lg border-solid border-[#0452B0] border-2">
                <h1 className="md:text-4xl text-2xl font-bold mb-8">About Me</h1>
                <p className="md:text-lg text-xs">I’m a 3rd year IT Engineering student at Royal University of Phnom Penh. I spend most of my days working on UX/UI Designing, Web Development, Graphic Designing. I’m eager to learn new things and seeking for Individual or Teamwork Projects.</p>
                <div className="pt-8 md:text-sm text-xs">
                    <button className="bg-[#070707] text-[#EBDDDD] font-semibold px-10 py-2 rounded-tl-[40px] rounded-br-[40px] shadow-lg hover:text-[#106B92]">
                        <a>View Full Resume</a>
                    </button>
                </div>
            </div>
        </div>
    );
};
export default About;