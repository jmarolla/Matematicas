"use client"

import { useState, useEffect } from "react"

export function MathMascot() {
  const [currentMessage, setCurrentMessage] = useState(0)

  const messages = [
    "¡Hola! Soy Mateo, tu guía matemático 🤓",
    "¡Vamos a aprender MCM y MCD juntos!",
    "¿Sabías que las matemáticas pueden ser divertidas?",
    "¡Cada problema resuelto te hace más inteligente!",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [messages.length])

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Mascota animada */}
      <div className="relative">
        <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
          <span className="text-4xl">🤖</span>
        </div>
        {/* Efecto de brillo */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur opacity-30 animate-pulse"></div>
      </div>

      {/* Burbuja de mensaje */}
      <div className="relative bg-white rounded-xl p-4 shadow-lg max-w-xs">
        <p className="text-sm text-gray-700 text-center font-medium">{messages[currentMessage]}</p>
        {/* Flecha de la burbuja */}
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>
      </div>
    </div>
  )
}
