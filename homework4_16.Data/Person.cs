using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace homework4_16.Data
{
    public class Person
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }

        public List<Car> Cars { get; set; }
    }

    public class Car
    {
        public int Id { get; set; }
        public int PersonId { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
        public string Year { get; set; }
    }
}
