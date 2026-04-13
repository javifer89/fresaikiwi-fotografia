"use client";

import Link from "next/link";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { Heart, Star, Camera, Users, Gift, Music, Crown } from "lucide-react";

const sessions = [
  {
    name: "Embarazo",
    slug: "embarazo",
    description: "Captura la esencia de la espera. Un momento único para recordar la belleza de la maternidad.",
    price: "Desde 120€",
    image: "https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/15730/images/1775852246463-sesion-embarazo.jpg",
    icon: Heart
  },
  {
    name: "Newborn",
    slug: "newborn",
    description: "Los primeros días del bebé, un tesoro. Capturamos cada detalle diminuto con ternura.",
    price: "Desde 150€",
    image: "https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/15730/images/1775852248213-sesion-newborn.jpg",
    icon: Star
  },
  {
    name: "Cumpleaños",
    slug: "cumpleanos",
    description: "Cada año merece ser celebrado. Sesiones temáticas con decoración personalizada.",
    price: "Desde 100€",
    image: "https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/15730/images/1775852250011-sesion-cumpleanos.jpg",
    icon: Gift
  },
  {
    name: "Comunión",
    slug: "comunion",
    description: "Un día especial para siempre. Fotos elegantes que reflejan la importancia del momento.",
    price: "Desde 180€",
    image: "https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/15730/images/1775852252121-sesion-comunion.jpg",
    icon: Crown
  },
  {
    name: "Navidad",
    slug: "navidad",
    description: "Magia y tradición familiar. Decoración festiva para recuerdos inolvidables.",
    price: "Desde 90€",
    image: "https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/15730/images/1775852253979-sesion-navidad.jpg",
    icon: Star
  },
  {
    name: "Familia",
    slug: "familia",
    description: "Vínculos que duran siempre. Momentos auténticos de conexión familiar.",
    price: "Desde 130€",
    image: "https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/15730/images/1775852254446-sesion-familia.jpg",
    icon: Users
  },
  {
    name: "Musical",
    slug: "musical",
    description: "Pasión y ritmo en imagen. Portfolios profesionales para músicos y artistas.",
    price: "Desde 160€",
    image: "https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/15730/images/1775852254429-sesion-musical.jpg",
    icon: Music
  },
  {
    name: "Moros y Cristianos",
    slug: "moros-y-cristianos",
    description: "Tradición y orgullo local. Honramos la riqueza cultural de nuestras fiestas.",
    price: "Desde 140€",
    image: "https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/15730/images/1775852255514-sesion-moros.jpg",
    icon: Camera
  }
];

