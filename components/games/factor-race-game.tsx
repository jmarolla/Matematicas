"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Zap, Trophy } from "lucide-react"

interface GameProps {
  onBack: () => void
}

interface Question {
  num1: number
  num2: number
  answer: number
}

export function FactorRaceGame({ onBack }: GameProps) {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null)
  const [userAnswer, setUserAnswer] = useState("")
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(60)
  const [gameActive, setGameActive] = useState(false)
  const [questionsAnswered, setQuestionsAnswered] = useState(0)
  const [streak, setStreak] = useState(0)

  const calculateMCD = (a: number, b: number): number => {
    while (b !== 0) {
      const temp = b
      b = a % b
      a = temp
    }
    return a
  }

  const generateQuestion = (): Question => {
    const num1 = Math.floor(Math.random() * 50) + 10
    const num2 = Math.floor(Math.random() * 50) + 10
    const answer = calculateMCD(num1, num2)
    return { num1, num2, answer }
  }

  const startGame = () => {
    setGameActive(true)
    setScore(0)
    setTimeLeft(60)
    setQuestionsAnswered(0)
    setStreak(0)
    setCurrentQuestion(generateQuestion())
  }

  const submitAnswer = () => {
    if (!currentQuestion || !gameActive) return

    const answer = Number.parseInt(userAnswer)
    if (answer === currentQuestion.answer) {
      const points = 10 + streak * 2
      setScore((prev) => prev + points)
      setStreak((prev) => prev + 1)
    } else {
      setStreak(0)
    }

    setQuestionsAnswered((prev) => prev + 1)
    setUserAnswer("")
    setCurrentQuestion(generateQuestion())
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      submitAnswer()
    }
  }

  useEffect(() => {
    if (gameActive && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0) {
      setGameActive(false)
    }
  }, [gameActive, timeLeft])

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 mb-6">
        <Button variant="outline" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver
        </Button>
        <div className="flex items-center space-x-2">
          <Zap className="w-5 h-5 text-primary" />
          <h2 className="text-2xl font-bold">Carrera de Factores</h2>
        </div>
      </div>

      {!gameActive && questionsAnswered === 0 && (
        <Card className="text-center">
          <CardHeader>
            <CardTitle className="text-2xl">¡Bienvenido a la Carrera de Factores!</CardTitle>
            <CardDescription className="text-lg">
              Encuentra el MCD (Máximo Común Divisor) de dos números lo más rápido que puedas.
              <br />
              Tienes 60 segundos. ¡Cada respuesta correcta consecutiva te da más puntos!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button size="lg" onClick={startGame} className="text-lg px-8 py-4">
              <Zap className="w-5 h-5 mr-2" />
              ¡Comenzar Carrera!
            </Button>
          </CardContent>
        </Card>
      )}

      {gameActive && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="text-center py-4">
                <div className="text-2xl font-bold text-primary">{score}</div>
                <div className="text-sm text-muted-foreground">Puntos</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="text-center py-4">
                <div className="text-2xl font-bold text-secondary">{timeLeft}s</div>
                <div className="text-sm text-muted-foreground">Tiempo</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="text-center py-4">
                <div className="text-2xl font-bold text-accent">{questionsAnswered}</div>
                <div className="text-sm text-muted-foreground">Respondidas</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="text-center py-4">
                <div className="text-2xl font-bold text-primary">{streak}</div>
                <div className="text-sm text-muted-foreground">Racha</div>
              </CardContent>
            </Card>
          </div>

          <Progress value={(timeLeft / 60) * 100} className="h-3" />

          {currentQuestion && (
            <Card className="border-2 border-primary">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl">
                  MCD({currentQuestion.num1}, {currentQuestion.num2}) = ?
                </CardTitle>
                <CardDescription>¿Cuál es el Máximo Común Divisor?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex space-x-2">
                  <Input
                    type="number"
                    placeholder="Tu respuesta..."
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="text-xl text-center"
                    autoFocus
                  />
                  <Button onClick={submitAnswer} disabled={!userAnswer} size="lg">
                    Enviar
                  </Button>
                </div>
                {streak > 0 && (
                  <div className="text-center">
                    <Badge variant="secondary" className="text-lg px-4 py-2">
                      ¡Racha de {streak}! +{10 + streak * 2} puntos por respuesta correcta
                    </Badge>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      )}

      {!gameActive && questionsAnswered > 0 && (
        <Card className="text-center border-2 border-primary">
          <CardHeader>
            <Trophy className="w-16 h-16 text-primary mx-auto mb-4" />
            <CardTitle className="text-3xl">¡Juego Terminado!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <div className="text-3xl font-bold text-primary">{score}</div>
                <div className="text-muted-foreground">Puntos Finales</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">{questionsAnswered}</div>
                <div className="text-muted-foreground">Preguntas Respondidas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">
                  {Math.round((score / questionsAnswered) * 10) / 10}
                </div>
                <div className="text-muted-foreground">Promedio por Pregunta</div>
              </div>
            </div>
            <div className="flex space-x-2 justify-center">
              <Button onClick={startGame} size="lg">
                Jugar de Nuevo
              </Button>
              <Button variant="outline" onClick={onBack} size="lg">
                Volver a Juegos
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
