//Palwinder kaur
//0771480

$(document).ready(function () {
  const usingGetJson = () => {
    $.getJSON("team.json", (res) => {
        res.teammembers.forEach((member) => {
        $("#team").append(`<h3>${member.name}</h3>`);
        $("#team").append(`<h4>${member.title}</h3>`);
        $("#team").append(`<p>${member.bio}</p>`);
      });
    });
  };

  const usingAjax = () => {
    $.ajax({
      url: "./team.json",
      method: "GET",
      beforeSend: () => $("#team").text("Loading..."),
      success: (res) => {
        setTimeout(() => {
          $("#team").empty();
          res.teammembers.forEach((member) => {
            $("#team").append(`<h3>${member.name}</h3>`);
            $("#team").append(`<h4>${member.title}</h3>`);
            $("#team").append(`<p>${member.bio}</p>`);
          });
        }, 5000);
      },
      error: (req, err) => alert(`failed with error: ${err}`),
    });
  };

    //usingGetJson();
    usingAjax();
});
