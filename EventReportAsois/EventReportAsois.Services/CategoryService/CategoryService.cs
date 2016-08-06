using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using EventReportAsois.Data.Database;

namespace EventReportAsois.Services.CategoryService
{
    public class CategoryService
    {
        private EventReportDbEntities _DbEntities;

        public CategoryService()
        {
            _DbEntities = new EventReportDbEntities();
        }

        public List<object> GetAllCategories()
        {
            List<object> allCategoriesList = new List<object>();
            IEnumerable<IssueCategory> allIssueCategories = _DbEntities.IssueCategories.ToList();
            foreach (IssueCategory category in allIssueCategories)
            {
                IEnumerable<IssueSubcategory> currentIssueSubcategories = _DbEntities.IssueSubcategories.ToList().Where(f => f.CategoryId == category.Id);
                List<object> subCategoriesForCategory = new List<object>();
                foreach (IssueSubcategory subCategory in currentIssueSubcategories)
                {
                    subCategoriesForCategory.Add(new
                    {
                        Id = subCategory.Id,
                        Name = subCategory.Name,
                        CategoryId = subCategory.CategoryId
                    });
                }
                allCategoriesList.Add(new
                {
                    Id = category.Id,
                    Name = category.Name,
                    Subcategories = subCategoriesForCategory
                });
            }

            return allCategoriesList;
        }
    }
}
