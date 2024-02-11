const ApiObj = {
  apiKey: "LF39gPCsC8eJ3ABCIALLUkklR9ckp2g2sQfoHeDa",
  fetchData: async function (count) {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    let result = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}&count=${count}`,
      requestOptions
    )
      .then((response) => response.json()) //response.text() instead of this command we directly coonver to Json obj here.
      .catch((err) => {
        console.log("Error-Hata => ", err.msg);
      });
    console.log("Error => ", result.msg);
    return result;
  },
};

export default ApiObj;
