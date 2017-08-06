import React, { Component } from 'react';
import Input from '../input/input';
import TextArea from '../textArea/textArea';
import Button from '../button/button';

import style from './contactForm.module.scss';

class ContactForm extends Component {
  state = {
    submitted: false,
  }

  onSubmit = () => {
    this.setState({
      submitted: true,
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
        onSubmit={this.onSubmit}
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
            placeholder="Name"
            fullWidth
            required
          />
        </p>
        <p>
          <Input
            label="Email"
            name="email"
            placeholder="example@email.com"
            fullWidth
            required
          />
        </p>
        <p>
          <TextArea
            label="Comments"
            name="comments"
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
