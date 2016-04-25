using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace HTTPGet
{
    class Program
    {
        /// <summary>
        /// Summary description for Class1.
        /// </summary>
        class Class1
        {
            static void Main(string[] args)
            {
                if(args.Length == 0)
                {
                    Console.WriteLine("Usage httpget <url>");
                    Environment.Exit(0);
                }

                string sURL;
                sURL = args[0];

                WebRequest wrGETURL;
                wrGETURL = WebRequest.Create(sURL);


                Stream objStream;
                WebResponse response = wrGETURL.GetResponse();

                
                objStream = response.GetResponseStream();

                StreamReader objReader = new StreamReader(objStream);

                string sLine = "";
                int i = 0;

                while (sLine != null)
                {
                    i++;
                    sLine = objReader.ReadLine();
                    if (sLine != null)
                        Console.WriteLine("{0}:{1}", i, sLine);
                }
                Console.ReadLine();
            }
        }
    }
}
