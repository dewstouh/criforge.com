import { ContactForm } from "./contact-form";

export function ContactSection() {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="gothic-text text-4xl md:text-5xl text-center mb-16">
          Summon Us
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="gothic-text text-2xl mb-6">Reach Into the Void</h3>
            <p className="text-red-200 text-lg leading-relaxed mb-6">
              Have questions that echo in the darkness? Ready to embark on your
              journey with SALVA-JE? We await your call.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="text-red-500 text-xl">📧</div>
                <span className="text-red-300">contact@salva-je.com</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-red-500 text-xl">🌙</div>
                <span className="text-red-300">Available 24/7 in the shadows</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-red-500 text-xl">⚡</div>
                <span className="text-red-300">Lightning-fast responses</span>
              </div>
            </div>
          </div>
          
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
