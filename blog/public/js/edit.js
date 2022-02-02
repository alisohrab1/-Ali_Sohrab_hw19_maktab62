$("#editBtn").click(function (e) { 
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
      console.log("invaild");
    return;
  }
  console.log('valid');

  $.ajax({
    type: "PUT",
    url: "http://localhost:5000/editProfile",
    data,
    success: function (response) {
      alert(response)
      location.reload(); 
   
    },
    error: function(xhr, status, error) {
        alert(xhr.responseText);
      },
  });

    
});


$("#delBtn").click(function (e){
  e.preventDefault();

  const data = {
    username: $("#username").val(),
  };

  $.ajax({
    type: "DELETE",
    url: "http://localhost:5000/profile",
    data,
    success: function (response) {
      console.log(response);
      // location.reload(true);
      window.location.href = "http://localhost:5000/login";
    },
    error: function(xhr, status, error) {
        alert(xhr.responseText);
      },
  });

})


$("#logoutBtn").click(function (e){
  e.preventDefault();
  $.ajax({
    type: "GET",
    url: "http://localhost:5000/logout",
    success: function (response) {
      console.log(response);
      // location.reload(true);
      window.location.href = "http://localhost:5000/login";
    },
    error: function(xhr, status, error) {
        alert(xhr.responseText);
      },
  });
})