import Footer from "../components/footer"
import "./contact.css"

function Contact(){
    return(
        <>
            <section>
                <div className="section-header">
                    <div className="container">
                    <h2>Contact Us</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever
                        since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </p>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                    <div className="contact-form">
                        <div className="contact-info">
                        <div className="contact-info-item">
                            <div className="contact-info-icon">
                            <i className="fa fa-home" />
                            </div>
                            <div className="contact-info-content">
                            <h4>Address</h4>
                            <p>
                                4671 Sugar Camp Road,
                                <br /> Owatonna, Minnesota, <br />
                                55060
                            </p>
                            </div>
                        </div>
                        <div className="contact-info-item">
                            <div className="contact-info-icon">
                            <i className="fa fa-phone" />
                            </div>
                            <div className="contact-info-content">
                            <h4>Phone</h4>
                            <p>571-457-2321</p>
                            </div>
                        </div>
                        <div className="contact-info-item">
                            <div className="contact-info-icon">
                            <i className="fa fa-envelope" />
                            </div>
                            <div className="contact-info-content">
                            <h4>Email</h4>
                            <p>ntamerrwael@mfano.ga</p>
                            </div>
                        </div>
                        </div>

                        <form action="" id="contact-form2">
                        <h2>Send Message</h2>
                        <div className="input-box">
                            <input type="text" class="form__field" required="true" name="" />
                            <label for="name" class="form__label">Name</label>
                        </div>
                        <div className="input-box">
                            <input type="email" class="form__field" required="true" name="" />
                            <label for="name" class="form__label">Email</label>
                        </div>
                        <div className="input-box">
                            <textarea required="true" class="form__field" name="" defaultValue={""} />
                            <label for="name" class="form__label">Type your message</label>
                        </div>
                        <div className="input-box">
                            <input type="submit" defaultValue="Send" name="" />
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
}

export default Contact;