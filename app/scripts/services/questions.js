// ToDos move question to their own file.
// Add sorting into the array of objects
// Make sure to check that firstquestion and lastquestion are the lower and higher of the two, respectively
giftsAppsModule.service('Questions',[ '$rootScope', function( $rootScope ){

    var result = {"questions": [
        {"index": 1, "question": "rejoicing in God's provision even when the checkbook is in the red.", "category": "FTH", "score": null},
        {"index": 2, "question": "cleaning the kitchen once a week.", "category": "SVC", "score": null},
        {"index": 3, "question": "building sets for a drama.", "category": "CFT", "score": null},
        {"index": 4, "question": "searching the Bible to check the validity of a sermon or Bible lesson.", "category": "DSC", "score": null},
        {"index": 5, "question": "studying a demographic survey.", "category": "APS", "score": null},
        {"index": 6, "question": "welcoming an unexpected guest inside my house.", "category": "HSP", "score": null},
        {"index": 7, "question": "using creative ability (writing, art, drama, music) to benefit the body of Christ.", "category": "CCM", "score": null},
        {"index": 8, "question": "finding ways to make biblical content \"come alive\" for students.", "category": "TCH", "score": null},
        {"index": 9, "question": "calling to encourage a friend to stand strong in the faith.", "category": "ENC", "score": null},
        {"index": 10, "question": "helping with the emotional pain of the unemployed.", "category": "MCY", "score": null},
        {"index": 11, "question": "giving use of my car for youth retreats.", "category": "GVN", "score": null},
        {"index": 12, "question": "pleading the cause of God to people.", "category": "PRP", "score": null},
        {"index": 13, "question": "talking about Jesus to strangers who do not know Him.", "category": "EVN", "score": null},
        {"index": 14, "question": "motivating groups toward specific Bible objectives.", "category": "LDR", "score": null},
        {"index": 15, "question": "recognizing root problems keeping someone from growing spiritually.", "category": "XHT", "score": null},
        {"index": 16, "question": "being responsible for the spiritual lives of Christians.", "category": "SHP", "score": null},
        {"index": 17, "question": "organizing ideas, tasks, people and time for Christian service.", "category": "ADM", "score": null},
        {"index": 18, "question": "waiting as long as needed for the right job opening.", "category": "FTH", "score": null},
        {"index": 19, "question": "running lights for a drama.", "category": "SVC", "score": null},
        {"index": 20, "question": "designing better traffic flow for a system of classrooms.", "category": "CFT", "score": null},
    ],
       "categories":[
           {"category": "FTH", "description":"Faith", "score": 0},
           {"category": "SVC", "description":"Service",  "score": 0},
           {"category": "CFT", "description":"Craftsmanship",  "score": 0},
           {"category": "DSC", "description":"Discernment",  "score": 0},
           {"category": "APS", "description":"Apostle",  "score": 0},
           {"category": "HSP", "description":"Hospitality",  "score": 0},
           {"category": "CCM", "description":"Creative Communication",  "score": 0},
           {"category": "TCH", "description":"Teaching",  "score": 0},
           {"category": "ENC", "description":"Encouragement",  "score": 0},
           {"category": "MCY", "description":"Mercy",  "score": 0},
           {"category": "GVN", "description":"Giving",  "score": 0},
           {"category": "PRP", "description":"Prophecy",  "score": 0},
           {"category": "EVN", "description":"Evangelism",  "score": 0},
           {"category": "LDR", "description":"Leadership",  "score": 0},
           {"category": "XHT", "description":"Exhortation",  "score": 0},
           {"category": "SHP", "description":"Shepherding",  "score": 0},
           {"category": "ADM", "description":"Administration",  "score": 0},
]
    };
    return result;
}]);

