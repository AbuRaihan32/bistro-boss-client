import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="bg-neutral text-neutral-content flex flex-col md:flex-row">
        <aside className="w-full text-center flex justify-center md:justify-end py-16 px-10 bg-[#1F2937]">
          <div>
            <p className="text-3xl font-medium mb-5">CONTACT US</p>
            <p>
              123 ABS Street, Uni 21, Bangladesh <br />
              +88 123456789 <br />
              Mon - Fri: 08:00 - 22:00 <br />
              Sat - Sun: 10:00 - 23:00
            </p>
          </div>
        </aside>
        <div className="w-full p-10 bg-[#111827] py-16 px-10 flex justify-center md:justify-start">
          <nav className="text-center w-fit">
            <p className="text-3xl font-medium mb-5">Follow US</p>
            <p className="text-xl font-medium mb-5">Join us on social media</p>
            <div className="flex gap-5 justify-center text-4xl">
              <p>
                <FaFacebook></FaFacebook>
              </p>
              <p>
                <FaInstagram></FaInstagram>
              </p>
              <p>
                <FaTwitter></FaTwitter>
              </p>
            </div>
          </nav>
        </div>
      </div>
      <footer className="footer footer-center p-4 bg-[#151515] text-white">
        <aside>
          <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
    </footer>
  );
};

export default Footer;
