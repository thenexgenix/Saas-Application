
function ServicesSection() {
  return (
    <section className="py-10 bg-base-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">See Our Services</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          We will help the client’s problems to develop the products they have with high quality Change the appearance. Prove the ROI of social media, plan more.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Task Management */}
          <div className="card bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="mb-4">
              <span className="inline-block bg-blue-100 text-blue-600 rounded-full p-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-7.414l-3.293-3.293a1 1 0 011.414-1.414L9 8.586l3.293-3.293a1 1 0 111.414 1.414L10 10.586l3.293 3.293a1 1 0 01-1.414 1.414L9 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L7.586 10z" />
                </svg>
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Task Management</h3>
            <p className="text-gray-600">
              Make the appearance of a mobile application that has quality & increases user convenience
            </p>
          </div>

          {/* Project Management */}
          <div className="card bg-purple-50 shadow-lg rounded-lg p-6 text-center">
            <div className="mb-4">
              <span className="inline-block bg-purple-100 text-purple-600 rounded-full p-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-3-5 3V4z" />
                </svg>
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Project Management</h3>
            <p className="text-gray-600">
              Help create a website and redesign it so that it becomes a website that is more trendy and looks fresh
            </p>
          </div>

          {/* Time Management */}
          <div className="card bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="mb-4">
              <span className="inline-block bg-pink-100 text-pink-600 rounded-full p-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm-1-5h2v2H9v-2zm0-4h2v3H9V7z" />
                </svg>
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Time Management</h3>
            <p className="text-gray-600">
              Change the appearance of a design into amazing website that will be made into an attractive code
            </p>
          </div>

          {/* Web Design */}
          <div className="card bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="mb-4">
              <span className="inline-block bg-blue-100 text-blue-600 rounded-full p-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2v8h10V6H5zm2 2h6v4H7V8z" />
                </svg>
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Web Design</h3>
            <p className="text-gray-600">
              Create a 3d video animation in a short period of time targeted to promote a company product
            </p>
          </div>

          {/* Mobile Design */}
          <div className="card bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="mb-4">
              <span className="inline-block bg-green-100 text-green-600 rounded-full p-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M7 3a2 2 0 00-2 2v10a2 2 0 002 2h6a2 2 0 002-2V5a2 2 0 00-2-2H7zm3 12a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Mobile Design</h3>
            <p className="text-gray-600">
              Make the appearance of a mobile application that has quality & increases user convenience
            </p>
          </div>

          {/* Development */}
          <div className="card bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="mb-4">
              <span className="inline-block bg-yellow-100 text-yellow-600 rounded-full p-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm2 2v6h10V7H5z" />
                </svg>
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Development</h3>
            <p className="text-gray-600">
              Make the appearance of a mobile application that has quality & increases user convenience
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection