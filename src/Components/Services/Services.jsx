import { href, Link } from 'react-router-dom';
import ServicesImage from '/public/images/servicespage.png';
import './Services.css';
const Services = () => {
    return (
        <>
            <div className=" flex items-center justify-center mt-20 animation">
                <div className="flex flex-col md:flex-row items-center md:items-center gap-5 max-w-5xl w-full">
                    <div className="md:w-1/2 text-center md:text-left ">
                        <h2 className="text-4xl font-bold mb-4">Our Service</h2>
                        <p className="text-white mb-6">
                            Put data to work with our premium service. We offer a comprehensive suite of solutions designed to help you achieve your goals efficiently and effectively.
                            Get top-tier solutions tailored to your needs — fast, flexible, and effective.
                        </p>
                        <div className='flex flex-col sm:flex-row justify-center items-center gap-4 bg-gray-100'>
                         <Link to={"/AboutUs"} className="bg-gray-700 text-white px-6 py-2 text-center rounded hover:bg-gray-500 transition w-full cursor-pointer "
                         >   
                              Learn More
                            </Link>
                            </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center ">
                        <img
                            src={ServicesImage}
                            alt="Service illustration"
                            className=" object-cover "
                        />
                    </div>
                </div>
            </div>
            <div className="py-12 px-6 animation">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-10">What I Offer</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-[#FFD700 ,#353839] hover:rounded-xl shadow-lg hover:shadow-white p-4 flex flex-col items-center text-center hover:scale-105 transition-transform duration-500">
                            <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
                            <p className="text-white">
                                I build clean, efficient, and scalable front-end interfaces using React, Tailwind CSS, and modern web standards.
                            </p>
                        </div>
                        <div className="bg-[#FFD700 ,#353839] hover:rounded-xl shadow-lg hover:shadow-white p-4 flex flex-col items-center text-center hover:scale-105 transition-transform duration-500">
                            <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
                            <p className="text-white">
                                Every layout I craft is mobile-first and adapts seamlessly across all screen sizes and devices.
                            </p>
                        </div>
                        <div className=" bg-[#FFD700 ,#353839] hover:rounded-xl shadow-lg hover:shadow-white p-4 flex flex-col items-center text-center hover:scale-105 transition-transform duration-500">
                            <h3 className="text-xl font-semibold mb-2">Component Architecture</h3>
                            <p className="text-white">
                                I build reusable, well-structured components to keep your UI consistent and your codebase maintainable.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}
export default Services;