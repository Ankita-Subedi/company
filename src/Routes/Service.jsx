import ServiceCard from "../components/ServiceCard";
import software from "../assets/icons/software.png";
import digital from "../assets/icons/digital.png";
import design from "../assets/icons/design.png";
import seo from "../assets/icons/seo.png";
import server from "../assets/icons/servers.png";
import firewall from "../assets/icons/firewall.png";
import training from "../assets/icons/training.png";
import Button from "../components/Button";
import service from "../Routes/Service";
const ServiceR = () => {
  return (
    <>
      {/* small screen  */}
      <div className="lg:hidden p-4" id="service">
        <div className="px-6 pt-6">
          <p className="text-base font-bold text-blue-500 sm:text-xl">Our Services</p>
          <p>
            Explore a range of services designed to meet your needs. Our goal is
            to provide high-quality solutions and exceptional support to help
            you achieve your objectives efficiently.
          </p>
        </div>
        <div className="flex flex-col gap-4 p-6">
          <ServiceCard
            iconImage={software}
            serviceTitle="Software Development"
            serviceDescription="Custom software solutions to streamline processes, enhance productivity, and scale with your business needs."
          />
          <ServiceCard
            iconImage={digital}
            serviceTitle="Digital Marketing"
            serviceDescription="Targeted strategies to grow your online presence, engage your audience, and boost conversions."
          />
          <ServiceCard
            iconImage={design}
            serviceTitle="Web Design and UI/UX"
            serviceDescription="Crafting intuitive, responsive, and visually appealing websites that provide seamless user experiences."
          />
          <ServiceCard
            iconImage={seo}
            serviceTitle="SEO"
            serviceDescription="Optimize your website to improve search engine rankings, increase traffic, and enhance visibility online."
          />
          <ServiceCard
            iconImage={server}
            serviceTitle="Server Management"
            serviceDescription="Reliable management of your servers to ensure uptime, security, and performance for a smooth digital experience."
          />
          <ServiceCard
            iconImage={firewall}
            serviceTitle="Firewall Security Management"
            serviceDescription="Protecting your digital assets with robust firewall solutions that guard against cyber threats and unauthorized access."
          />
          <ServiceCard
            iconImage={training}
            serviceTitle="IT Training and Consulting"
            serviceDescription="Expert training and consulting services to empower your team with the skills and knowledge to leverage technology effectively."
          />
        </div>
      </div>

      {/* large screen  */}
      <div
        className="hidden lg:flex flex-col items-center justify-between gap-4 container margin"
        id="service"
      >
        <div className="flex flex-col gap-2 text-center mt-12">
          <p className="font-bold text-blue-500 text-xl">Our Services</p>
          <p className="text-4xl font-medium">
            Searching for a Solution! We Provide Truly IT Solutions
          </p>
          <p className="text-lg mb-4">
            Explore a range of services designed to meet your needs. Our goal is
            to provide high-quality solutions and exceptional support to help
            you achieve your objectives efficiently.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          <ServiceCard
            iconImage={software}
            serviceTitle="Software Development"
            serviceDescription="Custom software solutions to streamline processes, enhance productivity, and scale with your business needs."
          />
          <ServiceCard
            iconImage={digital}
            serviceTitle="Digital Marketing"
            serviceDescription="Targeted strategies to grow your online presence, engage your audience, and boost conversions."
          />
          <ServiceCard
            iconImage={design}
            serviceTitle="Web Design and UI/UX"
            serviceDescription="Crafting intuitive, responsive, and visually appealing websites that provide seamless user experiences."
          />
          <ServiceCard
            iconImage={seo}
            serviceTitle="SEO"
            serviceDescription="Optimize your website to improve search engine rankings, increase traffic, and enhance visibility online."
          />
          <ServiceCard iconImage={server} serviceTitle="Server Management" serviceDescription="Reliable management of your servers to ensure uptime, security, and performance for a smooth digital experience."/>
        <ServiceCard iconImage={firewall} serviceTitle="Firewall Security Management" serviceDescription="Protecting your digital assets with robust firewall solutions that guard against cyber threats and unauthorized access."/>
        <ServiceCard iconImage={training} serviceTitle="IT Training and Consulting" serviceDescription="Expert training and consulting services to empower your team with the skills and knowledge to leverage technology effectively."/>
        </div>
      </div>
    </>
  );
};

export default ServiceR;