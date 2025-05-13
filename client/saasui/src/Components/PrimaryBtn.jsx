

function PrimaryBtn({text}) {
  return (
    <div className='bg-[var(--primary-light)] hover:bg-[var(--primary)] text-white px-8 py-4 rounded-xl font-semibold cursor-pointer hover:scale-[1.05]'>{text}</div>
  )
}

export default PrimaryBtn