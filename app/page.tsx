import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* HERO SECTION */}
<section className="relative min-h-screen md:h-screen bg-dimsum-dark flex items-center justify-center overflow-hidden py-12 md:py-0">
  {/* Gambar Background Hero */}
  <div className="absolute inset-0 z-0">
    <Image 
      src="/hero.jpg"
      alt="Bener Bener Dimsum Hero"
      fill
      className="object-cover opacity-50"
      priority
    />
    {/* Overlay Gradient agar teks lebih 'pop' */}
    <div className="absolute inset-0 bg-gradient-to-b from-dimsum-dark/20 via-transparent to-dimsum-dark/60"></div>
  </div>
  
  <div className="relative z-10 text-center px-4 w-full">
    <h1 className="text-5xl sm:text-6xl md:text-[10rem] lg:text-[12rem] font-black text-dimsum-yellow leading-[0.85] uppercase italic drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] break-words">
      DIMSUM<br /> BENER <br /> BENER
    </h1>
    <p className="mt-4 sm:mt-6 bg-dimsum-yellow text-dimsum-dark inline-block px-4 sm:px-8 py-2 font-black uppercase tracking-tighter text-sm sm:text-base rounded-sm rotate-1 shadow-xl">
      Dimsum Nye Bekasi
    </p>
  </div>
