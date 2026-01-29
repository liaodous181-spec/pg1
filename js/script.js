let data = [];

let save = localStorage.getItem("data");
if (save !== null) {
  data = JSON.parse(save);
}

let btn = document.getElementById("btn");

btn.addEventListener("click", function () {

  let day = document.getElementById("day").value;
  let mem = document.getElementById("mem").value;
  let act = document.getElementById("act").value;

  if (day === "" || mem === "" || act === "") {
    alert("入力してください");
    return;
  }

  let one = day + " / " + mem + " / " + act;
  data.push(one);

  localStorage.setItem("data", JSON.stringify(data));

  show();

  document.getElementById("act").value = "";
});

function show() {
  let out = document.getElementById("out");
  out.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    let li = document.createElement("li");
    li.textContent = data[i];
    out.appendChild(li);
  }

  document.getElementById("num").textContent =
    "記録数：" + data.length;
}

show();
