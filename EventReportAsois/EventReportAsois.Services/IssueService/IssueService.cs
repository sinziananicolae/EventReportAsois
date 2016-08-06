using System;
using System.Collections.Generic;
using System.Linq;
using EventReportAsois.Data.Database;

namespace EventReportAsois.Services.IssueService
{
    public class IssueService
    {
        private EventReportDbEntities _DbEntities;

        public IssueService()
        {
            _DbEntities = new EventReportDbEntities();
        }

        public IEnumerable<object> GetAllIssues()
        {
            return _DbEntities.Issues.ToList().Select(f => new
            {
                f.Id,
                f.Title,
                Category = new
                {
                    f.IssueCategory.Id,
                    f.IssueCategory.Name
                },
                Subcategory = f.SubcategoryId != null ? new
                {
                    f.IssueSubcategory.Id,
                    f.IssueSubcategory.Name,
                    f.IssueSubcategory.CategoryId
                } : null,
                Status = new
                {
                    f.Status.Id,
                    f.Status.Name
                },
                Severity = new
                {
                    f.Severity.Id,
                    f.Severity.Name
                },
                f.Address,
                f.Description,
                f.MapLat,
                f.MapLng,
                f.TimeStamp,
                f.ViewsNo,
                f.VotesNo,
                f.Image
            });
        }

        public object GetIssueById(int id)
        {
            return _DbEntities.Issues.ToList().Select(f => new
            {
                f.Id,
                f.Title,
                Category = new
                {
                    f.IssueCategory.Id,
                    f.IssueCategory.Name
                },
                Subcategory = f.SubcategoryId != null ? new
                {
                    f.IssueSubcategory.Id,
                    f.IssueSubcategory.Name,
                    f.IssueSubcategory.CategoryId
                } : null,
                Status = new
                {
                    f.Status.Id,
                    f.Status.Name
                },
                Severity = new
                {
                    f.Severity.Id,
                    f.Severity.Name
                },
                f.Address,
                f.Description,
                f.MapLat,
                f.MapLng,
                f.TimeStamp,
                f.ViewsNo,
                f.VotesNo
            }).Where(f => f.Id == id);
        }

        public object CreateIssue(EventReportAsois.Data.Database.Issue issue)
        {

            if (issue.Title == null || issue.MapLat == null ||
                issue.MapLng == null || issue.SeverityId == 0 || issue.CategoryId == 0)
                return new
                {
                    success = false,
                    message = "Field missing"
                };

            Status defaultStatus = _DbEntities.Statuses.FirstOrDefault(f => f.Name == "Open");
            issue.StatusId = defaultStatus.Id;
            issue.TimeStamp = DateTime.Now;
            issue.VotesNo = 0;
            issue.ViewsNo = 0;

            _DbEntities.Issues.Add(issue);
            _DbEntities.SaveChanges();

            #region SendEmail
            //MailMessage mail = new MailMessage("event.report.office@gmail.com", "event.report.office@gmail.com");
            //mail.Subject = "[Event Report] Issue #" + issue.Id + " has been reported!";
            //mail.Body = "Title: " + issue.Title + "<br/> Description: " + issue.Description;

            //SmtpClient client = new System.Net.Mail.SmtpClient
            //{
            //    Host = "smtp.gmail.com",
            //    Port = 587,
            //    EnableSsl = true,
            //    UseDefaultCredentials = false,
            //    DeliveryMethod = System.Net.Mail.SmtpDeliveryMethod.Network,
            //    Credentials = new System.Net.NetworkCredential("event.report.office@gmail.com", "Parola12#")
            //};

            //client.Send(mail);
            #endregion

            #region SendSMS
            //string AccountSid = "AC05c157c4db8b4e2548aaa1f4864931e2";
            //string AuthToken = "2a3967ee9bda822e0023a8bc2f7e6dc0";

            //var twilio = new TwilioRestClient(AccountSid, AuthToken);
            //var message = twilio.SendMessage("+17732957889", "+40740875808", "A new issue has been registered", "");
            #endregion

            return new
            {
                success = true,
                message = "Success",
                data = new
                {
                    Id = issue.Id
                }
            };
        }

        //public object SaveImage(int id, HttpPostedFileBase image)
        //{
        //    var currentIssue = _DbEntities.Issues.FirstOrDefault(f => f.Id == id);

        //    currentIssue.Image = new byte[image.ContentLength];
        //    image.InputStream.Read(currentIssue.Image, 0, image.ContentLength);
        //    _DbEntities.SaveChanges();

        //    return new
        //    {
        //        success = true,
        //        message = "Success"
        //    };
        //}

        public object UpdateIssue(int id, EventReportAsois.Data.Database.Issue issue)
        {
            if (issue.Title == null || issue.Address == null || issue.Description == null || issue.MapLat == null ||
                issue.MapLng == null || issue.SeverityId == 0 || issue.CategoryId == 0 ||
                issue.StatusId == 0)
                return new
                {
                    success = false,
                    message = "Field missing"
                };

            var currentIssue = _DbEntities.Issues.FirstOrDefault(f => f.Id == id);

            if (currentIssue == null)
                return new
                {
                    success = false,
                    message = "There is no record with the Id sent"
                };

            currentIssue.CategoryId = issue.CategoryId;
            currentIssue.Title = issue.Title;
            currentIssue.SubcategoryId = issue.SubcategoryId;
            currentIssue.StatusId = issue.StatusId;
            currentIssue.SeverityId = issue.SeverityId;
            currentIssue.Address = issue.Address;
            currentIssue.Description = issue.Description;
            currentIssue.MapLat = issue.MapLat;
            currentIssue.MapLng = issue.MapLng;

            _DbEntities.SaveChanges();

            return new
            {
                success = true,
                message = "Success"
            };


        }

        public object RemoveIssue(int id)
        {
            var currentIssue = _DbEntities.Issues.FirstOrDefault(f => f.Id == id);

            if (currentIssue == null)
                return new
                {
                    success = false,
                    message = "There is no record with the Id sent"
                };

            _DbEntities.Issues.Remove(currentIssue);
            _DbEntities.SaveChanges();

            return new
            {
                success = true,
                message = "Success"
            };
        }

        public object IncreaseNoViews(int id)
        {
            var currentIssue = _DbEntities.Issues.FirstOrDefault(f => f.Id == id);

            if (currentIssue == null)
                return new
                {
                    success = false,
                    message = "There is no record with the Id sent"
                };

            currentIssue.ViewsNo += 1;

            _DbEntities.SaveChanges();

            return new
            {
                success = true,
                message = "Success"
            };
        }

        public object IncreaseNoVotes(int id)
        {
            var currentIssue = _DbEntities.Issues.FirstOrDefault(f => f.Id == id);

            if (currentIssue == null)
                return new
                {
                    success = false,
                    message = "There is no record with the Id sent"
                };

            currentIssue.VotesNo += 1;

            _DbEntities.SaveChanges();

            return new
            {
                success = true,
                message = "Success"
            };
        }
    }
}
