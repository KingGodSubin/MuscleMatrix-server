function updateButtonStatus() {
  let inputElements = document.querySelectorAll(
    ".main-login-id, .main-login-pw"
  );
  let buttonElement = document.querySelector(".main-login-button");

  let isAnyInputEmpty = Array.from(inputElements).some(
    (input) => input.value.trim() === ""
  );

  buttonElement.disabled = isAnyInputEmpty;
  buttonElement.style.backgroundColor = isAnyInputEmpty ? "#ff4C4C" : "#ff4C4C";
  buttonElement.style.cursor = isAnyInputEmpty ? "default" : "pointer";
  buttonElement.style.color = isAnyInputEmpty ? "white" : "white";
}

function togglePasswordVisibility() {
  var passwordInput = document.querySelector(".main-login-pw");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}

const button = document.querySelector(".main-login-button");
const id = document.querySelector(".main-login-id");
const pw = document.querySelector(".main-login-pw");
const modal = document.querySelector("#admin-message-modal");
const backmodal = document.querySelector("#admin-message-modal-backdrop");
const canclebutton = document.querySelector(".admin-message-modal-left-button");

//일치하면 POST전송
button.addEventListener("click", (event) => {
	//관리자 아이디 비번
	if ((id.value === "MuscleMatrix" && pw.value === "1234")) {
		console.log("일치했다 " + id.value + " , " + pw.value)
		//일치하면 폼 전송
		document.getElementById("loginForm").submit();
		return;
	}
	console.log("일치하지 않음 " + id.value + " , " + pw.value)
	modal.classList.remove("hidden");
	backmodal.classList.remove("hidden");
	event.preventDefault(); // 폼 제출 방지
});



canclebutton.addEventListener("click", () => {
  modal.classList.add("hidden");
  backmodal.classList.add("hidden");
});

function applyStyles(inputElement, redBoxElement) {
  if (!inputElement.value.trim()) {
    redBoxElement.classList.remove("hidden");
    inputElement.style.border = "2px solid #CE201B";
    // placeholder 스타일 설정
    inputElement.style.paddingLeft = "18px";
    inputElement.style.paddingRight = "18px";
    inputElement.style.borderRadius = "8px";
  } else {
    redBoxElement.classList.add("hidden");
    inputElement.style.border = "";
    // placeholder 스타일 초기화
    inputElement.style.paddingLeft = "";
    inputElement.style.paddingRight = "";
    inputElement.style.borderRadius = "";
  }
}

// 아이디 미 입력시 나오는 텍스트
var inputElementTitle = document.querySelector(".main-login-id");
var redBoxElementTitle = document.getElementById("red-id");
inputElementTitle.addEventListener("input", function () {
  applyStyles(inputElementTitle, redBoxElementTitle);
});
inputElementTitle.addEventListener("blur", function () {
  applyStyles(inputElementTitle, redBoxElementTitle);
});

// 비밀번호 미 입력시 나오는 텍스트
var inputElementContent = document.querySelector(".main-login-pw");
var redBoxElementContent = document.getElementById("red-pw");
inputElementContent.addEventListener("input", function () {
  applyStyles(inputElementContent, redBoxElementContent);
});
inputElementContent.addEventListener("blur", function () {
  applyStyles(inputElementContent, redBoxElementContent);
});
