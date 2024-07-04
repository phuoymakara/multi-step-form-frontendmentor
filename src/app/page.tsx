'use client'
import { AddOnForm } from "@/components/addon-form";
import { FinishForm } from "@/components/finish-form";
import { PersonalForm } from "@/components/personal-form";
import { PlanForm } from "@/components/plan-form";
import { StepCard } from "@/components/step-card";
import Image from "next/image";
import { useState } from "react";
export interface IInfo{
  plans?:{
    name: string;
    price: number;
    isMonthly: boolean;
  },
  addOn?: Array<{
    name: string;
    price: number;
  }>
  total? : string;
}
export default function Home() {
  const[state,setState] = useState<number>(1);
  const[info,setInfo] = useState<IInfo>()
  const[success,setSuccess] = useState(false)
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
  const handleConfirm = () =>{
    setState(state<4? state+1: state)
    if(state===4){
      setSuccess(true)
      console.log('11')
    }
  }
  //
  console.log('INFO',info)
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
        <div className=" py-6 md:px-20 px-10 col-span-5 grid grid-cols-1 gap-20 rounded-lg ">
          <div className="md:mb-0 mb-6">
            {state === 1 && !success  &&  <PersonalForm/>}
            {state === 2 && !success  && <PlanForm/>}  
            {state === 3 && !success  && <AddOnForm setInfo={setInfo}/>}
            {state === 4 && !success &&<FinishForm/> }
            {
              success && 
              <div className="w-full p-10 flex justify-center items-center">
                <div>
                  <div className="w-full flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="80" viewBox="0 0 80 80"><g fill="none"><circle cx="40" cy="40" r="40" fill="#F9818E"/><path fill="#E96170" d="M48.464 79.167c.768-.15 1.53-.321 2.288-.515a40.04 40.04 0 0 0 3.794-1.266 40.043 40.043 0 0 0 3.657-1.63 40.046 40.046 0 0 0 12.463-9.898A40.063 40.063 0 0 0 78.3 51.89c.338-1.117.627-2.249.867-3.391L55.374 24.698a21.6 21.6 0 0 0-15.332-6.365 21.629 21.629 0 0 0-15.344 6.365c-8.486 8.489-8.486 22.205 0 30.694l23.766 23.775Z"/><path fill="#FFF" d="M40.003 18.333a21.58 21.58 0 0 1 15.31 6.351c8.471 8.471 8.471 22.158 0 30.63-8.47 8.47-22.156 8.47-30.627 0-8.47-8.472-8.47-22.159 0-30.63a21.594 21.594 0 0 1 15.317-6.35Zm9.865 15c-.316.028-.622.15-.872.344l-12.168 9.13-5.641-5.642c-1.224-1.275-3.63 1.132-2.356 2.356l6.663 6.663c.56.56 1.539.63 2.173.156l13.326-9.995c1.122-.816.43-2.993-.956-3.013a1.666 1.666 0 0 0-.17 0Z"/></g></svg>
                  </div>
                  <h1 className="text-center font-extrabold text-[24px]">Thank you!</h1>
                  <p className="text-center text-slate-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum voluptate consectetur, harum quidem animi esse at dolor vitae possimus odit hic eveniet atque facilis recusandae necessitatibus omnis, quibusdam distinctio!</p>
                </div>

              </div>
            }
          </div>

            <div className="h-10 w-full flex justify-between bottom-0">
              <div></div>
              {
                !success && <button onClick={ handleConfirm } className=" bg-blue-600 px-4 py-1 rounded-md text-white font-medium bottom-0 right-0 text-[12px]">{state===4?'Confirm':'Next Step'}</button>
              }
            </div>
      </div>
      </div>
    </main>
  );
}
