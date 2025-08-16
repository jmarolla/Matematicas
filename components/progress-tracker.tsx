"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Trophy, Star, Target, Zap } from "lucide-react"

export function ProgressTracker() {
  const [userStats, setUserStats] = useState({
    level: 1,
    xp: 150,
    xpToNext: 300,
    exercisesCompleted: 12,
    gamesPlayed: 8,
    calculationsUsed: 25,
    streak: 3,
  })

  const progressPercentage = (userStats.xp / userStats.xpToNext) * 100

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Tu Progreso</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Nivel del usuario */}
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-blue-800">Nivel</CardTitle>
              <Trophy className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-900">{userStats.level}</div>
              <div className="mt-2">
                <Progress value={progressPercentage} className="h-2" />
                <p className="text-xs text-blue-600 mt-1">
                  {userStats.xp}/{userStats.xpToNext} XP
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Ejercicios completados */}
          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-green-800">Ejercicios</CardTitle>
              <Target className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-900">{userStats.exercisesCompleted}</div>
              <p className="text-xs text-green-600">Completados</p>
            </CardContent>
          </Card>

          {/* Juegos jugados */}
          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-purple-800">Juegos</CardTitle>
              <Zap className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-900">{userStats.gamesPlayed}</div>
              <p className="text-xs text-purple-600">Jugados</p>
            </CardContent>
          </Card>

          {/* Racha actual */}
          <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-orange-800">Racha</CardTitle>
              <Star className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-900">{userStats.streak}</div>
              <p className="text-xs text-orange-600">Días seguidos</p>
            </CardContent>
          </Card>
        </div>

        {/* Logros recientes */}
        <div className="mt-8 bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Logros Recientes</h3>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center space-x-2 bg-yellow-100 px-3 py-2 rounded-full">
              <Trophy className="h-4 w-4 text-yellow-600" />
              <span className="text-sm font-medium text-yellow-800">Primer Nivel</span>
            </div>
            <div className="flex items-center space-x-2 bg-blue-100 px-3 py-2 rounded-full">
              <Target className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-800">10 Ejercicios</span>
            </div>
            <div className="flex items-center space-x-2 bg-green-100 px-3 py-2 rounded-full">
              <Star className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium text-green-800">Racha de 3 días</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
