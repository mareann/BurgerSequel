/////////////////////////////////////////////////////////
// assets/js/burger.js
// on click and on submit functions
/////////////////////////////////////////////////////////
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    if ( $("#ca").val().trim() == "" )
    {
      return;
    }

    var newBurger = {
      burger_name: $("#ca").val().trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        // console.log("--- js/burgers.js: .ajax /api/burgers created newBurger "+newBurger.burger_name);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

    $(".devour-burger").on("click", function(event) {

    var id = $(this).data("id");

    var newDevourState = {
      devoured: true
    };
    // console.log(".devour-burger id "+id)
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        // console.log("js/burgers.js: .ajax PUT /api/burgers "+id+" devoured changed to", newDevourState);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

/*
  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
         console.log("js/burger.js: .delete-burger .ajax /api/burgers deleted burger "+id);

        //console.log("deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });*/
});
