function submitDetails() {
    var letters = /^[A-Za-z]+$/;
    if(document.getElementById("t1").value=="") {
        document.getElementById("e1").innerHTML="First name cannot be blank and not contain numbers";
        document.getElementById("t1").style.border= "1px solid red";
    }
    else if(document.getElementById("t2").value==""){
        document.getElementById("e2").innerHTML="Last name cannot be blank and not contain numbers";
        document.getElementById("t2").style.border= "1px solid red";
        }

        else if(document.getElementById("t3").value==""){
            document.getElementById("e3").innerHTML="Email cannot be blank";
        document.getElementById("t3").style.border= "1px solid red";
        }
            else if(document.getElementById("t4").value==""){
                document.getElementById("e4").innerHTML="Phone cannot be blank";
        document.getElementById("t4").style.border= "1px solid red";
            }
    else{
    alert("Details saved succesfully");
    }
}