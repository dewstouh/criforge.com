export function AboutSection() {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="gothic-text text-4xl md:text-5xl text-center mb-12">
          About the Realm
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-red-200 text-lg leading-relaxed mb-6">
              In the shadows of digital creation, SALVA-JE emerges as a beacon
              for those who dare to explore the darker aesthetics of design.
            </p>
            <p className="text-red-200 text-lg leading-relaxed mb-6">
              Our platform transcends conventional boundaries, offering a unique
              blend of gothic artistry and cutting-edge technology.
            </p>
            <p className="text-red-200 text-lg leading-relaxed">
              Join us in the eternal dance between light and darkness, where
              creativity knows no bounds.
            </p>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-red-900/20 to-black rounded-lg border border-red-800/30 flex items-center justify-center">
              <div className="text-center">
                <div className="gothic-text text-6xl mb-4">⚡</div>
                <p className="text-red-300 text-lg">Power Awaits</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
