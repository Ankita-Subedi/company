import Button from "../components/Button";
import heroimg from "../assets/heroimg.png";

const Hero = () => {
  return (
    <>
      {/* small screen  */}
      <div className="bg-blue-100 flex flex-col gap-2 mx-auto my-0 lg:hidden text-left p-4 mt-6 md:p-12">
        <p className="text-base font-bold text-blue-500 sm:text-xl">
          Technology and IT Solutions
        </p>
        <h1 className="text-2xl font-medium sm:text-4xl">
          IT Solutions , <span className="text-blue-500">Digital</span>{" "}
          Technology & Services All Around the World
        </h1>
        <p className="sm:text-xl">
          Empowering businesses with innovative technology for a secure and
          efficient future.
        </p>
        <div className="mt-4">
          <Button btnLabel="Get a Quote" path="contact"/>
        </div>
        <img src={heroimg} alt="heroimg" />
      </div>

      {/* lg-screen  */}
      <div className="bg-blue-100 hidden lg:flex  gap-2 mx-auto my-0 h-[100vh] margin">
        <div className="container flex justify-between items-center">
          <div className="flex flex-col gap-2 text-left">
            <p className="text-xl font-bold text-blue-500">
              Technology and IT Solutions
            </p>
            <h1 className="text-5xl font-medium">
              IT Solutions , <span className="text-blue-500">Digital</span>{" "}
              Technology & Services All Around the World
            </h1>
            <p className="text-lg">
              Empowering businesses with innovative technology for a secure and
              efficient future.
            </p>
            <div className="mt-3">
              <Button btnLabel="Get a Quote" path="contact"/>
            </div>
          </div>
          <div className="animate-bounce">
            <img className="w-[1500px]" src={heroimg} alt="heroimg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
