// let displayValue: string = "0";
// // let oneNum: string = "";
// let oneNum: string | null = null;
// // let twoNum: string = "";
// let twoNum: string | null = null;
// // let operator: string = "";
// let operator: string | null = null;

// const display = document.querySelector(".display") as HTMLInputElement;
// const buttons = document.querySelector(".buttons") as HTMLDivElement;

// function updateDisplay(): void {
//   display.value = displayValue;
// }

// function inputNumber(num: string): void {
//   displayValue = num;

//   if (!!oneNum) {
//     if (!operator) {
//       oneNum += num;
//     } else {
//       twoNum += num;
//     }
//   }

//   console.log(num);
//   updateDisplay();
// }

// function inputCalculate(op: string): void {
//   operator = op;
//   console.log(op);
//   updateDisplay();
// }

// function handlerButtonClick(event: Event): void {
//   const target = event.target as HTMLButtonElement;

//   if (target.tagName !== "BUTTON") {
//     return;
//   }
//   const value = target.textContent!;

//   if ("0123456789".includes(value)) {
//     inputNumber(value);
//   } else if ("+-*/".includes(value)) {
//     inputCalculate(value);
//   } else {
//   }
// }

// buttons.addEventListener("click", handlerButtonClick);
