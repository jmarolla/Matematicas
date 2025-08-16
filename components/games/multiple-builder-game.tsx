"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Puzzle, CheckCircle, XCircle } from "lucide-react"

interface GameProps {
  onBack: () => void
}

interface Question {
  num1: number
  num2: number
  answer: number
  options: number[]
}

export function MultipleBuilderGame({ onBack }: GameProps) {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [level, setLevel] = useState(1)
  const [questionsInLevel, setQuestionsInLevel] = useState(0)

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
    const maxNum = Math.min(20 + level * 10, 100)
    const num1 = Math.floor(Math.random() * maxNum) + 5
    const num2 = Math.floor(Math.random() * maxNum) + 5
    const answer = calculateMCM(num1, num2)

    // Generar opciones incorrectas
    const wrongOptions = []
    while (wrongOptions.length < 3) {
      const wrong = answer + Math.floor(Math.random() * 40) - 20
      if (wrong > 0 && wrong !== answer && !wrongOptions.includes(wrong)) {
        wrongOptions.push(wrong)
      }
    }

    const options = [answer, ...wrongOptions].sort(() => Math.random() - 0.5)
    return { num1, num2, answer, options }
  }

  const selectAnswer = (answer: number) => {
    if (showResult) return
    setSelectedAnswer(answer)
  }

  const submitAnswer = () => {
    if (selectedAnswer === null || !currentQuestion) return

    setShowResult(true)
    if (selectedAnswer === currentQuestion.answer) {
      setScore((prev) => prev + level * 10)
    }

    setTimeout(() => {
      nextQuestion()
    }, 2000)
  }

  const nextQuestion = () => {
    setQuestionsInLevel((prev) => prev + 1)
    if (questionsInLevel >= 4) {
      setLevel((prev) => prev + 1)
      setQuestionsInLevel(0)
    }
    setSelectedAnswer(null)
    setShowResult(false)
    setCurrentQuestion(generateQuestion())
  }

  useEffect(() => {
    setCurrentQuestion(generateQuestion())
  }, [])

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 mb-6">
        <Button variant="outline" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver
        </Button>
        <div className="flex items-center space-x-2">
          <Puzzle className="w-5 h-5 text-secondary" />
          <h2 className="text-2xl font-bold">Constructor de Múltiplos</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="text-center py-4">
            <div className="text-2xl font-bold text-primary">{score}</div>
            <div className="text-sm text-muted-foreground">Puntos</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="text-center py-4">
            <div className="text-2xl font-bold text-secondary">Nivel {level}</div>
            <div className="text-sm text-muted-foreground">Dificultad</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="text-center py-4">
            <div className="text-2xl font-bold text-accent">{questionsInLevel + 1}/5</div>
            <div className="text-sm text-muted-foreground">Progreso</div>
          </CardContent>
        </Card>
      </div>

      {currentQuestion && (
        <Card className="border-2 border-secondary">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">
              MCM({currentQuestion.num1}, {currentQuestion.num2}) = ?
            </CardTitle>
            <CardDescription className="text-lg">
              Encuentra el Mínimo Común Múltiplo seleccionando la respuesta correcta
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {currentQuestion.options.map((option, index) => (
                <Button
                  key={index}
                  variant={selectedAnswer === option ? "default" : "outline"}
                  size="lg"
                  className={`text-xl py-8 relative ${
                    showResult
                      ? option === currentQuestion.answer
                        ? "bg-green-500 hover:bg-green-500 text-white"
                        : selectedAnswer === option
                          ? "bg-red-500 hover:bg-red-500 text-white"
                          : ""
                      : ""
                  }`}
                  onClick={() => selectAnswer(option)}
                  disabled={showResult}
                >
                  {option}
                  {showResult && option === currentQuestion.answer && (
                    <CheckCircle className="w-6 h-6 absolute top-2 right-2" />
                  )}
                  {showResult && selectedAnswer === option && option !== currentQuestion.answer && (
                    <XCircle className="w-6 h-6 absolute top-2 right-2" />
                  )}
                </Button>
              ))}
            </div>

            {selectedAnswer !== null && !showResult && (
              <div className="text-center">
                <Button onClick={submitAnswer} size="lg" className="px-8">
                  Confirmar Respuesta
                </Button>
              </div>
            )}

            {showResult && (
              <div className="text-center space-y-2">
                {selectedAnswer === currentQuestion.answer ? (
                  <div>
                    <Badge variant="secondary" className="text-lg px-4 py-2 bg-green-100 text-green-800">
                      ¡Correcto! +{level * 10} puntos
                    </Badge>
                    <p className="text-sm text-muted-foreground mt-2">
                      El MCM de {currentQuestion.num1} y {currentQuestion.num2} es {currentQuestion.answer}
                    </p>
                  </div>
                ) : (
                  <div>
                    <Badge variant="destructive" className="text-lg px-4 py-2">
                      Incorrecto. La respuesta era {currentQuestion.answer}
                    </Badge>
                    <p className="text-sm text-muted-foreground mt-2">
                      ¡No te preocupes! Sigue practicando para mejorar.
                    </p>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      )}

      <Card className="border-accent/20 bg-accent/5">
        <CardHeader>
          <CardTitle className="text-lg">Consejo de Mateo</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            Recuerda: el MCM es el número más pequeño que es múltiplo de ambos números. Puedes usar la fórmula: MCM(a,b)
            = (a × b) ÷ MCD(a,b)
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
