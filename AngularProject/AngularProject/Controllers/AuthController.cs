using BAL;
using DomainModels.Entities;
using DomainModels.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AngularProject.Controllers
{
    public class AuthController : BaseController
    {
        public AuthController(IUnitOfWork _uow) : base(_uow)
        {

        }

        [HttpPost]
        public UserModel ValidateUser(string Username, string Password)
        {
            return uow.AuthenticateRepo.ValidateUser(Username, Password);
        }

        [HttpPost]
        public IHttpActionResult RegisterUser(UserModel model)
        {
            try
            {
                User user = new User();
                user.Name = model.Name;
                user.Password = model.Password;
                user.Username = model.Username;
                user.ContactNo = model.ContactNo;
                user.CreatedDate = DateTime.Now;

                Role r1 = uow.AuthenticateRepo.FindRole("User");
                user.Roles.Add(r1);
                uow.SaveChanges();

                return Ok(user);
            }
            catch (Exception ex)
            {
                return InternalServerError();
            }
            
        }
    }
}
