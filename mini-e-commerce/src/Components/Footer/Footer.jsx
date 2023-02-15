import React from "react";
import Styles from "../Styles/Footer.module.css";
import { GrFacebookOption } from "react-icons/gr";
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiOutlineGoogle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div>
        <div className={Styles.FirstDiv}>
          <div className={Styles.heading}>
            Get connect with us social network
          </div>
          <div className={Styles.social}>
            <GrFacebookOption className={Styles.tag} />
            <AiOutlineTwitter className={Styles.tag} />
            <AiOutlineGoogle className={Styles.tag} />
            <AiFillLinkedin className={Styles.tag} />
            <AiOutlineInstagram className={Styles.tag} />
            <AiOutlineGithub className={Styles.tag} />
          </div>
        </div>
        <div className={Styles.secondDiv}>
          <h3 className={Styles.h3}>This Is E-commerce App</h3>
          <p className={Styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            modi pariatur et unde ratione itaque quae veniam quod aut? Debitis
            consectetur vero voluptatibus animi deserunt voluptatum nemo omnis,
            quibusdam, illo illum, ad minima vel! Minus dolorum vero eligendi
            nesciunt, commodi facilis, laboriosam aspernatur tempore beatae
            pariatur cum ullam sunt. Possimus vel similique minus veniam
            voluptate natus repellendus reprehenderit facere odit?
          </p>
        </div>
        <div className={Styles.lastDiv}>@2023 Mini Amazon</div>
      </div>
    </>
  );
};

export { Footer };
