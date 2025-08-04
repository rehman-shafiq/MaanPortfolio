import { useState } from 'react';

import PropSel1 from '/public/images/propselimg.png';
import PropSel2 from '/public/images/propsel2.png';
import PropSel3 from '/public/images/propsel3.png';
import PropSel4 from '/public/images/propsel4.png';

const Project = () => {
    const images = [
    [PropSel1],[PropSel2],[PropSel3],[PropSel4],
    ]
    const [imageIndex, setImageIndex] = useState(2);
    const rightarrow = () => {
        setImageIndex(prevIndex => (prevIndex + 1) % images.length);
    };
    const leftarrow = () => {
        setImageIndex(prevIndex => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
    };

    return (
        /*   <div className=" relative w-full max-w-250 mx-auto  overflow-hidden shadow-lg mt-10">
              <img
              src={images[imageIndex]}
                  alt="Sample Image"
                  className="w-full h-120 object-cover"
              />
  
              <div className="absolute inset-0 flex items-center justify-between px-4">
                  <button className="bg-white w-20 bg-opacity-100 text-black p-3 rounded-full hover:bg-opacity-100 cursor-pointer"
                      onClick={rightarrow}
                  >
                      &larr;
                  </button>
  
                  <button className="bg-white bg-opacity-100 w-20 text-black p-3 rounded-full hover:bg-opacity-100"
                      onClick={leftarrow}
                  >
                      &rarr;
                  </button>
              </div>
          </div> */
        <div className="mx-auto p-6">
            <div className="flex flex-col md:flex-row items-center justify-center relative w-full  mx-auto  overflow-hidden mt-10">
                <div className="w-full md:w-2/4 jus text-center md:text-left mt-30  ">
                    <h2 className="text-4xl font-bold text-bold mb-2 text-center underline"> PropSel</h2>
                    <h2 className="text-2xl font-sm mb-4 mx-26 mt-2"></h2>
                    <p className="text-gray-900 mb-6 text-center">
                        I Working in PropSel, a dynamic real estate platform. This project showcases my ability to create responsive and user-friendly interfaces using React and Tailwind CSS For Responsive Design.
                    </p>
                </div>
                 <div className=" md:w-2/2">
                <img  src={images[imageIndex]} alt="Responsive Example Image" className="w-full h-120 object-cover" />
                 <div className="  flex items-center justify-between mt-5 mb-5 ">
                  <button className="bg-black w-20 bg-opacity-100 text-white p-3 rounded-full hover:bg-opacity-100 cursor-pointer "
                      onClick={leftarrow}
                      title='left'
                  >
                      &larr;
                  </button>
  
                  <button className="bg-black bg-opacity-100 w-20 text-white p-3 rounded-full hover:bg-opacity-10 cursor-pointer"
                      onClick={rightarrow}
                      title='right'
                  >
                      &rarr;
                  </button>
              </div>
            </div>
            </div>       
        </div>
    );
}
export default Project;