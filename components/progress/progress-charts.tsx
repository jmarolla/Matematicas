"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, BarChart3, PieChart, Calendar } from "lucide-react"

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

interface ProgressChartsProps {
  userStats: UserStats
}

export function ProgressCharts({ userStats }: ProgressChartsProps) {
  // Datos simulados para los gráficos
  const weeklyProgress = [
    { day: "Lun", points: 120, exercises: 3, games: 1 },
    { day: "Mar", points: 85, exercises: 2, games: 2 },
    { day: "Mié", points: 200, exercises: 5, games: 1 },
    { day: "Jue", points: 150, exercises: 4, games: 0 },
    { day: "Vie", points: 180, exercises: 3, games: 3 },
    { day: "Sáb", points: 220, exercises: 6, games: 2 },
    { day: "Dom", points: 95, exercises: 2, games: 1 },
  ]

  const topicDistribution = [
    { topic: "MCD", percentage: 60, exercises: 27 },
    { topic: "MCM", percentage: 40, exercises: 18 },
  ]

  const monthlyStats = [
    { month: "Ene", points: 450, level: 2 },
    { month: "Feb", points: 680, level: 3 },
    { month: "Mar", points: 920, level: 4 },
    { month: "Abr", points: 1200, level: 5 },
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              <span>Progreso Semanal</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {weeklyProgress.map((day, index) => (
                <div key={day.day} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{day.day}</span>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-xs">
                        {day.exercises} ej.
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {day.games} juegos
                      </Badge>
                      <span className="text-sm font-semibold">{day.points} pts</span>
                    </div>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(day.points / 250) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <PieChart className="w-5 h-5 text-secondary" />
              <span>Distribución por Tema</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {topicDistribution.map((topic, index) => (
                <div key={topic.topic} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{topic.topic}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm">{topic.exercises} ejercicios</span>
                      <Badge variant="secondary">{topic.percentage}%</Badge>
                    </div>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div
                      className={`h-3 rounded-full transition-all duration-300 ${
                        topic.topic === "MCD" ? "bg-primary" : "bg-secondary"
                      }`}
                      style={{ width: `${topic.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
              <div className="pt-4 border-t">
                <p className="text-xs text-muted-foreground">
                  Has trabajado más en MCD que en MCM. ¡Intenta equilibrar tu práctica!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-accent" />
            <span>Evolución Mensual</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-4 gap-4">
              {monthlyStats.map((month, index) => (
                <div key={month.month} className="text-center space-y-2">
                  <div className="text-xs text-muted-foreground">{month.month}</div>
                  <div className="relative">
                    <div className="w-full bg-muted rounded-full h-20 flex items-end justify-center">
                      <div
                        className="bg-accent rounded-full w-8 transition-all duration-300"
                        style={{ height: `${(month.points / 1200) * 80}px` }}
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-semibold">{month.points}</div>
                    <Badge variant="outline" className="text-xs">
                      Nivel {month.level}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-4 border-t">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">+750</div>
                  <div className="text-xs text-muted-foreground">Puntos este mes</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">3</div>
                  <div className="text-xs text-muted-foreground">Niveles subidos</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">62%</div>
                  <div className="text-xs text-muted-foreground">Mejora en precisión</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-primary" />
            <span>Resumen de Rendimiento</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold">Fortalezas</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>Excelente constancia (7 días de racha)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>Buena precisión general (87%)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>Progreso constante en ejercicios</span>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Áreas de Mejora</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                  <span>Equilibrar práctica entre MCD y MCM</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                  <span>Aumentar tiempo en juegos educativos</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                  <span>Intentar problemas más desafiantes</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
