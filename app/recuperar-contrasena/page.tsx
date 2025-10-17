import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Mail } from "lucide-react"
import Link from "next/link"

export default function RecuperarContrasenaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-md">
            <Button asChild variant="ghost" size="sm" className="mb-6">
              <Link href="/login">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al inicio de sesión
              </Link>
            </Button>

            <div className="mb-8 text-center space-y-3">
              <div className="flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/20">
                  <Mail className="h-7 w-7 text-primary" />
                </div>
              </div>
              <h1 className="font-serif text-3xl font-bold text-foreground">Recuperar Contraseña</h1>
              <p className="text-muted-foreground">
                Ingresa tu correo electrónico y te enviaremos instrucciones para restablecer tu contraseña
              </p>
            </div>

            <Card className="border-none shadow-sm">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo Electrónico</Label>
                    <Input id="email" type="email" placeholder="tu@email.com" className="rounded-xl" required />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Enviar Instrucciones
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-8 rounded-2xl bg-muted p-6 space-y-3">
              <h3 className="font-semibold text-foreground">¿No recibes el correo?</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Revisa tu carpeta de spam o correo no deseado</li>
                <li>• Verifica que el correo electrónico sea correcto</li>
                <li>• Espera unos minutos, puede tardar en llegar</li>
                <li>
                  • Si el problema persiste,{" "}
                  <Link href="/contacto" className="text-primary hover:underline">
                    contáctanos
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
