"use client";

import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { KleapForm } from "@/components/kleap-form";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

const FRESA = "#E8A4A4";
const FRESA_DARK = "#D48888";
const KIWI = "#7BAE7F";

export default function ContactoPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden -mt-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/15730/images/1775852256742-hero-studio.jpg')"}} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up">Contacto</h1>
          <p className="text-xl md:text-2xl opacity-90 animate-fade-in-up delay-200">
            Estamos aquí para ayudarte
          </p>
        </div>
      </section>

      {/* Contact Section - Restructured with 3 columns top + form below */}
      <section className="py-20" style={{backgroundColor: '#FDF8F4'}}>
        <Container>
          <h2 className="text-4xl font-bold text-center mb-12" style={{fontFamily: "'Cormorant Garamond', serif", color: '#3D3D3D'}}>
            ¿Tienes preguntas?
          </h2>
          
          {/* Top Row - 3 columns: Info, Map, Social */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Info */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full" style={{backgroundColor: `${FRESA}20`}}>
                    <MapPin className="w-6 h-6" style={{color: FRESA}} />
                  </div>
                  <div>
                    <h4 className="font-semibold" style={{color: FRESA_DARK}}>Dirección</h4>
                    <p className="text-gray-600">C/ Constitución nº20, local izquierda, 03570<br/>La Vila Joiosa, Alicante</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full" style={{backgroundColor: `${KIWI}20`}}>
                    <Phone className="w-6 h-6" style={{color: KIWI}} />
                  </div>
                  <div>
                    <h4 className="font-semibold" style={{color: KIWI}}>Teléfono</h4>
                    <p className="text-gray-600">(+34) 672 62 12 91</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full" style={{backgroundColor: `${FRESA}20`}}>
                    <Mail className="w-6 h-6" style={{color: FRESA}} />
                  </div>
                  <div>
                    <h4 className="font-semibold" style={{color: FRESA_DARK}}>Email</h4>
                    <a href="mailto:info@fresaikiwifotografia.com" className="text-gray-600 hover:underline">
                      info@fresaikiwifotografia.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map - Takes more space */}
            <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-lg h-full min-h-[300px] lg:min-h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d390.26204477840867!2d-0.23027608422429072!3d38.50848851283724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd62191ee4c716fd%3A0xc21e2879ce5b91cc!2sFresaikiwi%20Fotografia!5e0!3m2!1ses!2ses!4v1709248393387!5m2!1ses!2ses"
                width="100%" 
                height="100%" 
                style={{border:0, minHeight: '300px'}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Social + Form Row */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Social Sidebar */}
            <div className="lg:col-span-1 flex lg:flex-col items-center lg:items-start gap-4 bg-white p-6 rounded-2xl shadow-lg">
              <h4 className="font-semibold" style={{color: FRESA_DARK}}>Síguenos</h4>
              <div className="flex lg:flex-col gap-3">
                <a href="https://www.instagram.com/fresaikiwi" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full text-white transition-colors hover:scale-110" style={{backgroundColor: FRESA}}>
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://www.facebook.com/fresaikiwi" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full text-white transition-colors hover:scale-110" style={{backgroundColor: KIWI}}>
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-4 bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6" style={{fontFamily: "'Cormorant Garamond', serif", color: '#3D3D3D'}}>
                Envíanos un mensaje
              </h3>
              <KleapForm
                formId="contacto"
                title="Formulario de Contacto"
                fields={[
                  { name: "nombre", label: "Nombre completo", type: "text", required: true },
                  { name: "email", label: "Email", type: "email", required: true },
                  { name: "telefono", label: "Teléfono", type: "tel" },
                  { name: "tipo_sesion", label: "Tipo de sesión", type: "select", options: ["Embarazo", "Newborn", "Cumpleaños", "Comunión", "Navidad", "Familia", "Musical", "Moros y Cristianos", "Otro"], required: true },
                  { name: "mensaje", label: "Mensaje", type: "textarea", required: true }
                ]}
                submitText="Enviar mensaje"
                successMessage="¡Gracias por contactarnos! Te responderemos lo antes posible."
              />
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
