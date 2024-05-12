const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", async () => {
  const userEmail = email.value;
  const userPassword = password.value;

  const res = await fetch("http://localhost:8000/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: userEmail, password: userPassword }),
  });
  const data = await res.json();

  localStorage.setItem("user", JSON.stringify(data.user));
});
