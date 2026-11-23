import {
  Truck,
  ShieldCheck,
  Headphones,
  RotateCcw,
  ArrowUpRight,
  Sparkles,
  ShoppingBag,
} from "lucide-react";

const FEATURES = [
  {
    icon: Truck,
    title: "Gratis Ongkir",
    desc: "Untuk semua pesanan di atas Rp250rb",
  },
  {
    icon: ShieldCheck,
    title: "Garansi Resmi",
    desc: "100% produk original & terjamin",
  },
  {
    icon: Headphones,
    title: "Layanan 24/7",
    desc: "Tim support siap membantu kapan saja",
  },
  {
    icon: RotateCcw,
    title: "30 Hari Retur",
    desc: "Tukar barang mudah tanpa ribet",
  },
];

const PRODUCTS = [
  {
    id: 1,
    name: "Kursi Minimalis Nordic",
    category: "Ruang Tamu",
    price: "Rp1.250.000",
    image:
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Lampu Meja Ambient",
    category: "Pencahayaan",
    price: "Rp450.000",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Vas Keramik Estetik",
    category: "Dekorasi",
    price: "Rp210.000",
    image:
      "https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Meja Kopi Kayu Oak",
    category: "Furniture",
    price: "Rp1.890.000",
    image:
      "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#086288] via-[#086288] to-[#4D8DBA] text-white">
        {/* Dekorasi Cahaya Latar */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#97D7FF]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#FFEFC4]/15 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 pt-10 pb-14 sm:px-6 lg:px-8 lg:pt-16 lg:pb-20">
          {/* Grid Utama Hero: Stack di Mobile, 2 Kolom di Desktop */}
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Kiri: Copywriting & CTA */}
            <div className="space-y-5 text-center lg:col-span-6 lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#97D7FF]/40 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-[#FFEFC4] uppercase backdrop-blur-sm sm:text-sm">
                <Sparkles className="h-4 w-4 text-[#FFEFC4]" />
                <span>Modern Living Starts Here</span>
              </div>

              <h1 className="text-3xl leading-tight font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Elegant Home,{" "}
                <span className="text-[#97D7FF]">Effortless Style.</span>
              </h1>

              <p className="mx-auto max-w-xl text-sm leading-relaxed text-[#97D7FF]/90 sm:text-base lg:mx-0 lg:text-lg">
                Temukan koleksi furnitur dan dekorasi pilihan di{" "}
                <span className="font-semibold text-[#FFEFC4]">DamaMart</span>{" "}
                untuk menciptakan ruang hunian yang hangat, modern, dan penuh
                karakter.
              </p>

              <div className="flex flex-col justify-center gap-3 pt-2 sm:flex-row lg:justify-start">
                <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FFEFC4] px-6 py-3.5 text-sm font-bold text-[#086288] shadow-lg shadow-black/15 transition duration-200 hover:-translate-y-0.5 hover:bg-white active:translate-y-0 sm:text-base">
                  <ShoppingBag className="h-5 w-5" />
                  <span>Belanja Sekarang</span>
                </button>
                <button className="inline-flex items-center justify-center rounded-xl border border-[#97D7FF]/50 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition duration-200 hover:bg-white/20 sm:text-base">
                  Lihat Katalog
                </button>
              </div>
            </div>

            {/* Kanan: Gambar Utama Hero */}
            <div className="lg:col-span-6">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                <div className="overflow-hidden rounded-2xl border-4 border-[#97D7FF]/30 bg-[#4D8DBA] shadow-2xl sm:rounded-3xl">
                  <img
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80"
                    alt="Interior Ruang Tamu Modern DamaMart"
                    className="h-64 w-full object-cover transition duration-500 hover:scale-105 sm:h-80 lg:h-[420px]"
                  />
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-4 left-4 rounded-2xl border border-[#97D7FF]/40 bg-white px-4 py-3 text-slate-900 shadow-xl sm:left-6">
                  <p className="text-xs font-medium text-[#4D8DBA]">
                    Koleksi Terlaris 2026
                  </p>
                  <p className="text-sm font-bold text-[#086288]">
                    Diskon hingga 30%
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Kartu Keunggulan (Mobile: 1 kolom -> Tablet: 2 kolom -> Desktop: 4 kolom) */}
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {FEATURES.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-4 rounded-2xl border border-[#97D7FF]/30 bg-white/10 p-4 backdrop-blur-md transition duration-200 hover:-translate-y-1 hover:bg-white/15"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFEFC4] text-[#086288] shadow-sm">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white sm:text-base">
                      {item.title}
                    </h2>
                    <p className="mt-0.5 text-xs leading-relaxed text-[#97D7FF]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="bg-[#FFEFC4]/45 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-14">
            {/* Gambar Besar */}
            <div className="lg:col-span-6">
              <div className="relative">
                <div className="overflow-hidden rounded-2xl shadow-xl sm:rounded-3xl">
                  <img
                    src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80"
                    alt="Tentang DamaMart"
                    className="h-72 w-full object-cover sm:h-96"
                  />
                </div>
                <div className="mt-4 inline-block rounded-2xl bg-[#086288] px-5 py-3 text-white shadow-lg sm:absolute sm:-right-4 sm:-bottom-5 sm:mt-0">
                  <p className="text-xl font-extrabold text-[#FFEFC4] sm:text-2xl">
                    10.000+
                  </p>
                  <p className="text-xs text-[#97D7FF]">
                    Pelanggan Puas di Indonesia
                  </p>
                </div>
              </div>
            </div>

            {/* Teks & CTA */}
            <div className="space-y-4 lg:col-span-6">
              <span className="inline-block rounded-lg bg-[#97D7FF]/50 px-3 py-1 text-xs font-bold tracking-wider text-[#086288] uppercase">
                About DamaMart
              </span>

              <h2 className="text-2xl leading-snug font-extrabold text-[#086288] sm:text-4xl">
                More Than Just a Shop — We Curate Your Comfort.
              </h2>

              <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
                Kami percaya setiap sudut rumah punya cerita. DamaMart hadir
                menghubungkan desain fungsional, material berkualitas tinggi,
                dan harga yang tetap bersahabat untuk gaya hidup masa kini.
              </p>

              <div className="pt-2">
                <button className="group inline-flex items-center gap-2 rounded-xl bg-[#086288] px-6 py-3.5 text-sm font-bold text-white shadow-md transition duration-200 hover:bg-[#4D8DBA] sm:text-base">
                  <span>Shop Now</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURED PRODUCTS SECTION ================= */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="mb-8 flex flex-col justify-between gap-4 sm:mb-10 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-bold tracking-wider text-[#4D8DBA] uppercase">
                Pilihan Editor
              </span>
              <h2 className="mt-1 text-2xl font-extrabold text-[#086288] sm:text-3xl">
                Produk Unggulan Kami
              </h2>
            </div>
            <button className="self-start text-sm font-bold text-[#086288] underline decoration-[#4D8DBA] decoration-2 underline-offset-4 transition hover:text-[#4D8DBA] sm:self-auto">
              Lihat Semua Produk &rarr;
            </button>
          </div>

          {/* Grid Kartu Produk (Mobile: 1 kolom -> Tablet: 2 kolom -> Desktop: 4 kolom) */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-[#4D8DBA]/50 hover:shadow-xl"
              >
                {/* Gambar Utama */}
                <div className="relative h-56 overflow-hidden bg-[#97D7FF]/20">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-[#FFEFC4] px-3 py-1 text-xs font-bold text-[#086288] shadow-sm">
                    {product.category}
                  </span>
                </div>

                {/* Penjelasan Bawah */}
                <div className="p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h3 className="font-bold text-slate-900 transition group-hover:text-[#086288]">
                        {product.name}
                      </h3>
                      <p className="mt-0.5 text-xs font-medium text-[#4D8DBA]">
                        {product.category}
                      </p>
                      <p className="mt-2 text-sm font-extrabold text-[#086288]">
                        {product.price}
                      </p>
                    </div>

                    {/* Tombol Arrow */}
                    <button
                      aria-label={`Lihat detail ${product.name}`}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#97D7FF]/40 text-[#086288] transition duration-200 group-hover:bg-[#086288] group-hover:text-[#FFEFC4]"
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}