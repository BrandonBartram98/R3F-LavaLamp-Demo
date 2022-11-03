import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"

export default function Underlay(props) {

  return (
    <div className="absolute w-full h-full top-0 left-0 p-10 inline-flex flex-col pointer-events-none">
      <div className="w-full inline-flex align-center justify-between text-black gap-10">
        <p className='h-10 text-3xl font-bold tracking-tighter font-antonio'>BARTY</p>
        <p className="h-10 text-2xl text-right pt-1">👻</p>
      </div>
      <div className="w-full inline-flex font-inter align-center justify-between text-black mt-12">
        <div className="tracking text-xs">
          <p className="font-bold">Blender is Hard</p>
          <p className="">A Spooky Ghost</p>
          <b>—</b>
        </div>
        <p className="text-xs font-inter font-bold rotatedText mr-6">DRAG POINTER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;●</p>
      </div>

      <div className="flex-1">

      </div>

      <div className="w-full inline-flex text-black items-center">
        <div className="tracking text-xs basis-1/3">
          <p className="font-bold">Date of Dev</p>
          <p className="">02/11/2022</p>
        </div>
        <p className='text-xl font-bold tracking-tighter font-antonio basis-1/3 hidden sm:block text-center'>THE SUMMIT OF THE MANY</p>
        <div className="basis-1/3"></div>
      </div>
    </div>
  )
}