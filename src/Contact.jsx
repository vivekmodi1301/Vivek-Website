import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <h2 className="common-heading">Feel free to contact me</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.5069757035344!2d72.94876071744383!3d19.17304680000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8f9e44824f9%3A0xc32f8103f5938afa!2sJAY%20GAUTAM%20NAGAR%20CO-OP.%20HSG.%20SOCIETY!5e0!3m2!1sen!2sin!4v1659693237903!5m2!1sen!2sin"
      width="100%" 
      height="600" 
      style={{border:0}} 
      allowFullScreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/xdojnjjr" method="post" className="contact-inputs">
            <input type="text" name="Name" placeholder="name" autoComplete="off" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea name="message" cols="30" rows="6" autoComplete="off" required ></textarea>
            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;

  .container{
    margin-top: 6rem;
    text-align: center;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs{
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"]{
          cursor: pointer;
          transition: all 0.2s;
          
          &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
      }
    }
  }
}
`
export default Contact;
