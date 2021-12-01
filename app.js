var characters, startAM, startNZ;

$(document).ready(function () {
  function populateTable(data) {
    // adding rows
    var rows = "";
    $.each(data, function (key, value) {
      let row = `<tr>
            <td>${value.name}</td>  
            <td>${value["species/race"]}</td>  
            <td>${value.parents}</td>
            <td>${value.birthday}</td>                 
            <td>${value.gender}</td> 
            <td>${value.affiliation}</td> 
        </tr>`;
      rows += row;
    });

    $("#tableBody").empty().append(rows);
  }

  $.ajax({
    type: "GET",
    url: "data.json",
    data: { get_param: "value" },
    dataType: "json",
    complete: function (data) {
      populateTable(data.responseJSON);
    },
  });

  $(document).ajaxComplete(function() {
    var compare = {
      name: function(a,b) {
        if(a > b) {
          return -1;
        } else {
          return a > b ? 1 : 0
        }
      },
      date: function(a,b) {
        a = new Date(a);
        b = new Date(b);
    
        return a - b;
      }
    }
    
    $('.sortable').each(function() {
      var $table = $(this);
      var $tbody = $table.find('tbody');
      var $controls = $table.find('th');
      var rows = Array.from($tbody.find('tr'));
      console.log(rows);
    
      $controls.on('click', function(){
        var $header = $(this);
        var order = $header.data('sort');
        var column;
        // console.log($header.hasClass('ascending'))
    
        if($header.hasClass('ascending') || $header.hasClass('descending')) {
          $header.toggleClass('ascending descending');
          $tbody.append(rows.reverse());
        } else {
          $header.addClass('ascending');
          $header.siblings().removeClass('ascending descending');
    
          if(compare.hasOwnProperty(order)) {
            column = $controls.index(this);
            rows.sort(function(a,b) {
              a = $(a).find('td').eq(column).text();
              b = $(b).find('td').eq(column).text();
             
              return (compare[order](a,b));
            })
          }
        }
      })
    })
  })
});

$("#search").on("keyup", function () {
  var value = $(this).val().toLowerCase();
  $("#tableBody tr").filter(function () {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
  });
});

$("button").on("click", function () {
  var id = $(this).attr("id");
  if (id == "sortAM") {
    populateTable(startAM);
  } else if (id == "sortNZ") {
    populateTable(startNZ);
  }
});


