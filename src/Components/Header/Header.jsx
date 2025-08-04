import headerimage from '/public/images/headerimg.png';
const Header = () => {
    return (
        <>
            <header className="max-w-7xl mx-auto p-6">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 ">
                    <div className="w-full md:w-2/4 jus text-center md:text-left mt-30 ">
                        <h2 className="text-lg font-bold text-bold mb-2">Welcome to My Portfolio</h2>
                        <h2 className="text-3xl font-bold mb-4">I am <strong className='text-indigo-500 font-mono-bold '> Abdul Rehman Shafiq</strong></h2>
                        <p className="text-lg font-bold mb-2">
                            React Developer
                        </p>
                        <p className="text-gray-900 mb-6">
                            Welcome to ReactProx, where i am innovation meets React development. Explore my portfolio to discover cutting-edge projects, creative solutions, and a passion for building exceptional user experiences. Let's embark on a journey of digital excellence together!
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4  bg-gray-100 ">
                            <a className="bg-gray-700 text-white text-center px-6 py-2 rounded hover:bg-gray-500 transition w-full cursor-pointer target_blank "
                           href='https://www.linkedin.com/in/abdul-rehman-shafiq-241336322/'
                            target='_blank'
                            >
                               Hire Me
                            </a>
                            
                        </div>
                    </div>
                    <div className=" md:w-1/2">
                        <img  src={headerimage}  alt="Responsive Example Image" className="w-full  object-cover"/>
                    </div>
                </div>
            </header>

        </>
    );
}
export default Header;