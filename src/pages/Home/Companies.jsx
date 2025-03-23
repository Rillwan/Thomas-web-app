
const Companies = () => {
    return (
        <section className='pt-16' id="company">
            <div className="container">
                <h3 className="font-PlayFair tracking-[3px] text-xl lg:text-2xl text-center">COMPANIES</h3>
                <div className="mt-12 grid grid-cols-2 gap-y-8 lg:grid-cols-4 gap-4">
                    {
                        [...Array(4)]?.map((_,i)=>(
                            <div key={i} className="text-center">
                                <span className="font-bold tracking-[2px] text-2xl sm:text-3xl xl:text-5xl">AMAZON</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Companies
