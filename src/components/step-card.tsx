'use client'

interface StepCardProps{
  id: number;
  title: string;
  state: number;
  setState: (state:number) => void
}

export function StepCard({id, title, state, setState}: StepCardProps){

  return(
    <div className="md:w-full w-1/4 md:grid md:grid-cols-2 flex gap-2 mb-2">
      <div className="w-full  flex justify-center items-center">
        <div onClick={()=> setState(id)} className={`cursor-pointer w-[30px] h-[30px] flex justify-center items-center  rounded-[50%] ${state === id?'bg-slate-50 text-black':'border border-white'}`}>
          {id}
        </div>
      </div>
      <div className="md:block hidden">
        <label htmlFor="" className="text-[10px]">STEP {id}</label>
        <h3 className="w-full m-0 text-[15px]">{title}</h3>
      </div>
    </div>  
  )
}