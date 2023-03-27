function Hero () {
    return ( 
        
        <div className=" glass-component">
            <div className="glass-hero absolute z-[1] flex flex-row justify-center m-0 pt-[50px] flex-wrap ">
                <div className="z-[2] md:w-[320px] w-[320px] h-[420px] bg-[white] z-[5] p-3  mt-5 border-[3px] drop-shadow-2xl 
                flex flex-col text-center  rounded-xl items-center opacity-95
                ">
                    <h1 className="mt-7 mb-4"><span className="text-4xl">Log<span className="span-material">in</span></span></h1>

                    <div className="my-3">
                        <h2 className="text-xl py-2">Email</h2>
                        <input type="text" placeholder="Enter Your Email" className=" rounded-sm
                        w-[210px] h-[1.5rem] border-[1px] border-red-300 text-center caret-red-500
                        "/>
                    </div>
                    

                    <div className="my-3">
                        <h2 className="text-xl py-2">Password</h2>
                        <input type="text" placeholder="Enter Your Password" className=" rounded-sm
                        w-[210px] h-[1.5rem] border-[1px] border-red-300 text-center border-full text-center caret-red-500
                        "/>
                    </div>

                    <button className="px-[30px] py-1 bg-[red] rounded-lg mt-[25px] hover:bg-[white] 
                    duration-100 hover:text-[red] text-white text-base mt-[20px] 
                    ease-in-out
                    ">Sign in</button>

                    <div className="mt-4">
                        <a href="/Register" className="underline text-[0.75em] text-red-500">Register Instead</a>
                    </div>

                </div>
                
            </div>

            <div className="bg-cover bg-center cta-card w-[100%] h-[690px]">
            </div>
                                                                                        
        </div>
     );
}

export default Hero ;