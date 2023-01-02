using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Website_Bán_Nước_Hoa
{
    public partial class dangnhap : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Request.Form["email"] != null)
            {
                int demsl=0;
                List<User> danhsach;
                danhsach = (List<User>)Application["danhsach_us"];
                string email = Request.Form["email"];
                string hoten = Request.Form["hoten"];
                string pass = Request.Form["pass"];

                foreach (User us in danhsach)
                {
                    //demsl++;
                    if (us.Email == email && us.Pass == pass)
                    {
                        Session["dangnhap"] = 1;
                        //thời gian khi user đăng nhập
                        Session["datetime"] = DateTime.Now;
                        Session["email"] = us.Email;
                        //Khởi tạo application kiểm tra thời gian chạy của user
                        Application["tg"] = us.Email;
                        Session["hoten"] = us.HoTen;
                        Session["pass"] = us.Pass;
                        Response.Redirect("trangchu.aspx");
                    }
                    else if (us.Email != email && us.Pass != pass)
                    {
                        loi.InnerHtml = "Tài khoản không tồn tại!";
                    }
                    else if (us.Email == email && us.Pass != pass)
                    {
                        loi.InnerHtml = "Vui lòng nhập đúng mật khẩu!";
                        if (Session["dem"] == null)
                        {
                            Session["dem"] = 1;
                        }
                        else
                        {
                            Session["dem"] = (int)Session["dem"] + 1;
                            loi.InnerHtml = "Nhập sai lần thứ " + Session["dem"] + "!";
                        }
                        if ((int)Session["dem"] == 5)
                        {
                            dangnhapp.Visible = false;
                            loi.InnerHtml = "Nhập sai 5 lần, bạn không được đăng nhập!";
                            Session["dem"] = null;
                        }

                    }
                }
                //loi.InnerHtml = "Số user là: " + demsl;
            }
        }
    }
}