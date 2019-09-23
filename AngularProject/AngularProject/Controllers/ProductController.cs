using System;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web;
using System.IO;
using BAL;
using DomainModels.Entities;
using System.Collections.Generic;
using WebAPI.Security;

namespace AngularProject.Controllers
{
    public class ProductController : BaseController
    {
        public ProductController(IUnitOfWork _uow) : base(_uow)
        {

        }

        [Route("api/product/add")]
        public IHttpActionResult Add()
        {
            try
            {

                Product model = new Product();
                if (HttpContext.Current.Request.Files.AllKeys.Any())
                {
                    // Get the uploaded image from the Files collection  
                    var httpPostedFile = HttpContext.Current.Request.Files[0];
                    if (httpPostedFile != null)
                    {
                        //code for saving into folder
                        var fileSavePath = Path.Combine(HttpContext.Current.Server.MapPath("~/ClientApp/src/assets/images"), httpPostedFile.FileName);
                        httpPostedFile.SaveAs(fileSavePath);

                        model.Name = HttpContext.Current.Request.Form["Name"];
                        model.Description = HttpContext.Current.Request.Form["Description"];
                        model.ImagePath = "assets/images/" + httpPostedFile.FileName;
                        model.UnitPrice = Convert.ToDecimal(HttpContext.Current.Request.Form["UnitPrice"]);
                        model.CategoryId = Convert.ToInt32(HttpContext.Current.Request.Form["CategoryId"]);

                        uow.ProductRepo.Add(model);
                        uow.SaveChanges();

                        return Created("/add", model);
                    }
                    else
                    {
                        return StatusCode(HttpStatusCode.NoContent);
                    }
                }
                else
                {
                    return StatusCode(HttpStatusCode.NoContent);
                }
            }
            catch (Exception ex)
            {
                return InternalServerError();
            }
        }

        [Route("api/product/getall")]
        [CustomAuthorizeFilter(Roles = "Admin")]
        public IEnumerable<Product> GetAll()
        {
            return uow.ProductRepo.GetAll().ToList();
        }
    }
}
