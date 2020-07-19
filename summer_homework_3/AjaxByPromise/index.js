console.log("hello");
let msg = document.querySelector(".msg");
const Ajax = {
  get: function (url) {
    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);

      xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
          if (this.status === 200) {
            resolve(this.responseText, this);
          } else {
            var resJson = { code: this.status, response: this.response };
            reject(resJson, this);
          }
        }
      };

      xhr.send();
    });
  },
  post: function (url, data) {
    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
      xhr.open("POST", url, true);
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

      xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
          if (this.status === 200) {
            resolve(JSON.parse(this.responseText), this);
          } else {
            var resJson = { code: this.status, response: this.response };
            reject(resJson, this);
          }
        }
      };

      xhr.send(JSON.stringify(data));
    });
  },
};

let getmsg = document.querySelector(".get");
getmsg.onclick = function () {
  Ajax.get("https://jsonplaceholder.typicode.com/todos/?uesrId=1").then((e) => {
    let msgs = JSON.parse(e);
    msgs.forEach((e) => {
      let li = document.createElement("li");
      li.innerHTML = e.title;
      msg.appendChild(li);
    });
  });
};
