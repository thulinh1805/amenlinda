using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Website_Bán_Nước_Hoa
{
    public partial class dangxuat : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Session["dangnhap"] = 0;
            Session.Remove("email");
            Session.Remove("hoten");
            Session.Remove("pass");
            Session.Abandon();
            Response.Redirect("trangchu.aspx");
            /*if (Session["datetime"] != null)
            {
                DateTime loginTime = (DateTime)Session["datetime"];
                var loginTimeDurationInMinutes = (DateTime.Now - loginTime).Minutes;
                var loginTimeDurationInSeconds = (DateTime.Now - loginTime).Seconds;

                dx.InnerHtml = Application["tg"].ToString() + ": " + loginTimeDurationInMinutes + " Minutes" + loginTimeDurationInSeconds + " Seconds";
            }*/
        }
    }
}