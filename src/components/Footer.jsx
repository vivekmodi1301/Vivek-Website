import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import { FaDiscord, FaInstagram, FaYoutube , FaGithub} from "react-icons/fa";


const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get Started ? </h3>
            <h3>Talk to me today</h3>
          </div>

          <div>
            <NavLink to="/">
              <Button className="btn contact-short-btn" >Get Started </Button>
            </NavLink>
          </div>
        </div>
      </section>

      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>Vivek Modi</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium alias illum laboriosam</p>
          </div>
          {/* 2nd column */}

          <div className="footer-subscribe">
            <h3>Subsscribe to get more important update</h3>
            <form action="#">
              <input type="email" placeholder="Your E-Mail" autoComplete="off" required />
              <br />
              <input type="submit" value="subscribe" />
            </form>
          </div>

          {/* 3rd column  */}
          <div className="footer-social">
            <h3>Follows Us</h3>
            <div className="footer-social--icons">
              <div>
                <FaDiscord className="icons" />
              </div>
              <div>
                <FaInstagram className="icons" />
              </div>
              <div>
                <a
                  href="https://github.com/vivekmodi1301"
                  target="_blank">
                  <FaGithub className="icons" />
                </a>
              </div>
            </div>
          </div>


              {/* 4th column  */}
              <div className="footer-contact">
              <h3>Call Us</h3>
              <h3>+91 12345678978</h3>
            </div>
        </div>
        {/* bottom section  */}
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>
              @{new Date().getFullYear()} VivekModi. All Rights Reserved
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child{
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }

    input[type="email"]{
        width: 20rem;
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
    .footer-bottom--section {
      padding-top: 9rem;
      hr {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }
  }

`;
export default Footer;
