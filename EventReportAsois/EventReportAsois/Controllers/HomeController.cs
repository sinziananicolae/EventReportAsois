using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using System.IO;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;
using EventReportAsois.Models;
using EventReportAsois.Services.Helpers;
using EventReportAsois.Services.IssueService;
using Microsoft.AspNet.Identity;
using Microsoft.Azure;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;

namespace EventReportAsois.Controllers
{
    public class HomeController : Controller
    {
        private IssueService _IssueService = new IssueService();

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        [HttpPost]
        public void UploadResource(int id)
        {
            JavaScriptSerializer js = new JavaScriptSerializer();
            if (!User.Identity.IsAuthenticated)
            {

            }
            HttpPostedFileBase file = Request.Files[0];

            if (file != null && file.ContentLength > 0)
            {
                var newFilename = Helpers.ConstructUniqueBlobName(
                    Helpers.ReplaceCharacters(
                        Helpers.ReplaceFileExtension(
                            file.FileName,
                            Helpers.GetImageExtension(ImageFormat.Jpeg)
                            ),
                        "{}()[]",
                        "-")
                        );

                // Retrieve storage account from connection string.
                CloudStorageAccount storageAccount = CloudStorageAccount.Parse(CloudConfigurationManager.GetSetting("StorageConnectionString"));

                // Create the blob client.
                CloudBlobClient blobClient = storageAccount.CreateCloudBlobClient();

                // Retrieve reference to a previously created container.
                CloudBlobContainer container = blobClient.GetContainerReference("eventreportimg");

                // Retrieve reference to a blob named "myblob".
                CloudBlockBlob blockBlob = container.GetBlockBlobReference(newFilename);
                blockBlob.Properties.ContentType = file.ContentType;

                file.InputStream.Position = 0;

                blockBlob.UploadFromStream(file.InputStream);

                _IssueService.SaveImage(id, newFilename);
            }
        }
    }
}