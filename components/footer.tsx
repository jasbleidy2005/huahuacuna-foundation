import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="Fundación Huahuacuna" width={40} height={40} className="h-10 w-auto" />
              <span className="font-sans text-lg font-bold text-[#204A8E]">Fundación Huahuacuna</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Conectando corazones, transformando vidas. Brindamos apoyo integral en educación, salud y bienestar a
              niños en edad escolar.
            </p>
            <div className="flex gap-3">
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-colors hover:bg-secondary/80"
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-colors hover:bg-secondary/80"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-colors hover:bg-secondary/80"
              >
                <Twitter className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/nosotros" className="text-muted-foreground transition-colors hover:text-foreground">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/apadrinar" className="text-muted-foreground transition-colors hover:text-foreground">
                  Cómo Apadrinar
                </Link>
              </li>
              <li>
                <Link href="/proyectos" className="text-muted-foreground transition-colors hover:text-foreground">
                  Nuestros Proyectos
                </Link>
              </li>
              <li>
                <Link href="/voluntariado" className="text-muted-foreground transition-colors hover:text-foreground">
                  Voluntariado
                </Link>
              </li>
              <li>
                <Link href="/transparencia" className="text-muted-foreground transition-colors hover:text-foreground">
                  Transparencia
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Servicios</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/educacion" className="text-muted-foreground transition-colors hover:text-foreground">
                  Educación
                </Link>
              </li>
              <li>
                <Link href="/salud" className="text-muted-foreground transition-colors hover:text-foreground">
                  Salud
                </Link>
              </li>
              <li>
                <Link href="/nutricion" className="text-muted-foreground transition-colors hover:text-foreground">
                  Nutrición
                </Link>
              </li>
              <li>
                <Link href="/recreacion" className="text-muted-foreground transition-colors hover:text-foreground">
                  Recreación
                </Link>
              </li>
              <li>
                <Link href="/eventos" className="text-muted-foreground transition-colors hover:text-foreground">
                  Eventos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Calle Principal 123, Ciudad, País</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <span className="text-muted-foreground">+57 123 456 7890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <span className="text-muted-foreground">info@huahuacuna.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Fundación Huahuacuna. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
