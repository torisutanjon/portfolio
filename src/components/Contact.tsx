import { useState } from "react";
import { useNavigateSection } from "../Hooks";

const Contact = () => {
  const { setSectionRef } = useNavigateSection();
  const [message, setMessage] = useState({
    email: "",
    message: "",
  });

  const sendHandler = () => {
    if (message.email === "" || message.message === "")
      return window.alert("Please fill both fields.");
    const encodedMessage = encodeURIComponent(message.message);
    const link = `mailto:giraotristan@gmail.com?body=${encodedMessage}`;
    window.location.href = link;
    window.alert("Thank you for emailing me!");
    window.location.reload();
  };

  return (
    <section
      className="relative w-full flex flex-col items-center justify-center mt-24 lg:mt-48"
      ref={(el) => setSectionRef("contact", el)}
    >
      <p className="text-2xl font-bold md:text-3xl lg:text-4xl">
        How to <span className="text-orange">reach</span> me ?
      </p>
      <div className="mt-4 w-4/5 border-[1px] flex flex-col items-center border-lightPrimary dark:border-darkPrimary md:mt-12 md:w-3/5 lg:w-1/3">
        <input
          type="text"
          className="mt-4 h-8 w-4/5 pl-2 text-sm border-b-[1px] border-b-lightPrimary dark:border-b-darkPrimary bg-transparent outline-none md:mt-8"
          placeholder="Email:"
          name="email"
          value={message.email}
          onChange={(event) => {
            setMessage((prevState) => ({
              ...prevState,
              [event.target.name]: event.target.value,
            }));
          }}
        />
        <textarea
          id=""
          className="mt-4 h-24 w-4/5 p-2 text-sm bg-transparent border-[1px] border-lightPrimary dark:border-darkPrimary outline-none md:mt-8 md:h-36 lg:h-56"
          name="message"
          value={message.message}
          onChange={(event) => {
            setMessage((prevState) => ({
              ...prevState,
              [event.target.name]: event.target.value,
            }));
          }}
        ></textarea>
        <button
          type="button"
          className="h-8 w-36 border-[1px] text-sm border-lightPrimary dark:border-darkPrimary bg-transparent my-4 md:my-8 md:h-10 md:w-48"
          onClick={() => sendHandler()}
        >
          Send
        </button>
      </div>
    </section>
  );
};

export default Contact;
