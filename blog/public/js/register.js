$("#registerBtn").click(function (e) {
    e.preventDefault();
   
    const data = {
      username: $("#username").val(),
      password: $("#password").val(),
      firstname: $("#firstname").val(),
      lastname: $("#lastname").val(),
      gender: $("#gender").val(),
      phone : $("#phone").val()
    };
  
    console.log(data);
  
    //validate inputs
    if (!(validateInputs())) {
      return;
    }
  
    $.ajax({
      type: "POST",
      url: "http://localhost:5000/register",
      data,
      success: function (response) {
        console.log(response);
        window.location.href = "http://localhost:5000/login";
      },
      error: function(xhr, status, error) {
          alert(xhr.responseText);
        },
    });
  
  
  });
  