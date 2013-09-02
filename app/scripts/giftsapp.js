var giftsAppsModule = angular.module('giftsSurveyApp', ['ui.bootstrap']);


giftsAppsModule.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/frontpage.html'
        })
        .when('/questions/:start/:finish',{
            templateUrl:"views/questions.html",
            controller: "GiftsController"
        })
        .when('/questions/:start',{
            templateUrl:"views/questions.html",
            controller: "GiftsController"
        })
        .when('/finished',{
            templateUrl:"views/finished.html"
        })
        .when('/results',{
            templateUrl:"views/results.html"
        })
        .otherwise({
            redirectTo: '/'
        });
});

// ToDos move question to their own file.
// Add sorting into the array of objects
// Make sure to check that firstquestion and lastquestion are the lower and higher of the two, respectively
giftsAppsModule.service('Questions',function(){

var questions = {"questions": [
    {"index": 1, "question": "Rejoice in God's provision even when the checkbook is in the red.", "gift": "FTH", "score": null},
    {"index": 2, "question": "Clean the kitchen once a week.", "gift": "SVC", "score": null},
    {"index": 3, "question": "Build sets for a drama.", "gift": "CFT", "score": null},
    {"index": 4, "question": "Search the Bible to check the validity of a sermon or Bible lesson.", "gift": "DSC", "score": null},
    {"index": 5, "question": "Study a demographic survey.", "gift": "APS", "score": null},
    {"index": 6, "question": "Welcome an unexpected guest inside my house.", "gift": "HSP", "score": null},
    {"index": 7, "question": "Use creative ability (writing, art, drama, music) to benefit the body of Christ.", "gift": "CCM", "score": null},
    {"index": 8, "question": "Find ways to make biblical content \"come alive\" for students.", "gift": "TCH", "score": null},
    {"index": 9, "question": "Call to encourage a friend to stand strong in the faith.", "gift": "ENC", "score": null},
    {"index": 10, "question": "Help with the emotional pain of the unemployed.", "gift": "MCY", "score": null},
    {"index": 11, "question": "Give use of my car for youth retreats.", "gift": "GVN", "score": null},
    {"index": 12, "question": "Plead the cause of God to people.", "gift": "PRP", "score": null},
    {"index": 13, "question": "Talk about Jesus to strangers who do not know Him.", "gift": "EVN", "score": null},
    {"index": 14, "question": "Motivate groups toward specific Bible objectives.", "gift": "LDR", "score": null},
    {"index": 15, "question": "Recognize root problems keeping someone from growing spiritually.", "gift": "XHT", "score": null},
    {"index": 16, "question": "Be responsible for the spiritual lives of Christians.", "gift": "SHP", "score": null},
    {"index": 17, "question": "Organize ideas, tasks, people and time for Christian service.", "gift": "ADM", "score": null},
    {"index": 18, "question": "Wait as long as needed for the right job opening.", "gift": "FTH", "score": null},
    {"index": 19, "question": "Run lights for a drama.", "gift": "SVC", "score": null},
    {"index": 20, "question": "Design better traffic flow for a system of classrooms.", "gift": "CFT", "score": null},
    {"index": 21, "question": "Recognize when people are wearing \"masks\".", "gift": "DSC", "score": null},
    {"index": 22, "question": "Start a new ministry.", "gift": "APS", "score": null},
    {"index": 23, "question": "Make strangers feel at ease at church or in my home.", "gift": "HSP", "score": null},
    {"index": 24, "question": "Express myself for God through artistic expression.", "gift": "CCM", "score": null},
    {"index": 25, "question": "Earnestly desire to explain biblical principles to others.", "gift": "TCH", "score": null},
    {"index": 26, "question": "Help a child ride a horse after having been thrown.", "gift": "ENC", "score": null},
    {"index": 27, "question": "Sympathize with those who are experiencing hurt.", "gift": "MCY", "score": null},
    {"index": 28, "question": "Organize and fund an appreciation dinner.", "gift": "GVN", "score": null},
    {"index": 29, "question": "Correct wrong thinking in a friend.", "gift": "PRP", "score": null},
    {"index": 30, "question": "Confront my friends and relatives to determine where they stand spiritually.", "gift": "EVN", "score": null},
    {"index": 31, "question": "Lead and direct people in an important ministry.", "gift": "LDR", "score": null},
    {"index": 32, "question": "Map out a plan of action for spiritual maturity in an individual.", "gift": "XHT", "score": null},
    {"index": 33, "question": "Nurture and disciple people.", "gift": "SHP", "score": null},
    {"index": 34, "question": "Plan things where people are involved.", "gift": "ADM", "score": null},
    {"index": 35, "question": "Grow a garden from a seed.", "gift": "FTH", "score": null},
    {"index": 36, "question": "Set up or take down the chairs for a church banquet.", "gift": "SVC", "score": null},
    {"index": 37, "question": "Find out what is wrong with a clock and repair it.", "gift": "CFT", "score": null},
    {"index": 38, "question": "Detect phony or manipulative persons and teachings.", "gift": "DSC", "score": null},
    {"index": 39, "question": "Start a new business.", "gift": "APS", "score": null},
    {"index": 40, "question": "Be more aware of other people's needs than my own.", "gift": "HSP", "score": null},
    {"index": 41, "question": "Find unique ways to express truths of Scripture.", "gift": "CCM", "score": null},
    {"index": 42, "question": "Through careful study, clarify ideas for learners.", "gift": "TCH", "score": null},
    {"index": 43, "question": "Use scripture to give people help and courage.", "gift": "ENC", "score": null},
    {"index": 44, "question": "Work with people who suffer from physical, mental, or emotional problems.", "gift": "MCY", "score": null},
    {"index": 45, "question": "Give when confronted with financial needs of God's kingdom.", "gift": "GVN", "score": null},
    {"index": 46, "question": "Relate spiritual insights from the Bible to people.", "gift": "PRP", "score": null},
    {"index": 47, "question": "Lead others to believe in Christ as their Savior.", "gift": "EVN", "score": null},
    {"index": 48, "question": "Lead and direct others toward goals.", "gift": "LDR", "score": null},
    {"index": 49, "question": "Be transparent in sharing areas of struggle.", "gift": "XHT", "score": null},
    {"index": 50, "question": "Assume responsibility for a Christian being led astray.", "gift": "SHP", "score": null},
    {"index": 51, "question": "Make effective plans to accomplish goals.", "gift": "ADM", "score": null},
    {"index": 52, "question": "Trust God to come through when things seem to be impossible.", "gift": "FTH", "score": null},
    {"index": 53, "question": "Do dishes after a small group breakfast.", "gift": "SVC", "score": null},
    {"index": 54, "question": "Make a new pulpit for the new sanctuary.", "gift": "CFT", "score": null},
    {"index": 55, "question": "Look beneath the surface and perceive others' qualities.", "gift": "DSC", "score": null},
    {"index": 56, "question": "Respond to a long-term need in a new way.", "gift": "APS", "score": null},
    {"index": 57, "question": "Make my home available to those in need of hospitality.", "gift": "HSP", "score": null},
    {"index": 58, "question": "Lead the worship singing.", "gift": "CCM", "score": null},
    {"index": 59, "question": "Communicate excitement for an idea to a group of people.", "gift": "TCH", "score": null},
    {"index": 60, "question": "Write notes to praise someone's performance.", "gift": "ENC", "score": null},
    {"index": 61, "question": "Detect the emotional atmosphere of a group.", "gift": "MCY", "score": null},
    {"index": 62, "question": "Look for new ways to give financially to the Lord's work.", "gift": "GVN", "score": null},
    {"index": 63, "question": "Proclaim timely and urgent messages from God's Word.", "gift": "PRP", "score": null},
    {"index": 64, "question": "End conversations with clear closure.", "gift": "EVN", "score": null},
    {"index": 65, "question": "Preside at a meeting to chart a new course.", "gift": "LDR", "score": null},
    {"index": 66, "question": "Give personal feedback.", "gift": "XHT", "score": null},
    {"index": 67, "question": "Guide other believers toward spiritual maturity.", "gift": "SHP", "score": null},
    {"index": 68, "question": "Coordinate the details necessary to meet a deadline.", "gift": "ADM", "score": null},
    {"index": 69, "question": "Trust the safety rope while rope climbing.", "gift": "FTH", "score": null},
    {"index": 70, "question": "Stamp and fill envelopes for the church secretary.", "gift": "SVC", "score": null},
    {"index": 71, "question": "Wire the speaker system for the church.", "gift": "CFT", "score": null},
    {"index": 72, "question": "Able to discriminate between good and evil.", "gift": "DSC", "score": null},
    {"index": 73, "question": "Design a storage closet for future needs.", "gift": "APS", "score": null},
    {"index": 74, "question": "Introduce myself to a new neighbor doing yard work.", "gift": "HSP", "score": null},
    {"index": 75, "question": "Innovate.", "gift": "CCM", "score": null},
    {"index": 76, "question": "Break large concepts into understandable pieces.", "gift": "TCH", "score": null},
    {"index": 77, "question": "Spend some time in a counseling ministry.", "gift": "ENC", "score": null},
    {"index": 78, "question": "Watch someone heal from the loss of a parent.", "gift": "MCY", "score": null},
    {"index": 79, "question": "Live more simply to give to God's work.", "gift": "GVN", "score": null},
    {"index": 80, "question": "Build up, encourage, and comfort Christians by speaking to them of spiritual things.", "gift": "PRP", "score": null},
    {"index": 81, "question": "Share my beliefs in a clear and meaningful way.", "gift": "EVN", "score": null},
    {"index": 82, "question": "Bear the brunt of criticism for the team's failure.", "gift": "LDR", "score": null},
    {"index": 83, "question": "Speak the truth in love.", "gift": "XHT", "score": null},
    {"index": 84, "question": "Equip people to do ministry.", "gift": "SHP", "score": null},
    {"index": 85, "question": "Delegate important tasks to the right people at the right time.", "gift": "ADM", "score": null},
    {"index": 86, "question": "Take out a loan for a college education.", "gift": "FTH", "score": null},
    {"index": 87, "question": "Arrive early Sunday morning to get the coffee going.", "gift": "SVC", "score": null},
    {"index": 88, "question": "Help a child build a doll house.", "gift": "CFT", "score": null},
    {"index": 89, "question": "Perceive ramifications of a new law.", "gift": "DSC", "score": null},
    {"index": 90, "question": "Develop an appropriate form/function chart of company employees.", "gift": "APS", "score": null},
    {"index": 91, "question": "Have a genuine appreciation for each guest I minister to.", "gift": "HSP", "score": null},
    {"index": 92, "question": "Determine feelings which Bible passages bring out.", "gift": "CCM", "score": null},
    {"index": 93, "question": "Discover new ideas to share with others.", "gift": "TCH", "score": null},
    {"index": 94, "question": "Help hurting people see God's answers to life's problems.", "gift": "ENC", "score": null},
    {"index": 95, "question": "Sense when people are hurting and feel their pain.", "gift": "MCY", "score": null},
    {"index": 96, "question": "Pay rent for a family whose breadwinner has been laid off.", "gift": "GVN", "score": null},
    {"index": 97, "question": "Speak out on the moral issues of the day such as abortion, teen sex, and racism.", "gift": "PRP", "score": null},
    {"index": 98, "question": "Listen critically and carefully to someones beliefs.", "gift": "EVN", "score": null},
    {"index": 99, "question": "Sense when a group is spinning its wheels and do something about it.", "gift": "LDR", "score": null},
    {"index": 100, "question": "Define key issues facing a team.", "gift": "XHT", "score": null},
    {"index": 101, "question": "Work to help a group bond together.", "gift": "SHP", "score": null},
    {"index": 102, "question": "Decide when to implement projects or ministries.", "gift": "ADM", "score": null}
    ]};
    var result =[];
    this.getQuestions = function (firstquestion, lastquestion) {
        var low = parseInt(firstquestion) || 0;
        var high = parseInt(lastquestion) || 0;
        var test = 0;
        if(high<low){
          if(high==0){
              high=low;
          } else {
            test=high;
            high=low;
            low=test;
          }
        }
        if(low > 0){
            for (var i = 0, len = questions.questions.length; i < len; i++) {
                test = parseInt(questions.questions[i].index);
                if (test >= low && test <= high){
                    result.push(questions.questions[i]);
                }
            }
        }
        return result;
    };
});
