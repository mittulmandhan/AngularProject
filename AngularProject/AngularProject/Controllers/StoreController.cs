using BAL;
using DomainModels.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AngularProject.Controllers
{
    public class StoreController : BaseController
    {
        public StoreController(IUnitOfWork _uow) : base(_uow)
        {

        }
        public int SaveCart(Cart cart)
        {
            return uow.OrderRepo.SaveCart(cart);
        }

        public IEnumerable<Product> GetProducts()
        {
            return uow.ProductRepo.GetAll().ToList();
        }
    }
}
