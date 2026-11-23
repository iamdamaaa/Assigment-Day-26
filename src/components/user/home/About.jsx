import { ArrowUpRight } from "lucide-react";

export default function About () {
    return (
    <section className="bg-[#FFEFC4]/45 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-14">
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
    )
}
