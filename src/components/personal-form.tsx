

export function PersonalForm(){
  return (
    <>
      <form className="grid grid-cols-1 gap-8" style={{color:"hsl(231, 11%, 63%)"}}>
        <div>
          <h1 className="text-[22px] font-extrabold">Personal info</h1>
          <label htmlFor="">Please privde your name, email, and phone number.</label>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label htmlFor="">Name</label>
            <input type="text" className="block outline-none w-full p-2 border rounded-md mt-1" placeholder="e.g Stephen King" name="name" id="" />
          </div>
          <div>
            <label htmlFor="">Email Address</label>
            <input type="email" className="block outline-none w-full p-2 border rounded-md mt-1" placeholder="e.g stephenking@gmail.com" name="name" id="" />
          </div>
          <div>
            <label htmlFor="">Phone Number</label>
            <input type="text" className="block outline-none w-full p-2 border rounded-md mt-1" placeholder="e.g +1 234 567 890" name="name" id="" />
          </div>
        </div>
      </form>
    </>
  )
}