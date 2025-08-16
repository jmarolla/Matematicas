"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { LevelSelector } from "./level-selector"
import { ExerciseQuestion } from "./exercise-question"
import { Star, Lock, CheckCircle } from "lucide-react"

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

const levels: Level[] = [
  {
    id: 1,
    name: "Conceptos Básicos",
    description: "Aprende qué son el MCD y MCM con números pequeños",
    difficulty: "Fácil",
    exercises: 20,
    completed: 12,
    unlocked: true,
    topics: ["Definiciones", "Números pequeños", "Ejemplos simples"],
  },
  {
    id: 2,
    name: "Números Medianos",
    description: "Practica con números más grandes y diferentes métodos",
    difficulty: "Intermedio",
    exercises: 20,
    completed: 0,
    unlocked: true,
    topics: ["Factorización", "Algoritmo de Euclides", "Números hasta 100"],
  },
  {
    id: 3,
    name: "Problemas Aplicados",
    description: "Resuelve problemas de la vida real usando MCM y MCD",
    difficulty: "Intermedio",
    exercises: 20,
    completed: 0,
    unlocked: false,
    topics: ["Problemas cotidianos", "Aplicaciones prácticas", "Razonamiento"],
  },
]

export function ExerciseSystem() {
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null)
  const [currentExercise, setCurrentExercise] = useState<number>(0)

  if (selectedLevel && currentExercise > 0) {
    return (
      <ExerciseQuestion
        level={selectedLevel}
        exerciseNumber={currentExercise}
        onBack={() => setCurrentExercise(0)}
        onComplete={() => {
          // Lógica para completar ejercicio
          setCurrentExercise(0)
        }}
      />
    )
  }

  if (selectedLevel) {
    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <Button variant="outline" onClick={() => setSelectedLevel(null)}>
            ← Volver a niveles
          </Button>
          <div>
            <h2 className="text-2xl font-bold">{selectedLevel.name}</h2>
            <p className="text-muted-foreground">{selectedLevel.description}</p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Progreso del Nivel</CardTitle>
              <Badge variant="secondary">{selectedLevel.difficulty}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span>Ejercicios completados</span>
                <span>
                  {selectedLevel.completed}/{selectedLevel.exercises}
                </span>
              </div>
              <Progress value={(selectedLevel.completed / selectedLevel.exercises) * 100} />
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: selectedLevel.exercises }, (_, i) => i + 1).map((exerciseNum) => (
            <Card
              key={exerciseNum}
              className={`cursor-pointer transition-all ${
                exerciseNum <= selectedLevel.completed + 1
                  ? "hover:shadow-md border-primary/20"
                  : "opacity-50 cursor-not-allowed"
              }`}
              onClick={() => {
                if (exerciseNum <= selectedLevel.completed + 1) {
                  setCurrentExercise(exerciseNum)
                }
              }}
            >
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  {exerciseNum <= selectedLevel.completed ? (
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  ) : exerciseNum === selectedLevel.completed + 1 ? (
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-xs text-primary-foreground font-bold">{exerciseNum}</span>
                    </div>
                  ) : (
                    <Lock className="w-6 h-6 text-muted-foreground" />
                  )}
                </div>
                <div className="text-sm font-medium">Ejercicio {exerciseNum}</div>
                {exerciseNum <= selectedLevel.completed && (
                  <div className="flex justify-center mt-1">
                    {Array.from({ length: 3 }, (_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current text-yellow-500" />
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-accent/20 bg-accent/5">
          <CardHeader>
            <CardTitle>Temas de este nivel</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {selectedLevel.topics.map((topic, index) => (
                <Badge key={index} variant="outline">
                  {topic}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return <LevelSelector levels={levels} onSelectLevel={setSelectedLevel} />
}
