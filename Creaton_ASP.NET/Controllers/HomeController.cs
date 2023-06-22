using Microsoft.AspNetCore.Mvc;

namespace Creaton_ASP.NET.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
