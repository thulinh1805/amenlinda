using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Website_Bán_Nước_Hoa
{
    public partial class xulytimkiem : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
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
                /* dangnhapdangky.InnerHtml =
                     "<a href=\"dangnhap.aspx\"><span class=\"icon-dkdn\" ><i class=\"fa fa-user\"></i></span></a>"+"<a href=\"dangnhap.aspx\">Đăng nhập</a><span>|</span>" +
                            "<a href=\"dangky.aspx\">Đăng ký</a> ";
                 Response.Write("<a href='./SignIn.aspx'><span><i class=\"fa fa-user\"></i></span> <span> Đăng Ký/ Đăng Nhập </span></a>");*/
                dangnhapdangky.InnerHtml = "<a href='dangnhap.aspx'><span class='icon-dkdn'><i class='fas fa-user'></i></span> <span class='okk' style='font-size: 16px;'>Đăng nhập | Đăng ký</span></a>";
            }

            List<Product> listSP = (List<Product>)Application["product"];
            
            if (Request.QueryString["timkiem"] != "") {
                string keysearch = Request.QueryString["timkiem"];
                string s = "";
                
                foreach (Product p in listSP)
                {
                if (p.Name.ToLower().Contains(keysearch.ToLower()))
                {
                    s += "<div class='col l-2-4 c-6 m-4 nuochoanam'>";

                    s += "<div class='nuochoanam-img'>";
                    s += "<a href='trangconchitiet.aspx?id=" + p.Id + "' width='100%'>";
                    s += "<img src='" + p.Img + "' alt='' width: 270px;/>";
                    s += "</a>";
                    s += "</div>";

                    s += "<div class='nuochoanam-infor'>";
                    s += "<a href='trangconchitiet.aspx?id=" + p.Id + "'>";
                    s += "<p class='line-clamp' >" + p.Name + "</p>";

                    s += "</a>";
                    s += "<div class='nuochoanam-price' >" + p.Price + "đ</div>";
                    s += "</div>";

                    s += "<div class='icon'>";
                    s += "<button title = 'Chọn sản phẩm' type = 'button' >";
                    s += "<i class='fa fa-eye'></i>";
                    s += "</button>";
                    s += "</div>";

                    s += "</div>";


                }
                productmale.InnerHtml = s;
            }
            }

            List<Product> listGH = (List<Product>)Session["giohang"];
            int dem = 0;
            foreach (Product p in listGH)
            {
                dem++;
            }
            cartnumber.InnerHtml = "" + dem;
        }
    }
}