import React from 'react'

const Destinations = () => {
const destinations = [
  {
    title: 'Paris',
    price: '$299.00/2days',
    img: '/images/paris.png',
  },
  {
    title: 'Swiss',
    price: '$299.00/3days',
    img: '/images/swiss.png',
  },
  {
    title: 'Thailand',
    price: '$299.00/3days',
    img: '/images/thailand.png',
  },
  {
    title: 'Taiwan',
    price: '$299.00/3days',
    img: '/images/taiwan.png',
  },
  {
    title: 'Indonesi',
    price: '$299.00/3days',
    img: '/images/indonesia.png',
  },
  {
    title: 'Singapore',
    price: '$299.00/3days',
    img: '/images/singapore.png',
  },
];
  return (
    <section className="px-8 py-16">
      <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-4xl font-bold">Popular Destination</h2>
          <p className="text-gray-500 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </div>
        <button className="bg-black text-white px-6 py-3 rounded-full">
          Discover more
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((item, idx) => (
          <div key={idx} className="border rounded-xl overflow-hidden shadow hover:shadow-lg">
            <img src={item.img} alt={item.title} className="w-full h-[220px] object-cover" />
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <span className="text-gray-600">{item.price}</span>
              </div>
              <p className="text-gray-500 text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-1 text-yellow-400">
                  ★ ★ ★ ★ ★ 
                </div>
                <button className="bg-black text-white px-4 py-2 rounded-full text-sm">
                  Booking now 
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Destinations
