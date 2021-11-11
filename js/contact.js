    let btn = document.getElementById("btn").addEventListener("click",function(){
 
        let Fname = document.getElementById('contact-Fname').value;

        if (Fname.length == 0) {
            
           alert('Name is required');
            return false;

        }

        let Lname = document.getElementById('contact-Lname').value;

        if (Lname.length == 0) {

            alert('Last Name is required' );
            return false;

        }
        let email = document.getElementById('contact-email').value;

        if (email.length == 0) {

            alert('Email Invalid'  );
            return false;

        }

        if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {

            alert('Email Invalid' );
            return false;

        }
  });