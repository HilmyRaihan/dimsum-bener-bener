import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* HERO SECTION */}
<section className="relative h-screen bg-dimsum-dark flex items-center justify-center overflow-hidden">
  {/* Gambar Background Hero */}
  <div className="absolute inset-0 z-0">
    <Image 
      src="/hero.jpg" // Pastikan file ini ada di folder public
      alt="Bener Bener Dimsum Hero"
      fill
      className="object-cover opacity-50" // Opacity dikurangi agar teks kuning tetap terbaca jelas
      priority // Penting untuk LCP (loading gambar utama lebih cepat)
    />
    {/* Overlay Gradient agar teks lebih 'pop' */}
    <div className="absolute inset-0 bg-gradient-to-b from-dimsum-dark/20 via-transparent to-dimsum-dark/60"></div>
  </div>
  
  <div className="relative z-10 text-center px-4">
    <h1 className="text-7xl md:text-[12rem] font-black text-dimsum-yellow leading-[0.8] uppercase italic drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
      BENER <br /> BENER
    </h1>
    <p className="mt-6 bg-dimsum-yellow text-dimsum-dark inline-block px-8 py-2 font-black uppercase tracking-tighter rounded-sm rotate-1 shadow-xl">
      Dimsum Artisanal Bekasi
    </p>
  </div>
</section>

      {/* MENU SECTION */}
      <section id="menu" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-7xl font-black uppercase tracking-tighter leading-none">Menu Utama</h2>
            <div className="h-3 w-48 bg-dimsum-yellow mt-4"></div>
          </div>
          <p className="max-w-xs font-bold text-gray-500 uppercase text-sm">
            Varian pilihan yang bener-bener jadi favorit semua orang.
          </p>
        </div>
        
        {/* Grid Menu: Diubah menjadi 2 Kolom */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* CARD 1: FOTO MENU UMUM */}
          <div className="group">
            <div className="aspect-[4/5] relative rounded-[2.5rem] overflow-hidden border-2 border-transparent group-hover:border-dimsum-yellow transition-all duration-500 shadow-2xl">
              <Image 
                src="/menu.jpeg" 
                alt="Daftar Menu Dimsum"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500" 
              />
            </div>
            <div className="mt-8 space-y-2">
              <h3 className="text-4xl font-black uppercase italic">Pilihan Menu</h3>
              <p className="text-dimsum-dark/60 font-bold uppercase text-sm tracking-widest">Varian Lengkap & Otentik</p>
            </div>
          </div>

          {/* CARD 2: DIMSUM MENTAI (BEST SELLER) */}
          <div className="group">
            <div className="aspect-[4/5] relative rounded-[2.5rem] overflow-hidden border-2 border-transparent group-hover:border-dimsum-yellow transition-all duration-500 shadow-2xl">
              {/* PLACEHOLDER UNTUK FOTO MENTAI */}
              <div className="absolute inset-0 bg-silver flex items-center justify-center italic text-gray-500">
                {<Image src="/mentai.jpg" alt="Dimsum Mentai" fill className="object-cover" /> }
                [Foto Dimsum Mentai]
              </div>
              
              {/* Badge Best Seller Lebih Menonjol */}
              <div className="absolute top-8 right-8 z-10">
                <div className="bg-rufous text-white px-6 py-2 rounded-full font-black text-sm uppercase shadow-xl animate-bounce">
                  Best Seller!
                </div>
              </div>
            </div>
            <div className="mt-8 space-y-2">
              <h3 className="text-4xl font-black uppercase italic text-rufous">Dimsum Mentai</h3>
              <p className="text-dimsum-dark/60 font-bold uppercase text-sm tracking-widest text-rufous">Favorit No. 1 di Bekasi</p>
            </div>
          </div>

        </div>
      </section>

      {/* ORDER / PROMO SECTION */}
      {/* ORDER / PROMO SECTION */}
<section id="order" className="relative h-[80vh] bg-dimsum-yellow flex items-center overflow-hidden border-y-8 border-dimsum-dark">
  
  {/* Bagian Gambar (Kanan) */}
  <div className="absolute right-0 w-full md:w-1/2 h-full">
    <Image 
      src="/boxlarge.jpeg" // Kamu bisa pakai menu.jpeg lagi atau file promo khusus
      alt="Promo Spesial Bener Bener Dimsum"
      fill
      className="object-cover"
    />
    {/* Overlay gradasi agar gambar menyatu dengan warna kuning di kiri (opsional) */}
    <div className="absolute inset-0 bg-gradient-to-r from-dimsum-yellow/40 to-transparent md:from-dimsum-yellow/20"></div>
  </div>
  
  {/* Bagian Konten (Kiri) */}
  <div className="relative z-10 px-6 md:px-24">
    <div className="bg-dimsum-dark text-dimsum-yellow p-10 md:p-16 rotate-[-3deg] shadow-[20px_20px_0px_0px_rgba(0,0,0,0.2)] max-w-2xl border-2 border-white/10">
      <h2 className="text-6xl md:text-8xl font-black uppercase leading-[0.8] mb-6 text-white">
        TERIMA <br /> PESANAN
      </h2>
      <p className="font-bold text-xl md:text-2xl mb-8 uppercase tracking-tighter text-dimsum-yellow">
        UNTUK ACARA<br /> 
        <span className="text-white">ATAU PESTA SEMUANYA BISA!</span>
      </p>
      
      {/* Tombol Order */}
      <a 
        href="https://wa.me/+6285893045044" // Ganti dengan link WhatsApp kamu
        target="_blank"
        className="inline-block bg-dimsum-yellow text-dimsum-dark px-10 py-4 font-black uppercase hover:scale-105 transition-transform active:scale-95 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.3)]"
      >
        Pesan via WhatsApp
      </a>
    </div>
  </div>
</section>

      {/* LOCATION SECTION */}
<section id="location" className="py-32 px-6 bg-white text-center">
  <div className="max-w-6xl mx-auto">
    <div className="mb-16">
      <h2 className="text-5xl md:text-7xl font-black uppercase mb-4 tracking-tighter">Mampir Langsung</h2>
      <p className="text-xl font-bold text-dimsum-dark/60 uppercase">Bekasi Timur, Sebrang SMKN 2 Kota Bekasi</p>
    </div>

    {/* Iframe Container dengan Styling Rapih */}
    <div className="relative aspect-video w-full rounded-[3rem] border-8 border-dimsum-dark shadow-[20px_20px_0px_0px_rgba(250,204,21,1)] overflow-hidden">
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

    <div className="mt-16 flex flex-col md:flex-row justify-center gap-8">
       <div className="bg-dimsum-dark text-white p-8 rounded-2xl flex-1">
          <h4 className="font-black uppercase text-dimsum-yellow mb-2">Jam Operasional</h4>
          <p className="font-bold">Setiap Hari: 15.00 - 22.00 WIB</p>
       </div>
       
    </div>
  </div>
</section>
    </main>
  );
}