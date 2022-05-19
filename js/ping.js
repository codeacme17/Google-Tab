class Ping {
  constructor(url) {
    this.url = url;
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
    let res = "";
    await this.timeout(
      800,
      fetch(this.url, {
        mode: "no-cors",
      })
    )
      .then(function (res) {
        res = "success";
        return;
      })
      .catch(function (error) {
        res = "failure";
        return;
      });

    return res;
  }
}

export default Ping;
