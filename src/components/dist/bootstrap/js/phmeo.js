  function preview_image(event) {
      var reader = new FileReader();
      reader.onload = function() {
          var output = document.getElementById('output_image');
          output.src = reader.result;
      }
      reader.readAsDataURL(event.target.files[0]);
  }



  var markerDiv = document.createElement("div");
  markerDiv.innerHTML = "<div id='MyCoolDiv' style='color: #2b0808'>123</div>";
  document.getElementById("playerContainer").appendChild(markerDiv.firstChild);
  // -------------------------------------------------------------

  setTimeout(function() {
      var myCoolDiv = document.getElementById("MyCoolDiv");
      document.getElementById("playerContainer").removeChild(myCoolDiv);
  }, 1500);