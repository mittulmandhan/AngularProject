﻿using BAL;
using DomainModels.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Web;
using System.Web.Mvc;

namespace AngularProject.Controllers
{
    public class HomeController : Controller
    {
        private IUnitOfWork uow;
        public HomeController()
        {
            uow = new UnitOfWork();
        }
        // GET: Home
        public ActionResult Index()
        {
            //var result = new FilePathResult("~/index.html", "text/html");
            //return result;
            return View();
        }

        [HttpPost]
        public ActionResult PaymentStatus(FormCollection form)
        {
            try
            {
                //string key = "gtKFFx";
                string salt = "eCwWELxi";

                string[] merc_hash_vars_seq;
                string merc_hash_string = string.Empty;
                string merc_hash = string.Empty;
                string order_id = string.Empty;
                string hash_seq = "key|txnid|amount|productinfo|firstname|email|udf1|udf2|udf3|udf4|udf5|udf6|udf7|udf8|udf9|udf10";

                if (form["status"].ToString() == "success" || form["status"].ToString() == "failure")
                {
                    merc_hash_vars_seq = hash_seq.Split('|');
                    Array.Reverse(merc_hash_vars_seq);
                    // merc_hash_string = ConfigurationManager.AppSettings["SALT"] + "|" + form["status"].ToString();

                    merc_hash_string = salt + "|" + form["status"].ToString();

                    foreach (string merc_hash_var in merc_hash_vars_seq)
                    {
                        merc_hash_string += "|";
                        merc_hash_string = merc_hash_string + (form[merc_hash_var] != null ? form[merc_hash_var] : "");
                    }

                    // Response.Write(merc_hash_string);
                    merc_hash = Generatehash512(merc_hash_string).ToLower();

                    if (merc_hash != form["hash"])
                    {
                        // Response.Write("<br/>Hash value did not matched");
                    }
                    else
                    {
                        ViewData["Message"] = "Your Payment Status";

                        TransactionModel model = new TransactionModel();

                        model.CartId = Convert.ToInt32(form["udf1"]);
                        model.Amount = Convert.ToDecimal(form["amount"]);
                        model.PaymentType = "PayUMoney";
                        model.Status = form["status"];
                        model.Tran_Id = form["txnid"];

                        model.CreatedDate = DateTime.Now;
                        model.UpdatedDate = DateTime.Now;
                        model.Name = form["firstname"];

                        try
                        {
                            uow.OrderRepo.PlaceOrder(model);
                            uow.SaveChanges();
                        }
                        catch (Exception ex)
                        {
                            ViewData["Message"] = "Internal Error!";
                        }

                        ReceiptModel obj = new ReceiptModel();
                        obj.Name = form["firstname"];
                        obj.Email = form["email"];
                        obj.TransactionId = form["txnid"];
                        obj.Amount = form["amount"];
                        obj.Status = form["status"];

                        ViewData["Message"] = "Your order status!";
                        return View(obj);
                    }
                }
                else
                {

                    //  Response.Write("Hash value did not matched");
                }
            }
            catch (Exception ex)
            {
                // Response.Write("<span style='color:red'>" + ex.Message + "</span>");
            }
            return View();
        }

        public string Generatehash512(string text)
        {
            byte[] message = Encoding.UTF8.GetBytes(text);

            UnicodeEncoding UE = new UnicodeEncoding();
            byte[] hashValue;
            SHA512Managed hashString = new SHA512Managed();
            string hex = "";
            hashValue = hashString.ComputeHash(message);
            foreach (byte x in hashValue)
            {
                hex += String.Format("{0:x2}", x);
            }
            return hex;
        }

    }
}