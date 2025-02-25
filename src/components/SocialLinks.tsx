
import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaHackerrank } from "react-icons/fa";

const SocialLinks = () => {
    const links = [
        { logo: <FaGithub />, link: "https://github.com/Anshula178", name: "GitHub" },
        { logo: <FaLinkedin />, link: "https://www.linkedin.com/in/anshula-dev-73a0972b2/", name: "LinkedIn" },
        { logo: <FaHackerrank />, link: "https://www.hackerrank.com/certificates/ea0d070b9d7e", name: "HackerRank" },
        { logo: <FaInstagram />, link: "https://www.instagram.com/", name: "Instagram" },
      ];
  return (
    
      

      <div 
      className="fixed bottom-20 left-4 flex flex-col space-y-3"
    >
      
      {links.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition duration-300"
        >
          <span className="text-2xl">{item.logo}</span>
        </a>
      ))}
    </div>

   
  )
}

export default SocialLinks
