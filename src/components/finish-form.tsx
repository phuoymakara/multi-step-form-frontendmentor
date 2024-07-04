

export function FinishForm(){
  return (
    <>
      <form className="grid grid-cols-1 gap-8" style={{color:"hsl(231, 11%, 63%)"}}>
        <div>
          <h1 className="text-[22px] font-extrabold">Finishing up</h1>
          <label htmlFor="">Double-check everything looks OK before confirming.</label>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="border-b flex justify-between">
            <h3>Arcade (Monthly)</h3>
            <p>$9/mo</p>
          </div>
          <div>
            <div className="flex justify-between">
              <h3>Arcade (Monthly)</h3>
              <p>$9/mo</p>
            </div>
            <div className=" flex justify-between">
              <h3>Arcade (Monthly)</h3>
              <p>$9/mo</p>
            </div>
          </div>
          <div className=" flex justify-between">
            <h3>Total</h3>
            <p>+$12/mo</p>
          </div>
        </div>
      </form>
    </>
  )
}