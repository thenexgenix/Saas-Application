import React from 'react'

function SectionBanner({heading}) {
  return (
    <section className='w-full h-96 bg-cover bg-center flex items-center justify-center bg-base-200'
    style={{background: "linear-gradient(90deg,rgba(213, 198, 245, 1) 0%, rgba(252, 252, 252, 1) 50%, rgba(242, 252, 212, 1) 100%)"}}
    >
        <div className='max-w-2xl text-center px-4'>
            <h2 className='text-[var(--accent-yellow)] text-xl'>Home/{heading}</h2>
            <h1 className='text-[var(--primary)] text-4xl md:text-5xl lg:text-[56px] my-4 font-bold'>{heading}</h1>
            <p>We will help a client's problem's to develop the products they have with high quality change the appearance.</p>
        </div>
    </section>
  )
}

export default SectionBanner