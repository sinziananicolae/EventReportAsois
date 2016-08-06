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
        private EventReportEntities _DbEntities;

        public UserService()
        {
            _DbEntities = new EventReportEntities();
        }

        public List<UserProfile> GetAllUsers()
        {
            return _DbEntities.UserProfiles.ToList();
        }

    }
}
