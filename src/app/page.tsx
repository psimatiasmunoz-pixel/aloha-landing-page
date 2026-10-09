import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const WAP_LINK = "https://wa.me/56972225432?text=Hola%20Aloha%20%F0%9F%91%8B%20Vi%20su%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20las%20clases%20de%20baile.";

  return (
    <>
      {/* BACKGROUND EFFECTS */}
      <div className="splatters-bg"></div>

      {/* FLOATING WHATSAPP */}
      <a href={WAP_LINK} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 bg-brand-green-bright text-dark p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center font-bold text-2xl">
        📱
      </a>

      {/* NAVBAR */}
      <nav className="fixed w-full z-40 bg-dark/90 backdrop-blur-md border-b border-brand-purple/30 py-3 px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <Image src="/images/aloha-logo.jpg" alt="Aloha Crew Logo" width={48} height={48} className="rounded-full ring-2 ring-brand-purple-bright/50 group-hover:ring-brand-pink-bright transition-all" />
          <span className="font-marker text-2xl tracking-widest text-white group-hover:text-brand-pink-bright transition-colors hidden sm:inline">ALOHA CREW</span>
        </Link>
        <div className="hidden md:flex gap-6 font-semibold text-sm">
          <Link href="#clases" className="hover:text-brand-green-bright transition-colors">Clases</Link>
          <Link href="#galeria" className="hover:text-brand-yellow-bright transition-colors">Comunidad</Link>
          <Link href="#ubicacion" className="hover:text-brand-pink-bright transition-colors">Ubicación</Link>
        </div>
        <a href={WAP_LINK} target="_blank" rel="noopener noreferrer" className="bg-brand-pink-bright text-white px-5 py-2 rounded-full font-bold btn-hover-fx text-sm">
          Consultar
        </a>
      </nav>

      <main className="flex flex-col items-center overflow-hidden">
        
        {/* 1. HERO */}
        <section className="relative w-full min-h-[90vh] flex flex-col justify-center items-center text-center px-4 pt-20">
          <div className="absolute inset-0 z-0">
            <Image src="/images/media_1791174061486.jpg" alt="Clase Aloha" fill className="object-cover opacity-30 mix-blend-luminosity" priority />
            <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/40 to-dark"></div>
          </div>
          
          <div className="z-10 max-w-4xl flex flex-col items-center">
            {/* Logo Hero */}
            <div className="mb-8 relative">
              <div className="absolute inset-0 bg-brand-purple/30 rounded-full blur-3xl scale-150"></div>
              <Image src="/images/aloha-logo.jpg" alt="Aloha Crew - Espíritu en Movimiento" width={220} height={220} className="relative rounded-full ring-4 ring-brand-purple-bright/40 shadow-[0_0_60px_rgba(92,26,96,0.5)]" priority />
            </div>
            <div className="bg-brand-purple-bright/20 border border-brand-purple-bright text-brand-yellow-bright px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-6 backdrop-blur-sm">
              📍 LINARES, CHILE
            </div>
            <h1 className="font-marker text-5xl md:text-7xl lg:text-8xl mb-4 leading-tight">
              BAILA. <span className="text-brand-pink-bright">DISFRUTA.</span> CONECTA.
            </h1>
            <p className="text-xl md:text-2xl font-bold mb-6 text-gray-200">
              Clases de baile urbano en Linares para niños, jóvenes y adultos.
            </p>
            <p className="text-gray-400 mb-10 max-w-2xl mx-auto md:text-lg">
              En Aloha creemos que bailar es mucho más que aprender pasos. Es moverte, expresarte, ganar confianza y formar parte de una comunidad donde puedes ser tú.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href={WAP_LINK} target="_blank" rel="noopener noreferrer" className="bg-brand-pink-bright text-white px-8 py-4 rounded-full font-bold text-lg btn-hover-fx shadow-[0_0_20px_rgba(232,29,110,0.4)]">
                Reserva tu clase
              </a>
              <a href={WAP_LINK} target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-brand-yellow-bright text-brand-yellow-bright px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-yellow-bright hover:text-dark transition-colors">
                Hablar por WhatsApp
              </a>
            </div>
            <p className="mt-12 font-marker text-brand-yellow-bright/60 text-xl rotate-[-2deg]">Espíritu en movimiento</p>
          </div>
        </section>

        {/* 2. ¿QUÉ ES ALOHA? */}
        <section className="w-full max-w-6xl px-6 py-20 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-marker text-4xl md:text-5xl mb-6 text-brand-pink-bright">Más que clases de baile</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Aloha es una academia de baile en Linares donde la música, el movimiento y la comunidad se encuentran. Creamos un espacio para aprender, disfrutar y expresarse a través del baile, sin importar si estás comenzando o ya tienes experiencia.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: 'APRENDE', c: 'brand-yellow-bright', d: 'Desarrolla coordinación, ritmo y nuevas habilidades.' },
              { t: 'MUÉVETE', c: 'brand-green-bright', d: 'Disfruta de una actividad física dinámica y entretenida.' },
              { t: 'CONECTA', c: 'brand-pink-bright', d: 'Conoce personas y forma parte de una comunidad.' },
              { t: 'EXPRÉSATE', c: 'brand-purple-bright', d: 'Gana confianza y encuentra tu propio estilo.' }
            ].map((item, i) => (
              <div key={i} className="bg-card p-8 rounded-2xl border border-gray-800 hover:border-gray-600 transition-colors group">
                <h3 className={`font-marker text-2xl mb-4 text-${item.c} group-hover:scale-105 transition-transform`}>{item.t}</h3>
                <p className="text-gray-400">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. CLASES */}
        <section id="clases" className="w-full py-20 bg-dark/50 relative z-10 border-y border-gray-900">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-marker text-5xl mb-12 text-center">Encuentra <span className="text-brand-yellow-bright">tu clase</span></h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Urban Kids */}
              <div className="bg-gradient-to-br from-card to-dark p-1 rounded-3xl group">
                <div className="bg-card h-full p-8 md:p-10 rounded-[22px] border border-brand-green/30 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/10 rounded-full blur-3xl"></div>
                  <h3 className="font-marker text-4xl text-brand-green-bright mb-4">URBAN KIDS</h3>
                  <p className="text-gray-300 mb-6">
                    Clases de baile urbano especialmente diseñadas para niños y niñas, donde aprenden coreografías, coordinación, musicalidad y expresión corporal mientras se divierten.
                  </p>
                  <ul className="grid grid-cols-2 gap-2 mb-8 text-sm text-gray-400 font-semibold">
                    <li className="flex items-center gap-2"><span className="text-brand-green-bright">✓</span> Coordinación</li>
                    <li className="flex items-center gap-2"><span className="text-brand-green-bright">✓</span> Ritmo</li>
                    <li className="flex items-center gap-2"><span className="text-brand-green-bright">✓</span> Confianza</li>
                    <li className="flex items-center gap-2"><span className="text-brand-green-bright">✓</span> Diversión</li>
                    <li className="flex items-center gap-2"><span className="text-brand-green-bright">✓</span> Socialización</li>
                  </ul>
                  <a href={WAP_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-brand-green-bright text-dark px-6 py-3 rounded-full font-bold btn-hover-fx">
                    Consultar cupos
                  </a>
                </div>
              </div>

              {/* Baile Urbano */}
              <div className="bg-gradient-to-br from-card to-dark p-1 rounded-3xl group">
                <div className="bg-card h-full p-8 md:p-10 rounded-[22px] border border-brand-pink/30 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-pink/10 rounded-full blur-3xl"></div>
                  <h3 className="font-marker text-4xl text-brand-pink-bright mb-4">BAILE URBANO</h3>
                  <p className="text-gray-300 mb-8">
                    Clases dinámicas con música, coreografías y movimiento para quienes quieren aprender a bailar, mantenerse activos y disfrutar.
                  </p>
                  <p className="text-sm text-brand-pink-bright/80 font-bold mb-8 italic">
                    Sin niveles estrictos, ven a aprender desde cero o a mejorar tu estilo.
                  </p>
                  <a href={WAP_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-brand-pink-bright text-white px-6 py-3 rounded-full font-bold btn-hover-fx mt-auto">
                    Consultar horarios
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. EXPERIENCIA ALOHA */}
        <section id="galeria" className="w-full py-20 relative z-10 overflow-hidden">
          <h2 className="font-marker text-4xl md:text-6xl text-center mb-16">Así se vive <span className="text-brand-purple-bright">Aloha</span></h2>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-[1400px] mx-auto px-4">
            <div className="w-full md:w-[48%] lg:w-[32%] aspect-[4/3] relative rounded-2xl overflow-hidden group border-2 border-dark hover:border-brand-pink-bright transition-colors">
              <Image src="/images/media_1791174061486.jpg" alt="Comunidad Aloha" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-dark/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="font-marker text-3xl text-brand-pink-bright">Muévete</span>
              </div>
            </div>
            <div className="w-full md:w-[48%] lg:w-[32%] aspect-[4/3] relative rounded-2xl overflow-hidden group border-2 border-dark hover:border-brand-green-bright transition-colors">
              <Image src="/images/media_1791174061484.jpg" alt="Urban Kids Aloha" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-dark/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="font-marker text-3xl text-brand-green-bright">Exprésate</span>
              </div>
            </div>
            <div className="w-full md:w-[48%] lg:w-[32%] aspect-[4/3] relative rounded-2xl overflow-hidden group border-2 border-dark hover:border-brand-yellow-bright transition-colors">
              <Image src="/images/media_1791174061428.jpg" alt="Clase de Baile" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-dark/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="font-marker text-3xl text-brand-yellow-bright">Conecta</span>
              </div>
            </div>
            <div className="w-full md:w-[48%] lg:w-[48%] aspect-video relative rounded-2xl overflow-hidden group border-2 border-dark hover:border-brand-pink-bright transition-colors mt-4">
              <Image src="/images/media_1791174061421.jpg" alt="Coreografía" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-dark/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="font-marker text-4xl text-white">Disfruta</span>
              </div>
            </div>
            <div className="w-full md:w-[48%] lg:w-[48%] aspect-video relative rounded-2xl overflow-hidden group border-2 border-dark hover:border-brand-green-bright transition-colors mt-4">
              <Image src="/images/media_1791174061415.jpg" alt="Estudio de baile" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-dark/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="font-marker text-4xl text-brand-green-bright">Sé parte de Aloha</span>
              </div>
            </div>
          </div>
        </section>

        {/* 5. BENEFICIOS */}
        <section className="w-full max-w-5xl px-6 py-20 z-10 text-center">
          <h2 className="font-marker text-3xl md:text-4xl mb-4">No necesitas saber bailar para empezar</h2>
          <p className="text-2xl md:text-3xl font-bold text-brand-yellow-bright mb-16">"Solo necesitas las ganas de moverte."</p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { t: 'Actividad física', d: 'Mejora coordinación y movilidad.' },
              { t: 'Confianza', d: 'Supera tus propios límites.' },
              { t: 'Bienestar', d: 'Libera energía y disfruta.' },
              { t: 'Comunidad', d: 'Conoce personas con tu misma energía.' },
              { t: 'Diversión', d: 'Entrena sin sentir que haces rutina.' }
            ].map((b, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center text-2xl mb-4 text-brand-pink-bright">⚡</div>
                <h4 className="font-bold mb-2">{b.t}</h4>
                <p className="text-xs text-gray-400">{b.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. SOBRE LA PROFESORA */}
        <section className="w-full py-20 bg-card border-y border-gray-900 z-10">
          <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="font-marker text-4xl mb-2 text-brand-pink-bright">Conoce a quien está detrás de Aloha</h2>
              <h3 className="text-2xl font-bold mb-2">Caro Muñoz Albornoz</h3>
              <p className="text-brand-green-bright font-semibold mb-6">Profesora de Educación Física y bailarina.</p>
              <p className="text-gray-300 text-lg leading-relaxed border-l-4 border-brand-yellow-bright pl-4">
                "Aloha nace desde la pasión por el movimiento, el baile y la actividad física. Su propósito es crear un espacio donde cada persona pueda disfrutar, aprender y conectar con su cuerpo a través de la música."
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-brand-purple-bright p-2 shadow-[0_0_40px_rgba(92,26,96,0.5)]">
                <div className="w-full h-full relative rounded-full overflow-hidden">
                  <Image src="/images/caro-munoz.jpg" alt="Caro Muñoz Albornoz - Profesora de Aloha Crew" fill className="object-cover object-top" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. COMUNIDAD */}
        <section className="w-full py-24 px-6 z-10 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-pink-bright/5 rounded-full blur-[100px] -z-10"></div>
          <h2 className="font-marker text-5xl mb-6">Una <span className="text-brand-pink-bright">comunidad</span> que se mueve junta</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-16">
            En Aloha no vienes solamente a aprender una coreografía. Vienes a compartir, reír, desafiarte y sentirte parte de algo.
          </p>
          
          <div className="max-w-4xl mx-auto bg-card p-8 rounded-2xl border border-gray-800">
            <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Lo que dice nuestra comunidad</p>
            <div className="flex justify-center gap-2 mb-4">
              {[1,2,3,4,5].map(s => <span key={s} className="text-brand-yellow-bright text-xl">★</span>)}
            </div>
            <p className="text-lg italic text-gray-300">"Próximamente testimonios de nuestros alumnos..."</p>
          </div>
        </section>

        {/* 8. CONVERSIÓN */}
        <section className="w-full py-24 bg-gradient-to-br from-brand-purple via-brand-purple-bright to-brand-pink text-white text-center z-10 px-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Image src="/images/aloha-logo.jpg" alt="" fill className="object-contain" />
          </div>
          <div className="relative z-10">
            <h2 className="font-marker text-6xl md:text-8xl mb-6">¿Lista para empezar?</h2>
            <p className="text-2xl font-bold max-w-2xl mx-auto mb-12 text-white/90">
              No importa si nunca has bailado. Escríbenos, consulta por horarios y encuentra la clase ideal para ti.
            </p>
            <a href={WAP_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-brand-yellow-bright text-dark px-10 py-5 rounded-full font-black text-2xl hover:scale-105 hover:bg-white transition-all duration-300 shadow-2xl">
              Quiero bailar
            </a>
          </div>
        </section>

        {/* 9. UBICACIÓN & 10. INSTAGRAM */}
        <section id="ubicacion" className="w-full max-w-7xl mx-auto px-6 py-20 z-10 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-marker text-4xl mb-6 text-brand-green-bright">Encuéntranos en Linares</h2>
            <div className="bg-card p-6 rounded-2xl border border-gray-800 mb-6">
              <p className="font-bold text-xl mb-2">Academia Aloha</p>
              <p className="text-gray-400 mb-4">📍 Yumbel 817, Linares, Región del Maule, Chile.</p>
              <div className="w-full h-[250px] rounded-xl overflow-hidden mb-6 border border-gray-700">
                <iframe 
                  src="https://www.google.com/maps?q=Yumbel+817,+Linares,+Chile&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <a href={WAP_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-dark font-bold px-6 py-2 rounded-full hover:bg-brand-green-bright transition-colors">
                Hablar por WhatsApp
              </a>
            </div>
          </div>
          <div>
            <h2 className="font-marker text-4xl mb-6 text-brand-yellow-bright">Síguenos y vive Aloha</h2>
            <div className="bg-card p-6 rounded-2xl border border-gray-800 text-center flex flex-col items-center justify-center h-[200px]">
              <span className="font-bold text-2xl mb-4">@aloha.ea</span>
              <a href="https://instagram.com/aloha.ea" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 text-white font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
                Seguir en Instagram
              </a>
            </div>
          </div>
        </section>

        {/* 11. FAQ */}
        <section className="w-full max-w-3xl mx-auto px-6 py-20 z-10">
          <h2 className="font-marker text-4xl text-center mb-12">Preguntas <span className="text-brand-pink-bright">Frecuentes</span></h2>
          <div className="space-y-4">
            {[
              { q: '¿Necesito experiencia para asistir?', a: 'No. Las clases están pensadas para que puedas integrarte según tu nivel y experiencia.' },
              { q: '¿Qué ropa debo usar?', a: 'Ropa cómoda que permita moverte libremente y zapatillas adecuadas para actividad física.' },
              { q: '¿Debo llevar algo?', a: 'Se recomienda llevar agua y una pequeña toalla personal.' },
              { q: '¿Hay clases para niños?', a: 'Sí. Aloha cuenta con Urban Kids, clases de baile urbano especialmente orientadas a niños y niñas.' },
              { q: '¿Cómo reservo?', a: 'Puedes consultar disponibilidad y reservar directamente por WhatsApp.' }
            ].map((faq, i) => (
              <details key={i} className="group bg-card border border-gray-800 rounded-xl overflow-hidden">
                <summary className="p-6 font-bold cursor-pointer flex justify-between items-center outline-none">
                  {faq.q}
                  <span className="text-brand-pink-bright group-open:rotate-45 transition-transform text-2xl">+</span>
                </summary>
                <div className="p-6 pt-0 text-gray-400 border-t border-gray-800 mt-2">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

      </main>

      {/* 12. FOOTER */}
      <footer className="w-full bg-dark border-t border-brand-purple/30 py-12 text-center relative z-10 px-6">
        <Image src="/images/aloha-logo.jpg" alt="Aloha Crew" width={80} height={80} className="mx-auto rounded-full mb-4 ring-2 ring-brand-purple-bright/40" />
        <h2 className="font-marker text-3xl text-white mb-1">ALOHA CREW</h2>
        <p className="text-brand-yellow-bright font-marker text-lg mb-8">Espíritu en movimiento</p>
        
        <p className="text-gray-400 mb-1">Clases de baile urbano</p>
        <p className="text-gray-400 mb-8">📍 Linares, Chile</p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
          <a href="https://instagram.com/aloha.ea" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-pink-bright transition-colors">
            Instagram: @aloha.ea
          </a>
          <a href={WAP_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-green-bright transition-colors">
            WhatsApp: +56 9 7222 5432
          </a>
        </div>
        
        <a href={WAP_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-brand-pink-bright text-white px-8 py-3 rounded-full font-bold btn-hover-fx">
          Consultar clases
        </a>
      </footer>
    </>
  );
}
