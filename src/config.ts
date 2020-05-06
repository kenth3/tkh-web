export class Config {
  constructor() {
    if (window.location.href.includes("localhost"))
      this.baseUrl = "http://localhost:8000/1.0";
    else this.baseUrl = "https://api.thomaskenthurd.com/1.0";
  }

  baseUrl: string;
}
