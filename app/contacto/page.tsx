"use client";

import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { KleapForm } from "@/components/kleap-form";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

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

      {/* Contact Section */}
      <section className="py-20" style={{backgroundColor: 'var(--crema)'}}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-bold mb-6" style={{fontFamily: "'Cormorant Garamond', serif", color: '#3D3D3D'}}>
                ¿Tienes preguntas?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Nos encantaría conocerte. Contáctanos para resolver cualquier duda, 
                pedir presupuesto o simplemente charlar sobre tu próxima sesión fotográfica.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-[var(--fresa)]/20">
                    <MapPin className="w-6 h-6 text-[var(--fresa)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--fresa-dark)]">Ubicación</h4>
                    <p className="text-gray-600">Elda, Alicante</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-[var(--kiwi)]/20">
                    <Phone className="w-6 h-6 text-[var(--kiwi)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--kiwi)]">Teléfono</h4>
                    <p className="text-gray-600">[Tu número]</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-[var(--fresa)]/20">
                    <Mail className="w-6 h-6 text-[var(--fresa)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--fresa-dark)]">Email</h4>
                    <p className="text-gray-600">[Tu email]</p>
                  </div>
                </div>
                
                <div className="pt-6">
                  <h4 className="font-semibold text-[var(--fresa-dark)] mb-4">Síguenos</h4>
                  <div className="flex gap-4">
                    <a href="#" className="p-3 rounded-full bg-[var(--fresa)]/20 text-[var(--fresa)] hover:bg-[var(--fresa)] hover:text-white transition-colors">
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a href="#" className="p-3 rounded-full bg-[var(--kiwi)]/20 text-[var(--kiwi)] hover:bg-[var(--kiwi)] hover:text-white transition-colors">
                      <Facebook className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-xl">
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
