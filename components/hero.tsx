import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, Gamepad2, BookOpen, Trophy } from "lucide-react"
import { MathMascot } from "./math-mascot"
import Link from "next/link"

export function Hero() {
  return (
    <section className="text-center py-12">
      <div className="flex justify-center mb-8">
        <MathMascot />
      </div>

      <h1 className="text-4xl font-bold text-foreground mb-4">¡Aprende MCM y MCD de forma divertida!</h1>

      <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
        Descubre el Máximo Común Divisor y el Mínimo Común Múltiplo con juegos interactivos, ejercicios y calculadoras
        que hacen las matemáticas súper fáciles.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-primary">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <CardTitle className="text-lg">Aprende</CardTitle>
            <CardDescription>Explicaciones claras con animaciones paso a paso</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/ejercicios">
              <Button className="w-full bg-transparent" variant="outline">
                Comenzar a aprender
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-secondary">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
              <Calculator className="w-6 h-6 text-secondary" />
            </div>
            <CardTitle className="text-lg">Calcula</CardTitle>
            <CardDescription>Calculadoras interactivas que muestran cada paso</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/calculadora">
              <Button className="w-full bg-transparent" variant="outline">
                Usar calculadora
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-accent">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
              <Gamepad2 className="w-6 h-6 text-accent" />
            </div>
            <CardTitle className="text-lg">Juega</CardTitle>
            <CardDescription>Juegos divertidos para practicar MCM y MCD</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/juegos">
              <Button className="w-full bg-transparent" variant="outline">
                Jugar ahora
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-primary">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Trophy className="w-6 h-6 text-primary" />
            </div>
            <CardTitle className="text-lg">Progreso</CardTitle>
            <CardDescription>Gana medallas y sigue tu avance</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-transparent" variant="outline">
              Ver progreso
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
