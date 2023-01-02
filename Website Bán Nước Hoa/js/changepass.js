function checkdoimk(){
    passold= document.getElementById("passold").value;
    passnew= document.getElementById("passnew").value;
    repassnew= document.getElementById("repassnew").value;
    loi_old= document.getElementById("loi_old");
    loi_new= document.getElementById("loi_new");
    loi_renew= document.getElementById("loi_renew");
    checkloi=true;
    //email
    if(passold==""){
        loi_old.style.display = "block";
        loi_old.innerHTML="Chưa nhập";
        checkloi=false;
    }
    else{
        loi_old.innerHTML="";
        loi_old.style.display = "none";
    }

    //pass
    if(passnew==""){
        loi_new.style.display = "block";
        loi_new.innerHTML="Chưa nhập";
        checkloi=false;
    }
    else{
        loi_new.innerHTML="";
        loi_new.style.display = "none";
    }

    //repass
    if(repassnew==""){
        loi_renew.style.display = "block";
        loi_renew.innerHTML="Chưa nhập";
        checkloi=false;
    }
    else{
        loi_renew.innerHTML="";
        loi_renew.style.display = "none";
    }
     return checkloi;

}