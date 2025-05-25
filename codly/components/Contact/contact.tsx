import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
const Contact = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6 },
        },
      };
    
      const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
          },
        },
      };
  return (
    <div>{/* CTA section */}
    <motion.div
      className="relative isolate overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
          <div className="absolute -left-20 top-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute -right-20 bottom-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Elevate your business today
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Join thousands of forward-thinking companies that have already
            transformed their digital presence.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/register">
              <span className="inline-flex items-center rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-3 text-base font-medium text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
                Get started
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            </Link>
            <Link href="/contact">
              <span className="text-base font-medium text-gray-600 hover:text-indigo-600 transition-colors">
                Contact sales <span aria-hidden="true">→</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </motion.div></div>
  )
}

export default Contact