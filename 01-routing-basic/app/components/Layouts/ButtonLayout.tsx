
import { useRouter } from 'next/navigation'

const ButtonLayout = () => {
  const router = useRouter()
  const handleClick = () => {
    router.push('/dashboard')
  }

  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleClick}
    >
      Dashboard
    </button>
  )
}

export { ButtonLayout }