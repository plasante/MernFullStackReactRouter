import React from 'react';
import {Link} from "react-router-dom";
import Modal from "./Modal";

const Contact = (props) => {
  return (
    <div>
      <Modal/>
      <div
        className={'ui raised very padded text container segment'}
        style={{marginTop: '80px'}}
      >
        <Link to={'/pierre'} className={'ui header'}>Pierre</Link>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequatur cumque ducimus earum eum
          eveniet excepturi facere fugiat inventore, laboriosam libero maiores, modi nemo odio quam quidem recusandae
          soluta tempora?</p>
      </div>
      <div
        className={'ui raised very padded text container segment'}
        style={{marginTop: '80px'}}
      >
        <Link to={'/karo'} className={'ui header'}>Karo</Link>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequatur cumque ducimus earum eum
          eveniet excepturi facere fugiat inventore, laboriosam libero maiores, modi nemo odio quam quidem recusandae
          soluta tempora?</p>
      </div>
    </div>
  );
};

export default Contact;