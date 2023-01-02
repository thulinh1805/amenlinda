using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Website_Bán_Nước_Hoa
{
    public partial class giohang : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            List<Product> listSP = (List<Product>)Session["giohang"];
            if (Session["dangnhap"].ToString() == "1")
            {
                dangnhapdangky.InnerHtml =
                "<span style='color:white;'> Xin chào,  " + Session["hoten"].ToString() + "</span>"
              + "<span style='margin-left:5px;'>|</span> <a href='dangxuat.aspx' style='font-size: 16px;'><span class='icon-dx'><i class='fas fa-sign -out-alt'></i></span><span class='dangxuat' style='font-size: 16px;'>Đăng xuất</span></a> ";
                DateTime now = DateTime.Now;
                //   Response.Write("<script>console.log(now.toString())</script>");
                System.Diagnostics.Debug.WriteLine(now);
            }
            else
            {
                /* bang.InnerHtml = "<span style='text-align: center; display:block; font-size: 37px; margin:100px 0px;'>Bạn chưa đăng nhập!<a href= 'dangnhap.aspx'> Đăng nhập ngay</a></span>";*/
                /* dangnhapdangky.InnerHtml =
                     "<a href=\"dangnhap.aspx\"><span class=\"icon-dkdn\" ><i class=\"fa fa-user\"></i></span></a>"+"<a href=\"dangnhap.aspx\">Đăng nhập</a><span>|</span>" +
                            "<a href=\"dangky.aspx\">Đăng ký</a> ";
                 Response.Write("<a href='./SignIn.aspx'><span><i class=\"fa fa-user\"></i></span> <span> Đăng Ký/ Đăng Nhập </span></a>");*/
                dangnhapdangky.InnerHtml = "<a href='dangnhap.aspx'><span class='icon-dkdn'><i class='fas fa-user'></i></span> <span class='okk' style='font-size: 16px;'>Đăng nhập | Đăng ký</span></a>";
            }

            string chuoi = "";
            chuoi += "<Table  class='khung' />";
            chuoi += "<thead>";
            chuoi += "<tr class='tieude' >";
            /* chuoi += "<td>STT</td>";*/
            chuoi += "<th>Loại</th>";
            chuoi += "<th> Tên nước hoa</th>";

            chuoi += "<th class='sl'>Số lượng </th>";
            chuoi += "<th>Giá</th>";
            chuoi += "<th>Tác vụ</th>";
            chuoi += "</tr>";
            chuoi += "</thead>";
            /* int i = 1;*/
            decimal tongtien = 0;
            foreach (Product p in listSP)
            {
                tongtien += decimal.Parse(p.Price);
                chuoi += "<tbody>";
                chuoi += "<tr>";
                /*chuoi += "<td>" + (i++) + "</td>";*/
                chuoi += "<td class='anh' id ='anh_sp' runat='server'>";
                chuoi += "<img src = '" + p.Img + "'id='img-feature' alt='" + p.Id + "' />";
                chuoi += "</td>";
                chuoi += "<td class='ten' id ='ten_sp' runat='server' >" + p.Name + "</td>";

                chuoi += "<td id='sl' runat='server' >";
                chuoi += "<p> 1</p> ";
                chuoi += "</td>";
                chuoi += "<td class='gia' id ='gia_sp' runat='server' >" + p.Price + "đ</td>";
                chuoi += "<td>";
                chuoi += "<a href='xulygiohang.aspx?idxoa=" + p.Id + "'>Xóa</a>";
                chuoi += "</td>";
                chuoi += "</tr>";
                chuoi += "</tbody>";
            }
            chuoi += "<th class='thanhtoan' >";
            chuoi += "<div class='tongtien'>";
            chuoi += "<p>Tổng:</p>";
            chuoi += "<span>" + tongtien + "đ</span>";

            chuoi += "</div>";
            chuoi += "<button id='ttoan'  runat='server' onclick='thanhtoan'>Thanh toán</button>";
            chuoi += "</th>";
            chuoi += "</table>";
            bang.InnerHtml = chuoi;

            int dem = 0;
            foreach (Product p in listSP)
            {
                dem++;
            }
            cartnumber.InnerHtml = "" + dem;
        }

        /*protected void thanhtoan(object sender, EventArgs e)
        {
            List<Product> listSP = (List<Product>)Session["giohang"];
            int dem = 0;
            foreach (Product p in listSP)
            {
                dem++;
            }
            if (dem == 0)
            {
                Response.Write("<script>alert('Chưa có sản phẩm nào!!!')</script>");
            }
            else
            {
                listSP.Clear();
                Response.Write("<script>alert('Thanh toán thành công')</script>");
                //Response.Redirect("giohang.aspx");
                string chuoi = "";
                chuoi += "<Table  class='khung' />";
                chuoi += "<thead>";
                chuoi += "<tr class='tieude' >";
                *//* chuoi += "<td>STT</td>";*//*
                chuoi += "<th>Loại</th>";
                chuoi += "<th> Tên nước hoa</th>";

                chuoi += "<th class='sl'>Số lượng </th>";
                chuoi += "<th>Giá</th>";
                chuoi += "<th>Tác vụ</th>";
                chuoi += "</tr>";
                chuoi += "</thead>";
                *//* int i = 1;*//*
                decimal tongtien = 0;
                foreach (Product p in listSP)
                {
                    tongtien += decimal.Parse(p.Price);
                    chuoi += "<tbody>";
                    chuoi += "<tr>";
                    *//*chuoi += "<td>" + (i++) + "</td>";*//*
                    chuoi += "<td class='anh' id ='anh_sp' runat='server'>";
                    chuoi += "<img src = '" + p.Img + "'id='img-feature' alt='" + p.Id + "' />";
                    chuoi += "</td>";
                    chuoi += "<td class='ten' id ='ten_sp' runat='server' >" + p.Name + "</td>";

                    chuoi += "<td id='sl' runat='server' >";
                    chuoi += "<p> 1</p> ";
                    chuoi += "</td>";
                    chuoi += "<td class='gia' id ='gia_sp' runat='server' >" + p.Price + "đ</td>";
                    chuoi += "<td>";
                    chuoi += "<a href='xulygiohang.aspx?idxoa=" + p.Id + "'>Xóa</a>";
                    chuoi += "</td>";
                    chuoi += "</tr>";
                    chuoi += "</tbody>";
                }
                chuoi += "<th class='thanhtoan' >";
                chuoi += "<div class='tongtien'>";
                chuoi += "<p>Tổng:</p>";
                chuoi += "<span>" + tongtien + "đ</span>";

                chuoi += "</div>";
                *//*chuoi += "<button id='ttoan'  runat='server' onclick='thanhtoan'>Thanh toán</button>";*//*
                chuoi += "</th>";
                chuoi += "</table>";
                bang.InnerHtml = chuoi;
                cartnumber.InnerHtml = "0";
            }
        }*/
    }
}