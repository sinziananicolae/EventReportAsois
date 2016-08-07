using System;
using System.Collections.Generic;
using System.Drawing.Imaging;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventReportAsois.Services.Helpers
{
    public class Helpers
    {
        public static String ConstructUniqueBlobName(String name)
        {
            if (!String.IsNullOrEmpty(name))
            {
                return String.Format("{0}/{1}", Guid.NewGuid().ToString().Replace("-", ""), name.Split("/".ToCharArray()).Last());
            }
            return null;
        }

        public static String ReplaceFileExtension(String filename, String newExtension)
        {
            if (String.IsNullOrEmpty(filename))
                return null;

            var oldExtension = GetFileExtension(filename);
            return filename.Substring(0, filename.Length - oldExtension.Length) + newExtension;
        }

        public static String GetFileExtension(String filename)
        {
            if (String.IsNullOrEmpty(filename))
                throw new ArgumentNullException("filename");

            if (!filename.Contains('.'))
                return "";

            return "." + filename.Split(".".ToCharArray()).Last().ToLower();
        }

        public static String ReplaceCharacters(String initialString, String charactersToReplace, String replaceWith)
        {
            if (initialString == null)
                return null;
            if (charactersToReplace == null || replaceWith == null)
                return initialString;

            //Regex pattern = new Regex("[" + Regex.Escape(charactersToReplace) + "]");
            //return pattern.Replace(initialString, replaceWith);
            //return Regex.Replace(initialString, "[" + Regex.Escape(charactersToReplace) + "]", replaceWith);
            StringBuilder sb = new StringBuilder();
            foreach (char c in initialString)
            {
                if (charactersToReplace.Contains(c))
                {
                    sb.Append(replaceWith);
                }
                else
                {
                    sb.Append(c);
                }
            }
            return sb.ToString();
        }

        public static String GetImageExtension(ImageFormat format)
        {
            return ImageCodecInfo.GetImageEncoders().FirstOrDefault(x => x.FormatID == format.Guid).FilenameExtension.Split(";".ToCharArray()).FirstOrDefault().TrimStart("*".ToCharArray()).ToLower();
        }
    }
}
