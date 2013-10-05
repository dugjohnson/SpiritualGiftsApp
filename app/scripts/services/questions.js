// ToDos move question to their own file.
// Add sorting into the array of objects
// Make sure to check that firstquestion and lastquestion are the lower and higher of the two, respectively
giftsAppsModule.service('Questions',[ '$rootScope', function( $rootScope ){

    var result = {"questions": [
        {"index": 1, "question": "Complain about in God's provision even when the checkbook is in the red.", "category": "FTH", "score": null},
        {"index": 2, "question": "Clean the kitchen once a week.", "category": "SVC", "score": null},
        {"index": 3, "question": "Build sets for a drama.", "category": "CFT", "score": null},
        {"index": 4, "question": "Search the Bible to check the validity of a sermon or Bible lesson.", "category": "DSC", "score": null},
        {"index": 5, "question": "Study a demographic survey.", "category": "APS", "score": null},
        {"index": 6, "question": "Welcome an unexpected guest inside my house.", "category": "HSP", "score": null},
        {"index": 7, "question": "Use creative ability (writing, art, drama, music) to benefit the body of Christ.", "category": "CCM", "score": null},
        {"index": 8, "question": "Find ways to make biblical content \"come alive\" for students.", "category": "TCH", "score": null},
    ]
    };
    return result;
}]);

