using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json.Serialization;

namespace Angular2Practice
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().AddJsonOptions(options =>
            {
                // make json property names camelCase
                options.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            });
        }

        public void Configure(IApplicationBuilder app)
        {
            app.UseIISPlatformHandler();
            app.UseStaticFiles();
            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                routes.MapSpaFallbackRoute("spa-fallback", new { controller = "Home", action = "Index" });
            });
        }

        public static void Main(string[] args) => WebApplication.Run<Startup>(args);
    }
}
