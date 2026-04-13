"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FRESA = "#E8A4A4";
const FRESA_DARK = "#D48888";
const KIWI = "#7BAE7F";

const slides = [
  {
    id: 1,
    title: "Sesiones de Embarazo",
    subtitle: "Captura la belleza de esta etapa única",
    image: "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/sign/assets/ALEJANDRI_9M-43.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85ODI1NjIyOS0wNDlhLTRkMTgtYTIxNi0wNmIwOTkwODZiMjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvQUxFSkFORFJJXzlNLTQzLmpwZyIsImlhdCI6MTc3NjA5MjM3MywiZXhwIjoxODA3NjI4MzczfQ.RkSpPK35PVuw-r2H8pNlioIWacc9SePthlIyCslVijE"
  },
  {
    id: 2,
    title: "Comuniones y Celebraciones",
    subtitle: "Recuerdos especiales para días únicos",
    image: "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/sign/assets/CARLOTA_2ANYS-147.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85ODI1NjIyOS0wNDlhLTRkMTgtYTIxNi0wNmIwOTkwODZiMjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvQ0FSTE9UQV8yQU5ZUy0xNDcuanBnIiwiaWF0IjoxNzc2MDkyNDAzLCJleHAiOjE4MDc2Mjg0MDN9.3b3dSlrZMR10VmAx7nGUeVnbLDqiW6_U7HP041Om2FA"
  },
  {
    id: 3,
    title: "Exteriores y Familia",
    subtitle: "Sesiones al aire libre llenas de luz",
    image: "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/sign/assets/EDURNE_EXTERIORS-135.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85ODI1NjIyOS0wNDlhLTRkMTgtYTIxNi0wNmIwOTkwODZiMjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvRURVUk5FX0VYVEVSSU9SUy0xMzUuanBnIiwiaWF0IjoxNzc2MDkyNDExLCJleHAiOjE4MDc2Mjg0MTF9.FUhRkuf00p042F0JVcFHH3Ns2sHMssKBMHIiVcgMk4A"
  },
  {
    id: 4,
    title: "Sesiones Infantiles",
    subtitle: "La magia de la infancia en cada foto",
    image: "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/sign/assets/LAURA-1%20copia.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85ODI1NjIyOS0wNDlhLTRkMTgtYTIxNi0wNmIwOTkwODZiMjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvTEFVUkEtMSBjb3BpYS5qcGciLCJpYXQiOjE3NzYwOTI0MjMsImV4cCI6MTgwNzYyODQyM30.YvP_VZcEbbW-T34upOZWeXJ9JAkxs_r3IzmAWF840lI"
  },
  {
    id: 5,
    title: "Retratos con Estilo",
    subtitle: "Captura tu esencia y personalidad",
    image: "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/sign/assets/MARC-41%20copia.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85ODI1NjIyOS0wNDlhLTRkMTgtYTIxNi0wNmIwOTkwODZiMjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvTUFSQy00MSBjb3BpYS5qcGciLCJpYXQiOjE3NzYwOTI0MzIsImV4cCI6MTgwNzYyODQzMn0._yjDS0oRmOCS-sfz7iKD-LTHKb7DbGOsrbh_n34x4co"
  },
  {
    id: 6,
    title: "Sesiones Familiares",
    subtitle: "Momentos en familia para siempre",
    image: "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/sign/assets/PAM_FAMILY-40.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85ODI1NjIyOS0wNDlhLTRkMTgtYTIxNi0wNmIwOTkwODZiMjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvUEFNX0ZBTUlMWS00MC5qcGciLCJpYXQiOjE3NzYwOTI0NDUsImV4cCI6MTgwNzYyODQ0NX0.nOgA2qWnmCYQM3aRFcSyIjeyKYKdOmfnsgww9OVzfMY"
  },
  {
    id: 7,
    title: "Decorados y Temáticas",
    subtitle: "Creaciones únicas para cada sesión",
    image: "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/sign/assets/PROBA_DECORAT-22%20copia%202.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85ODI1NjIyOS0wNDlhLTRkMTgtYTIxNi0wNmIwOTkwODZiMjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvUFJPQkFfREVDT1JBVC0yMiBjb3BpYSAyLmpwZyIsImlhdCI6MTc3NjA5MjQ1NCwiZXhwIjoxODA3NjI4NDU0fQ.7TfvH9dthOKBTJZC_YacnTfZcjgVsOqQ6lpZ2jcRQtA"
  }
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [isAnimating]);

  const goToSlide = (index: number) => {
    if (index !== currentSlide && !isFading) {
      setIsFading(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setTimeout(() => {
          setIsFading(false);
        }, 50);
      }, 400);
    }
  };

  const goToPrev = () => {
    const prev = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(prev);
  };

  const goToNext = () => {
    const next = (currentSlide + 1) % slides.length;
    goToSlide(next);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden -mt-20">
      {/* Background Image - siempre visible */}
      <div 
        className="absolute inset-0 transition-opacity duration-700"
        style={{ opacity: 1 }}
      >
        <img
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          className={`w-full h-full object-cover transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}
        />
      </div>

      {/* Gradient Overlay - rosa fresa a kiwi desde abajo */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            to top, 
            rgba(232, 164, 164, 0.9) 0%, 
            rgba(232, 164, 164, 0.6) 25%, 
            rgba(232, 164, 164, 0.3) 45%, 
            rgba(123, 174, 127, 0.2) 60%, 
            rgba(123, 174, 127, 0.1) 75%,
            transparent 100%
          )`
        }}
      />

      {/* Content */}
      <div className="relative h-full flex flex-col items-start justify-center px-8 md:px-16 lg:px-24 max-w-3xl z-10">
        <div className="animate-fade-in-up">
          <span 
            className="inline-block px-4 py-2 mb-6 text-sm font-medium rounded-full bg-white/90 backdrop-blur-sm"
            style={{ color: FRESA_DARK }}
          >
            Studio Fresaikiwi
          </span>
        </div>
        <h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up delay-100"
          style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.4)' }}
        >
          {slides[currentSlide].title}
        </h1>
        <p 
          className="text-lg md:text-xl text-white/95 mb-8 animate-fade-in-up delay-200"
          style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.4)' }}
        >
          {slides[currentSlide].subtitle}
        </p>
        <div className="flex gap-4 animate-fade-in-up delay-300">
          <a
            href="/sesiones"
            className="px-8 py-4 rounded-full font-medium transition-all hover:scale-105 hover:shadow-xl"
            style={{ backgroundColor: FRESA, color: 'white' }}
          >
            Ver Sesiones
          </a>
          <a
            href="/reservas"
            className="px-8 py-4 rounded-full font-medium border-2 border-white text-white transition-all hover:bg-white hover:text-pink-600"
          >
            Reservar
          </a>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/25 backdrop-blur-sm text-white hover:bg-white/40 transition-all z-20"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/25 backdrop-blur-sm text-white hover:bg-white/40 transition-all z-20"
        aria-label="Slide siguiente"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide 
                ? "bg-white scale-125" 
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
