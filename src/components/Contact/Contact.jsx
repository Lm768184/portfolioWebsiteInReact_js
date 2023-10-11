import './Contact.css'
import deskSetupPic from '../../Image/deskSetup.jpg'
import { BsSendCheckFill } from 'react-icons/bs'
import { Fade } from "react-awesome-reveal";

const Contact = () => {
  return (
    <Fade top>
      <div className="container contact-section" id="contact">
        <div className="row contact-row ">
          <div className="col-12 col-xl-6 contact-form-image">
            <img src={deskSetupPic} alt="contact-form-image" />
          </div>

          <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 second-contact-col ">
            <div className="contact-me-header">Contact Me</div>

            <form className="contact-form">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control contact-form input-field"
              ></input>

              <label className="form-label">Email</label>
              <input
                type="text"
                className="form-control contact-form input-field"
              ></input>

              <label className="form-label">Message</label>
              <textarea
                type="textbox"
                className="form-control input-field"
              ></textarea>
              <div className="button-submit">
                <p type="submit" className="btn btn-primary">
                  Send&nbsp; <BsSendCheckFill size={15} />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      </Fade>
  )
}

export default Contact
