import React from 'react'
import { FaCrown, FaStar, FaThumbsUp } from 'react-icons/fa6'

function PricingSection() {
  return (
    <section className="">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold">Our {" "} <span className="inline-block"> Pricing<div className="-mt-3 h-3 w-full bg-[var(--accent-yellow)]"></div></span> Plan</h2>
        <p className="text-gray-600 my-8 max-w-2xl text-xl mx-auto">
          Start connecting with all your team and plan payment for every product as you want
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-24">
          {/* Basic Plan */}
          <div className="card w-full md:w-1/3 bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="mb-4">
              <span className="inline-block bg-white text-[var(--primary)] rounded-sm p-4 -mt-16 shadow-lg">
                <FaThumbsUp className='w-12 h-12' />
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Basic</h3>
            <p className="text-2xl text-gray-800 mb-6"><span className='text-5xl font-bold'>$59</span>/month</p>
            <p className="text-gray-600 px-2 text-xl">All are just for businesses that are getting started</p>
            <div className="divider my-6"></div>
            <ul className="text-left mb-6 space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[var(--primary)] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-7.414l-3.293-3.293a1 1 0 011.414-1.414L9 8.586l3.293-3.293a1 1 0 111.414 1.414L10 10.586l3.293 3.293a1 1 0 01-1.414 1.414L9 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L7.586 10z" />
                </svg>
                Single Project Use
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[var(--primary)] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-7.414l-3.293-3.293a1 1 0 011.414-1.414L9 8.586l3.293-3.293a1 1 0 111.414 1.414L10 10.586l3.293 3.293a1 1 0 01-1.414 1.414L9 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L7.586 10z" />
                </svg>
                Unlimited User Authentication
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[var(--primary)] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-7.414l-3.293-3.293a1 1 0 011.414-1.414L9 8.586l3.293-3.293a1 1 0 111.414 1.414L10 10.586l3.293 3.293a1 1 0 01-1.414 1.414L9 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L7.586 10z" />
                </svg>
                Unlimited data history & seats
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[var(--primary)] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-7.414l-3.293-3.293a1 1 0 011.414-1.414L9 8.586l3.293-3.293a1 1 0 111.414 1.414L10 10.586l3.293 3.293a1 1 0 01-1.414 1.414L9 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L7.586 10z" />
                </svg>
                Monitoring & alerts
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[var(--primary)] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-7.414l-3.293-3.293a1 1 0 011.414-1.414L9 8.586l3.293-3.293a1 1 0 111.414 1.414L10 10.586l3.293 3.293a1 1 0 01-1.414 1.414L9 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L7.586 10z" />
                </svg>
                Basic Roles & Permissions
              </li>
            </ul>
            <button className="btn btn-md bg-[var(--primary-light)] text-white hover:bg-[var(--primary)]">
              Get Started
            </button>
          </div>

          {/* Standard Plan */}
          <div className="card w-full md:w-1/3 bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="mb-4">
              <span className="inline-block bg-white text-[var(--primary)] rounded-sm p-4 -mt-16 shadow-lg">
                <FaStar className='w-12 h-12' />
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Standard</h3>
            <p className="text-2xl text-gray-800 mb-6"><span className='text-5xl font-bold'>$99</span>/month</p>
            <p className="text-gray-600 px-2 text-xl">Suitable for Standard startups with advanced requirements</p>
            <div className="divider my-6"></div>
            <ul className="text-left mb-6 space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[var(--primary)] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-7.414l-3.293-3.293a1 1 0 011.414-1.414L9 8.586l3.293-3.293a1 1 0 111.414 1.414L10 10.586l3.293 3.293a1 1 0 01-1.414 1.414L9 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L7.586 10z" />
                </svg>
                All Features Basic
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[var(--primary)] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-7.414l-3.293-3.293a1 1 0 011.414-1.414L9 8.586l3.293-3.293a1 1 0 111.414 1.414L10 10.586l3.293 3.293a1 1 0 01-1.414 1.414L9 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L7.586 10z" />
                </svg>
                Advanced Dashboard
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[var(--primary)] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-7.414l-3.293-3.293a1 1 0 011.414-1.414L9 8.586l3.293-3.293a1 1 0 111.414 1.414L10 10.586l3.293 3.293a1 1 0 01-1.414 1.414L9 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L7.586 10z" />
                </svg>
                Unlimited Roles & Permission
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[var(--primary)] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-7.414l-3.293-3.293a1 1 0 011.414-1.414L9 8.586l3.293-3.293a1 1 0 111.414 1.414L10 10.586l3.293 3.293a1 1 0 01-1.414 1.414L9 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L7.586 10z" />
                </svg>
                1 Enterprise Integration
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[var(--primary)] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-7.414l-3.293-3.293a1 1 0 011.414-1.414L9 8.586l3.293-3.293a1 1 0 111.414 1.414L10 10.586l3.293 3.293a1 1 0 01-1.414 1.414L9 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L7.586 10z" />
                </svg>
                External API management
              </li>
            </ul>
            <button className="btn btn-md bg-[var(--primary-light)] text-white hover:bg-[var(--primary)]">
              Get Started
            </button>
          </div>

          {/* Premium Plan */}
          <div className="card w-full md:w-1/3 bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="mb-4">
              <span className="inline-block bg-white text-[var(--primary)] rounded-sm p-4 -mt-16 shadow-lg">
               <FaCrown className='w-12 h-12' />
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Premium</h3>
            <p className="text-2xl text-gray-800 mb-6"><span className='text-5xl font-bold'>$129</span>/month</p>
            <p className="text-gray-600 px-2 text-xl">Suitable for large businesses or Enterprise companies</p>
            <div className="divider my-6"></div>
            <ul className="text-left mb-6 space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[var(--primary)] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-7.414l-3.293-3.293a1 1 0 011.414-1.414L9 8.586l3.293-3.293a1 1 0 111.414 1.414L10 10.586l3.293 3.293a1 1 0 01-1.414 1.414L9 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L7.586 10z" />
                </svg>
                Every thing in Standard
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[var(--primary)] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-7.414l-3.293-3.293a1 1 0 011.414-1.414L9 8.586l3.293-3.293a1 1 0 111.414 1.414L10 10.586l3.293 3.293a1 1 0 01-1.414 1.414L9 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L7.586 10z" />
                </svg>
                Advanced access controls
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[var(--primary)] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-7.414l-3.293-3.293a1 1 0 011.414-1.414L9 8.586l3.293-3.293a1 1 0 111.414 1.414L10 10.586l3.293 3.293a1 1 0 01-1.414 1.414L9 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L7.586 10z" />
                </svg>
                Dedicated SaaS solutions
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[var(--primary)] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-7.414l-3.293-3.293a1 1 0 011.414-1.414L9 8.586l3.293-3.293a1 1 0 111.414 1.414L10 10.586l3.293 3.293a1 1 0 01-1.414 1.414L9 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L7.586 10z" />
                </svg>
                24/7 Support
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[var(--primary)] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-7.414l-3.293-3.293a1 1 0 011.414-1.414L9 8.586l3.293-3.293a1 1 0 111.414 1.414L10 10.586l3.293 3.293a1 1 0 01-1.414 1.414L9 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L7.586 10z" />
                </svg>
                Dedicated customer success
              </li>
            </ul>
            <button className="btn btn-md bg-[var(--primary-light)] text-white hover:bg-[var(--primary)]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingSection