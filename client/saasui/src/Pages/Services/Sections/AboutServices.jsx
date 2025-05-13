import PrimaryBtn from '../../../Components/PrimaryBtn'
import SecondaryBtn from '../../../Components/SecondaryBtn'

function AboutServices() {
  return (
    <section className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="w-full">
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold ">We Boost the Growth For <span className='border-b-4 border-[var(--accent-yellow)]'>Startup</span> To Fortune 500 Companies</h1>
            <p className="text-xl my-8 text-justify">Develop a website by finding a product identity that has value and branding to become a character of a company. 
                We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use 
                website and help sell a product from the company.</p>

            <div className="flex gap-6">
                <PrimaryBtn text= "Get Started For Free" />
                <SecondaryBtn />
            </div>
        </div>
        {/* image layout */}
        <div className="w-full h-[500px] grid grid-cols-2 gap-4">
            <div className="grid grid-rows-2 gap-4 h-full">
                
            </div>
            <div className="h-full">
                
            </div>
        </div>
    </section>
  )
}

export default AboutServices