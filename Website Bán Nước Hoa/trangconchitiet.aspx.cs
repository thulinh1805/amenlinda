using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Website_Bán_Nước_Hoa
{
    public partial class trangconchitiet : System.Web.UI.Page
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

            string request = Request.QueryString["id"];
            List<Product> dsach = new List<Product>();
            dsach = (List<Product>)Application["product"];
            foreach (Product p in dsach)
            {
                if (p.Id == request)
                {
                    anh_Pro.InnerHtml = "<img src ='" + p.Img + "'id = 'img-feature' alt = '" + p.Id + "' >";
                    tenSP.InnerText = p.Name;
                    priceSP.InnerHtml = p.Price +"đ";
                    motaSP.InnerText = p.Detail;
                }
            }

            List<Product> listSP = (List<Product>)Session["giohang"];
            int dem = 0;
            foreach (Product p in listSP)
            {
                dem++;
            }
            cartnumber.InnerHtml = "" + dem;

        }
        /* protected void btnthem_Click(object sender, EventArgs e)
         {
             string id = ((Button)sender).Text;
             List<Product> arr = (List<Product>)Session["giohang"];
             List<Product> dsach = (List<Product>)Application["product"];
             if (arr.Count == 0)
             {
                 arr = new List<Product>();
             }

             foreach (Product p in dsach)
             {
                 if (p.Id == id)
                 {
                     arr.Add(p);
                     break;
                 }
             }
             Session["giohang"] = arr;
             Page.Response.Redirect(Page.Request.Url.ToString(), true);

         }*/
        protected void btnthem_Click(object sender, EventArgs e)
        {
            string request = Request.QueryString["id"];
            List<Product> listSP = (List<Product>)Session["giohang"];
            List<Product> dsach = (List<Product>)Application["product"];
            if (listSP == null)
            {
                listSP = new List<Product>();
            }
            foreach (Product p in dsach)
            {
                if (p.Id == request)
                {
                    listSP.Add(p);
                    break;

                }
            }
            Response.Redirect(Request.Url.ToString(), true);
        }
    }
}