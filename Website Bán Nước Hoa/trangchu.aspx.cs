using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Website_Bán_Nước_Hoa
{
    public partial class trangchu : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["dangnhap"].ToString() == "1")
            {
                doimk.Visible = true;
                dangnhapdangky.InnerHtml =
                "<span style='color:white;'> Xin chào  " + Session["hoten"].ToString() + "</span>"
              + "<span style='margin-left:5px;'>|</span> <a href='dangxuat.aspx' style='font-size: 16px;'><span class='icon-dx'><i class='fas fa-sign -out-alt'></i></span><span class='dangxuat' style='font-size: 16px;'>Đăng xuất</span></a> ";
                DateTime now = DateTime.Now;
                //   Response.Write("<script>console.log(now.toString())</script>");
                /*System.Diagnostics.Debug.WriteLine(now);*/
            }
            else
            {
                doimk.Visible = false;
                dangnhapdangky.InnerHtml = "<span class='icon-dkdn'><i class='fas fa-user'></i></span> <span class='okk'><a href='dangnhap.aspx' style='font-size: 16px;'>Đăng nhập</a> | <a href='dangky.aspx' style='font-size: 16px;'>Đăng ký</a></span>";
            }

            List<Product> listSP = (List<Product>)Session["giohang"];
            int dem = 0;
            foreach (Product p in listSP)
            {
                dem++;
            }
            cartnumber.InnerHtml = "" + dem;
        }
    }
}