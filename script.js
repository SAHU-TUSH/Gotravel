let btns = document.querySelectorAll(".num-button");
    let allBtns = document.querySelectorAll(".button");
    let resultBox = document.querySelector("#result-box");
    let clearBtn = document.querySelector('#clear');
    let clrBtn = document.querySelector('#clr');

    let lnBtn = document.querySelector('#lnbtn');
    let sqrtBtn = document.querySelector('#sqrtbtn');
    let sqBtn = document.querySelector('#sqbtn');
    let sinBtn = document.querySelector('#sinbtn');
    let cosbtn = document.querySelector('#cosbtn');
    let tanBtn = document.querySelector('#tanbtn');

    let total = document.querySelector("#total");

    let btnSpread = [...btns];
    let allBtnSpread = [...allBtns];

    // For Number Inputs
    btnSpread.forEach((button, i) => {
      button.addEventListener("click", () => {
        // Inner Values for calculator

        if (resultBox.innerHTML == "0") {
          resultBox.innerHTML = "";
        }

        let value = btns[i].innerHTML;
        resultBox.innerHTML += value;
      });
    });


    // Function to evalute Strings
    function evaluate(fn) {
      return new Function('return ' + fn)();
    }

    // Math Scientific Functions
    sqrtBtn.addEventListener("click", () => {
      let result = resultBox.innerHTML;
      resultBox.innerHTML = Math.sqrt(result);
    });
    lnBtn.addEventListener("click", () => {
      let result = resultBox.innerHTML;
      resultBox.innerHTML = Math.log(result);
    });
    sqBtn.addEventListener("click", () => {
      let result = resultBox.innerHTML;
      resultBox.innerHTML = Math.pow(result, 2);
    });
    sinBtn.addEventListener("click", () => {
      let result = resultBox.innerHTML;
      resultBox.innerHTML = Math.sin(result);
    });
    cosbtn.addEventListener("click", () => {
      let result = resultBox.innerHTML;
      resultBox.innerHTML = Math.cos(result);
    });
    tanBtn.addEventListener("click", () => {
      let result = resultBox.innerHTML;
      resultBox.innerHTML = Math.tan(result);
    });

    // To calculate All Input
    total.addEventListener('click', () => {
      let allInputs = resultBox.innerHTML;

      resultBox.innerHTML = evaluate(allInputs);

      console.log(evaluate(allInputs));
    })

    // Clear all Inputs
    clearBtn.addEventListener('click', () => {
      resultBox.innerHTML = "0";
    })

    // Clear one Input
    clrBtn.addEventListener('click', () => {
      let result = resultBox.innerHTML;
      resultBox.innerHTML = result.substring(0, result.length - 1)
    })