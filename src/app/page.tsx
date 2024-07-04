'use client'
import { AddOnForm } from "@/components/addon-form";
import { FinishForm } from "@/components/finish-form";
import { PersonalForm } from "@/components/personal-form";
import { PlanForm } from "@/components/plan-form";
import { StepCard } from "@/components/step-card";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const[state,setState] = useState<number>(1);
  const steps =[
    {
      id: 1,
      title: 'YOUR INFO'
    },
    {
      id: 2,
      title: 'SELECT PLAN'
    },
    {
      id: 3,
      title: 'ADD-ONS'
    },
    {
      id: 4,
      title: 'SUMMARY'
    }
  ]
  return (
    <main className="flex justify-center items-center py-10 ">
      <div className="w-[900px] p-3 grid md:grid-cols-7 grid-cols-1 border rounded-2xl">
        <div className="md:col-span-2 md:block flex sidebar md:h-[80vh] h-auto text-white rounded-lg p-4">
          {
            steps.map((p)=>{
              return <StepCard state={state} setState={setState} key={p.id} id={p.id} title={p.title}/>
            })
          }
        </div>
        <div className=" py-6 px-20 col-span-5 rounded-lg ">
          <div className="h-[92%] md:mb-0 mb-6">
            {state === 1 &&  <PersonalForm/> }
            {state ===2 && <PlanForm/>}
            {state ===3 && <AddOnForm/>}
            {state === 4 && <FinishForm/> }
          </div>

            <div className="h-[8%] w-full flex justify-between">
              <div></div>
              <button onClick={()=>setState(state<4? state+1: state)} className=" bg-blue-600 px-4 py-1 rounded-md text-white font-medium bottom-0 right-0 text-[12px]">{state===4?'Confirm':'Next Step'}</button>
            </div>
      </div>
      </div>
    </main>
  );
}
