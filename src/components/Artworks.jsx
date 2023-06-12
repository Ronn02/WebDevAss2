import React from 'react';
import img1 from '../assets/content1.jpg'
import img2 from '../assets/content2.jpg'
import img3 from '../assets/content3.jpg'
import img5 from '../assets/content5.jpg'
import img7 from '../assets/content7.jpg'
import img8 from '../assets/content8.jpg'
import img9 from '../assets/content9.jpg'
const Artworks = () => {
  return (
    <div className="bg-gray-200 w-full h-1000 flex justify-center items-center">
      <div className="text-black">
        <hr className="w-800 mb-50 h-3 bg-black" />
        <h1 className="text-center mb-50">ARTWORKS</h1>
        <table className="bg-gray-200">
          <tr>
            <td className="p-20"><img src={img1} alt="" /></td>
            <td className="p-20"><img src={img2} alt="" /></td>
            <td className="p-20"><img src={img3} alt="" /></td>
          </tr>
          <tr>
            <td className="p-20"><img src={img5} alt="" /></td>
            <td className="p-20"><img src={img7} alt="" /></td>
            <td className="p-20"><img src={img9} alt="" /></td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Artworks;
