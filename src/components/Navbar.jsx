import React from 'react'
import { RxPeople } from "react-icons/rx";
import { TbCash } from "react-icons/tb";
import { BsBuilding } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 px-5 md:px-10 h-16 flex items-center justify-between">


        <div>
          <h1 className="text-2xl font-bold text-indigo-600">
            HR Pulse
          </h1>
        </div>


        <ul className="hidden md:flex items-center gap-8 font-medium">
          <li>
            <a href="#" className="hover:text-indigo-600 transition-colors">
              Features
            </a>
          </li>

          <li>
            <a href="#benefit" className="hover:text-indigo-600 transition-colors">
              Benefits
            </a>
          </li>

          <li>
            <a href="#pricing" className="hover:text-indigo-600 transition-colors">
              Pricing
            </a>
          </li>
        </ul>

        <div className="hidden md:flex gap-4">
          <button className="bg-indigo-100 text-indigo-600 hover:bg-indigo-200 transition-all duration-300 px-5 py-2 rounded-lg font-medium">
            Login
          </button>

          <button className="bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-300 px-5 py-2 rounded-lg">
            Add Employees
          </button>
        </div>


        <button className="md:hidden text-3xl text-indigo-600 ml-auto">
          <HiMenu />
        </button>

      </nav>


      <section className='flex items-center justify-between px-10 bg-gray-50 py-16 flex-col-reverse md:flex-row text-center md:text-left'>
        <div className='flex flex-col gap-5'>
          <h1 className='text-2xl font-bold '>Empower Your Workforce with HR
            <br></br> Pulse</h1>
          <p className='text-'>Streaming our HR operations, maybe employees effortlessly, and
            <br></br>gain actionable insights. with our mordern, intuitive Employee
            <br></br>Management System.</p>
          <div className='space-y-4 '>
            <button className='bg-indigo-600 text-white hover:bg-indigo-900 font-medium py-2 px-4 rounded-md'>Get Started for Free</button>
            <button className='bg-white py-2 px-4 rounded-md border border-black transition-transform duration-300 hover:rotate-3 hover:scale-105'>Book a Demo</button>
          </div>
        </div>

        <div>
          <img className='w-full max-w-md md:max-w-lg object-cover' src="laptop .png" alt="laptop" />
        </div>

      </section>

      <section className="bg-gray-100 py-10">
        <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">

          <div>
            <h3 className="text-3xl font-bold text-indigo-600">10,000+</h3>
            <p className="text-gray-600 mt-2">Employees Managed</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-indigo-600">500+</h3>
            <p className="text-gray-600 mt-2">Companies Trusted</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-indigo-600">99.9%</h3>
            <p className="text-gray-600 mt-2">Uptime Guaranteed</p>
          </div>

        </div>
      </section>

      <section className="bg-gray-50 py-16 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">


          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Everything you need to manage your team
            </h2>
            <p className="mt-4 text-gray-600">
              A comprehensive suite of tools designed to simplify complex HR processes.
            </p>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">


            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <RxPeople className="text-4xl text-indigo-600 bg-indigo-100 w-14 h-14 p-3 rounded-lg" />

              <h3 className="text-2xl font-semibold mt-5">
                Centralized Directory
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Keep all employee records, documents, and contact information
                in one secure and easily accessible location.
              </p>
            </div>


            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <TbCash className="text-4xl text-indigo-600 bg-indigo-100 w-14 h-14 p-3 rounded-lg" />

              <h3 className="text-2xl font-semibold mt-5">
                Automated Payroll
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Streamline compensation management with automated calculations,
                tax deductions, and seamless direct deposits.
              </p>
            </div>


            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <BsBuilding className="text-4xl text-indigo-600 bg-indigo-100 w-14 h-14 p-3 rounded-lg" />

              <h3 className="text-2xl font-semibold mt-5">
                Department Insights
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Visualize organizational structure and track department-level
                metrics to optimize workforce planning.
              </p>
            </div>

          </div>

        </div>
      </section>


      <section id="benefit" className="flex flex-col lg:flex-row items-center gap-12 px-5 md:px-10 lg:px-20 py-16">

        <div className="w-full lg:w-1/2">
          <img src="pics 2.jpg" alt="Employee Directory" className="w-full h-72 md:h-96 object-cover rounded-xl shadow-lg" />
        </div>


        <div className="w-full lg:w-1/2">

          <p className="inline-block bg-indigo-100 text-indigo-600 font-semibold rounded-full px-4 py-2">
            Employee Directory
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Find anyone, instantly.
          </h2>

          <p className="text-gray-600 mt-5 leading-7">
            Navigate your organization with ease. Our robust employee
            directory allows you to filter by department, location,
            or role. Access detailed profiles to understand skills,
            reporting lines, and contact information at a glance.
          </p>

          <div className="mt-8 space-y-4 text-gray-700">
            <p>✔ Advanced search and filtering capabilities</p>
            <p>✔ Visual organizational charts and reporting structures</p>
            <p>✔ Customizable profile fields</p>
          </div>

        </div>
      </section>


      <section
        id="pricing" className="bg-gray-100 py-16 px-5 md:px-10 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Ready to transform your HR?
          </h2>

          <p className="mt-5 text-gray-600 text-base md:text-lg leading-7">
            Join hundreds of forward-thinking companies already using
            HR Pulse to manage
            their most valuable asset their people.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105">
              Start Your 14-Day Free Trial
            </button>

            <button className="border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white font-medium px-8 py-3 rounded-xl transition-all duration-300">
              Book a Demo
            </button>
          </div>

          <p className="mt-5 text-sm text-gray-500">
            No credit card required. Cancel anytime.
          </p>

        </div>
      </section>

      <footer className="bg-white">

        <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">


          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-indigo-600">HR PULSE</h2>

            <p className="text-gray-600">
              Modern employee management for the modern workforce.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">
              Product
            </h3>

            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-indigo-600 cursor-pointer">Features</li>
              <li className="hover:text-indigo-600 cursor-pointer">Pricing</li>
              <li className="hover:text-indigo-600 cursor-pointer">Integrations</li>
              <li className="hover:text-indigo-600 cursor-pointer">Changelog</li>
            </ul>
          </div>


          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>

            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-indigo-600 cursor-pointer">About Us</li>
              <li className="hover:text-indigo-600 cursor-pointer">Career</li>
              <li className="hover:text-indigo-600 cursor-pointer">Blog</li>
              <li className="hover:text-indigo-600 cursor-pointer">Contact</li>
            </ul>
          </div>


          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>

            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-indigo-600 cursor-pointer">Privacy Policy</li>
              <li className="hover:text-indigo-600 cursor-pointer">Terms of Service</li>
              <li className="hover:text-indigo-600 cursor-pointer">Cookie Policy</li>
            </ul>
          </div>

        </div>


        <div className="border-t border-gray-200 py-6 text-center text-sm text-gray-500">
          © 2026 HR PULSE. All rights reserved.
        </div>

      </footer>



      {/* Project done by biggest dev name Ogunyinka Axhar Jibola. Call at 09050932065  byeeeeeeeeeeeeeeeeeeeeeee  */}


    </>
  )
}

export default Navbar