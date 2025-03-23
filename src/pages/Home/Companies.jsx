import { CompanyData } from "./HomeData"

const Companies = () => {
    return (
        <section className='pt-16 pb-4 lg:pb-12' id="company">
            <div className="container">
                <h3 className="font-PlayFair tracking-[3px] text-xl lg:text-3xl text-center">COMPANIES</h3>
                <div className="mt-6 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 grid-rows-[70px,70px] lg:grid-rows-[60px]  gap-6">
                    {
                        CompanyData?.map((item, i) => (
                            <div key={i} className="text-center">
                                <img className="p-2 h-full max-w-[220px] mx-auto object-fill" src={item?.image} alt="" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Companies
