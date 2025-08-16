import { Navigation } from "@/components/navigation"
import { ProgressDashboard } from "@/components/progress/progress-dashboard"
import { Trophy } from "lucide-react"

export default function ProgressPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Trophy className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">Tu Progreso</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sigue tu avance, desbloquea logros y celebra tus éxitos en el aprendizaje de MCM y MCD.
          </p>
        </div>

        <ProgressDashboard />
      </main>
    </div>
  )
}
