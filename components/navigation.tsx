import { Button } from "@/components/ui/button"
import { Home, Calculator, Gamepad2, BookOpen, Trophy, Settings } from "lucide-react"
import Link from "next/link"

export function Navigation() {
  return (
    <nav className="bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">M</span>
            </div>
            <h1 className="text-xl font-bold text-foreground">MatemáticasFun</h1>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            <Link href="/">
              <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                <Home className="w-4 h-4" />
                <span>Inicio</span>
              </Button>
            </Link>
            <Link href="/ejercicios">
              <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                <BookOpen className="w-4 h-4" />
                <span>Aprender</span>
              </Button>
            </Link>
            <Link href="/calculadora">
              <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                <Calculator className="w-4 h-4" />
                <span>Calculadora</span>
              </Button>
            </Link>
            <Link href="/juegos">
              <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                <Gamepad2 className="w-4 h-4" />
                <span>Juegos</span>
              </Button>
            </Link>
            <Link href="/progreso">
              <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                <Trophy className="w-4 h-4" />
                <span>Progreso</span>
              </Button>
            </Link>
          </div>

          <Button variant="outline" size="sm">
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </nav>
  )
}
