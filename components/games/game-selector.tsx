"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FactorRaceGame } from "./factor-race-game"
import { MultipleBuilderGame } from "./multiple-builder-game"
import { QuickMathGame } from "./quick-math-game"
import { Zap, Puzzle, Clock, Star } from "lucide-react"

type GameType = "selector" | "factor-race" | "multiple-builder" | "quick-math"

export function GameSelector() {
  const [currentGame, setCurrentGame] = useState<GameType>("selector")

  if (currentGame === "factor-race") {
    return <FactorRaceGame onBack={() => setCurrentGame("selector")} />
  }

  if (currentGame === "multiple-builder") {
    return <MultipleBuilderGame onBack={() => setCurrentGame("selector")} />
  }

  if (currentGame === "quick-math") {
    return <QuickMathGame onBack={() => setCurrentGame("selector")} />
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">Elige tu juego favorito</h2>
        <p className="text-muted-foreground">Cada juego te enseña algo diferente sobre MCM y MCD</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-all cursor-pointer border-2 hover:border-primary group">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-xl">Carrera de Factores</CardTitle>
            <CardDescription>Encuentra el MCD más rápido que puedas</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-center space-x-2">
              <Badge variant="secondary">MCD</Badge>
              <Badge variant="outline">Velocidad</Badge>
            </div>
            <div className="flex items-center justify-center space-x-1 text-sm text-muted-foreground">
              <Star className="w-4 h-4 fill-current text-yellow-500" />
              <Star className="w-4 h-4 fill-current text-yellow-500" />
              <Star className="w-4 h-4 fill-current text-yellow-500" />
              <Star className="w-4 h-4" />
              <Star className="w-4 h-4" />
              <span className="ml-2">Intermedio</span>
            </div>
            <Button className="w-full" onClick={() => setCurrentGame("factor-race")}>
              ¡Jugar Ahora!
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all cursor-pointer border-2 hover:border-secondary group">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
              <Puzzle className="w-8 h-8 text-secondary" />
            </div>
            <CardTitle className="text-xl">Constructor de Múltiplos</CardTitle>
            <CardDescription>Arma el MCM como un rompecabezas</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-center space-x-2">
              <Badge variant="secondary">MCM</Badge>
              <Badge variant="outline">Lógica</Badge>
            </div>
            <div className="flex items-center justify-center space-x-1 text-sm text-muted-foreground">
              <Star className="w-4 h-4 fill-current text-yellow-500" />
              <Star className="w-4 h-4 fill-current text-yellow-500" />
              <Star className="w-4 h-4" />
              <Star className="w-4 h-4" />
              <Star className="w-4 h-4" />
              <span className="ml-2">Fácil</span>
            </div>
            <Button className="w-full" onClick={() => setCurrentGame("multiple-builder")}>
              ¡Construir!
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all cursor-pointer border-2 hover:border-accent group">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
              <Clock className="w-8 h-8 text-accent" />
            </div>
            <CardTitle className="text-xl">Matemáticas Rápidas</CardTitle>
            <CardDescription>Responde correctamente antes que se acabe el tiempo</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-center space-x-2">
              <Badge variant="secondary">MCM & MCD</Badge>
              <Badge variant="outline">Tiempo</Badge>
            </div>
            <div className="flex items-center justify-center space-x-1 text-sm text-muted-foreground">
              <Star className="w-4 h-4 fill-current text-yellow-500" />
              <Star className="w-4 h-4 fill-current text-yellow-500" />
              <Star className="w-4 h-4 fill-current text-yellow-500" />
              <Star className="w-4 h-4 fill-current text-yellow-500" />
              <Star className="w-4 h-4" />
              <span className="ml-2">Difícil</span>
            </div>
            <Button className="w-full" onClick={() => setCurrentGame("quick-math")}>
              ¡Desafío!
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
