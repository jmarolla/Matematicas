"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, Zap, Trophy } from "lucide-react"

interface GameProps {
  onBack: () => void
}

interface Question {
  num1: number
  num2: number
  type: "MCD" | "MCM"
  answer: number
}

export function QuickMathGame({ onBack }: GameProps) {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null)
  const [userAnswer, setUserAnswer] = useState("")
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(10)
  const [gameActive, setGameActive] = useState(false)
  const [questionsAnswered, setQuestionsAnswered] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [questionTimeLeft, setQuestionTimeLeft] = useState(10)

  const calculateMCD = (a: number, b: number): number => {
    while (b !== 0) {
      const temp = b
      b = a % b
      a = temp
    }
    return a
  }

  const calculateMCM = (a: number, b: number): number => {
    return (a * b) / calculateMCD(a, b)
  }

  const generateQuestion = (): Question => {
    const num1 = Math.floor(Math.random() * 30) + 5
    const num2 = Math.floor(Math.random() * 30) + 5
    const type = Math.random() > 0.5 ? "MCD" : "MCM"
    const answer = type === "MCD" ? calculateMCD(num1, num2) : calculateMCM(num1, num2)
    return { num1, num2, type, answer }
  }

  const startGame = () => {
    setGameActive(true)
    setScore(0)
    setQuestionsAnswered(0)
    setCorrectAnswers(0)
    setQuestionTimeLeft(10)
    setCurrentQuestion(generateQuestion())
  }

  const submitAnswer = () => {
    if (!currentQuestion || !gameActive) return

    const answer = Number.parseInt(userAnswer)
    const isCorrect = answer === currentQuestion.answer

    if (isCorrect) {
      const timeBonus = Math.max(0, questionTimeLeft - 2)
      const points = 50 + timeBonus * 10
      setScore((prev) => prev + points)
      setCorrectAnswers((prev) => prev + 1)
    }

    setQuestionsAnswered((prev) => prev + 1)
    setUserAnswer("")
    setQuestionTimeLeft(10)
    setCurrentQuestion(generateQuestion())
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      submitAnswer()
    }
  }

  useEffect(() => {
    if (gameActive && questionTimeLeft > 0) {
      const timer = setTimeout(() => setQuestionTimeLeft(questionTimeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else if (questionTimeLeft === 0 && gameActive) {
      // Tiempo agotado para esta pregunta
      setQuestionsAnswered((prev) => prev + 1)
      setUserAnswer("")
      setQuestionTimeLeft(10)
      setCurrentQuestion(generateQuestion())
    }
  }, [gameActive, questionTimeLeft])

  useEffect(() => {
    if (questionsAnswered >= 10) {
      setGameActive(false)
    }
  }, [questionsAnswered])

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 mb-6">
        <Button variant="outline" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver
        </Button>
        <div className="flex items-center space-x-2">
          <Clock className="w-5 h-5 text-accent" />
          <h2 className="text-2xl font-bold">Matemáticas Rápidas</h2>
        </div>
      </div>

      {!gameActive && questionsAnswered === 0 && (
        <Card className="text-center">
          <CardHeader>
            <CardTitle className="text-2xl">¡Desafío de Velocidad!</CardTitle>
            <CardDescription className="text-lg">
              Responde 10 preguntas de MCM y MCD lo más rápido posible.
              <br />
              Tienes 10 segundos por pregunta. ¡Más velocidad = más puntos!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button size="lg" onClick={startGame} className="text-lg px-8 py-4">
              <Zap className="w-5 h-5 mr-2" />
              ¡Comenzar Desafío!
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
                <div className="text-2xl font-bold text-accent">{questionTimeLeft}s</div>
                <div className="text-sm text-muted-foreground">Tiempo</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="text-center py-4">
                <div className="text-2xl font-bold text-secondary">{questionsAnswered}/10</div>
                <div className="text-sm text-muted-foreground">Preguntas</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="text-center py-4">
                <div className="text-2xl font-bold text-primary">{correctAnswers}</div>
                <div className="text-sm text-muted-foreground">Correctas</div>
              </CardContent>
            </Card>
          </div>

          <Progress value={(questionTimeLeft / 10) * 100} className="h-3" />

          {currentQuestion && (
            <Card className="border-2 border-accent">
              <CardHeader className="text-center">
                <Badge variant="secondary" className="text-lg px-4 py-2 mb-4">
                  {currentQuestion.type}
                </Badge>
                <CardTitle className="text-3xl">
                  {currentQuestion.type}({currentQuestion.num1}, {currentQuestion.num2}) = ?
                </CardTitle>
                <CardDescription>
                  {currentQuestion.type === "MCD" ? "Máximo Común Divisor" : "Mínimo Común Múltiplo"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex space-x-2">
                  <Input
                    type="number"
                    placeholder="Respuesta rápida..."
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="text-xl text-center"
                    autoFocus
                  />
                  <Button onClick={submitAnswer} disabled={!userAnswer} size="lg">
                    ¡Ya!
                  </Button>
                </div>
                <div className="text-center text-sm text-muted-foreground">Pregunta {questionsAnswered + 1} de 10</div>
              </CardContent>
            </Card>
          )}
        </div>
      )}

      {!gameActive && questionsAnswered > 0 && (
        <Card className="text-center border-2 border-accent">
          <CardHeader>
            <Trophy className="w-16 h-16 text-accent mx-auto mb-4" />
            <CardTitle className="text-3xl">¡Desafío Completado!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <div className="text-3xl font-bold text-primary">{score}</div>
                <div className="text-muted-foreground">Puntos Totales</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">{correctAnswers}/10</div>
                <div className="text-muted-foreground">Respuestas Correctas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">{Math.round((correctAnswers / 10) * 100)}%</div>
                <div className="text-muted-foreground">Precisión</div>
              </div>
            </div>

            <div className="text-center">
              {correctAnswers >= 8 && (
                <Badge variant="secondary" className="text-lg px-4 py-2 bg-yellow-100 text-yellow-800">
                  ¡Excelente! Eres un maestro de las matemáticas
                </Badge>
              )}
              {correctAnswers >= 5 && correctAnswers < 8 && (
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  ¡Buen trabajo! Sigue practicando
                </Badge>
              )}
              {correctAnswers < 5 && (
                <Badge variant="outline" className="text-lg px-4 py-2">
                  ¡No te rindas! La práctica hace al maestro
                </Badge>
              )}
            </div>

            <div className="flex space-x-2 justify-center">
              <Button onClick={startGame} size="lg">
                Intentar de Nuevo
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
