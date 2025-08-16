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

export function MCMCalculator() {
  const [num1, setNum1] = useState("")
  const [num2, setNum2] = useState("")
  const [result, setResult] = useState<number | null>(null)
  const [steps, setSteps] = useState<CalculationStep[]>([])
  const [isCalculating, setIsCalculating] = useState(false)

  const calculateMCD = (a: number, b: number): number => {
    while (b !== 0) {
      const temp = b
      b = a % b
      a = temp
    }
    return a
  }

  const calculateMCM = () => {
    const a = Number.parseInt(num1)
    const b = Number.parseInt(num2)

    if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
      return
    }

    setIsCalculating(true)
    const calculationSteps: CalculationStep[] = []
    let stepCount = 1

    // Paso 1: Mostrar los números
    calculationSteps.push({
      step: stepCount++,
      description: "Comenzamos con los dos números",
      calculation: `${a} y ${b}`,
      result: "Vamos a encontrar su MCM",
    })

    // Paso 2: Calcular MCD
    const mcd = calculateMCD(a, b)
    calculationSteps.push({
      step: stepCount++,
      description: "Primero calculamos el MCD de ambos números",
      calculation: `MCD(${a}, ${b}) = ${mcd}`,
      result: "Necesitamos el MCD para la fórmula",
    })

    // Paso 3: Aplicar fórmula
    const mcm = (a * b) / mcd
    calculationSteps.push({
      step: stepCount++,
      description: "Aplicamos la fórmula: MCM(a,b) = (a × b) ÷ MCD(a,b)",
      calculation: `MCM(${a}, ${b}) = (${a} × ${b}) ÷ ${mcd}`,
      result: `= ${a * b} ÷ ${mcd}`,
    })

    calculationSteps.push({
      step: stepCount,
      description: "Resultado final",
      calculation: `MCM(${a}, ${b}) = ${mcm}`,
      result: "¡Este es el MCM!",
    })

    // Simular animación paso a paso
    setSteps([])
    setResult(null)

    calculationSteps.forEach((step, index) => {
      setTimeout(
        () => {
          setSteps((prev) => [...prev, step])
          if (index === calculationSteps.length - 1) {
            setResult(mcm)
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
            <span>Calculadora de MCM</span>
            {result && <CheckCircle className="w-5 h-5 text-green-500" />}
          </CardTitle>
          <CardDescription>
            El Mínimo Común Múltiplo es el número más pequeño que es múltiplo de ambos números.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Primer número</label>
              <Input
                type="number"
                placeholder="Ej: 12"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
                min="1"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Segundo número</label>
              <Input type="number" placeholder="Ej: 8" value={num2} onChange={(e) => setNum2(e.target.value)} min="1" />
            </div>
          </div>

          <div className="flex space-x-2">
            <Button onClick={calculateMCM} disabled={!num1 || !num2 || isCalculating} className="flex-1">
              {isCalculating ? "Calculando..." : "Calcular MCM"}
            </Button>
            <Button variant="outline" onClick={reset}>
              Limpiar
            </Button>
          </div>

          {result && (
            <div className="text-center p-4 bg-secondary/10 rounded-lg border border-secondary/20">
              <div className="text-2xl font-bold text-secondary mb-2">
                MCM({num1}, {num2}) = {result}
              </div>
              <p className="text-sm text-muted-foreground">
                El {result} es el número más pequeño que es múltiplo de {num1} y {num2}
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {steps.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Proceso paso a paso</CardTitle>
            <CardDescription>Fórmula: MCM(a,b) = (a × b) ÷ MCD(a,b)</CardDescription>
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
              <strong>1. Fórmula mágica:</strong> MCM(a,b) = (a × b) ÷ MCD(a,b)
            </p>
            <p>
              <strong>2. Primero el MCD:</strong> Calculamos el Máximo Común Divisor.
            </p>
            <p>
              <strong>3. Multiplicamos:</strong> a × b nos da el producto.
            </p>
            <p>
              <strong>4. Dividimos:</strong> El producto entre el MCD nos da el MCM.
            </p>
          </div>
          <Separator />
          <p className="text-xs text-muted-foreground">
            <strong>Ejemplo:</strong> MCM(12, 8) = 24 porque 24 es el número más pequeño que es múltiplo de 12 y 8.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
