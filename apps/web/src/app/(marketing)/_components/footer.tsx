export function Footer() {
  return (
    <footer className="py-12 px-4 md:px-8 bg-gradient-to-t from-red-950/20 to-transparent border-t border-red-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="gothic-text text-2xl mb-4">SALVA-JE</h3>
            <p className="text-red-300 text-sm leading-relaxed">
              Embrace the darkness. Unleash your creativity. Join the eternal
              dance between light and shadow.
            </p>
          </div>
          
          <div>
            <h4 className="gothic-text text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-red-300 text-sm">
              <li><a href="/login" className="hover:text-red-200 transition-colors">Sign In</a></li>
              <li><a href="/signup" className="hover:text-red-200 transition-colors">Sign Up</a></li>
              <li><a href="#about" className="hover:text-red-200 transition-colors">About</a></li>
              <li><a href="#gallery" className="hover:text-red-200 transition-colors">Gallery</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="gothic-text text-lg mb-4">Follow the Shadows</h4>
            <div className="flex gap-4">
              <a href="#" className="text-red-500 hover:text-red-400 transition-colors text-xl">
                📘
              </a>
              <a href="#" className="text-red-500 hover:text-red-400 transition-colors text-xl">
                📷
              </a>
              <a href="#" className="text-red-500 hover:text-red-400 transition-colors text-xl">
                🐦
              </a>
              <a href="#" className="text-red-500 hover:text-red-400 transition-colors text-xl">
                💼
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-red-800/30 text-center">
          <p className="text-red-400 text-sm">
            © 2025 SALVA-JE. All rights reserved. Darkness eternal.
          </p>
        </div>
      </div>
    </footer>
  );
}
