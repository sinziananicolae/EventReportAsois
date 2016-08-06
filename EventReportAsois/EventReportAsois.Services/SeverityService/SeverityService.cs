using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using EventReportAsois.Data.Database;

namespace EventReport.Services.SeverityService
{
    public class SeverityService
    {
        private EventReportEntities _DbEntities;

        public SeverityService()
        {
            _DbEntities = new EventReportEntities();
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
