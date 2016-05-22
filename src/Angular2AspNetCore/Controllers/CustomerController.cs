using Angular2AspNetCore.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Angular2AspNetCore.Controllers
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