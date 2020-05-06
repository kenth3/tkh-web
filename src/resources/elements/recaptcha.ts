import { inject, noView, bindable } from "aurelia-framework";

const recaptchaCallbackName = "setRecaptchaReady";
const ready = new Promise(
  (resolve) => (window[recaptchaCallbackName] = resolve)
);

// https://developers.google.com/recaptcha/docs/display#explicit_render
let script = document.createElement("script");
script.src = `https://www.google.com/recaptcha/api.js?onload=${recaptchaCallbackName}&render=explicit`;
script.async = true;
script.defer = true;
document.head.appendChild(script);

const sitekey = "6Ld0dzQUAAAAAMkQRIg5shdJoqmgyd9Nt4WKK0K8-VCK";

@noView()
@inject(Element)
export class Recaptcha {
  @bindable verified;
  @bindable theme = "light";

  constructor(private element: Element) {}

  attached() {
    ready.then(() =>
      window["grecaptcha"].render(this.element, {
        sitekey: sitekey,
        theme: this.theme,
        callback: this.verified,
      })
    );
  }
}
