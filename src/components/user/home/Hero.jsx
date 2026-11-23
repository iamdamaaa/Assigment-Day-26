import {
  Sparkles,
  ShoppingBag
} from "lucide-react";

import { FEATURES } from "../../../data/Feature";

export default function Hero () {
    return (
      <section className="relative overflow-hidden bg-gradient-to-br from-[#086288] via-[#086288] to-[#4D8DBA] text-white">
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#97D7FF]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#FFEFC4]/15 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 pt-10 pb-14 sm:px-6 lg:px-8 lg:pt-16 lg:pb-20">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
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

            <div className="lg:col-span-6">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                <div className="overflow-hidden rounded-2xl border-4 border-[#97D7FF]/30 bg-[#4D8DBA] shadow-2xl sm:rounded-3xl">
                  <img
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80"
                    alt="Interior Ruang Tamu Modern DamaMart"
                    className="h-64 w-full object-cover transition duration-500 hover:scale-105 sm:h-80 lg:h-[420px]"
                  />
                </div>

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
    );
}
