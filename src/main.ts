import { Aurelia } from "aurelia-framework";
import environment from "./environment";

export function configure(aurelia: Aurelia) {
  aurelia.use.standardConfiguration().feature("resources");

  aurelia.use.developmentLogging(environment.debug ? "debug" : "warn");

  if (environment.testing) {
    aurelia.use.plugin("aurelia-testing");
  }

  aurelia.use.plugin("aurelia-validation");

  // aurelia.use.plugin("aurelia-plugins-google-recaptcha", (config) => {
  //   config.options({
  //     hl: "en", //see https://developers.google.com/recaptcha/docs/language
  //     siteKey: "6Ld0dzQUAAAAAMkQRIg5shdJoqmgyd9Nt4WKK0K8", //see https://www.google.com/recaptcha/admin#createsite
  //   });
  // });

  aurelia.start().then(() => aurelia.setRoot());
}
