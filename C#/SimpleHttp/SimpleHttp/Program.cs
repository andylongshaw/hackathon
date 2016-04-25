using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net;
using System.Threading;
using System.Diagnostics;

namespace SimpleHttp
{
    class Program
    {

        private Thread _serverThread;
        private HttpListener _listener;
        private int _port;

        public int Port
        {
            get
            {
                return _port;
            }
            private set
            {
                
            }
        }

        static void Main(string[] args)
        {
            int port = 80;
            if(args.Length >= 1)
            {
                port = int.Parse(args[0]);
            }
            Console.WriteLine("Starting HTTP Server on port : {0}", port.ToString());
            SimpleHTTPServer server = new SimpleHTTPServer(".",port);
        }
    }
}
