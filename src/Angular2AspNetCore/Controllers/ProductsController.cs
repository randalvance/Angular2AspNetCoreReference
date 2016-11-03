using Angular2AspNetCore.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace Angular2AspNetCore.Controllers
{
    [Route("api/[controller]")]
    public class ProductController : Controller
    {
        private IEnumerable<Product> products = new List<Product>
            {
                new Product { Id = 1, Name = "Zap!", Description = "Restore Surfaces Like a Professional", Stock = 10, Rating = 3.5 },
                new Product { Id = 2, Name = "Rodent Sheriff", Description = "Natural Way to Repel Pests", Stock = 5, Rating = 2 },
                new Product { Id = 3, Name = "Magic Mesh", Description = "Magnetic Screen Door Cover", Stock = 1, Rating = 5 }
            };

        [HttpGet]
        public IEnumerable<Product> Get()
        {
            return products;
        }

        [HttpGet("{id}")]
        public Product Get(int id)
        {
            return this.products.FirstOrDefault(x => x.Id == id);
        }
    }
}