var mathStore = [];
var numStore = "";

function clickNumber(clicked) {
  if (document.querySelector('.output').textContent === "0") {
    document.querySelector('.output').textContent = "";
    document.querySelector('.output').textContent += clicked;
    numStore += clicked;
    console.log(numStore);
  } else {
    document.querySelector('.output').textContent += clicked;
    numStore += clicked;
    console.log(numStore);
  }
};

function clickMathy(mClicked) {
  if (mClicked == "√") {
    mathStore.push(mClicked);
    numStore = "";
    document.querySelector('.output').textContent += mClicked;
    console.log(mathStore);
  } else {
    mathStore.push(numStore);
    mathStore.push(mClicked);
    numStore = "";
    document.querySelector('.output').textContent += mClicked;
    console.log(mathStore);
  }
}

function clickEquals(eClicked) {
  mathStore.push(numStore);
  console.log(mathStore);
  let temp = 0;
  for (idx = 0; idx < mathStore.length; idx++) {
    if (mathStore[idx] == "√") {
      temp = Math.sqrt(mathStore[idx + 1]);
      console.log(temp);
      mathStore.splice([idx], 2, temp);
      console.log(mathStore);
    }
  }

  for (idx = 0; idx < mathStore.length; idx++) {
    if (mathStore[idx] == "%") {
      temp = mathStore[idx - 1] % mathStore[idx + 1];
      mathStore.splice([idx - 1], 3, temp);
      console.log(mathStore);
    }
  }


  for (idx = 0; idx < mathStore.length; idx++) {
    if (mathStore[idx] == "*") {
      temp = mathStore[idx - 1] * mathStore[idx + 1];
      mathStore.splice([idx - 1], 3, temp);
      console.log(mathStore);
    }
  }


  for (idx = 0; idx < mathStore.length; idx++) {
    if (mathStore[idx] == "/") {
      temp = mathStore[idx - 1] / mathStore[idx + 1];
      mathStore.splice([idx - 1], 3, temp);
      console.log(mathStore);

    }
  }
  for (idx = 0; idx < mathStore.length; idx++) {
    if (mathStore[idx] == "+") {
      temp = Number(mathStore[idx - 1]) + Number(mathStore[idx + 1]);
      mathStore.splice([idx - 1], 3, temp);
      console.log(mathStore);

    }
  }
  for (idx = 0; idx < mathStore.length; idx++) {
    if (mathStore[idx] == "-") {
      temp = mathStore[idx - 1] - mathStore[idx + 1];
      mathStore.splice([idx - 1], 3, temp);
      console.log(mathStore);

    }
  }
  document.querySelector('.output').textContent = mathStore;
}

function clickClear(cClicked) {
  mathStore = [];
  numStore = "";
  document.querySelector('.output').textContent = mathStore;
}
