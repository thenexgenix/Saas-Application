import PrimaryBtn from '../../../Components/PrimaryBtn'
import SecondaryBtn from '../../../Components/SecondaryBtn'
import officeImg from '../../../assets/About Us/officeGrp.jpg'

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
        <div className="w-full">
            <div className="w-full h-full">
                <div className="flex flex-col md:flex-row gap-4 justify-center">
          {/* First slice */}
          <div
            className="card w-full md:w-1/3 lg:w-1/4 h-[500px] bg-cover bg-no-repeat rounded-2xl shadow-xl"
            style={{ backgroundImage: `url(${officeImg})`, backgroundPosition: 'left' }}
          ></div>

          {/* Second slice */}
          <div
            className="card w-full md:w-1/3 lg:w-1/4 h-[500px] bg-cover bg-no-repeat rounded-2xl shadow-xl mt-24"
            style={{ backgroundImage: `url(${officeImg})`, backgroundPosition: 'center' }}
          ></div>

          {/* Third slice */}
          <div
            className="card w-full md:w-1/3 lg:w-1/4 h-[500px] bg-cover bg-no-repeat rounded-2xl shadow-xl"
            style={{ backgroundImage: `url(${officeImg})`, backgroundPosition: 'right' }}
          ></div>
        </div>
            </div>
        </div>
    </section>
  )
}

export default AboutServices