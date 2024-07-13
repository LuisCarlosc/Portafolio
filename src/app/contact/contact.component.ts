import { Component } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm('service_z7lkb3e', 'template_uqv37cp', e.target as HTMLFormElement, {
        publicKey: 'kvFAa7btTfiu-a2V9',
      })
      .then(
        () => {
          console.log('Mensaje enviado!');
        },
        (error) => {
          console.log('Error...', (error as EmailJSResponseStatus).text);
        },
      );
  }

}
