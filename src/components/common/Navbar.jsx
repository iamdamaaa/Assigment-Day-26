import { useState, useEffect } from "react";
import { Link } from "react-router";
import {
  ArrowDownWideNarrow,
  User,
  ShoppingCart,
  Search,
  LogIn,
  UserPlus,
  X,
} from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Navbar() {
  const [authStatus, setAuthStatus] = useState("loading"); // "loading" | "authenticated" | "guest"
  const [userName, setUserName] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let active = true;

    async function checkAuth() {
      try {
        const res = await fetch("/api/auth/me", {
          credentials: "include",
        });

        if (!res.ok) {
          if (active) {
            setAuthStatus("guest");
            setUserName(null);
          }
          return;
        }

        const data = await res.json();
        const isAuthenticated = Boolean(data?.user ?? data?.authenticated);

        if (active) {
          setAuthStatus(isAuthenticated ? "authenticated" : "guest");
          setUserName(isAuthenticated ? (data?.user?.name ?? "Account") : null);
        }
      } catch {
        if (active) {
          setAuthStatus("guest");
          setUserName(null);
        }
      }
    }

    checkAuth();

    return () => {
      active = false;
    };
  }, []);

  const isLoggedIn = authStatus === "authenticated";

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#97D7FF]/40 bg-[#086288] text-white shadow-md">
      {/* Main Navbar: Mobile hanya List + Search, membesar di md/lg */}
      <nav
        aria-label="Primary Navigation"
        className="mx-auto flex max-w-7xl items-center gap-2.5 px-3 py-3 sm:px-6 lg:gap-4"
      >
        {/* Tombol List (Mobile) + Brand DamaMart (Desktop) */}
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
            aria-expanded={isMobileMenuOpen}
            className="inline-flex items-center justify-center rounded-xl border border-[#97D7FF]/35 bg-[#4D8DBA]/45 p-2.5 text-[#FFEFC4] transition hover:bg-[#4D8DBA] md:hidden"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <ArrowDownWideNarrow className="h-5 w-5" />
            )}
          </button>

          <Link
            to="/"
            className="hidden items-center gap-2 rounded-lg bg-[#4D8DBA] px-3 py-1.5 font-extrabold tracking-tight text-white shadow-sm transition hover:bg-[#97D7FF] hover:text-[#086288] md:inline-flex"
          >
            <ArrowDownWideNarrow className="h-4 w-4 text-[#FFEFC4]" />
            <span>DamaMart</span>
          </Link>
        </div>

        {/* Search Input: Tampil langsung di Mobile & Desktop */}
        <div className="flex-1 md:max-w-xl">
          <div className="relative flex items-center">
            <Search className="pointer-events-none absolute left-3 h-4 w-4 text-[#086288]" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="search"
              aria-label="search"
              className="h-10 w-full rounded-xl border border-[#97D7FF] bg-white pl-9 pr-4 text-sm text-slate-900 placeholder:text-slate-500 focus-visible:ring-2 focus-visible:ring-[#FFEFC4]"
            />
          </div>
        </div>

        {/* Menu Lengkap Khusus Layar Menengah & Besar (md+) */}
        <div className="hidden shrink-0 items-center gap-3 md:flex">
          <div className="flex items-center gap-1">
            <Link
              to="/"
              className="rounded-lg px-3 py-2 text-sm font-semibold text-white transition hover:bg-[#4D8DBA] hover:text-[#FFEFC4]"
            >
              Home
            </Link>
            <Link
              to="/market"
              className="rounded-lg px-3 py-2 text-sm font-semibold text-white transition hover:bg-[#4D8DBA] hover:text-[#FFEFC4]"
            >
              Market
            </Link>
            <Link
              to="/account"
              className="rounded-lg px-3 py-2 text-sm font-semibold text-white transition hover:bg-[#4D8DBA] hover:text-[#FFEFC4]"
            >
              Account
            </Link>
          </div>

          <Link
            to="/market?view=cart"
            className="inline-flex items-center gap-1.5 rounded-xl border border-[#97D7FF]/40 bg-[#4D8DBA]/45 px-3 py-2 text-sm font-semibold text-white transition hover:bg-[#4D8DBA] hover:text-[#FFEFC4]"
          >
            <ShoppingCart className="h-4 w-4 text-[#FFEFC4]" />
            <span>cart</span>
          </Link>

          {authStatus === "loading" ? (
            <div className="flex items-center gap-1.5 rounded-xl bg-[#4D8DBA]/40 px-3 py-2 text-xs text-[#97D7FF]">
              <User className="h-4 w-4" />
              <span>Checking...</span>
            </div>
          ) : isLoggedIn ? (
            <Link
              to="/account"
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#FFEFC4] px-3 py-2 text-sm font-bold text-[#086288] shadow-sm transition hover:bg-[#97D7FF]"
            >
              <User className="h-4 w-4" />
              <span className="max-w-[140px] truncate">
                {userName ?? "Account"}
              </span>
            </Link>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                to="/login"
                className="inline-flex items-center gap-1.5 rounded-xl border border-[#97D7FF] bg-transparent px-3 py-2 text-sm font-semibold text-white transition hover:bg-[#4D8DBA]"
              >
                <User className="h-4 w-4 text-[#FFEFC4]" />
                <span>Sign In</span>
              </Link>
              <Link
                to="/register"
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#FFEFC4] px-3 py-2 text-sm font-bold text-[#086288] shadow-sm transition hover:bg-[#97D7FF]"
              >
                <span>Sign Up</span>
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Dropdown / Drawer Mobile saat tombol List di-klik */}
      {isMobileMenuOpen && (
        <div className="border-t border-[#97D7FF]/35 bg-[#086288] px-4 py-4 md:hidden">
          <div className="space-y-4">
            {/* Brand Header di dalam Menu */}
            <div className="flex items-center justify-between border-b border-[#97D7FF]/25 pb-3">
              <span className="rounded-lg bg-[#4D8DBA] px-2.5 py-1 text-sm font-extrabold text-white">
                DamaMart
              </span>
              <Link
                to="/market?view=cart"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#97D7FF]/40 bg-[#4D8DBA]/45 px-3 py-1.5 text-xs font-semibold text-[#FFEFC4]"
              >
                <ShoppingCart className="h-4 w-4" />
                <span>cart</span>
              </Link>
            </div>

            {/* Pilihan Navigasi: Home, Market, Account */}
            <div className="flex flex-col space-y-1.5">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-xl bg-[#4D8DBA]/30 px-3.5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#4D8DBA] hover:text-[#FFEFC4]"
              >
                Home
              </Link>
              <Link
                to="/market"
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-xl bg-[#4D8DBA]/30 px-3.5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#4D8DBA] hover:text-[#FFEFC4]"
              >
                Market
              </Link>
              <Link
                to="/account"
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-xl bg-[#4D8DBA]/30 px-3.5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#4D8DBA] hover:text-[#FFEFC4]"
              >
                Account
              </Link>
            </div>

            {/* Pilihan Sign In / Sign Up (atau Akun jika sudah login) */}
            <div className="border-t border-[#97D7FF]/25 pt-3">
              {authStatus === "loading" ? (
                <div className="flex items-center justify-center gap-2 rounded-xl bg-[#4D8DBA]/35 py-2.5 text-xs text-[#97D7FF]">
                  <User className="h-4 w-4" />
                  <span>Checking account...</span>
                </div>
              ) : isLoggedIn ? (
                <Link
                  to="/account"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#FFEFC4] px-4 py-2.5 text-sm font-bold text-[#086288] shadow-sm"
                >
                  <User className="h-4 w-4" />
                  <span>{userName ?? "Account"}</span>
                </Link>
              ) : (
                <div className="grid grid-cols-2 gap-2.5">
                  <Link
                    to="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-[#97D7FF] px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-[#4D8DBA]"
                  >
                    <LogIn className="h-4 w-4 text-[#FFEFC4]" />
                    <span>Sign In</span>
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#FFEFC4] px-3 py-2.5 text-sm font-bold text-[#086288] shadow-sm transition hover:bg-[#97D7FF]"
                  >
                    <UserPlus className="h-4 w-4" />
                    <span>Sign Up</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}