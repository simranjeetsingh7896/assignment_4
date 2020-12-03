using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace assignment_4.Models
{
    public class Teacher
    {
        //The following fields define a Teacher
        public int TeacherId;
        public string TeacherFname;
        public string TeacherLname;
        public string Employeenumber;
        public DateTime Hiredate;
        public decimal Salary;

        //parameter-less constructor function
        public Teacher() { }
    }
}