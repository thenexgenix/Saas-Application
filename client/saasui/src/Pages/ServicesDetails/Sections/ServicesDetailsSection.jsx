import img1 from "../../../assets/About Us/officeGrp.jpg"
import img2 from "../../../assets/About Us/office (1).jpg"
import img3 from "../../../assets/About Us/office (2).jpg"
import img4 from "../../../assets/About Us/office (3).jpg"


function ServicesDetailsSection() {
  return (
    <section>
      <div className="">
        {/* Large Image */}
        <div className="mb-8">
          <img
            src={img1}
            alt="Team working on website design"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* Section 1: Design Functional Website Fast */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            1. Design functional website fast
          </h2>
          <p className="text-gray-600 mb-6">
            When you’re designing your site, it’s easy to get caught up in adding too many elements to your pages. You want your site to be visually appealing, so you constantly add elements to add another dimension of visual interest to your page. This can lead to your site getting cluttered, overwhelming the user. The issue is that, if certain elements don’t have a purpose on your site, it can leave your audience confused. Every element on your site should have a purpose. Imagine putting a call to action (CTA) button that doesn’t lead to the user first.
          </p>
        </div>

        {/* Section 2: Design for the User First */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            2. Design for the user first
          </h2>
          <p className="text-gray-600 mb-6">
            People would constantly try to click on the button, and it would leave them confused as to why it doesn’t take them somewhere. Or, think what people do if a website design prompted users to “Call now” on a top-of-the-funnel blog post. People probably wouldn’t click. Create elements that are functional and enhance the user experience on your site.
          </p>

          {/* Small Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="overflow-hidden h-[250px]">
              <img
                src={img2}
                alt="Team brainstorming"
                className="w-full h-full rounded-lg object-center object-cover"
              />
            </div>
            <div className="overflow-hidden h-[250px]">
              <img
                src={img3}
                alt="Team collaborating"
                className="w-full h-full rounded-lg object-center object-cover"
              />
            </div>
            <div className="overflow-hidden h-[250px]">
              <img
                src={img4}
                alt="Team working at desk"
                className="w-full h-full rounded-lg object-center object-cover"
              />
            </div>
          </div>

          <p className="text-gray-600">
            When you design beautiful websites, you want to focus on designs for the user. Your audience will be the ones engaging on your site and learning more about your business. It’s important that you build a site that works for them. As you construct your awesome website, keep your audience in mind.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ServicesDetailsSection