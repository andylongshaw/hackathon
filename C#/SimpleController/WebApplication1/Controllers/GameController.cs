using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication1.Controllers
{
    public class GameController : Controller
    {
        private static string _opponentName;
        private static int _pointsToWin;
        private static int _maxRounds;
        private static int _dynamiteCount;

        [HttpPost]
        public ActionResult Start(string opponentName, int pointsToWin, int maxRounds, int dynamiteCount)
        {
            _opponentName = opponentName;
            _pointsToWin = pointsToWin;
            _maxRounds = maxRounds;
            _dynamiteCount = dynamiteCount;
            return Content("OK");
        }

        [HttpPost]
        public ActionResult Move(string lastOpponentMove)
        {
            return Content("OK");
        }

        [HttpGet]
        public ActionResult Move()
        {
            return Content("");
        }
    }
}