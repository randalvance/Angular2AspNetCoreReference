using Angular2Practice.Models;
using Microsoft.AspNet.Mvc;
using System.Collections.Generic;

namespace Angular2Practice.Controllers
{
    [Route("api/[controller]")]
    public class PersonController : Controller
    {
        [HttpGet]
        public IEnumerable<Person> Get()
        {
            return new List<Person>()
            {
                new Person { Id = 1, Name = "John Smith" },
                new Person { Id = 2, Name = "Alex Alexander" },
                new Person { Id = 3, Name = "Wanda Maximoff" }
            };
        }
    }
}
