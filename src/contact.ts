import { inject } from "aurelia-framework";
import { ContactItem } from "./models/ContactItem";
import { ContactService } from "./services/ContactService";
import {
  ValidationControllerFactory,
  ValidationController,
  ValidationRules,
} from "aurelia-validation";

@inject(ContactService, ValidationControllerFactory)
export class Contact {
  constructor(
    private contactService: ContactService,
    private controllerFactory: ValidationControllerFactory
  ) {
    this.controller = controllerFactory.createForCurrentScope();

    ValidationRules.ensure((c: ContactItem) => c.name)
      .required()
      .ensure((c: ContactItem) => c.email)
      .required()
      .email()
      .ensure((c: ContactItem) => c.message)
      .required()
      .on(this.contact);
  }

  controller: ValidationController;
  contact: ContactItem = new ContactItem();
  error: string = "";
  sent: boolean = false;
  successMessage: string = "Your message was successfully sent!";

  response: string = "";

  recaptcha(response) {
    this.response = response;
  }

  onVerified() {
    this.response = "verified";
  }

  send() {
    this.error = "";

    this.controller.validate().then((result) => {
      if (!result.valid) {
        return;
      }

      this.contactService.sendMessage(this.contact).then((status) => {
        if (status.success) {
          this.sent = true;
        } else {
          this.error = status.error;
        }
      });
    });
  }
}
