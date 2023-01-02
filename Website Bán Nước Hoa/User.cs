using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Website_Bán_Nước_Hoa
{
    public class User
    {
        string email;
        string hoten;
        string pass;
        public string Email
        {
            get { return email; }
            set { email = value; }
        }

        public string HoTen
        {
            get { return hoten; }
            set { hoten = value; }
        }

        public string Pass
        {
            get { return pass; }
            set { pass = value; }
        }
    }
}