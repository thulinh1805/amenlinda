function check() {
    //ktra fullName
    fullname = document.getElementById("fullName").value;
    loi_fullname = document.getElementById("loi_fullName");
    //checkFName = /^[^\d+]*[\d+]{0}[^\d+]*$/;
    //checkFName = /^([a-zA\- ])+$/;

    checkFName = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/;
    checkloi = true;
    if (fullname == "") {
        loi_fullname.innerHTML = "Không để trống";
        checkloi = false;
    }
    else {
        if (!checkFName.test(fullname)) {
            loi_fullname.innerHTML = "Không hợp lệ";
            checkloi = false;
        }
        else {
            loi_fullname.innerHTML = "Tốt";
        }
    }
    //ktra userName
    username = document.getElementById("userName").value;
    loi_username = document.getElementById("loi_userName");
    if (username == "") {
        loi_username.innerHTML = "Không để trống";
        checkloi = false;
    }
    else {
        loi_username.innerHTML = "Tốt";
    }
    //ktra password
    password = document.getElementById("password").value;
    loi_pass = document.getElementById("loi_passWord");
    if (password == "") {
        loi_pass.innerHTML = "Không để trống";
        checkloi = false;
    }
    else {
        if (password.length <= 5) {
            loi_pass.innerHTML = "Mật khẩu yếu";
            checkloi = false;
        }
        else {
            loi_pass.innerHTML = "Tốt";
        }
    }
    //ktra nhập pass lại
    passwordAgain = document.getElementById("passwordAgain").value;
    loi_passAgain = document.getElementById("loi_passWordAgain");
    if (passwordAgain == "") {
        loi_passAgain.innerHTML = "Không để trống";
        checkloi = false;
    } else {
        if (passwordAgain != password) {
            loi_passAgain.innerHTML = "Bạn nhập chưa đúng";
            checkloi = false;
        }
        else {
            loi_passAgain.innerHTML = "Tốt";
        }
    }
    //ktra đã chọn giới tính chưa
    checkGtinh = document.getElementsByName("gtinh").value;
    gtinhNam = document.getElementById("gtinhNam");
    gtinhNu = document.getElementById("gtinhNu");
    loi_gioiTinh = document.getElementById("loi_gioiTinh");
    if (gtinhNam.checked || gtinhNu.checked) {
        loi_gioiTinh.innerHTML = "";
    }
    else
    {
        loi_gioiTinh.innerHTML = "Phải chọn giới tính";
        checkloi = false;
    }
    //ktra đã chọn sở thích chưa
    
    xemPhim = document.getElementById("xemPhim");
    theThao = document.getElementById("theThao");
    web = document.getElementById("web");
    loi_SoThich = document.getElementById("loi_SoThich");
    if (xemPhim.checked || theThao.checked || web.checked) {
        loi_SoThich.innerHTML = "Tốt";
    }
    else {
        loi_SoThich.innerHTML = "Phải chọn ít nhất 1 sở thích";
        checkloi = false;
    }

    //ktra địa chỉ
    diaChi = document.getElementById("diachi").value;
    loi_DiaChi = document.getElementById("loi_DiaChi");
    if (diaChi == "") {
        loi_DiaChi.innerHTML = "Không để trống";
        checkloi = false;
    } else {
        if (diaChi.length > 150) {
            loi_DiaChi.innerHTML = "Lớn hơn 150 kí tự";
            checkloi = false;
        }
        else {
            loi_DiaChi.innerHTML = "Tốt"
        }
    }

    //ktra tải avatar chưa
    avatar = document.getElementById("avatar");
    loi_avatar = document.getElementById("loi_avatar");
    if (avatar.files.length == 0) {
        loi_avatar.innerHTML = "Chưa tải avatar";
        checkloi = false;
    }
    else {
        loi_avatar.innerHTML = "Tốt";
    }

    //ktra pass có kí tự chữ hoa thường số kí tự đặc biệt
            pass = document.getElementById("passw").value;
            loi_pass = document.getElementById("loi_pass");
            //checkpass = "[a-zA-Z0-9!@#$%^&*]{8,}";
            var chuhoa = /[A-Z]/g;
            var chuthuong = /[a-z]/g;
            var number = /[0-9]/g;
            var ktdacbiet = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
            var arraypwd = pass.length;
            if(pass == ""){
                loi_pass.innerHTML = "Không để trống";
                checkloi = false;
            }
            else if (pass.match(chuhoa) == null || pass.match(chuthuong) == null
                || pass.match(number) == null || pass.match(ktdacbiet) == null) {
                loi_pass.innerHTML = "sai định dạng";
                checkloi = false;
            }
            else if (arraypwd < 7) {
                loi_pass.innerHTML = "Mật khẩu hơn 7 kí tự";
                checkloi = false;
            }              
            else {
                loi_pass.innerHTML = "ok";
                }

    //ktra sđt
    sdt = document.getElementById("sdt").value;
    loi_sdt = document.getElementById("loi_sdt");
    checkloi = true;
    if (sdt.length == 10) {
        if (sdt.charAt(0) == "0") {
            if (!isNaN(sdt)) {
                loi_sdt.innerHTML = "Tốt";
            }
            else {
                loi_sdt.innerHTML = "SĐT phải là số";
                checkloi= false;
            }
        }
        else {
            loi_sdt.innerHTML = "SĐT phải 0 ở đầu"
            checkloi = false;
        }
    }
    else {
        loi_sdt.innerHTML = "Chưa đủ 10 kí tự"
        checkloi= false;
    }
    //ktra email  
    email = document.getElementById("email").value;
    loi_email = document.getElementById("loi_email");
    daucham = email.lastIndexOf(".");
    //letter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (email == "") {
        loi_email.innerHTML = "Email không được để trống";
        checkloi= false;
    }
    else {
        if (email.indexOf("@") >= 0 && (daucham - email.indexOf("@") )>0) {
            loi_email.innerHTML = "Tốt";
        }
        else {
            loi_email.innerHTML = "Email chưa đúng định dạng";
            checkloi =  false;
        }

    }

    //sdt thao
    if (sdt = !/^0[^0]\d{8}$/.test(sdt)) {
            sdt_loi.innerHTML = "Số 0 ở đầu, số t2 khác 0 và có tất cả 10 ký tự ";
            checkloi = false
        } else {
            sdt_loi.innerHTML = "okie";
        }
    return checkloi;
}


