import Navbar from '../components/Navbar'
import AboutUs from '../sections/AboutUs'
import Hero from '../sections/Hero'
import Service from '../sections/Service'
import Carousel from '../components/Carousel'
import CarouselClient from '../components/CarouselClient'
import Faq from '../sections/Faq'
import Footer from '../sections/Footer'
import react from "../assets/tech/rreact.jpg";
import aws from "../assets/tech/aws.jpg";
import docker from "../assets/tech/docker.jpg";
import flutter from "../assets/tech/flutter.jpg";
import mongodb from "../assets/tech/mg.jpg";
import mysql from "../assets/tech/mysql.jpg";
import angular from "../assets/tech/angular.jpg";
import nodejs from "../assets/tech/nodejs.jpg";

const Home = () => {
  return (
    <div>
      <Hero/>
      <AboutUs/>
      <Service/>
      <Carousel
      Title="Tools and Technologies"
      img1={angular}
      img2={aws}
      img3={docker}
      img4={flutter}
      img5={mongodb}
      img6={mysql}
      img7={nodejs}
      img8={react}
    />
    <CarouselClient/>
    <Faq/>
    </div>
  )
}

export default Home
