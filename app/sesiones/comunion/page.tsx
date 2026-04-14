"use client";

import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ComunionPage() {
  return (
    <main className="min-h-screen pt-16 pb-16" style={{backgroundColor: '#FDF8F4'}}>
      <Container>
        <Link 
          href="/sesiones" 
          className="inline-flex items-center gap-2 text-[#D48888] hover:text-[#E8A4A4] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a Sesiones
        </Link>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1 bg-[#E8A4A4]/20 text-[#D48888] rounded-full text-sm mb-4">
              Día Especial
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{fontFamily: "'Rouge Script', cursive", color: '#3D3D3D'}}>Comunión</h2>
            <p className="text-lg text-gray-600 mt-4 leading-relaxed" style={{fontFamily: "'Roboto', sans-serif"}}>
              La comunión es un momento sagrado y especial que marcará un antes y un después. 
              Capturamos la pureza, la inocencia y la solemnidad de este día tan importante. 
              Fotografías elegantes y emotivas que honrarán este recuerdo para siempre.
            </p>
            <div className="mt-8 space-y-4">
              <h3 className="font-semibold mb-3" style={{fontFamily: "'Roboto', sans-serif", color: '#D48888'}}>¿Qué incluye esta sesión?</h3>
              <ul className="space-y-2 text-gray-600" style={{fontFamily: "'Roboto', sans-serif"}}>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{backgroundColor: '#E8A4A4'}}></span>
                  Duración de 2 horas de sesión
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{backgroundColor: '#E8A4A4'}}></span>
                  30 fotografías editadas en alta resolución
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{backgroundColor: '#E8A4A4'}}></span>
                  Estudio y ubicación exterior
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{backgroundColor: '#E8A4A4'}}></span>
                  Álbum digital incluido
                </li>
              </ul>
            </div>
            <Link 
              href="/reservas"
              className="inline-block mt-8 px-8 py-3 rounded-full transition-all hover:scale-105" style={{backgroundColor: '#E8A4A4', color: 'white', fontFamily: "'Roboto', sans-serif"}}
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
            
          </div>
        </div>
      </Container>
    </main>
  );
}
