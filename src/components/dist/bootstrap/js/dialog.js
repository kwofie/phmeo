  function CustomAlert() {
      this.render = function(dialog) {
          var winW = window.innerWidth;
          var winH = window.innerHeight;
          var dialogoverlay = document.getElementById('dialogoverlay');
          var dialogbox = document.getElementById('dialogbox');
          dialogoverlay.style.display = "block";
          dialogoverlay.style.height = winH + "px";
          dialogbox.style.left = (winW / 2) - (550 * .5) + "px";
          dialogbox.style.top = "100px";
          dialogbox.style.display = "block";
          document.getElementById('dialogboxhead').innerHTML = "Acknowledge This Message";
          document.getElementById('dialogboxbody').innerHTML = dialog;
          document.getElementById('dialogboxfoot').innerHTML = '<button class="btn btn-md btn-primary"  onclick="Alert.ok()">OK</button>';
      }
      this.ok = function() {
          document.getElementById('dialogbox').style.display = "none";
          document.getElementById('dialogoverlay').style.display = "none";
      }
  }

  var Alert = new CustomAlert();


  function delete_Post(id) {
      var db_id = id.replace("post_", "");
      document.body.removeChild(document.getElementById(id));
  }



  function CustomConfirmAlert() {
      this.render = function(dialog, op, id) {
          var winW = window.innerWidth;
          var winH = window.innerHeight;
          var dialogoverlay = document.getElementById('dialogoverlay');
          var dialogbox = document.getElementById('dialogbox');
          dialogoverlay.style.display = "block";
          dialogoverlay.style.height = winH + "px";
          dialogbox.style.left = (winW / 2) - (550 * .5) + "px";
          dialogbox.style.top = "100px";
          dialogbox.style.display = "block";
          document.getElementById('dialogboxhead').innerHTML = "Confirm That Action";
          document.getElementById('dialogboxbody').innerHTML = dialog;
          document.getElementById('dialogboxfoot').innerHTML = '<button class="btn btn-md btn-danger"  onclick="Confirm.yes(\'' + op + '\',\'' + id + '\')">YES</button>  <button  class="btn btn-sm btn-warning" onclick="Confirm.no()">NO</button>';
      }

      this.no = function() {
          document.getElementById('dialogbox').style.display = "none";
          document.getElementById('dialogoverlay').style.display = "none";
      }

      this.yes = function(op, id) {
          if (op == "delete_post") {
              delete_Post(id);
          }
          document.getElementById('dialogbox').style.display = "none";
          document.getElementById('dialogoverlay').style.display = "none";
      }

  }

  var Confirm = new CustomConfirmAlert();