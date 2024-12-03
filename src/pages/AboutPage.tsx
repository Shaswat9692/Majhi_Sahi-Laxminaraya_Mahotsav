import React from 'react';

export function AboutPage() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">About Our Pooja</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div 
              className="h-80 bg-cover bg-center"
              style={{ 
                backgroundImage: 'url("https://images.unsplash.com/photo-1600697395543-ef3ee6e9af7b?auto=format&fit=crop&q=80")'
              }}
            />
            
            <div className="p-8">
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Our History</h2>
                <p className="text-gray-600 mb-4">
                  For over two decades, our community has been coming together to celebrate this sacred pooja. 
                  What started as a small gathering has grown into one of the largest cultural celebrations in our area, 
                  bringing together hundreds of devotees each year.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Cultural Significance</h2>
                <p className="text-gray-600 mb-4">
                  This pooja holds deep cultural and spiritual significance in our tradition. It represents the coming 
                  together of our community to seek blessings, celebrate our heritage, and pass on our cultural values 
                  to the next generation.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Our Committee's Role</h2>
                <p className="text-gray-600 mb-4">
                  Our committee works tirelessly throughout the year to organize this grand celebration. From coordinating 
                  with priests and performers to managing logistics and ensuring every detail is perfect, we are committed 
                  to creating a memorable experience for all participants.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}