

  import dynamic from 'next/dynamic'
    const OpenStreetMap = dynamic(() => import('./Open'), {
      ssr: false,
    })

const page = () => {
  return (
    <div>
        <OpenStreetMap/>
    </div>
  )
}

export default page