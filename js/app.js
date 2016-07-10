// Define the `solutionsApp` module
var solutionsApp = angular.module('solutionsApp', ['angular.filter']);

// Define the `SolutionsController` controller on the `phonecatApp` module
solutionsApp.controller('SolutionsController', function SolutionsController($scope)
{
  //Json Data
  $scope.categoryOptions = [
        {"id":"solutions","title":'Solution'},
        {"id":'solutionWins',"title":'Solution Win'},
    ];
  $scope.solutions = [
    {
    "name": "Solution 1",
    "industry": "Finance",
    "product": "ITOM"
    },
    {

    "name": "Solution 2",
    "industry": "Finance",
    "product": "ITSM"
    },
    {

    "name": "Solution 3",
    "industry": "Education",
    "product": "ITSM"
    },
    {

    "name": "Solution 4",
    "industry": "Media",
    "product": "HR Service Automation"
    },
    {

    "name": "Solution 5",
    "industry": "Federal",
    "product": "ITSM"
    },
    {

    "name": "Solution 6",
    "industry": "Federal",
    "product": "ITBM"
    },
    {

    "name": "Solution 7",
    "industry": "Retail",
    "product": "Knowledge Management"
    },
    {

    "name": "Solution 8",
    "industry": "Retail",
    "product": "SIAM"
    },
    {

    "name": "Solution 9",
    "industry": "Technology",
    "product": "Work Management"
    },
    {

    "name": "Solution 10",
    "industry": "Services",
    "product": "Asset Management"
    }
  ];
  $scope.solutionWins = [
    {
    "name": "Solution Wins 1",
    "industry": "Finance",
    "product": "IT Cost Management"
    },
    {
    "name": "Solution Wins 2",
    "industry": "Finance",
    "product": "Facilities Service Management"
    },
    {
    "name": "Solution Wins 3",
    "industry": "Education",
    "product": "Facilities Service Management"
    },
    {
    "name": "Solution Wins 4",
    "industry": "Media",
    "product": "HR Service Automation"
    },
    {
    "name": "Solution Wins 5",
    "industry": "Federal",
    "product": "Facilities Service Management"
    },
    {
    "name": "Solution Wins 6",
    "industry": "Federal",
    "product": "IT Governance, Risk, and Compliance"
    },
    {
    "name": "Solution Wins 7",
    "industry": "Media",
    "product": "Knowledge Management"
    },
    {
    "name": "Solution Wins 8",
    "industry": "Media",
    "product": "IT Governance, Risk, and Compliance"
    },
    {
    "name": "Solution Wins 9",
    "industry": "Technology",
    "product": "Work Management"
    },
    {
    "name": "Solution Wins 10",
    "industry": "Technology",
    "product": "Asset Management"
    }
  ];

  //App Vars
  $scope.selectedID = 'solutions';
  $scope.currentCat = $scope.$eval($scope.selectedID);
  $scope.selectedIndustry = '';
  $scope.selectedProduct = '';

  //onChange methods
  $scope.catChange = function(item)
  {
    $scope.currentCat = $scope.$eval(item.id);
    $scope.selectedID = item.id;
  };

  $scope.setIndustry = function(item)
  {
    if(item == null){
      $scope.selectedIndustry ='';
    }else{
      $scope.selectedIndustry = item.industry;
    }
  };

  $scope.setProduct = function(item)
  {
    if(item == null){
      $scope.selectedProduct ='';
    }else{
      $scope.selectedProduct = item.product;
    }
  };

  // Populate #filter-results based on paramters
  $scope.solutionFilter = function (item) {
    if(item != null){
      return item.industry === $scope.selectedIndustry && item.product === $scope.selectedProduct;
    }
  };

  //apply custom view controls
  angular.element(document).ready(function () {
      //  var nlform = new NLForm( document.getElementById( 'nl-form' ) );
    });

})