/*function checkdulieu() {
    /* Tên:
     * không để trống ""
     * Bắt đầu (a-z) (0-9), dấu gạc dưới hoặc gạch nối, 3-16 ký tự 
     * --> /^[a-z0-9_-]{3,16}$/ 
     * Chỉ gồm ký tự viết hoa, thường, số
     * --> /^[a-zA-Z0-9]+$/
     * */
    fullname = document.getElementById("fullnameDK").value;
    ten_loi = document.getElementById("tenDK_loi");
    checkloi = true;
    if (fullname == "") {
        ten_loi.innerHTML = "Vui lòng điền thông tin";
        checkloi = false;
    } else {
        if (fullname != /^[a-z0-9_-]{3,16}$/.test(fullname)) {
            ten_loi.innerHTML = "kooo";
            checkloi = false;
        } else {
            ten_loi.innerHTML = "ok"
        }
    }

    /* Email:
     * không để trống
     * Phải có ký tự @, Ký tự @ không nằm ở vị trí đầu, Phải có ít nhất một dấu . trong địa chỉ mail
     * Phải có ít nhất 1 ký tự giữa @ và dấu . cuối cùng,
     * có ít nhất một ký tự sau dấu . cuối cùng,
     * Không có khoảng trắng trong địa chỉ mail
     * --> ^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        mysite.ourearth.com [@ không có mặt]
        mysite @ .com.my [tld (Miền cấp cao nhất) không thể bắt đầu bằng dấu chấm "." ]
        @ you.me.net [Không có ký tự nào trước @]
        mysite123@gmail.b [".b" không phải là tld hợp lệ]
        mysite @ .org.org [tld không thể bắt đầu bằng dấu chấm "." ]
        .mysite @ mysite.org [email không được bắt đầu bằng "." ]
        mysite () * @ gmail.com [ở đây biểu thức chính quy chỉ cho phép ký tự, chữ số, dấu gạch dưới và dấu gạch ngang]
        mysite..1234 @ yahoo.com [không được phép có dấu chấm kép]
      */
    var 
    email = document.getElementById("emailDK").value;
    email_loi = document.getElementById("emailDK_loi");
    if (email == "") {
        email_loi.innerHTML = "vui lòng điền thông tin";
        checkloi = false;
    } else {
        if (email == /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            email_loi.innerHTML = "ok";
        } else {
            email_loi.innerHTML = "kooo";
            checkloi = false;
        }
        /*if (email.indexOf("@gmail.com") >= 0) {
            email_loi.innerHTML = "ok";
        } else {
            email_loi.innerHTML = "email không đúng định dạng";
            checkloi = false;
        }*/
    }

    /* Số điện thoại
     * không để trống
     * là số 0-9 : 10 số, bắt đầu bằng 0
     */
    sdt = document.getElementById("sdtDK").value;
    sdt_loi = document.getElementById("sdt_loi");
    if (sdt == "") {
        sdt_loi.innerHTML = "vui lòng điền thông tin";
        checkloi = false;
    } else {
        if (sdt.charAt(0) == "0" && sdt.length == 10) {
            sdt_loi.innerHTML = "ok";
        } else {
            sdt_loi.innerHTML = "Số 0 phải ở đầu và gồm 10 kí tự";
            checkloi = false;
        }
    }

     /* Passwword
     * không để trống
     * Tối thiểu tám ký tự, ít nhất một chữ cái và một số
     * --> ^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$
     * Tối thiểu tám ký tự, ít nhất một chữ cái, một số và một ký tự đặc biệt
     * --> ^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$
     * Tối thiểu tám ký tự, ít nhất một chữ cái viết hoa, một chữ cái viết thường và một số
     * --> ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$
     * Tối thiểu tám ký tự, ít nhất một chữ cái viết hoa, một chữ cái viết thường, một số và một ký tự đặc biệt
     * --> ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$
     * Tối thiểu tám và tối đa 10 ký tự, ít nhất một chữ cái viết hoa, một chữ cái viết thường, một số và một ký tự đặc biệt
     * --> ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$
     * password = document.getElementById("passwordDK").value;
        mk_loi = document.getElementById("mkDK_loi");

        //passwordManh = new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
        const passwordManh = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/;
        passwordTB = new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
        passwordYeu = new RegExp("(?=.{8,}).*", "g");
         */
     
    //password = document.getElementById("passwordDK").value;
    //mk_loi = document.getElementById("mkDK_loi");
    //if (password == "") {
    //    mk_loi.innerHTML = "Vui lòng điền thông tin";
    //    checkloi = false;
    //}
    return checkloi;
}*/