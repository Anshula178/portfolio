import React from 'react'
import Link from "next/link";

const ConnectBanner = () => {
  return (
    <div className="p-8 flex justify-center mx-auto">
        <div className="w-full  flex justify-between md:gap-14 max-w-4xl p-6 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500  shadow-lg flex-col md:flex-row gap-7">
            <div>
            <h2 className="text-xl text-black font-bold">Let’s Connect and Create Something Amazing!</h2>
          <p className="text-sm text-black mt-2">Reach out to me for collaborations, inquiries, or just to say hello.</p>
          
            </div>
            <Link href="/contact">
             <div className="mt-4">
            <button
              
              className="px-8 py-4 sm:px-16  bg-black text-white rounded-lg font-medium shadow-md hover:bg-gray-200 hover:text-black transition"
            >
              Contact Me ↗
            </button>
          </div>
          </Link>
          </div>
      </div>
  )
}

export default ConnectBanner
