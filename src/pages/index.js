import Meta from 'components/Meta'
import Image from 'next/image'

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Meta title="Hanvoice" />

      <h1 className="text-6xl font-bold">
        Hanvoice
      </h1>
    </div>
  )
}

export default Home
