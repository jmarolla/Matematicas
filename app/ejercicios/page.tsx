"use client"

import { Navigation } from "@/components/navigation"
import { ExerciseSystem } from "@/components/exercises/exercise-system"
import { BookOpen, Target, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ExercisesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">Ejercicios y Práctica</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Practica MCM y MCD con ejercicios estructurados por niveles. Desde problemas básicos hasta aplicaciones de
            la vida real.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader className="text-center">
              <Target className="w-8 h-8 text-primary mx-auto mb-2" />
              <CardTitle>Nivel Actual</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-primary">Principiante</div>
              <div className="text-sm text-muted-foreground">Ejercicios 1-20</div>
            </CardContent>
          </Card>

          <Card className="border-secondary/20 bg-secondary/5">
            <CardHeader className="text-center">
              <Star className="w-8 h-8 text-secondary mx-auto mb-2" />
              <CardTitle>Completados</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-secondary">12/60</div>
              <div className="text-sm text-muted-foreground">Ejercicios totales</div>
            </CardContent>
          </Card>

          <Card className="border-accent/20 bg-accent/5">
            <CardHeader className="text-center">
              <BookOpen className="w-8 h-8 text-accent mx-auto mb-2" />
              <CardTitle>Precisión</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-accent">85%</div>
              <div className="text-sm text-muted-foreground">Respuestas correctas</div>
            </CardContent>
          </Card>
        </div>

        <ExerciseSystem />
      </main>
    </div>
  )
}
