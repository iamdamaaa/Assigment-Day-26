import { ArrowUpRight } from "lucide-react";
import { PRODUCTS } from "../../../data/Products";

export default function FeatureProduct () {
    return (
        <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-[#4D8DBA]/50 hover:shadow-xl"
              >
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
    )
}

