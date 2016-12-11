using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using TestApp.Models;

namespace TestApp.Controllers
{

    public class ValuesController : ApiController
    {
        ApplicationDbContext db = new ApplicationDbContext();
        // GET api/values
        public IEnumerable<Student> Get()
        {
            return db.Student.ToList();
        }

        // GET api/values/5
        public Student Get(int id)
        {
            return db.Student.Where(x => x.StudentID == id).FirstOrDefault();
        }

        // POST api/values
        public Student Post(Student value)
        {
            if (value.StudentID > 0)
            {
                db.Entry(value).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();
                return value;
            }
            else
            {
                db.Student.Add(value);
                db.SaveChanges();
                return value;
            }
        }


        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
