using Angular2Practice.Models;
using Microsoft.AspNet.Mvc;
using System.Collections.Generic;

namespace Angular2Practice.Controllers
{
    [Route("api/[controller]")]
    public class CustomerController : Controller
    {
        [HttpGet]
        public IEnumerable<Customer> Get()
        {
            return new List<Customer>()
            {
                new Customer { Id = 1, FirstName = "John", LastName = "Smith" },
                new Customer { Id = 2, FirstName = "Alex", LastName = "Alexander" },
                new Customer { Id = 3, FirstName = "Wanda", LastName = "Maximoff" }
            };
        }
    }
}
