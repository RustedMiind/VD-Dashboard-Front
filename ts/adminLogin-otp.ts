const otpContainer = document.getElementById("otp");
const otpInput = document.getElementById("otp-input") as HTMLInputElement;
const events = ["input", "focus"];
console.log("otp", otpInput);
otpContainer?.addEventListener("click", () => {
  console.log("Input focused");
  otpInput?.focus();
});
events.forEach((event) => {
  otpInput?.addEventListener(event, () => {
    console.log("Hello from event");
    inputHandler(otpInput);
    setTimeout(() => {
      console.log(otpInput.value);
    }, 500);
  });
});
otpInput?.addEventListener("paste", () => {
  //   updateBlocks();
});

function inputHandler(input: HTMLInputElement) {
  setTimeout(() => {
    if (input.value.length > 5) {
      input.value = input.value.substring(0, 5);
    }
    if (!/^\d+$/.test(input.value)) {
      //   input.value = input.value.substring(0, input.value.length - 1);
      for (let x = 0; x < input.value.length; x++) {}
      input.value = "";
    }
    setTimeout(() => {
      console.log("async", input.value);
      updateBlocks();
    }, 0);
  }, 0);
}

function updateBlocks() {
  const digits = otpContainer.getElementsByClassName(
    "digit"
  ) as HTMLCollectionOf<HTMLDivElement>;
  const value = otpInput.value;
  for (let i = 0; i < digits.length; i++) {
    let digit = digits[i];
    digit.classList.contains("focus") && digit.classList.remove("focus");
    digit.innerText = "";
  }
  for (let i = 0; i < value.length; i++) {
    let digit = digits[i];
    digit.innerText = value[i];
  }
  if (value.length < 5) digits[value.length].classList.add("focus");
}
