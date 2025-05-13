import PrimaryBtn from "../../../Components/PrimaryBtn"
import SecondaryBtn from "../../../Components/SecondaryBtn"
import img1 from "../../../assets/About Us/office (1).jpg";
import img2 from "../../../assets/About Us/office (2).jpg";
import img3 from "../../../assets/About Us/office (3).jpg";


function OfficeCulture() {
  return (
    <section className="flex flex-col lg:flex-row gap-24 items-center">
        <div className="md:w-full lg:w-[600px]">
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold">Office Culture</h1>
            <p className="text-xl my-8 text-justify">Develop a website by finding a product identity that has value and branding to become a character of a company. 
                We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use 
                website and help sell a product from the company.</p>

            <div className="flex gap-6">
                <PrimaryBtn text= "Get Started" />
                <SecondaryBtn />
            </div>
        </div>
        {/* image layout */}
        <div className="w-full h-[500px] grid grid-cols-2 gap-4">
            <div className="grid grid-rows-2 gap-4 h-full">
                <img src={img1} alt="office image" className="w-full h-full object-cover object-center rounded-2xl"/>
                <img src={img3} alt="office image" className="w-full h-full object-cover object-center rounded-2xl" />
            </div>
            <div className="h-full">
                <img src={img2} alt="Office image" className="w-full h-full object-cover object-center rounded-2xl" />
            </div>
        </div>
    </section>
  )
}

export default OfficeCulture