export default function SesionesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden -mt-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/15730/images/1775852256742-hero-studio.jpg')"}} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up">Nuestras Sesiones</h1>
          <p className="text-xl md:text-2xl opacity-90 animate-fade-in-up delay-200">
            Cada momento merece su historia
          </p>
        </div>
      </section>

      {/* Sessions Grid */}
      <section className="py-20" style={{backgroundColor: 'var(--crema)'}}>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {sessions.map((session, index) => {
              const Icon = session.icon;
              return (
                <Link
                  key={session.slug}
                  href={`/servicios/${session.slug}`}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="aspect-[4/5]">
                    <img
                      src={session.image}
                      alt={session.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <div className="mb-2">
                        <Icon className="w-6 h-6 text-[var(--kiwi)]" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{session.name}</h3>
                      <p className="text-white/80 text-sm mb-3 line-clamp-2">{session.description}</p>
                      <span className="inline-block text-[var(--kiwi)] font-semibold">{session.price}</span>
                      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="inline-flex items-center gap-2 text-sm font-medium text-white bg-[var(--fresa)] px-4 py-2 rounded-full">
                          Ver detalles
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Galería de Trabajos */}
      <section className="py-20" style={{backgroundColor: '#FDF8F4'}}>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color: '#E8A4A4'}}>Nuestros Trabajos</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Descubre algunos de nuestros últimos trabajos. Cada sesión es única y especial.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <img src="https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/sign/assets/ALEJANDRI_9M-43.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85ODI1NjIyOS0wNDlhLTRkMTgtYTIxNi0wNmIwOTkwODZiMjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvQUxFSkFORFJJXzlNLTQzLmpwZyIsImlhdCI6MTc3NjA5MjM3MywiZXhwIjoxODA3NjI4MzczfQ.RkSpPK35PVuw-r2H8pNlioIWacc9SePthlIyCslVijE" alt="Sesión embarazo" className="w-full h-48 md:h-64 object-cover rounded-xl hover:opacity-90 transition-opacity cursor-pointer" />
            <img src="https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/sign/assets/CARLOTA_2ANYS-147.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85ODI1NjIyOS0wNDlhLTRkMTgtYTIxNi0wNmIwOTkwODZiMjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvQ0FSTE9UQV8yQU5ZUy0xNDcuanBnIiwiaWF0IjoxNzc2MDkyNDAzLCJleHAiOjE4MDc2Mjg0MDN9.3b3dSlrZMR10VmAx7nGUeVnbLDqiW6_U7HP041Om2FA" alt="Comunión" className="w-full h-48 md:h-64 object-cover rounded-xl hover:opacity-90 transition-opacity cursor-pointer" />
            <img src="https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/sign/assets/EDURNE_EXTERIORS-135.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85ODI1NjIyOS0wNDlhLTRkMTgtYTIxNi0wNmIwOTkwODZiMjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvRURVUk5FX0VYVEVSSU9SUy0xMzUuanBnIiwiaWF0IjoxNzc2MDkyNDExLCJleHAiOjE4MDc2Mjg0MTF9.FUhRkuf00p042F0JVcFHH3Ns2sHMssKBMHIiVcgMk4A" alt="Exterior" className="w-full h-48 md:h-64 object-cover rounded-xl hover:opacity-90 transition-opacity cursor-pointer" />
            <img src="https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/sign/assets/LAURA-1%20copia.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85ODI1NjIyOS0wNDlhLTRkMTgtYTIxNi0wNmIwOTkwODZiMjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvTEFVUkEtMSBjb3BpYS5qcGciLCJpYXQiOjE3NzYwOTI0MjMsImV4cCI6MTgwNzYyODQyM30.YvP_VZcEbbW-T34upOZWeXJ9JAkxs_r3IzmAWF840lI" alt="Infantil" className="w-full h-48 md:h-64 object-cover rounded-xl hover:opacity-90 transition-opacity cursor-pointer" />
            <img src="https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/sign/assets/MARC-41%20copia.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85ODI1NjIyOS0wNDlhLTRkMTgtYTIxNi0wNmIwOTkwODZiMjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvTUFSQy00MSBjb3BpYS5qcGciLCJpYXQiOjE3NzYwOTI0MzIsImV4cCI6MTgwNzYyODQzMn0._yjDS0oRmOCS-sfz7iKD-LTHKb7DbGOsrbh_n34x4co" alt="Retrato" className="w-full h-48 md:h-64 object-cover rounded-xl hover:opacity-90 transition-opacity cursor-pointer" />
            <img src="https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/sign/assets/PAM_FAMILY-40.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85ODI1NjIyOS0wNDlhLTRkMTgtYTIxNi0wNmIwOTkwODZiMjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvUEFNX0ZBTUlMWS00MC5qcGciLCJpYXQiOjE3NzYwOTI0NDUsImV4cCI6MTgwNzYyODQ0NX0.nOgA2qWnmCYQM3aRFcSyIjeyKYKdOmfnsgww9OVzfMY" alt="Familia" className="w-full h-48 md:h-64 object-cover rounded-xl hover:opacity-90 transition-opacity cursor-pointer" />
            <img src="https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/sign/assets/PROBA_DECORAT-22%20copia%202.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85ODI1NjIyOS0wNDlhLTRkMTgtYTIxNi0wNmIwOTkwODZiMjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvUFJPQkFfREVDT1JBVC0yMiBjb3BpYSAyLmpwZyIsImlhdCI6MTc3NjA5MjQ1NCwiZXhwIjoxODA3NjI4NDU0fQ.7TfvH9dthOKBTJZC_YacnTfZcjgVsOqQ6lpZ2jcRQtA" alt="Decorado" className="w-full h-48 md:h-64 object-cover rounded-xl hover:opacity-90 transition-opacity cursor-pointer" />
          </div>
          
          <p className="text-center text-gray-500 mt-6 text-sm">
            Sube tus fotos al bucket "assets" en Supabase Storage y comparte las URLs conmigo para actualizarlas.
          </p>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20" style={{backgroundColor: '#7BAE7F'}}>
        <Container>
          <div className="text-center text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">¿No sabes qué sesión es la ideal?</h3>
            <p className="text-white/90 mb-8 max-w-xl mx-auto">Escríbenos y te ayudaremos a elegir la sesión perfecta para ti</p>
            <Link href="/contacto" className="inline-block bg-white text-[var(--fresa-dark)] px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              Contactar
            </Link>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
