using Microsoft.AspNetCore.Mvc;

namespace Angular2AspNetCore.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}