"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Star, Crown, Zap } from "lucide-react"

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

interface UserLevelProps {
  userStats: UserStats
}

export function UserLevel({ userStats }: UserLevelProps) {
  const getLevelTitle = (level: number) => {
    if (level >= 10) return "Maestro Matemático"
    if (level >= 7) return "Experto en Números"
    if (level >= 5) return "Calculador Avanzado"
    if (level >= 3) return "Aprendiz Dedicado"
    return "Explorador Matemático"
  }

  const getLevelIcon = (level: number) => {
    if (level >= 10) return <Crown className="w-8 h-8 text-yellow-500" />
    if (level >= 7) return <Star className="w-8 h-8 text-purple-500" />
    if (level >= 5) return <Zap className="w-8 h-8 text-blue-500" />
    return <Star className="w-8 h-8 text-green-500" />
  }

  const progressPercentage =
    (userStats.experiencePoints / (userStats.experiencePoints + userStats.experienceToNext)) * 100

  return (
    <Card className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              {getLevelIcon(userStats.level)}
            </div>
            <div>
              <CardTitle className="text-2xl">Nivel {userStats.level}</CardTitle>
              <p className="text-lg text-muted-foreground">{getLevelTitle(userStats.level)}</p>
            </div>
          </div>
          <div className="text-right">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              {userStats.totalPoints.toLocaleString()} puntos
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progreso al siguiente nivel</span>
            <span>
              {userStats.experiencePoints.toLocaleString()} /{" "}
              {(userStats.experiencePoints + userStats.experienceToNext).toLocaleString()} XP
            </span>
          </div>
          <Progress value={progressPercentage} className="h-3" />
          <p className="text-xs text-muted-foreground text-center">
            ¡Solo {userStats.experienceToNext.toLocaleString()} XP más para alcanzar el nivel {userStats.level + 1}!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">{userStats.exercisesCompleted}</div>
            <div className="text-xs text-muted-foreground">Ejercicios</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-secondary">{userStats.gamesPlayed}</div>
            <div className="text-xs text-muted-foreground">Juegos</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent">{userStats.calculationsPerformed}</div>
            <div className="text-xs text-muted-foreground">Cálculos</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">{Math.round(userStats.totalTimeSpent / 60)}h</div>
            <div className="text-xs text-muted-foreground">Tiempo total</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
