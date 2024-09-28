import { useEffect, useRef } from "react";

export const Section1 = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    usernameRef.current?.focus();
  }, []);

  const handleBtnSend = () => {
    if (usernameRef.current?.value === "") console.log("No username");
    if (emailRef.current?.value === "") console.log("No email");
    else
      console.log(
        `Username: ${usernameRef.current?.value}, Email: ${emailRef.current?.value}`
      );

    //clear inputs
    if (usernameRef.current) usernameRef.current.value = "";
    if (emailRef.current) emailRef.current.value = "";
  };

  return (
    <section className="section sec1">
      <input
        ref={usernameRef}
        className="section1Input"
        type="text"
        placeholder="Username"
      />
      <input
        ref={emailRef}
        className="section1Input"
        type="text"
        placeholder="EmailId@.com"
      />
      <button className="section1Btn" onClick={handleBtnSend}>
        Send To Console
      </button>
    </section>
  );
};
