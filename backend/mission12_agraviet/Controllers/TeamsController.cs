using System;
using System.IO;
using System.Text.Json;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using mission12_agraviet;
using Newtonsoft.Json;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace mission12_agraviet.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TeamsController : ControllerBase
    {
        // GET: api/values
        [HttpGet]
        public List<Team> Get()
        {
            using StreamReader reader = new("CollegeBasketballTeams.json");
            var json = reader.ReadToEnd();
            List<Team> teams = JsonConvert.DeserializeObject<List<Team>>(json);
            return teams;
        }

    }

    public class Team
    {
        public int tid { get; set; }
        public int cid { get; set; }
        public int did { get; set; }
        public string school { get; set; }
        public string name { get; set; }
        public string abbrev { get; set; }
        public int pop { get; set; }
        public string city { get; set; }
        public string state { get; set; }
        public float latitude { get; set; }
        public float longitude { get; set; }
    }
}

