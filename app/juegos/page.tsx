"use client"

import { Navigation } from "@/components/navigation"
import { GameSelector } from "@/components/games/game-selector"
import { Gamepad2, Star, Trophy } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function GamesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
              <Gamepad2 className="w-8 h-8 text-accent" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">Juegos Educativos</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ¡Aprende MCM y MCD jugando! Estos juegos divertidos te ayudarán a dominar los conceptos mientras te
            diviertes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader className="text-center">
              <Star className="w-8 h-8 text-primary mx-auto mb-2" />
              <CardTitle>Puntos Totales</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-3xl font-bold text-primary">1,250</div>
            </CardContent>
          </Card>

          <Card className="border-secondary/20 bg-secondary/5">
            <CardHeader className="text-center">
              <Trophy className="w-8 h-8 text-secondary mx-auto mb-2" />
              <CardTitle>Nivel Actual</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-3xl font-bold text-secondary">Intermedio</div>
            </CardContent>
          </Card>

          <Card className="border-accent/20 bg-accent/5">
            <CardHeader className="text-center">
              <Gamepad2 className="w-8 h-8 text-accent mx-auto mb-2" />
              <CardTitle>Juegos Completados</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-3xl font-bold text-accent">7</div>
            </CardContent>
          </Card>
        </div>

        <GameSelector />
      </main>
    </div>
  )
}
