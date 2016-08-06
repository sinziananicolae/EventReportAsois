using System.Collections.Generic;
using System.Web.Http;
using EventReportAsois.Data.Database;
using Microsoft.AspNet.Identity;
using EventReportAsois.Services.IssueService;

namespace EventReportAsois.ControllersAPI
{
    public class IssueController : ApiController
    {
        private IssueService _IssueService;

        public IssueController()
        {
            _IssueService = new IssueService();
        }


        // GET api/<controller>
        public object Get()
        {
            IEnumerable<object> result = _IssueService.GetAllIssues();
            return new
            {
                data = result
            };
        }

        // GET api/<controller>/5
        public object Get(int id)
        {
            object response = _IssueService.GetIssueById(id);
            return response;
        }

        // POST api/<controller>
        public object Post(Issue issue)
        {
            var userId = User.Identity.GetUserId();

            if (userId == null) return new
            {
                success = false,
                message = "You are not logged in!"
            };
            issue.UserId = userId;

            var status = _IssueService.CreateIssue(issue);
            return status;
        }

        // PUT api/<controller>/5
        public object Put(int id, [FromBody]Issue issue)
        {
            var status = _IssueService.UpdateIssue(id, issue);
            return status;
        }

        // DELETE api/<controller>/5
        public object Delete(int id)
        {
            var status = _IssueService.RemoveIssue(id);
            return status;
        }

        [HttpGet]
        [System.Web.Http.Route("api/issue/{id}/viewsno")]
        public object IncreaseNoViews(int id)
        {
            var status = _IssueService.IncreaseNoViews(id);
            return status;
        }

        //[HttpPost]
        //public object IncreaseNoVotes(int id)
        //{
        //    var status = _IssueService.IncreaseNoVotes(id);
        //    return status;
        //}
    }
}