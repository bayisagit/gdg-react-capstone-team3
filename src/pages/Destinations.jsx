import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Paris from '../assets/image/destination/Paris.png';
import Swiss from '../assets/image/destination/Swiss.png';
import Thailand from '../assets/image/destination/Thailand.png';
import Taiwan from '../assets/image/destination/Taiwan.png';
import Indonesi from '../assets/image/destination/Indonesi.png';
import Singapore from '../assets/image/destination/Singapore.png';
const Destinations = () => {
  const images = [Paris , Swiss , Thailand , Taiwan , Indonesi , Singapore]
 
    const [packages, setPackages] = useState([]);
  
    useEffect(() => {
      fetch('https://67f175ccc733555e24ad4000.mockapi.io/api/v1/Destinations')
        .then(res => res.json())
        .then(data => setPackages(data))
        .catch(err => console.error('Failed to fetch packages:', err));
    }, []);
  
  const renderStars = (rating) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>★</span>
        ))}
      </div>
    );
  };

  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  return (
    <div className="min-h-screen bg-white">
     
     

      {/* Travel Packages */}
      <section className="container mx-auto py-20 px-4">
        <div className="mb-14 text-left">
          <div className="flex justify-between items-center flex-wrap gap-4 mb-14">
            <div>
              <h2 className="text-4xl font-bold mb-2">Popular Destination</h2>
              <p className="text-gray-600 max-w-2xl text-base">
                Explore our best-in-class, convenient & affordable trips, across several famous locations as below in vibrant images.
              </p>
            </div>
            <button className="bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800 transition-all">
              Discover more
            </button>
          </div>

        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10">
          {packages.slice(0, 6).map((pkg) => (
            <div key={pkg.id} className="bg-white shadow-lg rounded-2xl overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img src={images[pkg.id - 1]} alt={pkg.title} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <span className="text-white text-sm font-medium">{pkg.duration}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-semibold text-black">{pkg.country}</h3>
                  <span className="text-lg font-bold text-black">$ {pkg.price}</span>
                </div>
                <p className="text-gray-600 mb-4 text-sm">{pkg.description}</p>
                <div className="flex items-center justify-between">
                  {renderStars(pkg.rating)}
                  <Link to={`/packages/${pkg.id}`} className="text-sm bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 transition-all"
                  onClick={scrollToTop}
                  >
                    Booking now
                  </Link>
                </div>


              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Destinations;