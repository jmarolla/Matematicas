"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AchievementSystem } from "./achievement-system"
import { ActivityHistory } from "./activity-history"
import { ProgressCharts } from "./progress-charts"
import { UserLevel } from "./user-level"
import { Trophy, Star, Target, TrendingUp, Award, Zap, BookOpen, Calculator, Gamepad2 } from "lucide-react"

interface UserStats {
  totalPoints: number
  level: number
  experiencePoints: number
  experienceToNext: number
  exercisesCompleted: number
  gamesPlayed: number
  calculationsPerformed: number
  streakDays: number
  accuracy: number
  totalTimeSpent: number
}

const userStats: UserStats = {
  totalPoints: 2450,
  level: 5,
  experiencePoints: 1200,
  experienceToNext: 800,
  exercisesCompleted: 45,
  gamesPlayed: 23,
  calculationsPerformed: 156,
  streakDays: 7,
  accuracy: 87,
  totalTimeSpent: 180, // minutos
}

export function ProgressDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="space-y-6">
      <UserLevel userStats={userStats} />

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Resumen</TabsTrigger>
          <TabsTrigger value="achievements">Logros</TabsTrigger>
          <TabsTrigger value="activity">Actividad</TabsTrigger>
          <TabsTrigger value="charts">Estadísticas</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Puntos Totales</CardTitle>
                <Star className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{userStats.totalPoints.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">+150 esta semana</p>
              </CardContent>
            </Card>

            <Card className="border-secondary/20 bg-secondary/5">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Ejercicios</CardTitle>
                <BookOpen className="h-4 w-4 text-secondary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-secondary">{userStats.exercisesCompleted}</div>
                <p className="text-xs text-muted-foreground">Completados</p>
              </CardContent>
            </Card>

            <Card className="border-accent/20 bg-accent/5">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Precisión</CardTitle>
                <Target className="h-4 w-4 text-accent" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-accent">{userStats.accuracy}%</div>
                <p className="text-xs text-muted-foreground">Respuestas correctas</p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-primary/5">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Racha</CardTitle>
                <Zap className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{userStats.streakDays}</div>
                <p className="text-xs text-muted-foreground">Días consecutivos</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span>Actividad Reciente</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Trophy className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Completaste "Conceptos Básicos"</p>
                    <p className="text-xs text-muted-foreground">Hace 2 horas</p>
                  </div>
                  <Badge variant="secondary">+100 pts</Badge>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Gamepad2 className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Jugaste "Carrera de Factores"</p>
                    <p className="text-xs text-muted-foreground">Hace 1 día</p>
                  </div>
                  <Badge variant="outline">+50 pts</Badge>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Calculator className="w-4 h-4 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Usaste la calculadora de MCM</p>
                    <p className="text-xs text-muted-foreground">Hace 2 días</p>
                  </div>
                  <Badge variant="outline">+10 pts</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-secondary" />
                  <span>Logros Recientes</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Maestro de MCD</p>
                    <p className="text-xs text-muted-foreground">Resolviste 50 problemas de MCD</p>
                  </div>
                  <Badge className="bg-yellow-100 text-yellow-800">Oro</Badge>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Velocista</p>
                    <p className="text-xs text-muted-foreground">Racha de 7 días consecutivos</p>
                  </div>
                  <Badge className="bg-gray-100 text-gray-800">Plata</Badge>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Principiante Dedicado</p>
                    <p className="text-xs text-muted-foreground">Completaste tu primer nivel</p>
                  </div>
                  <Badge className="bg-orange-100 text-orange-800">Bronce</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="achievements">
          <AchievementSystem userStats={userStats} />
        </TabsContent>

        <TabsContent value="activity">
          <ActivityHistory />
        </TabsContent>

        <TabsContent value="charts">
          <ProgressCharts userStats={userStats} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
