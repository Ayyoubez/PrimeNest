import React from "react";
import { toast } from "react-toastify";
// 88c8b717-b20e-463f-be6c-cd55b8619242

const ContactUs = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "88c8b717-b20e-463f-be6c-cd55b8619242");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
    }
  };
  return (
    <div
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="ContactUs"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Connect{" "}
        <span className=" underline decoration-1 underline-offset-4 font-light">
          With Us
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, fuga.r
      </p>

      <form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto text-gray-600 pt-8"
      >
        <div className="flex flex-wrap md:gap-0 gap-4">
          <div className="w-full md:w-1/2 text-left">
            Your name
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="text"
              placeholder="Your name"
              name="Name"
              required
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4">
            Your email
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="email"
              placeholder="Your email"
              name="Email"
              required
            />
          </div>
        </div>
        <div className="my-6 text-left">
          Message{" "}
          <textarea
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
            name="Message"
            placeholder="Type your message here..."
            required
          ></textarea>
        </div>
        <button className="bg-blue-600 text-white py-2 px-12 rounded">
          {result ? result : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
