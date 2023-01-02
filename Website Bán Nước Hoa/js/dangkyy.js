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
    checkloi=true;
    //email
    if(email==""){
        loi_email.style.display = "block";
        loi_email.innerHTML="* Chưa nhập";
        checkloi=false;
    }
    else{
        loi_email.innerHTML="";
        //regexemail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        /*if(!regexemail.test(email)){
            loi_email.innerHTML="Sai định dạng!";
            checkloi=false;
        }*/
        acong= email.indexOf('@');
        dodai= email.length-1;
        daucham= email.lastIndexOf('.');
        daucach= email.indexOf(' ');
        if((dodai<=5)||(acong<1)||(daucham<=acong+1)||(daucach!=-1)){
            loi_email.innerHTML="* Sai định dạng";
            checkloi=false;
        }
        else{
            loi_email.innerHTML="";
        }
    }
    

    //hoten
    if(hoten==""){
        loi_ht.style.display = "block";
        loi_ht.innerHTML="* Chưa nhập";
        checkloi=false;
    }
    else{
        loi_ht.innerHTML="";
        //regexhoten= /^[a-zA-Z\-]+$/;
        regexhoten = /^[^\d+]*[\d+]{0}[^\d+]*$/;
        //regexhoten =/^[a-z0-9_\.]+$/
        /*var newstr = hoten.replace(/\s/g, '');
        for(var i=0;i<newstr.length;i++){
            var kytu= newstr.charAt(i);
            if(!isNaN(kytu)){
                loi_ht.innerHTML="Không chứa số!";
                checkloi=false;
            }
        }*/
        if(!regexhoten.test(hoten)){
                loi_ht.innerHTML="Không hợp lệ!";
                checkloi=false;
        }
    }

     //sdt
    if(sdt==""){
        loi_sdt.style.display = "block";
        loi_sdt.innerHTML="* Chưa nhập";
        checkloi=false;
    }
    else {
        loi_sdt.innerHTML = "";
        regexsdt = /^[0][0-9]{9}$/;
        if(!regexsdt.test(sdt)){
            loi_sdt.innerHTML="Sai định dạng!";
            checkloi=false;
        }
        /*if (sdt.charAt(0) != "0") {
            loi_sdt.innerHTML = "* Bắt đầu bằng số 0";
            checkloi = false;
        }
        if (sdt.length != 10) {

            loi_sdt.innerHTML = "* Phải có 10 số";
            checkloi = false;
        }
        for (var i = 0; i < sdt.length; i++) {
            if (isNaN(sdt.charAt(i))) {
                loi_sdt.innerHTML = "* Không chứa chữ cái";
                checkloi = false;
            }
        }*/
    }

    //pass
    if(pass==""){
        loi_pass.style.display = "block";
        loi_pass.innerHTML="* Chưa nhập";
        checkloi=false;
    }
    else{
        loi_pass.innerHTML="";
        regexpass=/(^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,})$/;
        /*1 số, 1 hoa, 1 thường, >=8 ký tự */
        if(!regexpass.test(pass)){
            loi_pass.innerHTML="Sai định dạng!";
            checkloi=false;
        }
        /*string checkpass= /^[0-9a-zA-Z]$/;*/
        //if(pass=!/^[0-9a-zA-Z]$/){
            //loi_pass.innerHTML="Nhập đúng định dạng";
            //checkloi=false;
            /*if (inputpass = !/^\d{4}$/.test(inputpass)) {
            passcheck.innerHTML = "Mk phải gòm 4 kí tự ";
            checkloi = false*/
        //}
           /* var chuhoa = /[A-Z]/g;
            var chuthuong = /[a-z]/g;
            var number = /[0-9]/g;
            var ktdacbiet = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
            var arraypwd = pass.length;
            if (pass == "") {
                loi_pass.style.display = "block";
                loi_pass.innerHTML = "* Vui long nhap";
                checkloi = false;
            }
            else if (pass.match(chuhoa) == null || pass.match(chuthuong) == null
                || pass.match(number) == null || pass.match(ktdacbiet) == null) {
                loi_pass.innerHTML = "* sai định dạng";
                checkloi = false;
            }
            else if (arraypwd < 7) {
                loi_pass.innerHTML = "* Mật khẩu hơn 7 kí tự";
                checkloi = false;
            }              
            else {
                loi_pass.innerHTML = "ok";
            }*/
    }

    //repass
    if(repass==""){
        loi_repass.style.display = "block";
        loi_repass.innerHTML="* Chưa nhập";
        checkloi=false;
    }
    else{
        loi_repass.innerHTML="";
        if(repass!=pass){
            loi_repass.innerHTML="* Phải giống pass";
        }
    }
     return checkloi;
}