</section>

      {/* MENU SECTION */}
      <section id="menu" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">Menu Utama</h2>
            <div className="h-2 sm:h-3 w-32 sm:w-48 bg-dimsum-yellow mt-3 sm:mt-4"></div>
          </div>
          <p className="max-w-xs font-bold text-gray-500 uppercase text-xs sm:text-sm">
            Varian pilihan yang bener-bener jadi favorit semua orang.
          </p>
        </div>
        
        {/* Grid Menu: Diubah menjadi 2 Kolom */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          
          {/* CARD 1: FOTO MENU UMUM */}
          <div className="group">
            <div className="aspect-[4/5] relative rounded-xl sm:rounded-2xl md:rounded-[2.5rem] overflow-hidden border-2 border-transparent group-hover:border-dimsum-yellow transition-all duration-500 shadow-lg sm:shadow-2xl">
              <Image 
                src="/menu.jpeg" 
                alt="Daftar Menu Dimsum"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500" 
              />
            </div>
            <div className="mt-4 sm:mt-6 md:mt-8 space-y-2">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase italic">Pilihan Menu</h3>
              <p className="text-dimsum-dark/60 font-bold uppercase text-xs sm:text-sm tracking-widest">Varian Lengkap & Otentik</p>
            </div>
          </div>

          {/* CARD 2: DIMSUM MENTAI (BEST SELLER) */}
          <div className="group">
            <div className="aspect-[4/5] relative rounded-xl sm:rounded-2xl md:rounded-[2.5rem] overflow-hidden border-2 border-transparent group-hover:border-dimsum-yellow transition-all duration-500 shadow-lg sm:shadow-2xl">
              {/* PLACEHOLDER UNTUK FOTO MENTAI */}
              <div className="absolute inset-0 bg-silver flex items-center justify-center italic text-gray-500">
                {<Image src="/mentai.jpg" alt="Dimsum Mentai" fill className="object-cover" /> }
                [Foto Dimsum Mentai]
              </div>
              
              {/* Badge Best Seller Lebih Menonjol */}
              <div className="absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 z-10">
                <div className="bg-rufous text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-black text-xs sm:text-sm uppercase shadow-xl animate-bounce">
                  Best Seller!
                </div>
              </div>
            </div>
            <div className="mt-4 sm:mt-6 md:mt-8 space-y-2">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase italic text-rufous">Dimsum Mentai</h3>
              <p className="text-dimsum-dark/60 font-bold uppercase text-xs sm:text-sm tracking-widest text-rufous">Favorit No. 1 di Bekasi</p>
            </div>
          </div>

        </div>
      </section>

      {/* ORDER / PROMO SECTION */}
<section id="order" className="relative min-h-[80vh] md:h-[80vh] bg-dimsum-yellow flex items-center overflow-hidden border-y-4 sm:border-y-8 border-dimsum-dark py-12 md:py-0">
  
  {/* Bagian Gambar (Kanan) */}
  <div className="absolute right-0 w-full md:w-1/2 h-full hidden md:block">
    <Image 
      src="/boxlarge.jpeg"
      alt="Promo Spesial Bener Bener Dimsum"
      fill
      className="object-cover"
    />
    {/* Overlay gradasi agar gambar menyatu dengan warna kuning di kiri (opsional) */}
    <div className="absolute inset-0 bg-gradient-to-r from-dimsum-yellow/40 to-transparent md:from-dimsum-yellow/20"></div>
  </div>
  
  {/* Bagian Konten (Kiri) */}
  <div className="relative z-10 px-4 sm:px-6 md:px-24 w-full">
    <div className="bg-dimsum-dark text-dimsum-yellow p-6 sm:p-10 md:p-16 rotate-[-3deg] shadow-lg sm:shadow-[20px_20px_0px_0px_rgba(0,0,0,0.2)] max-w-2xl border-2 border-white/10">
      <h2 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase leading-[0.85] mb-4 sm:mb-6 text-white">
        TERIMA <br /> PESANAN
      </h2>
      <p className="font-bold text-base sm:text-xl md:text-2xl mb-6 sm:mb-8 uppercase tracking-tighter text-dimsum-yellow">
        UNTUK ACARA<br /> 
        <span className="text-white">ATAU PESTA SEMUANYA BISA!</span>
      </p>
      
      {/* Tombol Order */}
      <a 
        href="https://wa.me/+6285893045044"
        target="_blank"
        className="inline-block bg-dimsum-yellow text-dimsum-dark px-6 sm:px-10 py-3 sm:py-4 font-black uppercase text-sm sm:text-base hover:scale-105 transition-transform active:scale-95 shadow-md sm:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.3)] min-h-[44px] sm:min-h-12 flex items-center justify-center"
      >
        Pesan via WhatsApp
      </a>
    </div>
  </div>
</section>

      {/* LOCATION SECTION */}
<section id="location" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white text-center">
  <div className="max-w-6xl mx-auto">
    <div className="mb-12 sm:mb-16">
      <h2 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase mb-3 sm:mb-4 tracking-tighter">Mampir Langsung</h2>
      <p className="text-base sm:text-lg md:text-xl font-bold text-dimsum-dark/60 uppercase">Bekasi Timur</p>
    </div>

    {/* Iframe Container dengan Styling Rapih */}
    <div className="relative aspect-video w-full rounded-2xl sm:rounded-3xl md:rounded-[3rem] border-4 sm:border-8 border-dimsum-dark shadow-lg sm:shadow-[20px_20px_0px_0px_rgba(250,204,21,1)] overflow-hidden">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.481718962801!2d106.99953967399118!3d-6.331579093658007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6993006a08f0c5%3A0x20d14cc3fd86a456!2sDimsum%20bener%20bener!5e0!3m2!1sen!2sid!4v1778012611291!5m2!1sen!2sid" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        className="grayscale hover:grayscale-0 transition-all duration-700"
      ></iframe>
    </div>

    <div className="mt-12 sm:mt-16 flex flex-col md:flex-row justify-center gap-6 sm:gap-8">
       <div className="bg-dimsum-dark text-white p-6 sm:p-8 rounded-lg sm:rounded-2xl flex-1">
          <h4 className="font-black uppercase text-dimsum-yellow mb-2 text-sm sm:text-base">Jam Operasional</h4>
          <p className="font-bold text-sm sm:text-base">Setiap Hari: 15.00 - 22.00 WIB</p>
       </div>
       
    </div>
  </div>
</section>
    </main>
  );
}