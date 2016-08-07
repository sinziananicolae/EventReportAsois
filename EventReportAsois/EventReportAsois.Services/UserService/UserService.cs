using EventReportAsois.Data.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventReportAsois.Services.UserService
{
    public class UserService
    {
        private EventReportDbEntities _DbEntities;

        public UserService()
        {
            _DbEntities = new EventReportDbEntities();
        }

        public List<UserProfile> GetAllUsers()
        {
            return _DbEntities.UserProfiles.ToList();
        }

        public object RegisterUser(UserProfile userProfile) {
            if (userProfile.UserName == null || userProfile.UserId == null ||
                userProfile.Email == null)
                return new
                {
                    success = false,
                    message = "Field missing"
                };
            
            _DbEntities.UserProfiles.Add(userProfile);
            _DbEntities.SaveChanges();

            return new
            {
                success = true,
                message = "Success",
                data = new
                {
                    Id = userProfile.Id
                }
            };
        }

    }
}
