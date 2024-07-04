'use client'

import { IInfo } from "@/app/page"
import { useState } from "react"

interface AddOnFormProps{
  setInfo: (info:IInfo) => void
}

export function AddOnForm({ setInfo }: AddOnFormProps){
  const[activeCard, setActiveCard] = useState<number[]>([])

  const addOns=[
    {
      id: 1,
      name: 'Online Service',
      description: 'Access to nultipleplayers games',
      price: 1
    },
    {
      id: 2,
      name: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      price: 2
    },
    {
      id: 3,
      name: 'Customizable profile',
      description: 'Custom theme on your profile',
      price: 2
    }
  ]
  const handleCheck = (p:{id: number, name: string,description: string,price:number}) =>{
    setActiveCard((t) =>{
      let save = [...t]
      if(save.includes(p.id)){
        save = save.filter((f) => f !== p.id)
      }else{
        save = [...t, p.id]
      }
      return save
    })
    let valueAdd : Array<{name:string,price: number}> =[]
    activeCard.forEach((a) =>{
      addOns.forEach((p) =>{
        if(a === p.id){
          valueAdd.push({name: p.name, price: p.price})
        }
      })
    })
    const info: IInfo ={
      addOn: valueAdd
    }
    setInfo(info)
  }
  
  return (
    <>
      <form className="grid grid-cols-1 gap-8" style={{color:"hsl(231, 11%, 63%)"}}>
        <div>
          <h1 className="text-[22px] font-extrabold">Pick add-ons</h1>
          <label htmlFor="">Add-ons help enhance your gaming experience.</label>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {
            addOns.map((p)=>{
              return (
                <div key={p.id} onClick={()=>handleCheck(p)} className={`border ${activeCard.includes(p.id)?'border-blue-400':''} rounded-lg flex justify-between p-4 cursor-pointer`}>
                  <div className="flex">
                    <input checked={activeCard.includes(p.id)} type="checkbox" className="w-4" />
                    <div className="ml-3">
                      <h3 className="text-[15px] font-bold text-gray-800">Online Service</h3>
                      <p className="text-[12px]">Access to nultipleplayers games</p>
                    </div>
                  </div>
                  <p className="text-blue-500">+$1/mo</p>
                </div>
              )
            })
          }
        </div>
      </form>
    </>
  )
}