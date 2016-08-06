using System.Collections.Generic;
using System.Web.Http;
using EventReportAsois.Services.SeverityService;

namespace EventReportAsois.ControllersAPI
{
    public class SeverityController : ApiController
    {
        private SeverityService _SeverityService;

        public SeverityController()
        {
            _SeverityService = new SeverityService();
        }

        // GET api/<controller>
        public object Get()
        {
            IEnumerable<object> result = _SeverityService.GetALlSeverities();
            return new
            {
                data = result
            };
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}