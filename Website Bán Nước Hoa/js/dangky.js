function checkdangky(){
    email= document.getElementById("email").value;
    hoten= document.getElementById("hoten").value;
    sdt= document.getElementById("sdt").value;
    pass= document.getElementById("pass").value;
    repass= document.getElementById("repass").value;
    loi_email= document.getElementById("loi_email");
    loi_ht= document.getElementById("loi_ht");
    loi_sdt= document.getElementById("loi_sdt");
    loi_pass= document.getElementById("loi_pass");
    loi_repass= document.getElementById("loi_repass");
    sothich= document.getElementById("sothich");
    loi_check= document.getElementById("loi_check");
    checkloi=true;
    //email
    if(email==""){
        loi_email.style.display = "block";
        loi_email.innerHTML="* Chưa nhập";
        checkloi=false;
    }
    else{
        loi_email.innerHTML="";
    }

    //hoten
    if(hoten==""){
        loi_ht.style.display = "block";
        loi_ht.innerHTML="* Chưa nhập";
        checkloi=false;
    }
    else{
        loi_ht.innerHTML="";
    }

    //sdt
    if(sdt==""){
        loi_sdt.style.display = "block";
        loi_sdt.innerHTML="* Chưa nhập";
        checkloi=false;
    }
    else {
        loi_sdt.innerHTML = "";
    }

    //pass
    if(pass==""){
        loi_pass.style.display = "block";
        loi_pass.innerHTML="* Chưa nhập";
        checkloi=false;
    }
    else{
        loi_pass.innerHTML="";
    }

    //repass
    if(repass==""){
        loi_repass.style.display = "block";
        loi_repass.innerHTML="* Chưa nhập";
        checkloi=false;
    }
    else{
        loi_repass.innerHTML="";
    }
     return checkloi;
}