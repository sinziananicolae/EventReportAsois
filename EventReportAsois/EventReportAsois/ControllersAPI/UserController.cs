using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using EventReportAsois.Services.UserService;

namespace EventReport.ControllersAPI
{
    public class UserController : ApiController
    {
        private UserService _UserService;

        public UserController()
        {
            _UserService = new UserService();
        }

        // GET api/<controller>
        public IEnumerable<Object> Get()
        {
            return _UserService.GetAllUsers();
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