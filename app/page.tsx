import Image from 'next/image'
import { Headers,Footers,ServicesLocation,ServicesTypes } from "./component/HomeComponents/";
export default function Home() {
  const serviceCubes =[
    {
      heading:"Security Cameras",
      details:"let us set up your Security system and give you ease of mind",
      baseColor:'bg-emerald-400',
      changeColor:'bg-emerald-800'
    },
    {
      heading:"Security Cameras",
      details:"let us set up your Security system and give you ease of mind",
      baseColor:"bg-orange-400",
      changeColor:"bg-orange-600"
    },
    {
      heading:"Security Cameras",
      details:"let us set up your Security system and give you ease of mind",
      baseColor:'bg-emerald-400',
      changeColor:'bg-emerald-800'
    },
    {
      heading:"Security Cameras",
      details:"let us set up your Security system and give you ease of mind",
      baseColor:"bg-orange-400",
      changeColor:"bg-orange-600"
    },
    {
      heading:"Security Cameras",
      details:"let us set up your Security system and give you ease of mind",
      baseColor:'bg-emerald-400',
      changeColor:'bg-emerald-800'
    },   
    {
      heading:"Security Cameras",
      details:"let us set up your Security system and give you ease of mind",
      baseColor:'bg-emerald-400',
      changeColor:'bg-emerald-800'
    },
    {
      heading:"Security Cameras",
      details:"let us set up your Security system and give you ease of mind",
      baseColor:'bg-emerald-400',
      changeColor:'bg-emerald-800'
    },
  ]



  return (
    <main>
      <Headers/>
        <div className='bg-slate-400 pb-6'>
          <ServicesLocation/>
          <div className='flex flex-row flex-wrap gap-y-4'>
            {serviceCubes.map((item) => (
              <ServicesTypes key={item.heading} item={item} />
            ))}
          </div>
          peepee
        </div>
  <Footers/>
    </main>
  )
}
