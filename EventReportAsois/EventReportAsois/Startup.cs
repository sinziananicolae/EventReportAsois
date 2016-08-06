using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(EventReportAsois.Startup))]
namespace EventReportAsois
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
