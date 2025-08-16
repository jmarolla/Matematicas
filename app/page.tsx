import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { ProgressTracker } from "@/components/progress-tracker"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Navigation />
      <main>
        <Hero />
        <ProgressTracker />

        {/* Sección de características principales */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">¿Qué puedes hacer aquí?</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Calculadoras */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">🧮</span>
                </div>
                <h3 className="text-xl font-semibold text-center mb-3 text-gray-800">Calculadoras Interactivas</h3>
                <p className="text-gray-600 text-center mb-4">
                  Aprende paso a paso cómo calcular MCM y MCD con explicaciones visuales
                </p>
                <div className="text-center">
                  <a
                    href="/calculadora"
                    className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Explorar
                  </a>
                </div>
              </div>

              {/* Juegos */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">🎮</span>
                </div>
                <h3 className="text-xl font-semibold text-center mb-3 text-gray-800">Juegos Educativos</h3>
                <p className="text-gray-600 text-center mb-4">
                  Diviértete mientras aprendes con juegos de carreras, construcción y desafíos
                </p>
                <div className="text-center">
                  <a
                    href="/juegos"
                    className="inline-block bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    Jugar
                  </a>
                </div>
              </div>

              {/* Ejercicios */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">📝</span>
                </div>
                <h3 className="text-xl font-semibold text-center mb-3 text-gray-800">Ejercicios por Niveles</h3>
                <p className="text-gray-600 text-center mb-4">
                  Practica con ejercicios desde principiante hasta avanzado
                </p>
                <div className="text-center">
                  <a
                    href="/ejercicios"
                    className="inline-block bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    Practicar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de conceptos básicos */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Conceptos Básicos</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* MCM */}
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-2xl font-semibold mb-4 text-blue-800">MCM - Mínimo Común Múltiplo</h3>
                <p className="text-gray-700 mb-4">
                  El MCM es el número más pequeño que es múltiplo de dos o más números.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-2">Ejemplo:</p>
                  <p className="font-mono text-lg">MCM(6, 8) = 24</p>
                  <p className="text-sm text-gray-600 mt-2">Porque 24 es el menor número divisible por 6 y 8</p>
                </div>
              </div>

              {/* MCD */}
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-2xl font-semibold mb-4 text-green-800">MCD - Máximo Común Divisor</h3>
                <p className="text-gray-700 mb-4">
                  El MCD es el número más grande que divide exactamente a dos o más números.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-2">Ejemplo:</p>
                  <p className="font-mono text-lg">MCD(12, 18) = 6</p>
                  <p className="text-sm text-gray-600 mt-2">Porque 6 es el mayor número que divide a 12 y 18</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg mb-2">¡Aprende MCM y MCD de forma divertida!</p>
          <p className="text-gray-400">Creado con ❤️ para hacer las matemáticas más fáciles</p>
        </div>
      </footer>
    </div>
  )
}
