import { useState } from "react";
import * as Yup from "yup";

const Form = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validationSchema = Yup.object({
    fname: Yup.string().required("First name is required"),
    lname: Yup.string().required("Last name is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^\d{10}$/, "Phone number must be 10 digits"),
    message: Yup.string().required("Enter some message"),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      console.log("Form submitted", formData);
    } catch (error) {
      const newErrors = {};

      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    Yup.reach(validationSchema, name)
      .validate(value)
      .then(() => {
        setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
      })
      .catch((err) => {
        setErrors((prevErrors) => ({ ...prevErrors, [name]: err.message }));
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-4 p-6 rounded-lg shadow-md w-full max-w-md"
    >
      {/* First Name */}
      <div className="w-full flex flex-col">
        <label htmlFor="fname" className="mb-1 font-medium">
          First Name:
        </label>
        <input
          onChange={handleChange}
          name="fname"
          id="fname"
          type="text"
          className="border border-blue-950 outline-none px-3 py-2 rounded-md w-full"
        />
        {errors.fname && <p className="text-red-600 text-sm">{errors.fname}</p>}
      </div>

      {/* Last Name */}
      <div className="w-full flex flex-col">
        <label htmlFor="lname" className="mb-1 font-medium">
          Last Name:
        </label>
        <input
          onChange={handleChange}
          name="lname"
          id="lname"
          type="text"
          className="border border-blue-950 outline-none px-3 py-2 rounded-md w-full"
        />
        {errors.lname && <p className="text-red-600 text-sm">{errors.lname}</p>}
      </div>

      {/* Phone */}
      <div className="w-full flex flex-col">
        <label htmlFor="phone" className="mb-1 font-medium">
          Phone:
        </label>
        <input
          onChange={handleChange}
          name="phone"
          id="phone"
          type="number"
          className="border border-blue-950 outline-none px-3 py-2 rounded-md w-full"
        />
        {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}
      </div>

      {/* Email */}
      <div className="w-full flex flex-col">
        <label htmlFor="email" className="mb-1 font-medium">
          Email:
        </label>
        <input
          onChange={handleChange}
          name="email"
          id="email"
          type="email"
          className="border border-blue-950 outline-none px-3 py-2 rounded-md w-full"
        />
        {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
      </div>

      {/* Message */}
      <div className="w-full flex flex-col">
        <label htmlFor="message" className="mb-1 font-medium">
          Message:
        </label>
        <textarea
          onChange={handleChange}
          name="message"
          id="message"
          className="border border-blue-950 outline-none px-3 py-2 rounded-md w-full h-24 resize-none"
        />
        {errors.message && (
          <p className="text-red-600 text-sm">{errors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        className="py-3 px-6 bg-blue-950 text-white rounded-lg"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
