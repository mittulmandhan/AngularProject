using BAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace AngularProject.Controllers
{
    [EnableCors("*", "*", "*")]
    public class BaseController : ApiController
    {
        protected IUnitOfWork uow;
        public BaseController(IUnitOfWork _uow)
        {
            uow = _uow;
        }
    }
}
