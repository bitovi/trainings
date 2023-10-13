import { useCowbird } from '../providers/CowbirdProvider'
import { useEffect, useState } from 'react'

type Model = string

const baseUrl = "https://cowbird-staging.fly.dev/groups/bun-experiment/mocks"

export function useModels(year: string, make: string) {
  const [models, setModels] = useState<Model[]>([])
  const { cbFetch } = useCowbird()

  useEffect(() => {
    const fetchModels = async () => {
      if (year && make) {
        const response = await cbFetch(`${baseUrl}/models?year=${year}&make=${make}`)
        const data = await response.json()
        setModels(data.data)
      } else {
        setModels([])
      }
    }
    fetchModels()
  }, [cbFetch, make, year])

  return {
    models,
  }
}