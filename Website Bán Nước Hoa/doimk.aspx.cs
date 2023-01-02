using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Website_Bán_Nước_Hoa
{
    public partial class doimk : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            List<User> danhsach;
            danhsach = (List<User>)Application["danhsach_us"];
            string passold = Request.Form["pass"];
            string passnew = Request.Form["passnew"];
            if (Request.Form["doimk"] == "Đổi mật khẩu")
            {
                foreach (User us in danhsach)
                {
                    if (Convert.ToString(Session["email"]) == us.Email)
                    {
                        us.Pass = passnew;
                        /*Session["dangnhap"] = 0;
                        Session.Remove("email");
                        Session.Remove("hoten");
                        Session.Remove("pass");
                        Session.Abandon();
                        Response.Redirect("dangnhap.aspx");*/
                        Response.Redirect("trangchu.aspx");
                    }
                }
            }
        }
    }
}