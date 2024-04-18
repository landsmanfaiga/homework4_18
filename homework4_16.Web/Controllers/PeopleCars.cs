using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using homework4_16.Data;

namespace homework4_16.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleCars : ControllerBase
    {

        private string _connectionString;
        public PeopleCars(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [Route("getall")]
        public List<Person> GetAll()
        {
            var repo = new PeopleCarsRepo(_connectionString);
            return repo.GetAll();
        }

        [Route("getcars")]
        public List<Car> GetCars(int id)
        {
            var repo = new PeopleCarsRepo(_connectionString);
            return repo.GetCarsForPerson(id);
        }

        [HttpPost]
        [Route("addperson")]
        public void AddPerson(Person person)
        {
            var repo = new PeopleCarsRepo(_connectionString);
            repo.AddPerson(person);
        }

        [HttpPost]
        [Route("addcar")]
        public void AddCar(Car car)
        {
            var repo = new PeopleCarsRepo(_connectionString);
            repo.AddCarForPerson(car);
        }

        [HttpPost]
        [Route("deletecars")]
        public void DeleteCars(int id)
        {
            var repo = new PeopleCarsRepo(_connectionString);
            repo.DeleteCarsForPerson(id);
        }
    }
}
