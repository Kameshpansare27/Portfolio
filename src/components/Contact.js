import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS SDK
import "./../App.css"; // Make sure to import the associated CSS for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the template parameters for the email
    const templateParams = {
      to_name: "Kamesh Pansare",  // Name of the recipient
      from_name: formData.name,   // The name entered by the user
      from_email: formData.email, // The email entered by the user
      message: formData.message,  // The message entered by the user
    };

    // Send email via EmailJS
    emailjs
      .send(
        "service_82s3vsb",           // Replace with your actual EmailJS service ID
        "template_3nonvcg",           // Replace with your EmailJS template ID
        templateParams,               // The data to be sent to the template
        "YMQRLZQSs8Y0T7OTw"          // Replace with your actual EmailJS User ID
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("Error sending email:", error.text);
          alert("There was an error sending your message. Please try again later.");
        }
      );

    // Reset the form data after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="contact sec-pad dynamicBg">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main heading-sec__main--lt">Contact</span>
          <span className="heading-sec__sub heading-sec__sub--lt">
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible.
          </span>
        </h2>
        <div className="contact__form-container">
          <form
            action="#"
            className="contact__form"
            method="post"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="form 1" />
            <div className="contact__form-field">
              <label className="contact__form-label" htmlFor="name">
                Name
              </label>
              <input
                required
                placeholder="Enter Your Name"
                type="text"
                className="contact__form-input"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="contact__form-field">
              <label className="contact__form-label" htmlFor="email">
                Email
              </label>
              <input
                required
                placeholder="Enter Your Email"
                type="email"
                className="contact__form-input"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="contact__form-field">
              <label className="contact__form-label" htmlFor="message">
                Message
              </label>
              <textarea
                required
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Enter Your Message"
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn--theme contact__btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;


// YMQRLZQSs8Y0T7OTw


// import React, { useState } from "react";
// import emailjs from "emailjs-com"; // Import EmailJS SDK
// import "./../App.css"; // Make sure to import the associated CSS for styling

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Send email via EmailJS
//     emailjs
//       .sendForm(
//         "YOUR_SERVICE_ID", // Replace with your service ID
//         "YOUR_TEMPLATE_ID", // Replace with your template ID
//         e.target, // This will send all form data
//         "YOUR_USER_ID" // Replace with your user ID
//       )
//       .then(
//         (result) => {
//           console.log("Email sent successfully:", result.text);
//           alert("Message sent successfully!");
//         },
//         (error) => {
//           console.log("Error sending email:", error.text);
//           alert("There was an error sending your message. Please try again later.");
//         }
//       );

//     // Reset the form
//     setFormData({
//       name: "",
//       email: "",
//       message: "",
//     });
//   };

//   return (
//     <section id="contact" className="contact sec-pad dynamicBg">
//       <div className="main-container">
//         <h2 className="heading heading-sec heading-sec__mb-med">
//           <span className="heading-sec__main heading-sec__main--lt">Contact</span>
//           <span className="heading-sec__sub heading-sec__sub--lt">
//             Feel free to Contact me by submitting the form below and I will get
//             back to you as soon as possible.
//           </span>
//         </h2>
//         <div className="contact__form-container">
//           <form
//             action="#"
//             className="contact__form"
//             method="post"
//             onSubmit={handleSubmit}
//           >
//             <input type="hidden" name="form-name" value="form 1" />
//             <div className="contact__form-field">
//               <label className="contact__form-label" htmlFor="name">
//                 Name
//               </label>
//               <input
//                 required
//                 placeholder="Enter Your Name"
//                 type="text"
//                 className="contact__form-input"
//                 name="name"
//                 id="name"
//                 value={formData.name}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="contact__form-field">
//               <label className="contact__form-label" htmlFor="email">
//                 Email
//               </label>
//               <input
//                 required
//                 placeholder="Enter Your Email"
//                 type="email"
//                 className="contact__form-input"
//                 name="email"
//                 id="email"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="contact__form-field">
//               <label className="contact__form-label" htmlFor="message">
//                 Message
//               </label>
//               <textarea
//                 required
//                 cols="30"
//                 rows="10"
//                 className="contact__form-input"
//                 placeholder="Enter Your Message"
//                 name="message"
//                 id="message"
//                 value={formData.message}
//                 onChange={handleChange}
//               ></textarea>
//             </div>
//             <button type="submit" className="btn btn--theme contact__btn">
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

