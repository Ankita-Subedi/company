import heroimg from "../assets/heroimg.png";
import LargeTitle from "../components/LargeTitle"
import aboutimg from "../assets/about.png"

const AboutUs = () => {
  return (
    <>
    <div className="lg:hidden p-4">
      <div className="px-4">
        <h2 className="text-base font-bold text-blue-500 sm:text-xl">About Us</h2>
        <p className="text-2xl font-medium sm:text-4xl">
          Empowering businesses with innovative technology for a secure
          and efficient future.
        </p>
        <p>
          Established in 2021, we are a leading software company based in
          Kathmandu, dedicated to delivering innovative IT solutions and digital
          services. Our expertise spans software development, digital marketing,
          SEO, firewall security management, server management, and more. With a
          team of skilled professionals, we focus on providing tailored
          solutions that empower businesses to thrive in the digital age. Our
          mission is “Empowering businesses with innovative technology for a
          secure and efficient future.” We prioritize quality, security, and
          client satisfaction, earning the trust of local and international
          clients. At our core, we drive measurable results through innovation,
          efficiency, and cutting-edge technology.
        </p>
      </div>
      <div>
        <img className="h-70" src={aboutimg} alt="image" />
      </div>
    </div>

    {/* large screen */}
    <div className="hidden lg:flex container justify-between items-center margin">
      <div className="px-4 max-w-lg">
      <h2 className="font-bold text-blue-500 text-xl">About Us</h2>
      <p className="font-medium text-4xl">
          Empowering businesses with innovative technology for a secure
          and efficient future.
        </p>
        <p>
          Established in 2021, we are a leading software company based in
          Kathmandu, dedicated to delivering innovative IT solutions and digital
          services. Our expertise spans software development, digital marketing,
          SEO, firewall security management, server management, and more. With a
          team of skilled professionals, we focus on providing tailored
          solutions that empower businesses to thrive in the digital age. Our
          mission is “Empowering businesses with innovative technology for a
          secure and efficient future.” We prioritize quality, security, and
          client satisfaction, earning the trust of local and international
          clients. At our core, we drive measurable results through innovation,
          efficiency, and cutting-edge technology.
        </p>
      </div>
      <div>
        <img className="h-[500px] ml-20" src={aboutimg} alt="image" />
      </div>
    </div>
    </>
  );
};

export default AboutUs;