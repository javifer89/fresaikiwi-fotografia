"use client";

import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ComunionPage() {
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
              Día Especial
            </span>
            <Heading>Comunión</Heading>
            <p className="text-lg text-gray-600 mt-4 leading-relaxed">
              La comunión es un momento sagrado y especial que marcará un antes y un después. 
              Capturamos la pureza, la inocencia y la solemnidad de este día tan importante. 
              Fotografías elegantes y emotivas que honrarán este recuerdo para siempre.
            </p>
            <div className="mt-8 space-y-4">
              <h3 className="font-semibold text-[var(--brand-dark)]">¿Qué incluye esta sesión?</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[var(--brand)] rounded-full"></span>
                  Duración de 2 horas de sesión
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[var(--brand)] rounded-full"></span>
                  30 fotografías editadas en alta resolución
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[var(--brand)] rounded-full"></span>
                  Estudio y ubicación exterior
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[var(--brand)] rounded-full"></span>
                  Álbum digital incluido
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
              src="https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/15730/images/1775852252121-sesion-comunion.jpg" 
              alt="Sesión Comunión"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>
      </Container>
    </main>
  );
}
