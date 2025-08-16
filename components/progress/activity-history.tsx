"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Trophy, Gamepad2, Calculator, BookOpen, Star } from "lucide-react"

interface Activity {
  id: string
  type: "exercise" | "game" | "calculation" | "achievement"
  title: string
  description: string
  points: number
  timestamp: Date
  icon: React.ReactNode
}

export function ActivityHistory() {
  const activities: Activity[] = [
    {
      id: "1",
      type: "achievement",
      title: "Maestro de MCD",
      description: "Desbloqueaste el logro por completar 50 ejercicios de MCD",
      points: 200,
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 horas atrás
      icon: <Trophy className="w-4 h-4" />,
    },
    {
      id: "2",
      type: "exercise",
      title: "Ejercicio Completado",
      description: "Completaste el ejercicio 20 del nivel 'Conceptos Básicos'",
      points: 15,
      timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000), // 3 horas atrás
      icon: <BookOpen className="w-4 h-4" />,
    },
    {
      id: "3",
      type: "game",
      title: "Carrera de Factores",
      description: "Obtuviste 850 puntos en el juego de velocidad",
      points: 85,
      timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 día atrás
      icon: <Gamepad2 className="w-4 h-4" />,
    },
    {
      id: "4",
      type: "calculation",
      title: "Calculadora MCM",
      description: "Calculaste el MCM de 24 y 36 usando la calculadora interactiva",
      points: 5,
      timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000 - 2 * 60 * 60 * 1000), // 1 día y 2 horas atrás
      icon: <Calculator className="w-4 h-4" />,
    },
    {
      id: "5",
      type: "achievement",
      title: "Velocista",
      description: "Mantuviste una racha de 7 días consecutivos",
      points: 120,
      timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 días atrás
      icon: <Star className="w-4 h-4" />,
    },
    {
      id: "6",
      type: "exercise",
      title: "Nivel Completado",
      description: "Completaste todos los ejercicios del nivel 'Conceptos Básicos'",
      points: 100,
      timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 días atrás
      icon: <Trophy className="w-4 h-4" />,
    },
    {
      id: "7",
      type: "game",
      title: "Constructor de Múltiplos",
      description: "Alcanzaste el nivel 3 en el juego de rompecabezas",
      points: 60,
      timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000), // 4 días atrás
      icon: <Gamepad2 className="w-4 h-4" />,
    },
    {
      id: "8",
      type: "exercise",
      title: "Primera Sesión",
      description: "Completaste tu primer ejercicio de MCD",
      points: 25,
      timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 días atrás
      icon: <BookOpen className="w-4 h-4" />,
    },
  ]

  const getActivityColor = (type: string) => {
    switch (type) {
      case "achievement":
        return "bg-yellow-100 text-yellow-800"
      case "exercise":
        return "bg-blue-100 text-blue-800"
      case "game":
        return "bg-green-100 text-green-800"
      case "calculation":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getActivityBgColor = (type: string) => {
    switch (type) {
      case "achievement":
        return "bg-yellow-100"
      case "exercise":
        return "bg-blue-100"
      case "game":
        return "bg-green-100"
      case "calculation":
        return "bg-purple-100"
      default:
        return "bg-gray-100"
    }
  }

  const formatTimeAgo = (date: Date) => {
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))

    if (diffInHours < 1) return "Hace menos de 1 hora"
    if (diffInHours < 24) return `Hace ${diffInHours} hora${diffInHours > 1 ? "s" : ""}`

    const diffInDays = Math.floor(diffInHours / 24)
    return `Hace ${diffInDays} día${diffInDays > 1 ? "s" : ""}`
  }

  const groupActivitiesByDate = (activities: Activity[]) => {
    const groups: { [key: string]: Activity[] } = {}

    activities.forEach((activity) => {
      const dateKey = activity.timestamp.toDateString()
      if (!groups[dateKey]) {
        groups[dateKey] = []
      }
      groups[dateKey].push(activity)
    })

    return groups
  }

  const groupedActivities = groupActivitiesByDate(activities)

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-primary" />
            <span>Historial de Actividades</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {Object.entries(groupedActivities).map(([dateKey, dayActivities]) => (
              <div key={dateKey} className="space-y-3">
                <h3 className="text-sm font-semibold text-muted-foreground border-b pb-1">
                  {new Date(dateKey).toLocaleDateString("es-ES", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </h3>
                <div className="space-y-3">
                  {dayActivities.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/30">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${getActivityBgColor(activity.type)}`}
                      >
                        {activity.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="text-sm font-medium truncate">{activity.title}</h4>
                          <Badge className={getActivityColor(activity.type)} variant="secondary">
                            {activity.type}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">{activity.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">{formatTimeAgo(activity.timestamp)}</span>
                          <Badge variant="outline" className="text-xs">
                            +{activity.points} pts
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
