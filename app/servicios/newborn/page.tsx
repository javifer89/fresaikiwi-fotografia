"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";

export default function NewbornPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80"
            alt="Sesión newborn"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/60 to-transparent" />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up">Newborn</h1>
          <p className="text-xl md:text-2xl opacity-90 animate-fade-in-up delay-200">
            Los primeros días, para siempre
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 bg-[var(--surface)]">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--brand-dark)] mb-6">
              Sesión Newborn
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Las sesiones newborn se realizan durante los primeros 15 días de vida del bebé, 
              cuando duermen profundamente y se pueden posing de manera segura. 
              Capturamos cada detalle diminuto: sus manitas, piececitos, y esa ternura única de los recién nacidos.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-white px-6 py-3 rounded-full shadow-lg">
                <span className="font-semibold text-[var(--brand-dark)]">Duración: 2-3 horas</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-lg">
                <span className="font-semibold text-[var(--brand-dark)]">15-20 fotos editadas</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-lg">
                <span className="font-semibold text-[var(--brand-dark)]">Props incluidos</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Gallery Preview */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl group">
              <Image
                src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&q=80"
                alt="Newborn 1"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl group">
              <Image
                src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600&q=80"
                alt="Newborn 2"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl group">
              <Image
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80"
                alt="Newborn 3"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--accent)]">
        <Container>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Quieres capturar la esencia de tu bebé?
            </h3>
            <p className="text-white/90 mb-8 max-w-xl mx-auto">
              Reserva tu sesión newborn con la mayor brevedad posible, los primeros días son los ideales.
            </p>
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
