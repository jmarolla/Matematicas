"use client"

import { Navigation } from "@/components/navigation"
import { MCDCalculator } from "@/components/calculators/mcd-calculator"
import { MCMCalculator } from "@/components/calculators/mcm-calculator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, Lightbulb } from "lucide-react"

export default function CalculatorPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Calculator className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">Calculadoras Interactivas</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre cómo calcular el MCD y MCM paso a paso con nuestras calculadoras que te explican todo el proceso.
          </p>
        </div>

        <Card className="mb-8 border-accent/20 bg-accent/5">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Lightbulb className="w-5 h-5 text-accent" />
              <CardTitle className="text-lg">Consejo de Mateo</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base">
              ¡Hola! Usa estas calculadoras para entender mejor cómo funcionan el MCD y MCM. Cada paso está explicado
              para que puedas aprender mientras calculas.
            </CardDescription>
          </CardContent>
        </Card>

        <Tabs defaultValue="mcd" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="mcd" className="text-lg py-3">
              MCD - Máximo Común Divisor
            </TabsTrigger>
            <TabsTrigger value="mcm" className="text-lg py-3">
              MCM - Mínimo Común Múltiplo
            </TabsTrigger>
          </TabsList>

          <TabsContent value="mcd">
            <MCDCalculator />
          </TabsContent>

          <TabsContent value="mcm">
            <MCMCalculator />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
