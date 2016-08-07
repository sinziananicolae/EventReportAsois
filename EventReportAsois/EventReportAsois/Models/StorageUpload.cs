using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EventReportAsois.Models
{
    public class StorageUpload
    {
        public System.Guid Id { get; set; }
        public string UserId { get; set; }
        public System.DateTime Timestamp { get; set; }
        public string BlobName { get; set; }
        public long FileSize { get; set; }
    }
}