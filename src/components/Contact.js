import React, { Component } from 'react'

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            message: '',
            touched: {
                name: false,
                email: false,
                message: false
            }
        }
    }
    onChange = (e) => {
        var fieldValue = (e.target.type == "checkbox") ? e.target.checked : e.target.value;
        var fieldName = e.target.name;


        this.setState({
            [fieldName]: fieldValue
        })
    }

    onBlur = (e) => {
        var fieldName = e.target.name;
        var touched = Object.assign({}, this.state.touched)

        touched[fieldName] = true;
        //touched.name=true
        this.setState({
            touched: touched
        })
    }

    isValidEmail = (email) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return true;
        }
        return false;
    }

    validate = () => {
        var errors = {};
        if (this.state.name == "") {
            errors.name = "Name is required"
        }

        if (this.state.email == "") {
            errors.email = "Email is required"
        }
        else if (!this.isValidEmail(this.state.email)) {
            errors.email = "Invalid email address"
        }
        if (this.state.message == "") {
            errors.message = "Message is required"
        }
        return {
            errors,
            isValid: Object.keys(errors).length == 0 ? true : false
        }
    }
    onSubmit = (e) => {
        e.preventDefault();
        //Submit data to server
        var url = "/api/sendemail";
        var data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }
        fetch(url, { method: "POST", body: JSON.stringify(data) })
            .then(response => response.json())
            .then(result => {
                console.log("email sent success");
            })
            .catch((err) => {
                console.log("email failed to sent")
            })
    }

    render() {
        var { errors, isValid } = this.validate();
        var { touched } = this.state;
        return (

            <section className="contacts-3 bg-clouds">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5">
                            <h3>Contact Us</h3>
                            <p>Vanes is just few finger taps away. Feel free to reach us any time during normal business hours from
                    Monday to Saturday.</p>
                            <div className="links">
                                <a href="#"><span className="fui-phone"></span>+91 80963 80962</a><br />
                                <a href="#"><span className="fui-mail"></span>hr@vanes.in</a>
                            </div>
                            <h6>Corporate HQ</h6>
                            <p>Vanes is located near to heart of technology in Hyderabad.</p>
                            <p>Vanes Industries</p>
                            <p> Door No: 2-91/5&6/MPTP/3F/B-2<br />
                                Kondapur, Serilingampally,<br />
                                Hyderabad, Telangana-500084.
                  </p>


                        </div>
                        <div className="col-sm-6 col-sm-offset-1">
                            <h3>Email us</h3>
                            <p>Want to reach us by email, Send us a quick message by filling form below.</p>
                            <form>
                                <label className="h6">Name / Last Name</label>
                                <input type="text" name="name" onChange={this.onChange} onBlur={this.onBlur} className="form-control" />
                                {
                                    (errors.name) && (touched.name == true) && <div><span style={{ color: "red" }}>{errors.name}</span></div>
                                }
                                <label className="h6">E-mail</label>
                                <input type="text" name="email" onChange={this.onChange} onBlur={this.onBlur} className="form-control" />
                                {
                                    (errors.email) && (touched.email == true) && <div><span style={{ color: "red" }}>{errors.email}</span></div>
                                }
                                <label className="h6">Message</label>
                                <textarea rows="7" name="message" onChange={this.onChange} onBlur={this.onBlur} className="form-control"></textarea>
                                {
                                    (errors.message) && (touched.message == true) && <div><span style={{ color: "red" }}>{errors.message}</span></div>
                                }

                                <button type="button" disabled={!isValid} onClick={this.onSubmit} className="btn btn-primary"><span className="fui-mail"></span></button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
export default Contact;