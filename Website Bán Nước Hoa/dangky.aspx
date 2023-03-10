<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="dangky.aspx.cs" Inherits="Website_Bán_Nước_Hoa.dangky" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Đăng ký</title>
    <link href="css/dangky.css" rel="stylesheet" />
    <script src="js/dangky.js"></script>
</head>
<body>
    <form class="form_register" runat="server" method="post" onsubmit="return checkdangky()">
       <div class="content_main">
           <h2 class="title">Đăng ký</h2>
           <div class="content">
                <div class="content_input">
                    <input id="email" name="email" placeholder="Email" value="" runat="server" />
                    <span id="loi_email"></span>
                    <input id="hoten" name="hoten" placeholder="Tên người dùng" value="" runat="server" />
                    <span id="loi_ht"></span>
                    <input id="sdt" name="sdt" placeholder="Số điện thoại" value="" runat="server" />
                    <span id="loi_sdt"></span>
                    <input type="password" id="pass" name="pass" placeholder="Mật khẩu" value="" runat="server" />
                    <span id="loi_pass"></span>
                    <input type="password" id="repass" name="repass" placeholder="Nhập lại mật khẩu" value="" runat="server" />
                    <span id="loi_repass">ok</span>
                </div>
                <div class="moved_on">
                    <span class="right">Đã có tài khoản? <a href="dangnhap.aspx">Đăng nhập ngay</a></span>
                </div>
                <input type="submit" name="dangky" class="inpsubmit" value="Đăng ký"/>
        </div>
           <br />
           <div class="notice_policy">Chúng tôi không sử dụng thông tin của bạn với bất kỳ mục đích nào. Bằng cách đăng nhập hoặc đăng ký, bạn đồng ý với <a style="color: #0495ba; border-bottom: 2px solid; text-decoration: none !important;" target="_blank" href="https://parfumerie.vn/chinh-sach-bao-mat-thong-tin">Chính sách quy định của Amenlinda</a></div>
       </div> 
    </form>
    <script src="js/dangky.js"></script>
    <script>
        function check(){
    sothich= document.getElementById("sothich");
    loi_check= document.getElementById("loi_check");
            if(sothich.checked=false){
    loi_check.style.display = "block";
        loi_check.innerHTML="* Chưa tích";
        checkloi=false;
        }
        else if(sothich.checked=true){
        loi_check.innerHTML="";
    }
    }
    </script>
<%--    <script src="js/dangkyy.js"></script>--%>
</body>
</html>
