import person1 from "../../../assets/About Us/person (1).jpg";
import person2 from "../../../assets/About Us/person (2).jpg";

function MeetOurTeam() {
    const officeEmployee = [
        {
            image: person1,
            name: "Edward Shariar",
            role: "Founder and CEO"
        },
        {
            image: person2,
            name: "Marcoos",
            role: "Senior UI Designer"
        },
        {
            image: person1,
            name: "Edward",
            role: "Senior UX Designer"
        },
        {
            image: person2,
            name: "Glenn",
            role: "Fron-end developer"
        },
        {
            image: person1,
            name: "Maxwell",
            role: "Back-end Developer"
        },
        {
            image: person2,
            name: "Shariar",
            role: "Content Writer"
        }
    ]
  return (
    <section>
      <div className="text-center max-w-[600px] mx-auto">
      <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold">
        Meet Our {" "}<span className="inline-block"> Team<div className="-mt-3 h-3 w-full bg-[var(--accent-yellow)]"></div></span>
      </h1>
      <p className="text-xl my-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste non
        blanditiis, ducimus porro optio hic alias, totam.
      </p>
      </div>

      {/* team members */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {
            officeEmployee.map((employee, index) =>  
            <div key={index} className="rounded-2xl  overflow-hidden">
            <img src={employee.image} alt="office employee" className="w-full h-[350px] object-cover object-center"/>
            <div className="bg-[var(--primary)] px-6 py-4 text-center">
                <p className="text-white"><span className="text-xl font-semibold">{employee.name}</span> | {employee.role}</p>
            </div>
        </div> )
        }
      </div>
    </section>
  );
}

export default MeetOurTeam;
