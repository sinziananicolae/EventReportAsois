﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using EventReportAsois.Services.CategoryService;

namespace EventReportAsois.ControllersAPI
{
    public class CategoryController : ApiController
    {
        private CategoryService _CategoryService;

        public CategoryController()
        {
            _CategoryService = new CategoryService();
        }

        // GET api/<controller>
        public object Get()
        {
            IEnumerable<Object> response = _CategoryService.GetAllCategories();
            return new {data = response};
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}