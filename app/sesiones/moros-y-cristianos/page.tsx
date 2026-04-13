"use client";

import { Container } from "@/components/container";
import { Heading, Subheading } from "@/components/heading";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function MorosCristianosPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-[var(--surface)]">
      <Container>
        <Link 
          href="/sesiones" 
          className="inline-flex items-center gap-2 text-[var(--brand-dark)] hover:text-[var(--brand)] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a Sesiones
        </Link>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1 bg-[var(--accent)]/20 text-[var(--accent-dark)] rounded-full text-sm mb-4">
              Sesión Especial
            </span>
            <Heading>Moros y Cristianos</Heading>
            <p className="text-lg text-gray-600 mt-4 leading-relaxed">
              Una sesión fotográfica que celebra la tradición y el color de las fiestas de Moros y Cristianos. 
              Capturamos la elegancia de los trajes típicos, la riqueza de los desfiles y la emoción de esta 
              celebración única.
            </p>
            <div className="mt-8 space-y-4">
              <h3 className="font-semibold text-[var(--brand-dark)]">¿Qué incluye esta sesión?</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[var(--brand)] rounded-full"></span>
                  Duración de 1.5 horas de sesión
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[var(--brand)] rounded-full"></span>
                  20 fotografías editadas en alta resolución
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[var(--brand)] rounded-full"></span>
                  Asesoramiento de estilo y poses
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[var(--brand)] rounded-full"></span>
                  Galería privada online para compartir
                </li>
              </ul>
            </div>
            <Link 
              href="/reservas"
              className="inline-block mt-8 px-8 py-3 bg-[var(--brand)] text-white rounded-full hover:bg-[var(--brand-dark)] transition-colors"
            >
              Reservar esta sesión
            </Link>
          </div>
          
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80" 
              alt="Sesión Moros y Cristianos"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>
      </Container>
    </main>
  );
}
