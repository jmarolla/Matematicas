"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Trophy, Star, Zap, Target, Calculator, Gamepad2, BookOpen, Award, Lock } from "lucide-react"

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

interface Achievement {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  category: "exercises" | "games" | "calculations" | "streak" | "accuracy" | "time"
  tier: "bronze" | "silver" | "gold" | "platinum"
  requirement: number
  currentProgress: number
  unlocked: boolean
  points: number
}

interface AchievementSystemProps {
  userStats: UserStats
}

export function AchievementSystem({ userStats }: AchievementSystemProps) {
  const achievements: Achievement[] = [
    // Ejercicios
    {
      id: "exercises_10",
      title: "Primer Paso",
      description: "Completa 10 ejercicios",
      icon: <BookOpen className="w-6 h-6" />,
      category: "exercises",
      tier: "bronze",
      requirement: 10,
      currentProgress: userStats.exercisesCompleted,
      unlocked: userStats.exercisesCompleted >= 10,
      points: 50,
    },
    {
      id: "exercises_25",
      title: "Estudiante Dedicado",
      description: "Completa 25 ejercicios",
      icon: <BookOpen className="w-6 h-6" />,
      category: "exercises",
      tier: "silver",
      requirement: 25,
      currentProgress: userStats.exercisesCompleted,
      unlocked: userStats.exercisesCompleted >= 25,
      points: 100,
    },
    {
      id: "exercises_50",
      title: "Maestro de MCD",
      description: "Completa 50 ejercicios",
      icon: <Trophy className="w-6 h-6" />,
      category: "exercises",
      tier: "gold",
      requirement: 50,
      currentProgress: userStats.exercisesCompleted,
      unlocked: userStats.exercisesCompleted >= 50,
      points: 200,
    },

    // Juegos
    {
      id: "games_5",
      title: "Jugador Novato",
      description: "Juega 5 partidas",
      icon: <Gamepad2 className="w-6 h-6" />,
      category: "games",
      tier: "bronze",
      requirement: 5,
      currentProgress: userStats.gamesPlayed,
      unlocked: userStats.gamesPlayed >= 5,
      points: 30,
    },
    {
      id: "games_20",
      title: "Gamer Matemático",
      description: "Juega 20 partidas",
      icon: <Gamepad2 className="w-6 h-6" />,
      category: "games",
      tier: "silver",
      requirement: 20,
      currentProgress: userStats.gamesPlayed,
      unlocked: userStats.gamesPlayed >= 20,
      points: 75,
    },

    // Cálculos
    {
      id: "calculations_50",
      title: "Calculador Principiante",
      description: "Realiza 50 cálculos",
      icon: <Calculator className="w-6 h-6" />,
      category: "calculations",
      tier: "bronze",
      requirement: 50,
      currentProgress: userStats.calculationsPerformed,
      unlocked: userStats.calculationsPerformed >= 50,
      points: 40,
    },
    {
      id: "calculations_100",
      title: "Máquina de Calcular",
      description: "Realiza 100 cálculos",
      icon: <Calculator className="w-6 h-6" />,
      category: "calculations",
      tier: "silver",
      requirement: 100,
      currentProgress: userStats.calculationsPerformed,
      unlocked: userStats.calculationsPerformed >= 100,
      points: 80,
    },

    // Racha
    {
      id: "streak_3",
      title: "Constancia",
      description: "Mantén una racha de 3 días",
      icon: <Zap className="w-6 h-6" />,
      category: "streak",
      tier: "bronze",
      requirement: 3,
      currentProgress: userStats.streakDays,
      unlocked: userStats.streakDays >= 3,
      points: 60,
    },
    {
      id: "streak_7",
      title: "Velocista",
      description: "Mantén una racha de 7 días",
      icon: <Zap className="w-6 h-6" />,
      category: "streak",
      tier: "silver",
      requirement: 7,
      currentProgress: userStats.streakDays,
      unlocked: userStats.streakDays >= 7,
      points: 120,
    },
    {
      id: "streak_30",
      title: "Imparable",
      description: "Mantén una racha de 30 días",
      icon: <Zap className="w-6 h-6" />,
      category: "streak",
      tier: "gold",
      requirement: 30,
      currentProgress: userStats.streakDays,
      unlocked: userStats.streakDays >= 30,
      points: 300,
    },

    // Precisión
    {
      id: "accuracy_80",
      title: "Buen Puntería",
      description: "Alcanza 80% de precisión",
      icon: <Target className="w-6 h-6" />,
      category: "accuracy",
      tier: "bronze",
      requirement: 80,
      currentProgress: userStats.accuracy,
      unlocked: userStats.accuracy >= 80,
      points: 70,
    },
    {
      id: "accuracy_90",
      title: "Francotirador",
      description: "Alcanza 90% de precisión",
      icon: <Target className="w-6 h-6" />,
      category: "accuracy",
      tier: "silver",
      requirement: 90,
      currentProgress: userStats.accuracy,
      unlocked: userStats.accuracy >= 90,
      points: 150,
    },
    {
      id: "accuracy_95",
      title: "Perfeccionista",
      description: "Alcanza 95% de precisión",
      icon: <Award className="w-6 h-6" />,
      category: "accuracy",
      tier: "gold",
      requirement: 95,
      currentProgress: userStats.accuracy,
      unlocked: userStats.accuracy >= 95,
      points: 250,
    },
  ]

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "bronze":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "silver":
        return "bg-gray-100 text-gray-800 border-gray-200"
      case "gold":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "platinum":
        return "bg-purple-100 text-purple-800 border-purple-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getTierGradient = (tier: string) => {
    switch (tier) {
      case "bronze":
        return "from-orange-400 to-orange-600"
      case "silver":
        return "from-gray-400 to-gray-600"
      case "gold":
        return "from-yellow-400 to-yellow-600"
      case "platinum":
        return "from-purple-400 to-purple-600"
      default:
        return "from-gray-400 to-gray-600"
    }
  }

  const unlockedAchievements = achievements.filter((a) => a.unlocked)
  const lockedAchievements = achievements.filter((a) => !a.unlocked)

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="text-center py-6">
            <Trophy className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-primary">{unlockedAchievements.length}</div>
            <div className="text-sm text-muted-foreground">Logros Desbloqueados</div>
          </CardContent>
        </Card>
        <Card className="border-secondary/20 bg-secondary/5">
          <CardContent className="text-center py-6">
            <Star className="w-8 h-8 text-secondary mx-auto mb-2" />
            <div className="text-2xl font-bold text-secondary">
              {unlockedAchievements.reduce((sum, a) => sum + a.points, 0)}
            </div>
            <div className="text-sm text-muted-foreground">Puntos por Logros</div>
          </CardContent>
        </Card>
        <Card className="border-accent/20 bg-accent/5">
          <CardContent className="text-center py-6">
            <Target className="w-8 h-8 text-accent mx-auto mb-2" />
            <div className="text-2xl font-bold text-accent">
              {Math.round((unlockedAchievements.length / achievements.length) * 100)}%
            </div>
            <div className="text-sm text-muted-foreground">Completado</div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold">Logros Desbloqueados</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {unlockedAchievements.map((achievement) => (
            <Card key={achievement.id} className="border-2 border-green-200 bg-green-50">
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${getTierGradient(achievement.tier)} rounded-full flex items-center justify-center text-white`}
                  >
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-semibold">{achievement.title}</h4>
                      <Badge className={getTierColor(achievement.tier)}>{achievement.tier}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                    <Badge variant="secondary">+{achievement.points} puntos</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold">Próximos Logros</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {lockedAchievements.slice(0, 6).map((achievement) => (
            <Card key={achievement.id} className="border-2 border-muted">
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-muted-foreground">
                    <Lock className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-semibold text-muted-foreground">{achievement.title}</h4>
                      <Badge variant="outline">{achievement.tier}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Progreso</span>
                        <span>
                          {achievement.currentProgress}/{achievement.requirement}
                        </span>
                      </div>
                      <Progress value={(achievement.currentProgress / achievement.requirement) * 100} className="h-2" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
