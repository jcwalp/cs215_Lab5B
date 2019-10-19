$(document).ready(function() {

  var imageArray = new Array(); //create new array to preload images
  var numImages = 2;
  var imageCounter = 0;


  for (var i = 0; i < numImages; i++) {
    imageArray[i] = new Image(); //set image src property to image path,preloading image in the process
    imageArray[i].src = "Images/brightIdea" + (i + 1) + ".png";
  }


  //if browser does not support the image object, exit.
  if (!document.images)
    return;

  setInterval(function() {

    $("#blinking_image").attr('src', imageArray[imageCounter++].src);

    if (imageCounter == numImages)
      imageCounter = 0;

  }, 700); //end setInterval



}); //end $(document).ready




/******************************************************************************/


$(document).ready(function() {
  $("#login").click(function() {
    var userName = prompt("Enter Your Name Here: ");
    var $temp = document.getElementsByTagName("h2")[0].innerHTML = userName + ", BrightIdeas Will Change Your Life";

    /* your code here  to get and display user name */
    /* no other variables permitted here */
    /* google why $ in front of jQuery variable temp */

  }); //end click(function()
}); //end $(document).ready



/****************************************************************************/

$(document).ready(function() {
  $("._submit").click(function() {

    //variable holding regular expression
    //grabbing values of the two reqd fields
    var lastname = $('#last_name').val();
    var email = $('#emailEntry').val();
    //first checking if they're empty
    if (lastname.length < 1 || email.length < 1) {
      alert("Please Fill Required Fields");
      return false;
      //then checking if last name is valid and if the email field is filled out if so the submit fires
    } else if (!lastname.match(/[^A-Za-z\-\s]/g) && email.length != 0 && $isEmailValid) {
      alert("Something");
      return true;
    }
    //else it doesnt fire
    else {
      alert("Invalid");
      return false;
    }
    console.log(lastname);
    console.log(email);

    /* test if  class reqd is blank or has incorrect chars in it;
    return false if this is the case */
    var $emailValidator = $("#emailEntry").validate({

    /* state email rules here */
    rules: {

      email: {
       required: true,
       email: true,
       regex: /^\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/g
      }
    }

    }); //end validate


    var $isEmailValid = $emailValidator.element("#emailEntry");




  }); //end click
}); //end ready

/***********************************************************************************/

$(document).ready(function() {
  $("._reset").click(function() {
    $("#signUpForm")[0].reset();
    /* your code to reset the form */

  });
});

/************************************************************************************/
