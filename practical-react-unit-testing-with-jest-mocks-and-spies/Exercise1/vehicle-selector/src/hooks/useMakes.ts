import { useCowbird } from '../providers/CowbirdProvider'
import { useEffect, useState } from 'react'

type Make = string

const baseUrl = "https://cowbird-staging.fly.dev/groups/bun-experiment/mocks"

export function useMakes(year: string) {
  const [makes, setMakes] = useState<Make[]>([])
  const { cbFetch } = useCowbird()

  useEffect(() => {
    const fetchMakes = async () => {
      if (year) {
        const response = await cbFetch(`${baseUrl}/makes?year=${year}`)
        const data = await response.json()
        setMakes(data.data)
      } else {
        setMakes([])
      }
    }
    fetchMakes()
  }, [cbFetch, year])

  return {
    makes,
  }
}