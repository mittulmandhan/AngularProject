using ApplicationCore;
using BAL.Abstraction;
using DomainModels.Entities;
using DomainModels.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BAL.Implementation
{
    public class AuthenticateRepository : Repository<User>, IAuthenticateRepository
    {
        private DatabaseContext context
        {
            get
            {
                return this.db as DatabaseContext;
            }
        }
        public AuthenticateRepository(DbContext _db)
        {
            this.db = _db;
        }

        public UserModel ValidateUser(string Username, string Password)
        {
            User data = context.Users.Include("Roles").Where(u => u.Username == Username && u.Password == Password).FirstOrDefault();
            if (data != null)
            {
                UserModel user = new UserModel();

                user.UserId = data.UserId;
                user.Name = data.Name;
                user.Roles = data.Roles.Select(r => r.Name).ToArray();
                user.Username = data.Username;
                user.Token = data.Username + ":" + data.Password;
                return user;
            }
            else
            {
                return null;
            }
        }

        public Role FindRole(string Name)
        {
            return context.Roles.Where(r => r.Name == Name).FirstOrDefault();
        }
    }
}
