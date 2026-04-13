"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";

export default function MorosCristianosPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1609798554731-cbdbbfcd4a7e?w=1920&q=80"
            alt="Sesión moros y cristianos"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/60 to-transparent" />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up">Moros y Cristianos</h1>
          <p className="text-xl md:text-2xl opacity-90 animate-fade-in-up delay-200">
            Tradición y elegancia festiva
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 bg-[var(--surface)]">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--brand-dark)] mb-6">
              Sesión Moros y Cristianos
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Honra la tradición de las fiestas más emblemáticas con una sesión fotográfica especial. 
              Capturamos el orgullo, la elegancia y la riqueza cultural de las fiestas de Moros y Cristianos. 
              Trajes típicos, banda de música, y momentos únicos.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-white px-6 py-3 rounded-full shadow-lg">
                <span className="font-semibold text-[var(--brand-dark)]">Duración: 2 horas</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-lg">
                <span className="font-semibold text-[var(--brand-dark)]">25+ fotos</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-lg">
                <span className="font-semibold text-[var(--brand-dark)]">Asesoría de trajes</span>
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
              ¿Listo para lucir tu tradición?
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
