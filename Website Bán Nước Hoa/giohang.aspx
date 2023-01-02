﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="giohang.aspx.cs" Inherits="Website_Bán_Nước_Hoa.giohang" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Giỏ hàng</title>
    <link href="css/giohang.css" rel="stylesheet" />
    <link href="css/respon.css" rel="stylesheet" />
    <link href="css/nam.css" rel="stylesheet" />
    <link href="font/fontawesome-free-6.1.1/css/all.min.css" rel="stylesheet" />
</head>
<body>
    <!-- Header -->
    <header class="header">      
        <div class="grid wide header-container">
            <div class="row" style="display: flex;">
                <div class="col c-3 l-3" style="margin-top: 35px;">
                    <div class="search-box">
                        <input type="text" placeholder="Tìm Kiếm..."/>
                        <div class="search--icon">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div> 
                        <!--  <form action="" class="form">
                            <input type="search" placeholder="Tìm kiếm sản phẩm..." style="border: 1px solid #eee;
                            border-radius: 3px !important;
                            padding: 0 10px;
                            color: #959595;height: 40px;">
                            <span>
                            <button style="color: #959595;
                            background-color: transparent;
                            position: absolute;
                            font-size: 14px;
                            height: 40px;
                            line-height: 40px;
                            text-align: center;padding: 0;
                            width: 45px;
                            background: transparent;display: inline-block;
                            text-align: center;
                            white-space: nowrap;
                            outline: none !important;
                            cursor: pointer;
                            border: none;
                            font-weight: 400;
                            border-radius: 0;
                            letter-spacing: 0;transition: background-color 0.1s ease-in;">
                            <i class="fa fa-search"></i>
                            </button>
                            </span>
                        </form>--> 
                    </div>
                    <div class="col c-6 l-6 logo" >
                        <h1 class="headerlogo">AMENLINDA</h1>
                    </div>
                   <div class="col c-3 l-3 " style="margin-top: 41px;">
                        <div class="header-dndk">
                        <!-- Dang Nhap -->
                            <div class="dkdn row">
                                <div id="dangnhapdangky" runat="server">  
                                </div>
                            </div>

                        <!-- Gio Hang -->
                            <div class="cart">
                                <a href="giohang.aspx"><i class="icon-cart fa-solid fa-cart-plus"></i></a>
                                <div class="cart-number list-parent" >
                                    <span class="cart--listnumber" id="cartnumber" runat="server">0</span>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="nav">
            <nav>
                <ul id="menu1">
                    <li>
                        <a href="trangchu.aspx">TRANG CHỦ</a>
                    </li>
                    <li>
                        <a href="#">GIỚI THIỆU</a>
                    </li>
                    <li>
                        <span class="drop--down"> <a href="trangchu.aspx">NƯỚC HOA</a></span>
                        <ul class="menu2">
                            <div class="menu2--dropdown">
                                <li class="menu2-list">
                                    <a href="trangcon.aspx?idtype=1">Nước hoa Nam</a>
                                </li>
                                <li>
                                    <a href="trangcon.aspx?idtype=2">Nước hoa Nữ</a>
                                </li>
                                <li>
                                    <a href="trangcon.aspx?idtype=3">Nước hoa Unisex</a>
                                </li>
                            </div>
                        </ul>
                     </li>
                     <li>
                         <a href="#">LIÊN HỆ</a>
                     </li>
                </ul>
            </nav>
        </div>
    </header>
    
    <%--<nav>
            <ul id="menu1">
                <li>
                    <a href="trangchu.aspx">TRANG CHỦ</a>
                </li>
                <li>
                    <a href="#">GIỚI THIỆU</a>
                </li>
                <li>
                   <span class="drop--down"> <a href="#">NƯỚC HOA</a></span>
                    <ul class="menu2">
                      <div class="menu2--dropdown">
                        <li class="menu2-list">
                            <a href="/trangcon1.aspx">Nước hoa Nam</a>
                         </li>
                         <li>
                             <a href="/trangcon2.aspx">Nước hoa Nữ</a>
                         </li>
                         <li>
                             <a href="/trangcon3.aspx">Nước hoa Unisex</a>
                         </li>
                      </div>
                    </ul>
                </li>
                <li>
                    <a href="#">LIÊN HỆ</a>
                </li>
            </ul>
       </nav>--%>

    <!--content----->
    <div class="td"><h3><u>Giỏ Hàng Của Bạn</u></h3></div>
    <form id="form1" runat="server">
         <div id="bang" name="bang" runat="server">
        </div>
    <%--<div class="ghtrong" ><center> <image src="anh/giohangtrong.png" alt="" width="40%"></center></div>--%>
   <%-- <div class="giohang">
   <table class="khung">
       <thead>
     <tr class="tieude">
        <th >Loại </th>
         <th > Tên nước hoa</th>
         <th >Giá</th>
         <th class="sl">Số lượng</th>
        
         <th> Xóa</th>
      
     </tr>
       </thead>
       <tbody>
 <%--<tr>
                                    <td>
                                         <div class="anh" id="anh_sp" runat="server">
                        <!--<img src="anh/NuochoaNu/anh1.jpg" id="anhSP"alt="Dolce & Gabbana Light Blue Forever" class="content_left--img" />
                   -->
                            </div></td>
                                    <td><p class="ten" id="ten_sp" runat="server"></p></td>
                                    
                                    <td><p class="gia" id="gia_sp" runat="server"></p></td>
                                     <td ><div id="soluong"  runat="server"></div></td>
                                    <td>
                                        <div id="btnxoa"  runat="server">
                                        
                                         </div>   
                                   
                                </tr>
           <div id="bang" name="bang" runat="server">
        </div>
                            </tbody>  

    </table>
        </div>--%>
  
   
   <%--<div class="ttoan" style="direction:rtl; margin: 10px 320px 70px 0px;">
       <button name="tt"  value="" runat="server" onserverclick="thanhtoan"><h2>Thanh toán</h2></button>
   </div>--%>
        </form>


    
    <!-- Footer  -->
        <footer class="footer">
            <div class="grid wide footer-container">
                <div class="row" style="display: flex;" >
                    <div class="col c-4 l-4 m-12" >
                        <div class="noi-dung about">
                            <h2>Về Chúng Tôi</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus odit magni excepturi, animi in porro laboriosam a ipsum aliquam expedita tempora omnis eos nam consequatur obcaecati tenetur eveniet? Id, qui!</p>
                            <ul class="social-icon">
                                <li><a href="#"><i class="social_icon-i fa-brands fa-facebook"></i></a></li>
                                <li><a href="#"><i class="social_icon-i fa-brands fa-twitter"></i></a></li>
                                <li><a href="#"><i class="social_icon-i fa-brands fa-instagram"></i></a></li>
                                <li><a href="#"><i class="social_icon-i fa-brands fa-youtube"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col c-4 l-4 m-12">
                        <div class="noi-dung links" style="margin-left:20px;">
                            <h2>Đường Dẫn</h2>
                            <ul>
                                <li><a href="#"><i class="fa-solid fa-angles-right"></i>Trang Chủ</a></li>
                                <li><a href="#"><i class="fa-solid fa-angles-right"></i>Về Chúng Tôi</a></li>
                                <li><a href="#"><i class="fa-solid fa-angles-right"></i>Thông Tin Liên Lạc</a></li>
                                <li><a href="#"><i class="fa-solid fa-angles-right"></i>Dịch Vụ</a></li>
                                <li><a href="#"><i class="fa-solid fa-angles-right"></i>Điều Kiện Chính Sách</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col c-4 l-4 m-12">
                        <div class="noi-dung contact">
                            <h2>Thông Tin Liên Hệ</h2>
                            <ul class="info">
                                <li>
                                    <i class="fa fa-map-marker"></i>
                                    <span class="address">96 Định Công  <br />
                                        Hoàng Mai, Thành Phố Hà Nội<br />
                                        Việt Nam
                                    </span>
                                </li>
    
                                <li>
                                    <i class="fa fa-phone"></i>
                                    <span class="address">+84 971 301 138 <br/>
                                                         +84 971 520 520</span> 
                                </li>
    
                                <li>
                                     <i class="fa fa-envelope"></i> <span class="address">diachiemail@gmail.com</span>
                               </li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
           </footer>
         <script>
        //    var item=document.querySelector(".nuochoanam");
        //    var price=document.querySelector(".nuochoanam-price");
        //    var icon=document.querySelector(".icon")
        //    icon.style.display="none";
        //    item.onmouseover=function(){
        //         price.style.display="none";
        //         icon.style.display="block";
        //    }
        //    item.onmouseout=function(){
        //         price.style.display="block";
        //         icon.style.display="none";
        //    }
         </script> 
       <!--
            <script>
           var star=document.querySelector(".star");
           var price=document.querySelector(".price");
           price.style.display="none";
           star.onmouseover=function(){
                star.style.display="none";
                price.style.display="block";
           }
           star.onmouseout=function(){
                star.style.display="block";
                price.style.display="none";
           }
    
       </script>
       -->
</body>
</html>
