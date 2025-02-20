import React from 'react';

const GoogleReviewSection = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
      <div className="flex justify-center items-center space-x-6">
        <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden">
          <img src="/path-to-image.jpg" alt="Client" className="object-cover w-full h-full" />
        </div>
        <div className="max-w-lg">
          <p className="text-xl">"The caregivers were so attentive, and they took wonderful care of my mother. Highly recommend!"</p>
          <p className="mt-2 text-sm text-gray-500">- Jane Doe</p>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewSection;
