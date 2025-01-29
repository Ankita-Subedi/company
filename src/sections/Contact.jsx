import Form from "../components/Form";

const Contact = () => {
  return (
    <>
      <div className="md:hidden mb-4 margin">
        <p className="text-center text-2xl text-blue-950 font-medium mb-4">
          Contact Us
        </p>
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 px-4">
            <i className="fa-solid fa-envelope"></i>
            <p>contact@scatechno.com.np</p>
          </div>
          <div className="flex items-center gap-2 px-4">
            <i className="fa-solid fa-phone"></i>
            <p>01-5922949, +977-9863760364</p>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3413.28015058872!2d85.34018587532313!3d27.69001207619248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199d73661acd%3A0xd37e1e660936263!2sSCA%20Techno%20Consult!5e1!3m2!1sen!2snp!4v1737020072294!5m2!1sen!2snp"
              width="300"
              style={{ border: 0, padding: 12 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SCA Techno Consult Location"
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
              <p>contact@scatechno.com.np</p>
            </div>
            <div className="flex items-center gap-2 px-4 text-lg">
              <i className="fa-solid fa-phone"></i>
              <p>01-5922949, +977-9863760364</p>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3413.28015058872!2d85.34018587532313!3d27.69001207619248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199d73661acd%3A0xd37e1e660936263!2sSCA%20Techno%20Consult!5e1!3m2!1sen!2snp!4v1737020072294!5m2!1sen!2snp"
                width="400"
                height="400"
                style={{ border: 0, padding: 12 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SCA Techno Consult Location"
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
              <p>contact@scatechno.com.np</p>
            </div>
            <div className="flex items-center gap-2 px-4 text-lg">
              <i className="fa-solid fa-phone"></i>
              <p>01-5922949, +977-9863760364</p>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3413.28015058872!2d85.34018587532313!3d27.69001207619248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199d73661acd%3A0xd37e1e660936263!2sSCA%20Techno%20Consult!5e1!3m2!1sen!2snp!4v1737020072294!5m2!1sen!2snp"
                width="800"
                height="400"
                style={{ border: 0, padding: 12 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SCA Techno Consult Location"
              ></iframe>
            </div>
          </div>

          {/* form  */}
          <Form />
        </div>
      </div>
    </>
  );
};

export default Contact;
