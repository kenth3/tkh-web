import { inject } from "aurelia-framework";
import { HttpClient } from "aurelia-http-client";
import { Config } from "../config";

@inject(HttpClient, Config)
export class UserService {
  constructor(private httpClient: HttpClient, private config: Config) {
    this.httpClient.configure((c) => {
      c.withBaseUrl(this.config.baseUrl);
    });
  }

  login(userName: string, password: string) {
    return this.httpClient
      .post("/users/login", { userName, password })
      .then((data) => {
        let token = JSON.parse(data.response).token;
        return { success: true, token, error: "" };
      })
      .catch((reason) => {
        if (reason.statusCode === 401) {
          return {
            success: false,
            error: "Incorrect user name or password",
            token: "",
          };
        } else {
          return { success: false, error: reason.statusText, token: "" };
        }
      });
  }

  logout() {
    console.log("nothing here yet");
  }
}
