<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="dangnhap.aspx.cs" Inherits="Website_Bán_Nước_Hoa.dangnhap" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Đăng nhập</title>
    <link href="css/dangnhap.css" rel="stylesheet" />
</head>
<body>
    <form class="form_login" runat="server" method="post" onsubmit="return checkdangnhap()">
       <div class="content_main">
           <h2 class="title">Đăng nhập</h2>
           <div class="content">
                <div class="content_input">
                    <span id="loi" name="loi" runat="server"></span>
                    <input id="email" name="email" placeholder="Email" value="" runat="server" />
                    <span id="loi_email"></span>
                    <input type="password" id="pass" name="pass" placeholder="Mật khẩu" value="" runat="server" />
                    <span id="loi_pass"></span>
                </div>
                <div class="moved_on">
                    <span class="right">Chưa có tài khoản? <a href="dangky.aspx">Đăng ký ngay</a></span>
                </div>
                <input type="submit" name="dangnhap" id="dangnhapp" class="inpsubmit" value="Đăng nhập" runat="server"/>
        </div>
           <br />
           <div class="notice_policy">Chúng tôi không sử dụng thông tin của bạn với bất kỳ mục đích nào. Bằng cách đăng nhập hoặc đăng ký, bạn đồng ý với <a style="color: #0495ba; border-bottom: 2px solid; text-decoration: none !important;" target="_blank" href="https://parfumerie.vn/chinh-sach-bao-mat-thong-tin">Chính sách quy định của Amelinda</a></div>
       </div> 
    </form>
    <script src="js/dangnhap.js"></script>
</body>
</html>
