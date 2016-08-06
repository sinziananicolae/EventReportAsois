using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using EventReportAsois.Data.Database;

namespace EventReportAsois.Services.SeverityService
{
    public class SeverityService
    {
        private EventReportDbEntities _DbEntities;

        public SeverityService()
        {
            _DbEntities = new EventReportDbEntities();
        }

        public IEnumerable<object> GetALlSeverities()
        {
            return _DbEntities.Severities.ToList().Select(f =>
                new
                {
                    f.Id,
                    f.Name
                });
        }
    }
}
