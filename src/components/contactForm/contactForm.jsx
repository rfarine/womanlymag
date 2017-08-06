import React, { Component } from 'react';
import Input from '../input/input';
import TextArea from '../textArea/textArea';
import Button from '../button/button';

import style from './contactForm.module.scss';

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    comments: '',
    submitted: false,
  }

  handleSubmit = (event) => {
    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: encode({
          'form-name': 'contact',
          name: this.state.name,
          email: this.state.email,
          comments: this.state.comments,
        })
      })
      .then(() => {
        this.setState({
          submitted: true,
        });
      })
      .catch(error => alert(error));

    event.preventDefault();
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    if (this.state.submitted) {
      return (
        <div className={style.thanks}>
          <h3>Thanks for reaching out!</h3>
          <p>We will be in touch with you shortly.</p>
        </div>
      );
    }

    return (
      <form
        name="contact"
        method="post"
        onSubmit={this.handleSubmit}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don't fill this out: <input name="bot-field" />
          </label>
        </p>
        <p>
          <Input
            label="Name"
            name="name"
            onChange={this.handleChange}
            placeholder="Name"
            fullWidth
            required
          />
        </p>
        <p>
          <Input
            label="Email"
            name="email"
            onChange={this.handleChange}
            placeholder="example@email.com"
            fullWidth
            required
          />
        </p>
        <p>
          <TextArea
            label="Comments"
            name="comments"
            onChange={this.handleChange}
            placeholder="Comments"
            fullWidth
            required
          />
        </p>
        <p>
          <Button
            id="submit"
            name="submit"
            text="Send"
            type="submit"
          />
        </p>
      </form>
    );
  }
}

export default ContactForm;
