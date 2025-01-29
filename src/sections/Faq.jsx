import FaqItem from "../components/FaqItem"

const Faq = () => {

    const data = [
        {
            title: "What services does your company offer?", content: "We provide a wide range of services, including software development, digital marketing, search engine optimization (SEO), firewall security management, server management, and more."
        },
        {
            title: "Where is your company located?", content: "Our company is located in Kathmandu, Nepal, and has been proudly serving clients since 2021."
        },
        {
            title: "How experienced is your team in software development and IT solutions?", content: "We have a skilled team of developers, marketers, and IT experts with years of hands-on experience delivering customized solutions to meet diverse business needs."
        },
        {
            title: "Do you provide cybersecurity and server management services?", content: "Yes, we specialize in firewall security management and server management, ensuring that your systems remain secure and operate efficiently."
        },
        {
            title: "How can I get a quote or consultation for my project?", content: "You can reach out to us through our website or contact us directly via email or phone. Our team will be happy to discuss your requirements and provide a tailored solution."
        },
    ]

  return (
    <div className="margin">
        <h2 className="font-bold text-blue-950 text-3xl text-center mb-8">
          FAQ
        </h2>
        {data.map((item, index)=>(
            <FaqItem key={index} Title={item.title} Content={item.content}/>
        ))}
    </div>
  )
}

export default Faq
