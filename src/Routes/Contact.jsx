import Form from "../components/Form"

const ContactR = () => {
  return (
    <>
      <div className="md:hidden mb-4 margin">
        <p className="text-center text-2xl text-blue-950 font-medium mb-4">
          Contact Us
        </p>
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 px-4">
            <i className="fa-solid fa-envelope"></i>
            <a href="mailto:contact@company.com.np">contact@company.com.np</a>
          </div>
          <div className="flex items-center gap-2 px-4">
            <i className="fa-solid fa-phone"></i>
            <a href="tel:+977-9812345678">+977-9812345678</a>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-122.4194155846789!3d37.774929979759234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085818c5b5c72a1%3A0x8b7bcd06c1d3b8f!2sSan%20Francisco%2C%20CA!5e1!3m2!1sen!2sus!4v1737020072294!5m2!1sen!2sus"
              width="300"
              style={{ border: 0, padding: 12 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Company Location"
            ></iframe>
          </div>
        </div>

        {/* form  */}
        <Form />
      </div>


      {/* medium screen  */}
      <div className="hidden md:block lg:hidden mb-8 margin">
        <h2 className="font-bold text-blue-950 text-3xl text-center mb-8">
          Contact Us
        </h2>
        <div className="flex container justify-between items-center">
          <div>
            <div className="flex items-center gap-2 px-4 text-lg">
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:contact@company.com.np">contact@company.com.np</a>
            </div>
            <div className="flex items-center gap-2 px-4 text-lg">
              <i className="fa-solid fa-phone"></i>
              <a href="tel:+977-9812345678">+977-9812345678</a>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-122.4194155846789!3d37.774929979759234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085818c5b5c72a1%3A0x8b7bcd06c1d3b8f!2sSan%20Francisco%2C%20CA!5e1!3m2!1sen!2sus!4v1737020072294!5m2!1sen!2sus"
                width="400"
                height="400"
                style={{ border: 0, padding: 12 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Company Location"
              ></iframe>
            </div>
          </div>

          {/* form  */}
          <Form />
        </div>
      </div>


      {/* large screen  */}
      <div className="hidden lg:block margin">
        <h2 className="font-bold text-blue-950 text-3xl text-center mb-8">
          Contact Us
        </h2>
        <div className="flex container justify-between items-center">
          <div>
            <div className="flex items-center gap-2 px-4 text-lg">
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:contact@company.com.np">contact@company.com.np</a>
            </div>
            <div className="flex items-center gap-2 px-4 text-lg">
              <i className="fa-solid fa-phone"></i>
              <a href="tel:+977-9812345678">+977-9812345678</a>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-122.4194155846789!3d37.774929979759234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085818c5b5c72a1%3A0x8b7bcd06c1d3b8f!2sSan%20Francisco%2C%20CA!5e1!3m2!1sen!2sus!4v1737020072294!5m2!1sen!2sus"
                width="800"
                height="400"
                style={{ border: 0, padding: 12 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Company Location"
              ></iframe>
            </div>
          </div>

          {/* form  */}
          <Form />
        </div>
      </div>
    </>
  )
}

export default ContactR
