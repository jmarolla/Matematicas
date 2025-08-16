"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Star, Lock, CheckCircle, Target } from "lucide-react"

interface Level {
  id: number
  name: string
  description: string
  difficulty: "Fácil" | "Intermedio" | "Difícil"
  exercises: number
  completed: number
  unlocked: boolean
  topics: string[]
}

interface LevelSelectorProps {
  levels: Level[]
  onSelectLevel: (level: Level) => void
}

export function LevelSelector({ levels, onSelectLevel }: LevelSelectorProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Fácil":
        return "bg-green-100 text-green-800"
      case "Intermedio":
        return "bg-yellow-100 text-yellow-800"
      case "Difícil":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getDifficultyStars = (difficulty: string) => {
    switch (difficulty) {
      case "Fácil":
        return 1
      case "Intermedio":
        return 2
      case "Difícil":
        return 3
      default:
        return 1
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">Selecciona tu nivel</h2>
        <p className="text-muted-foreground">Progresa paso a paso desde lo básico hasta problemas avanzados</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {levels.map((level) => (
          <Card
            key={level.id}
            className={`transition-all ${
              level.unlocked
                ? "hover:shadow-lg cursor-pointer border-2 hover:border-primary"
                : "opacity-60 cursor-not-allowed"
            }`}
          >
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge className={getDifficultyColor(level.difficulty)}>{level.difficulty}</Badge>
                <div className="flex items-center space-x-1">
                  {Array.from({ length: getDifficultyStars(level.difficulty) }, (_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-yellow-500" />
                  ))}
                </div>
              </div>
              <CardTitle className="flex items-center space-x-2">
                {level.unlocked ? (
                  level.completed === level.exercises ? (
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  ) : (
                    <Target className="w-6 h-6 text-primary" />
                  )
                ) : (
                  <Lock className="w-6 h-6 text-muted-foreground" />
                )}
                <span>{level.name}</span>
              </CardTitle>
              <CardDescription>{level.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progreso</span>
                  <span>
                    {level.completed}/{level.exercises}
                  </span>
                </div>
                <Progress value={(level.completed / level.exercises) * 100} />
              </div>

              <div className="space-y-2">
                <div className="text-sm font-medium">Temas incluidos:</div>
                <div className="flex flex-wrap gap-1">
                  {level.topics.slice(0, 2).map((topic, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                  {level.topics.length > 2 && (
                    <Badge variant="outline" className="text-xs">
                      +{level.topics.length - 2} más
                    </Badge>
                  )}
                </div>
              </div>

              <Button
                className="w-full"
                onClick={() => level.unlocked && onSelectLevel(level)}
                disabled={!level.unlocked}
              >
                {level.unlocked
                  ? level.completed === 0
                    ? "Comenzar Nivel"
                    : level.completed === level.exercises
                      ? "Revisar Nivel"
                      : "Continuar Nivel"
                  : "Bloqueado"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="w-5 h-5 text-primary" />
            <span>Consejos para el éxito</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="text-sm space-y-1">
            <p>• Completa todos los ejercicios de un nivel para desbloquear el siguiente</p>
            <p>• Lee las explicaciones cuidadosamente cuando te equivoques</p>
            <p>• Practica regularmente para mejorar tu velocidad y precisión</p>
            <p>• No tengas miedo de repetir ejercicios para reforzar el aprendizaje</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
