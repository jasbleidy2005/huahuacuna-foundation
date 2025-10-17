import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, User } from "lucide-react"
import Image from "next/image"

export function Header() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className="rounded-full border border-white/20 bg-gradient-to-r from-white via-[#f8e48c] to-[#f2c94c] backdrop-blur-xl shadow-2xl">
        <div className="flex h-16 items-center justify-between px-6">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Fundación Huahuacuna" width={64} height={64} className="h-16 w-auto" />
            <span className="font-sans text-lg font-bold text-[#204A8E] drop-shadow-sm">Fundación Huahuacuna</span>
          </Link>

          {/* Navigation Menu */}
          <nav className="hidden items-center gap-6 md:flex">
            <Link
              href="/apadrinar"
              className="relative text-sm font-semibold text-[#204A8E] transition-all hover:text-[#F9C934] after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-[#F9C934] after:transition-all hover:after:w-full"
            >
              Apadrinar
            </Link>
            <Link
              href="/dashboard"
              className="relative text-sm font-semibold text-[#204A8E] transition-all hover:text-[#F9C934] after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-[#F9C934] after:transition-all hover:after:w-full"
            >
              Mi Dashboard
            </Link>
            <Link
              href="/impacto"
              className="relative text-sm font-semibold text-[#204A8E] transition-all hover:text-[#F9C934] after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-[#F9C934] after:transition-all hover:after:w-full"
            >
              Impacto
            </Link>
            <Link
              href="/proyectos"
              className="relative text-sm font-semibold text-[#204A8E] transition-all hover:text-[#F9C934] after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-[#F9C934] after:transition-all hover:after:w-full"
            >
              Proyectos
            </Link>
            <Link
              href="/voluntariado"
              className="relative text-sm font-semibold text-[#204A8E] transition-all hover:text-[#F9C934] after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-[#F9C934] after:transition-all hover:after:w-full"
            >
              Voluntariado
            </Link>
            <Link
              href="/historias"
              className="relative text-sm font-semibold text-[#204A8E] transition-all hover:text-[#F9C934] after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-[#F9C934] after:transition-all hover:after:w-full"
            >
              Historias
            </Link>
          </nav>

          {/* Right Section - CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="hidden md:flex border border-[#204A8E]/30 text-[#204A8E] hover:bg-[#204A8E]/10 rounded-full font-semibold bg-white/50 backdrop-blur-sm"
            >
              <Link href="/login">
                <User className="h-4 w-4 mr-2" />
                Iniciar Sesión
              </Link>
            </Button>
            <Button
              asChild
              size="sm"
              className="rounded-full bg-[#F9C934] text-[#204A8E] hover:bg-[#F9C934]/90 hover:scale-105 shadow-lg hover:shadow-xl transition-all font-bold"
            >
              <Link href="/apadrinar">Apadrinar Ahora</Link>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden text-[#204A8E]">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
