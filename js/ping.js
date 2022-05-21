class Ping {
  constructor(url) {
    this.url = url;
    this.ms = 2000;
  }

  async timeout(ms, promise) {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        reject(new Error("TIMEOUT"));
      }, ms);

      promise
        .then((value) => {
          clearTimeout(timer);
          resolve(value);
        })
        .catch((reason) => {
          clearTimeout(timer);
          reject(reason);
        });
    });
  }

  async ping() {
    let pingRes = "";
    await this.timeout(
      this.ms,
      fetch(this.url, {
        mode: "no-cors",
      })
    )
      .then(function (res) {
        pingRes = "success";
        return;
      })
      .catch(function (error) {
        pingRes = "failure";
        return;
      });

    return pingRes;
  }
}

export default Ping;
