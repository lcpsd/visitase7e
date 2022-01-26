import { useRouter } from 'next/router'
import LandingPage from './LadingPage'

export default function Home() {

  const router = useRouter()

  return (
    <>
      <LandingPage/>
    </>
  )
}
