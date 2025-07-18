export function GallerySection() {
  const galleryItems = [
    { id: 1, title: "Crimson Shadows", description: "Digital artistry meets gothic aesthetics" },
    { id: 2, title: "Eternal Darkness", description: "Where light fears to tread" },
    { id: 3, title: "Blood Moon Rising", description: "Celestial power unleashed" },
    { id: 4, title: "Sacred Geometry", description: "Ancient symbols in modern form" },
    { id: 5, title: "Void Walker", description: "Journey through digital realms" },
    { id: 6, title: "Crimson Crown", description: "Reign supreme in darkness" },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-black to-red-950/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="gothic-text text-4xl md:text-5xl text-center mb-16">
          Gallery of Shadows
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square bg-gradient-to-br from-red-900/30 to-black rounded-lg border border-red-800/30 overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:border-red-600/50"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="gothic-text text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    ⚡
                  </div>
                  <h3 className="gothic-text text-xl mb-2">{item.title}</h3>
                  <p className="text-red-300 text-sm px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
