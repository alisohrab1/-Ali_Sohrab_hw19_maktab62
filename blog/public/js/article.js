$("#createArticleBtn").click(function (e) {
  e.preventDefault();
  console.log("working");
  if ($("#articleTitle").val() === "" || $("#articleText").val() === "") {
    alert("empty input");
    return;
  }

  const data = {
    title : $("#articleTitle").val(),
    text: $("#articleText").val(),
  };

  
  $.ajax({
    type: "POST",
    url: "http://localhost:5000/article",
    data,
    success: function (response) {
      location.reload();
    },
    error: function(xhr, status, error) {
        alert(xhr.responseText);
      },
  });


});
