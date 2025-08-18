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

        {/* Sección educativa con video */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-50 to-pink-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">📚 Aprende los Conceptos</h2>
              <p className="text-xl text-gray-600">Mira este video explicativo y domina MCM y MCD</p>
            </div>

            {/* Video de YouTube */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <div className="aspect-video rounded-xl overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="MCM y MCD - Explicación completa"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-gray-600">
                    Video educativo: "Máximo Común Divisor y Mínimo Común Múltiplo - Explicación paso a paso"
                  </p>
                </div>
              </div>
            </div>

            {/* Métodos de cálculo */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Método para MCD */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <h3 className="text-2xl font-bold text-green-800">Cómo calcular MCD</h3>
                </div>

                <div className="space-y-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2">Método 1: Factorización Prima</h4>
                    <ol className="list-decimal list-inside text-gray-700 space-y-1">
                      <li>Descompón cada número en factores primos</li>
                      <li>Identifica los factores comunes</li>
                      <li>Multiplica los factores comunes con menor exponente</li>
                    </ol>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2">Método 2: Algoritmo de Euclides</h4>
                    <ol className="list-decimal list-inside text-gray-700 space-y-1">
                      <li>Divide el mayor entre el menor</li>
                      <li>Reemplaza el mayor por el menor y el menor por el residuo</li>
                      <li>Repite hasta que el residuo sea 0</li>
                    </ol>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-2">Ejemplo: MCD(48, 18)</p>
                    <div className="font-mono text-sm space-y-1">
                      <p>48 ÷ 18 = 2 residuo 12</p>
                      <p>18 ÷ 12 = 1 residuo 6</p>
                      <p>12 ÷ 6 = 2 residuo 0</p>
                      <p className="font-bold text-green-700">MCD = 6</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Método para MCM */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">🔢</span>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-800">Cómo calcular MCM</h3>
                </div>

                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Método 1: Factorización Prima</h4>
                    <ol className="list-decimal list-inside text-gray-700 space-y-1">
                      <li>Descompón cada número en factores primos</li>
                      <li>Toma todos los factores primos</li>
                      <li>Multiplica cada factor con su mayor exponente</li>
                    </ol>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Método 2: Fórmula con MCD</h4>
                    <div className="text-center py-2">
                      <p className="text-lg font-mono bg-white rounded px-4 py-2 inline-block">
                        MCM(a,b) = (a × b) ÷ MCD(a,b)
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-2">Ejemplo: MCM(12, 18)</p>
                    <div className="font-mono text-sm space-y-1">
                      <p>12 = 2² × 3</p>
                      <p>18 = 2 × 3²</p>
                      <p>MCM = 2² × 3² = 4 × 9</p>
                      <p className="font-bold text-blue-700">MCM = 36</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Consejos útiles */}
            <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💡</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Consejos para Recordar</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">MCD (Máximo Común Divisor)</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Es el número más GRANDE que divide a ambos</li>
                    <li>• Siempre es menor o igual al número más pequeño</li>
                    <li>• Útil para simplificar fracciones</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">MCM (Mínimo Común Múltiplo)</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Es el número más PEQUEÑO que es múltiplo de ambos</li>
                    <li>• Siempre es mayor o igual al número más grande</li>
                    <li>• Útil para sumar fracciones con diferente denominador</li>
                  </ul>
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
