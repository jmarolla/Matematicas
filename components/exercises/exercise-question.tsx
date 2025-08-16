"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, CheckCircle, XCircle, Lightbulb, RotateCcw } from "lucide-react"

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

interface ExerciseQuestionProps {
  level: Level
  exerciseNumber: number
  onBack: () => void
  onComplete: () => void
}

interface Question {
  id: number
  type: "multiple-choice" | "fill-blank" | "word-problem"
  concept: "MCD" | "MCM"
  question: string
  options?: string[]
  correctAnswer: string
  explanation: string
  hint: string
}

export function ExerciseQuestion({ level, exerciseNumber, onBack, onComplete }: ExerciseQuestionProps) {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null)
  const [userAnswer, setUserAnswer] = useState("")
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [attempts, setAttempts] = useState(0)

  const generateQuestion = (): Question => {
    const questions: Question[] = [
      {
        id: 1,
        type: "multiple-choice",
        concept: "MCD",
        question: "¿Cuál es el MCD de 12 y 18?",
        options: ["3", "6", "9", "12"],
        correctAnswer: "6",
        explanation: "El MCD de 12 y 18 es 6, porque es el número más grande que divide exactamente a ambos números.",
        hint: "Piensa en los divisores comunes de 12 y 18. ¿Cuál es el más grande?",
      },
      {
        id: 2,
        type: "word-problem",
        concept: "MCM",
        question:
          "Ana va al gimnasio cada 4 días y Carlos cada 6 días. Si ambos fueron hoy, ¿en cuántos días volverán a coincidir?",
        correctAnswer: "12",
        explanation:
          "Necesitamos encontrar el MCM de 4 y 6. MCM(4,6) = 12. Por lo tanto, volverán a coincidir en 12 días.",
        hint: "Este es un problema de MCM. Necesitas encontrar el menor múltiplo común de 4 y 6.",
      },
      {
        id: 3,
        type: "fill-blank",
        concept: "MCD",
        question: "Si MCD(24, 36) = 12, entonces 24 ÷ 12 = ___ y 36 ÷ 12 = ___",
        correctAnswer: "2, 3",
        explanation: "24 ÷ 12 = 2 y 36 ÷ 12 = 3. Estos números (2 y 3) son coprimos, es decir, su MCD es 1.",
        hint: "Divide cada número por el MCD para obtener los cocientes.",
      },
    ]

    return questions[Math.floor(Math.random() * questions.length)]
  }

  const submitAnswer = () => {
    if (!currentQuestion) return

    const answer = currentQuestion.type === "multiple-choice" ? selectedOption : userAnswer
    const correct = answer?.toLowerCase().trim() === currentQuestion.correctAnswer.toLowerCase().trim()

    setIsCorrect(correct)
    setShowResult(true)
    setAttempts((prev) => prev + 1)

    if (correct) {
      setTimeout(() => {
        onComplete()
      }, 3000)
    }
  }

  const resetQuestion = () => {
    setUserAnswer("")
    setSelectedOption(null)
    setShowResult(false)
    setIsCorrect(false)
    setShowHint(false)
    setAttempts(0)
    setCurrentQuestion(generateQuestion())
  }

  useEffect(() => {
    setCurrentQuestion(generateQuestion())
  }, [])

  if (!currentQuestion) return null

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="outline" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver al nivel
        </Button>
        <div className="text-right">
          <div className="text-sm text-muted-foreground">
            {level.name} - Ejercicio {exerciseNumber}
          </div>
          <Badge variant="secondary">{currentQuestion.concept}</Badge>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Ejercicio {exerciseNumber}</CardTitle>
            <div className="flex items-center space-x-2">
              <Badge variant="outline">{currentQuestion.type.replace("-", " ")}</Badge>
              <Badge variant="secondary">{currentQuestion.concept}</Badge>
            </div>
          </div>
          <Progress value={(exerciseNumber / level.exercises) * 100} />
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-lg font-medium">{currentQuestion.question}</div>

          {!showResult && (
            <div className="space-y-4">
              {currentQuestion.type === "multiple-choice" && currentQuestion.options && (
                <div className="grid grid-cols-2 gap-3">
                  {currentQuestion.options.map((option, index) => (
                    <Button
                      key={index}
                      variant={selectedOption === option ? "default" : "outline"}
                      onClick={() => setSelectedOption(option)}
                      className="text-left justify-start"
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              )}

              {currentQuestion.type !== "multiple-choice" && (
                <Input
                  placeholder="Escribe tu respuesta aquí..."
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  className="text-lg"
                />
              )}

              <div className="flex space-x-2">
                <Button
                  onClick={submitAnswer}
                  disabled={currentQuestion.type === "multiple-choice" ? !selectedOption : !userAnswer.trim()}
                  className="flex-1"
                >
                  Enviar Respuesta
                </Button>
                <Button variant="outline" onClick={() => setShowHint(!showHint)}>
                  <Lightbulb className="w-4 h-4 mr-2" />
                  Pista
                </Button>
              </div>

              {showHint && (
                <Card className="border-accent/20 bg-accent/5">
                  <CardContent className="pt-4">
                    <div className="flex items-start space-x-2">
                      <Lightbulb className="w-5 h-5 text-accent mt-0.5" />
                      <p className="text-sm">{currentQuestion.hint}</p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          {showResult && (
            <div className="space-y-4">
              <Card className={`border-2 ${isCorrect ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50"}`}>
                <CardContent className="pt-4">
                  <div className="flex items-center space-x-2 mb-3">
                    {isCorrect ? (
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    ) : (
                      <XCircle className="w-6 h-6 text-red-500" />
                    )}
                    <span className="font-semibold text-lg">{isCorrect ? "¡Correcto!" : "Incorrecto"}</span>
                  </div>
                  <p className="text-sm mb-2">
                    <strong>Respuesta correcta:</strong> {currentQuestion.correctAnswer}
                  </p>
                  <p className="text-sm">{currentQuestion.explanation}</p>
                </CardContent>
              </Card>

              <div className="flex space-x-2">
                {isCorrect ? (
                  <Button onClick={onComplete} className="flex-1">
                    Continuar al siguiente ejercicio
                  </Button>
                ) : (
                  <Button onClick={resetQuestion} className="flex-1">
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Intentar de nuevo
                  </Button>
                )}
                <Button variant="outline" onClick={onBack}>
                  Volver al nivel
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="pt-4">
          <div className="flex items-center justify-between text-sm">
            <span>Intentos: {attempts}</span>
            <span>
              Progreso del nivel: {exerciseNumber}/{level.exercises}
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
