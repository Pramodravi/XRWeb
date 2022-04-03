
function login()
{
    var emailId = document.getElementById("email_field").value;
    var password = document.getElementById("password_field").value;
    
    if(emailId =="" & password == "")
    {
        alert("enter the email id and password");
    }
    else
    {
        
        if(emailId == "rubesh@gismostudio.in")
        {
                if(password == "Admin@123")
                {
                    window.location.href ="../Html/userPage.html";
                }
                else
                {
                    alert("incorrect password");
                }
        }
        else
        {
            alert("email id or password is incorrect");
        }
    }
}
