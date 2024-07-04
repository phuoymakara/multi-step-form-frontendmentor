'use client'

import { useState } from "react"

export function AddOnForm(){
  const[activeCard, setActiveCard] = useState<number[]>([0])

  return (
    <>
      <form className="grid grid-cols-1 gap-8" style={{color:"hsl(231, 11%, 63%)"}}>
        <div>
          <h1 className="text-[22px] font-extrabold">Pick add-ons</h1>
          <label htmlFor="">Add-ons help enhance your gaming experience.</label>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div onClick={()=>setActiveCard((t) =>{
            let save = [...t]
            if(save.includes(1)){
              save = save.filter((f) => f !== 1)
            }else{
              save = [...t, 1]
            }
            return save
          })} className={`border ${activeCard.includes(1)?'border-blue-400':''} rounded-lg flex justify-between p-4 cursor-pointer`}>
            <div className="flex">
              <input checked={activeCard.includes(1)} type="checkbox" className="w-4" />
              <div className="ml-3">
                <h3 className="text-[15px] font-bold text-gray-800">Online Service</h3>
                <p className="text-[12px]">Access to nultipleplayers games</p>
              </div>
            </div>
            <p className="text-blue-500">+$1/mo</p>
          </div>
          <div onClick={()=>setActiveCard((t) =>{
            let save = [...t]
            if(save.includes(2)){
              save = save.filter((f) => f !== 2)
            }else{
              save = [...t, 2]
            }
            return save
          })}  className={`border ${activeCard.includes(2)?'border-blue-400':''} rounded-lg flex justify-between p-4 cursor-pointer`}>
            <div className="flex">
              <input checked={activeCard.includes(2)} type="checkbox" className="w-4" />
              <div className="ml-3">
                <h3 className="text-[15px] font-bold text-gray-800">Online Service</h3>
                <p className="text-[12px]">Access to nultipleplayers games</p>
              </div>
            </div>
            <p className="text-blue-500">+$2/mo</p>
          </div>
          <div onClick={()=>setActiveCard((t) =>{
            let save = [...t]
            if(save.includes(3)){
              save = save.filter((f) => f !== 3)
            }else{
              save = [...t, 3]
            }
            return save
          })}  className={`border ${activeCard.includes(3)?'border-blue-400':''} rounded-lg flex justify-between p-4 cursor-pointer`}>
            <div className="flex">
              <input checked={activeCard?.includes(3)} type="checkbox" className="w-4" />
              <div className="ml-3">
                <h3 className="text-[15px] font-bold text-gray-800">Online Service</h3>
                <p className="text-[12px]">Access to nultipleplayers games</p>
              </div>
            </div>
            <p className="text-blue-500">+$2/mo</p>
          </div>
        </div>
      </form>
    </>
  )
}