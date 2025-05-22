import { useState } from "react";
import { MdKeyboardDoubleArrowRight, MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

function Categories() {
    const [activeCategory, setActiveCategory] = useState('Web Design');
    const categories = [
    'Task Management',
    'Development',
    'Time Management',
    'Web Design',
    'App Integrations',
    'Project Management',
    'Mobile Design',
  ];
  return (
    <section>
        <div className="w-full max-w-md border border-gray-300 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b border-gray-300 px-6 py-4">Category</h2>
          <div className="">
            {categories.map((category) => (
              <div
                key={category}
                className={`px-6 py-4 cursor-pointer flex justify-between items-center border-b border-gray-300 ${
                  activeCategory === category
                    ? 'bg-[var(--primary)]/9 text-gray-700 border-l-4 border-l-[var(--primary)]'
                    : 'bg-white text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                <span>{category}</span>
                <span className="text-[var(--primary)] text-2xl ">
                  {activeCategory === category ? <MdOutlineKeyboardDoubleArrowDown /> :<MdKeyboardDoubleArrowRight />}
                </span>
              </div>
            ))}
          </div>
        </div>
    </section>
  )
}

export default Categories