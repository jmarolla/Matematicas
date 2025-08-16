"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { AlertCircle, CheckCircle, ArrowRight } from "lucide-react"

interface CalculationStep {
  step: number
  description: string
  calculation: string
  result: string
}

export function MCDCalculator() {
  const [num1, setNum1] = useState("")
  const [num2, setNum2] = useState("")
  const [result, setResult] = useState<number | null>(null)
  const [steps, setSteps] = useState<CalculationStep[]>([])
  const [isCalculating, setIsCalculating] = useState(false)

  const calculateMCD = () => {
    const a = Number.parseInt(num1)
    const b = Number.parseInt(num2)

    if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
      return
    }

    setIsCalculating(true)
    const calculationSteps: CalculationStep[] = []

    // Algoritmo de Euclides con pasos
    let x = Math.max(a, b)
    let y = Math.min(a, b)
    let stepCount = 1

    calculationSteps.push({
      step: stepCount++,
      description: "Comenzamos con los dos números",
      calculation: `${a} y ${b}`,
      result: `Ordenamos: ${x} ≥ ${y}`,
    })

    while (y !== 0) {
      const quotient = Math.floor(x / y)
      const remainder = x % y

      calculationSteps.push({
        step: stepCount++,
        description: `Dividimos ${x} entre ${y}`,
        calculation: `${x} = ${y} × ${quotient} + ${remainder}`,
        result: `Residuo: ${remainder}`,
      })

      x = y
      y = remainder
    }

    calculationSteps.push({
      step: stepCount,
      description: "El MCD es el último divisor cuando el residuo es 0",
      calculation: `MCD(${a}, ${b}) = ${x}`,
      result: `¡Resultado final!`,
    })

    // Simular animación paso a paso
    setSteps([])
    setResult(null)

    calculationSteps.forEach((step, index) => {
      setTimeout(
        () => {
          setSteps((prev) => [...prev, step])
          if (index === calculationSteps.length - 1) {
            setResult(x)
            setIsCalculating(false)
          }
        },
        (index + 1) * 800,
      )
    })
  }

  const reset = () => {
    setNum1("")
    setNum2("")
    setResult(null)
    setSteps([])
    setIsCalculating(false)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <span>Calculadora de MCD</span>
            {result && <CheckCircle className="w-5 h-5 text-green-500" />}
          </CardTitle>
          <CardDescription>
            El Máximo Común Divisor es el número más grande que divide exactamente a ambos números.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Primer número</label>
              <Input
                type="number"
                placeholder="Ej: 48"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
                min="1"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Segundo número</label>
              <Input
                type="number"
                placeholder="Ej: 18"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
                min="1"
              />
            </div>
          </div>

          <div className="flex space-x-2">
            <Button onClick={calculateMCD} disabled={!num1 || !num2 || isCalculating} className="flex-1">
              {isCalculating ? "Calculando..." : "Calcular MCD"}
            </Button>
            <Button variant="outline" onClick={reset}>
              Limpiar
            </Button>
          </div>

          {result && (
            <div className="text-center p-4 bg-primary/10 rounded-lg border border-primary/20">
              <div className="text-2xl font-bold text-primary mb-2">
                MCD({num1}, {num2}) = {result}
              </div>
              <p className="text-sm text-muted-foreground">
                El {result} es el número más grande que divide exactamente a {num1} y {num2}
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {steps.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Proceso paso a paso</CardTitle>
            <CardDescription>Algoritmo de Euclides - Así es como encontramos el MCD</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={step.step} className="flex items-start space-x-4 p-4 rounded-lg bg-muted/50">
                  <Badge variant="secondary" className="mt-1">
                    {step.step}
                  </Badge>
                  <div className="flex-1">
                    <p className="font-medium text-foreground mb-1">{step.description}</p>
                    <div className="flex items-center space-x-2 text-sm">
                      <code className="bg-background px-2 py-1 rounded border">{step.calculation}</code>
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{step.result}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <Card className="border-accent/20 bg-accent/5">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertCircle className="w-5 h-5 text-accent" />
            <span>¿Cómo funciona?</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="text-sm space-y-2">
            <p>
              <strong>1. Algoritmo de Euclides:</strong> Dividimos el número mayor entre el menor.
            </p>
            <p>
              <strong>2. Nuevo par:</strong> El divisor se convierte en dividendo, y el residuo en divisor.
            </p>
            <p>
              <strong>3. Repetimos:</strong> Hasta que el residuo sea 0.
            </p>
            <p>
              <strong>4. Resultado:</strong> El último divisor es el MCD.
            </p>
          </div>
          <Separator />
          <p className="text-xs text-muted-foreground">
            <strong>Ejemplo:</strong> MCD(48, 18) = 6 porque 6 es el número más grande que divide exactamente a 48 y 18.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
