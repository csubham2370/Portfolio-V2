import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
const Footer = () => {

  return(<>
  <hr />
  <footer className="py-12">
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
   
    <div className="flex flex-col items-center justify-center">
    <div className="flex space-x-4 ">
      <a href="https://www.facebook.com/login/" target="_blank"><FaFacebook size={24}/></a>
      <a href="https://in.linkedin.com/" target="_blank"><FaLinkedin size={24}/></a>
      <a href="https://www.facebook.com/login/" target="_blank"><BsTwitterX size={24} /></a>
      <a href="https://github.com/csubham2370/" target="_blank"><FaGithub size={24}/></a>
      </div>

      <div className="mt-8 border-t-2 border-gray-700 pt-8 flex flex-col items-center">
        <p>&copy; 2024 Subham Chakraborty. All rights reserved.</p>
      </div>

    </div>

    </div>
  </footer>
  
  </>)


}

export default Footer;