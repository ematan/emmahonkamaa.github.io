/*!Oheisen scriptin malli on suoraan katsottu sivulta: https://www.w3schools.com/howto/howto_js_topnav.asp*/

function openFunction() {
            var x = document.getElementById("topnav");
            if (x.className === "menu") {
                x.className += " responsive";
            } else {
                x.className = "menu";
            }
        }
