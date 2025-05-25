import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div> {/* Footer */}
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
          <Link href="/">
 <Image src={"/logo.png"} className='w-24 h-24  bg-white 'alt={''}  width={100} height={100}/>
          </Link>
            <p className="mt-4 text-sm text-gray-400">
              Building the future of digital experiences, one solution at a
              time.
            </p>
            <div className="mt-6 flex space-x-4">
              {/* Social icons */}
              {["twitter", "facebook", "instagram", "github", "linkedin"].map(
                (social) => (
                  <a
                    key={social}
                    href={`https://${social}.com`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="h-6 w-6 bg-gray-700 rounded-full"></div>
                  </a>
                )
              )}
            </div>
          </div>
          <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">
                Solutions
              </h3>
              <ul className="mt-4 space-y-2">
                {["Marketing", "Analytics", "Commerce", "Insights"].map(
                  (item) => (
                    <li key={item}>
                      <Link href="#">
                        <span className="text-gray-400 hover:text-white transition-colors text-sm">
                          {item}
                        </span>
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">
                Support
              </h3>
              <ul className="mt-4 space-y-2">
                {["Documentation", "Guides", "API Status", "Help"].map(
                  (item) => (
                    <li key={item}>
                      <Link href="#">
                        <span className="text-gray-400 hover:text-white transition-colors text-sm">
                          {item}
                        </span>
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">
                Company
              </h3>
              <ul className="mt-4 space-y-2">
                {["About", "Blog", "Jobs", "Press", "Partners"].map(
                  (item) => (
                    <li key={item}>
                      <Link href="#">
                        <span className="text-gray-400 hover:text-white transition-colors text-sm">
                          {item}
                        </span>
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Your Company, Inc. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer></div>
  )
}

export default Footer