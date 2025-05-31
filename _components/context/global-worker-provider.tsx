import { createContext, ReactNode, useEffect, useState } from 'react'

export const WorkerContext = createContext<Worker | null>(null)

export function WorkerProvider({ children }: { children: ReactNode }) {
  const [worker, setWorker] = useState<Worker | null>(null)
  useEffect(() => {
    if (!worker) {
      setWorker(
        () =>
          new Worker(new URL('/app/+worker/push.worker.ts', import.meta.url), {
            type: 'module',
            name: 'push',
          })
      )
    }

    return () => {
      if (worker) {
        worker.terminate()
        setWorker(null)
      }
    }
  }, [])

  return <WorkerContext.Provider value={worker}>{children}</WorkerContext.Provider>
}
