"use client";

import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { KleapForm } from "@/components/kleap-form";
import { Calendar, Clock, Gift } from "lucide-react";

export default function ReservasPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden -mt-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/15730/images/1775852256742-hero-studio.jpg')"}} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up">Reservas</h1>
          <p className="text-xl md:text-2xl opacity-90 animate-fade-in-up delay-200">
            ¡Da el primer paso hacia tu sesión perfecta!
          </p>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20" style={{backgroundColor: 'var(--crema)'}}>
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="text-center p-6">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[var(--fresa)] text-white flex items-center justify-center text-xl font-bold">1</div>
                <h3 className="font-semibold text-[var(--fresa-dark)] mb-2">Rellena el formulario</h3>
                <p className="text-sm text-gray-600">Dinos qué tipo de sesión buscas y tus preferencias</p>
              </div>
              <div className="text-center p-6">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[var(--kiwi)] text-white flex items-center justify-center text-xl font-bold">2</div>
                <h3 className="font-semibold text-[var(--kiwi)] mb-2">Te contactamos</h3>
                <p className="text-sm text-gray-600">Confirmaremos disponibilidad y te enviaremos presupuesto</p>
              </div>
              <div className="text-center p-6">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[var(--fresa)] text-white flex items-center justify-center text-xl font-bold">3</div>
                <h3 className="font-semibold text-[var(--fresa-dark)] mb-2">¡Listo!</h3>
                <p className="text-sm text-gray-600">Reservamos tu fecha y empezamos a planificar</p>
              </div>
            </div>

            {/* Booking Form */}
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
              <h2 className="text-3xl font-bold text-center mb-8" style={{fontFamily: "'Cormorant Garamond', serif", color: '#3D3D3D'}}>
                Solicita tu reserva
              </h2>
              
              <KleapForm
                formId="reservas"
                title="Formulario de Reserva"
                fields={[
                  { name: "nombre", label: "Nombre completo", type: "text", required: true },
                  { name: "email", label: "Email", type: "email", required: true },
                  { name: "telefono", label: "Teléfono", type: "tel", required: true },
                  { name: "sesion", label: "Tipo de sesión", type: "select", options: ["Embarazo", "Newborn", "Cumpleaños", "Comunión", "Navidad", "Familia", "Musical", "Moros y Cristianos"], required: true },
                  { name: "fecha_deseada", label: "Fecha deseada (aproximada)", type: "text", required: true },
                  { name: "comentarios", label: "Comentarios o preferencias", type: "textarea" }
                ]}
                submitText="Solicitar reserva"
                successMessage="¡Gracias! Te contactaremos pronto para confirmar tu sesión."
              />
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg">
                <Calendar className="w-8 h-8 text-[var(--fresa)] flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-[var(--fresa-dark)] mb-1">Antelación</h4>
                  <p className="text-sm text-gray-600">Recomendamos reservar con 2-4 semanas de antelación para asegurar disponibilidad.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg">
                <Gift className="w-8 h-8 text-[var(--kiwi)] flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-[var(--kiwi)] mb-1">Descuentos</h4>
                  <p className="text-sm text-gray-600">Si reservas múltiples sesiones o nos recomiendas, ¡obtén descuentos especiales!</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
