import aboutImage from '/public/images/aboutusimg.png';
import whatsappICon from '/public/SocialIcons/whatsappIcon.png';
import instagramIcon from '/public/SocialIcons/instagramIcon.png';
import linkdnIcon from '/public/SocialIcons/linkdnIcon.png';
const AboutUs = () => {
    return (
        <>
            <div className=" max-w-5xl mx-auto flex items-center justify-center flex-col md:flex-row w-full mt-20">
                <div className='flex flex-col md:flex-row items-center justify-center gap-5 w-full'>
                    <div className="w-full md:w-4/4 ">
                        <img src={aboutImage}
                            alt="Responsive Image"
                            className=" w-full  object-cover  " /> {/*  shadow-[0_0_12px_rgba(0,0,0,0.2)] */}
                    </div>
                    <div className="w-full  md:w-4/4 p-4 ">
                        <h2 className="text-3xl font-bold mb-2">ABOUT ME</h2>
                        <p className="text-sm font-bold mb-2 text-indigo-500">
                            ARS-React Developer
                        </p>
                        <p className="text-gray-900">
                            I'm a passionate Front-End Developer from Rawalpindi, Pakistan, with hands-on experience in building responsive and user-friendly web interfaces. I specialize in HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and React (intermediate level, since 2023). I'm currently pursuing a Bachelor's degree in Computer Science, expected to graduate in 2028.
                            <br></br>
                            In 2025, I completed a Front-End Development internship at Syber Koza, located in NASTP Rawalpindi, where I gained practical experience working on real-world projects and collaborating with a professional development team.
                            <br></br>
                            I'm enthusiastic about continuous learning, clean code, and creating seamless user experiences on the web.
                        </p>
                        <div className="flex space-x-1 text-2xl text-green-600">
                            <a href="https://wa.me/923105510996" target='_blank'> <img className='h-12 w-auto mt-4 rounded-full cursor-pointer' src={whatsappICon} /></a>
                            <a href="https://www.instagram.com/rehman_shafiq__000?igsh=cjJtdTQ3bnN3aXc0" target='_blank'> <img className='h-13 w-auto mt-4 cursor-pointer' src={instagramIcon} /></a>
                            <a href="https://www.linkedin.com/in/abdul-rehman-shafiq-241336322/" target='_blank'> <img className='h-11 w-auto mt-5 rounded-full cursor-pointer' src={linkdnIcon} /></a>
                            <a href="https://github.com/rehman-shafiq" target='_blank'> <img className='h-11 w-auto mt-5 mx-2 rounded-full cursor-pointer' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-gray-100 flex flex-col items-center justify-center mt-20 mb-10 px-4">
                <h1 class="text-3xl font-bold mb-8 text-gray-800">My Tech Stack</h1>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl w-full">
                    <div class="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" class="w-16 h-16 mb-4" />
                        <h2 class="text-lg font-semibold">HTML</h2>
                    </div>
                    <div class="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" class="w-16 h-16 mb-4" />
                        <h2 class="text-lg font-semibold">CSS</h2>
                    </div>
                    <div class="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" class="w-16 h-16 mb-4" />
                        <h2 class="text-lg font-semibold">JavaScript</h2>
                    </div>
                    <div class="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" class="w-16 h-16 mb-4" />
                        <h2 class="text-lg font-semibold">React</h2>
                    </div>
                    <div class="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" class="w-16 h-16 mb-4" />
                        <h2 class="text-lg font-semibold">GitHub</h2>
                    </div>
                </div>
            </div>
        </>
    );
}
export default AboutUs;