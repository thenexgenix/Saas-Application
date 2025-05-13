import { FaCirclePlay } from "react-icons/fa6"


function SecondaryBtn() {
  return (
    <div className="px-8 py-4 rounded-xl border border-[var(--accent-yellow)] text-[var(--accent-yellow)] font-semibold flex gap-2 items-center cursor-pointer hover:scale-[1.05]">
        <FaCirclePlay /> Play Video
    </div>
  )
}

export default SecondaryBtn