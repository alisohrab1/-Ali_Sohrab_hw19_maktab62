$("#loginBtn").click(function (e) {
  e.preventDefault();

  //empty
  if ($("#password").val() === "" || $("#username").val() === "") {
    alert("empty input");
    return;
  }

  const data = {
    username: $("#username").val(),
    password: $("#password").val(),
  };

  console.log(data);

  $.ajax({
    type: "POST",
    url: "http://localhost:5000/login",
    data,
    success: function (response) {
      console.log(response);
      if (response === "admin") {
        window.location.href = "http://localhost:5000/adminPanel";
      } else {
        window.location.href = "http://localhost:5000/profile";
      }
    },
    error: function (xhr, status, error) {
      alert(xhr.responseText);
    },
  });
});
