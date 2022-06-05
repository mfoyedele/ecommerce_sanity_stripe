import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
const date = new Date().getFullYear();

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>{date} OMF Gadgets Store All rights reserverd</p>
      <p className='icons'>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  );
};

export default Footer;
