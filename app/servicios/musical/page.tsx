"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";

export default function MusicalPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=1920&q=80"
            alt="Sesión musical"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/60 to-transparent" />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up">Musical</h1>
          <p className="text-xl md:text-2xl opacity-90 animate-fade-in-up delay-200">
            El ritmo hecho imagen
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 bg-[var(--surface)]">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--brand-dark)] mb-6">
              Sesión Musical
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Sesiones especializadas para músicos, bandas y artistas. Capturamos tu esencia musical 
              con imágenes profesionales para tu portafolio, redes sociales o material promocional. 
              Ya seas cantante, instrumentalista o banda completa.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-white px-6 py-3 rounded-full shadow-lg">
                <span className="font-semibold text-[var(--brand-dark)]">Duración: 2 horas</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-lg">
                <span className="font-semibold text-[var(--brand-dark)]">30+ fotos editadas</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-lg">
                <span className="font-semibold text-[var(--brand-dark)]">Edición profesional</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--accent)]">
        <Container>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Listo para brillar musicalmente?
            </h3>
            <Link
              href="/reservas"
              className="inline-block bg-white text-[var(--brand-dark)] px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              Reservar ahora
            </Link>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
