import React, {Component} from 'react';
import './App.css';
import "survey-react/survey.css";
import * as Survey from "survey-react";

class App extends Component {
constructor(props) {
  super(props)
  this.state = {

  }
  this.onCompleteComponent = this.onCompleteComponent.bind(this)
}
onCompleteComponent = () =>{
  this.setState({
    isCompleted: true
  })
}

  render(){
    var json = {
        "title": "Northeastern Mentorship Matching",
        "pages": [
            {
                "name": "page1",
                "elements": [
                    {
                        "type": "radiogroup",
                        "name": "customer_role",
                        "title": "Which field of Computer Science are you MOST interested in?",
                        "hasOther": true,
                        "isRequired": true,
                        "choices": [
                            "Backend Development",
                            "Web Development",
                            "Mobile Development",
                            "Data Science",
                            "Machine Learning/AI",
                            "Game Development",
                            "Embedded Systems"
                        ],
                        "otherText": "Other",
                        "colCount": 3
                    }, {
                        "type": "radiogroup",
                        "name": "start_using",
                        "title": "How awesome is Dr. Evans?",
                        "isRequired": true,
                        "choices": [
                            {
                                "value": "Awesome",
                                "text": "She is super awesome"
                            }, {
                                "value": "Best",
                                "text": "10/10 would take the class again"
                            }
                        ]
                    }, {
                        "type": "radiogroup",
                        "name": "product_discovering",
                        "title": "How did you discover the mentorship pairing app? ",
                        "hasOther": true,
                        "isRequired": true,
                        "choices": [
                            "Friend or colleague", "Email", "Facebook", "Twitter", "Blog"
                        ],
                        "otherText": "Other",
                        "colCount": 3
                    }, {
                      "type": "sortablelist",
                      "name": "lifepriority",
                      "title": "Life Priorities ",
                      "isRequired": true,
                      "choices": ["family", "work", "pets", "travels", "games"]
                    }
                ]
            }, {
                "name": "page2",
                "elements": [
                    {
                        "type": "radiogroup",
                        "name": "product_fit",
                        "title": "How often would you like to communicate with your mentor?",
                        "isRequired": true,
                        "choices": [
                            {
                                "value": "3",
                                "text": "Every week"
                            }, {
                                "value": "2",
                                "text": "Once a month"
                            }, {
                                "value": "1",
                                "text": "Once per semester"
                            }
                        ]
                    }, {
                        "type": "comment",
                        "name": "product_fit_comment",
                        "visibleIf": "{product_fit} notempty",
                        "title": "Please help us understand why you selected the answer above"
                    }
                ]
            }, {
                "name": "page3",
                "elements": [
                    {
                        "type": "radiogroup",
                        "name": "product_alternative",
                        "title": "What was your undergraduate degree in?",
                        "hasOther": true,
                        "isRequired": true,
                        "choices": [
                            "Biological Sciences",
                            "Computer Science",
                            "Engineering",
                            "Humanities",
                            "Arts",
                            "Business"
                        ],
                        "otherText": "Other (please name)",
                        "colCount": 3
                    }, {
                        "type": "radiogroup",
                        "name": "product_benefit",
                        "title": "What industry are you most interested in?",
                        "hasOther": true,
                        "isRequired": true,
                        "maxCount": 2,
                        "choices": [
                            "Travel",
                            "Investment/Banking",
                            "Financial",
                            "Healthcare",
                            "Pure technology",
                            "Big data"
                        ],
                        "colCount": 3
                    }, {
                        "type": "radiogroup",
                        "name": "product_recommend",
                        "title": "Are you in the ALIGN program?",
                        "isRequired": true,
                        "choices": ["Yes", "No"]
                    }
                ]
            }, {
                "name": "page4",
                "elements": [
                    {
                        "type": "rating",
                        "name": "nps_score",
                        "title": "How much do you love computer science? ",
                        "isRequired": true,
                        "rateMin": 0,
                        "rateMax": 10,
                        "minRateDescription": "What's a computer?",
                        "maxRateDescription": "I eat, breathe, and sleep computer science"
                    }, {
                        "type": "radiogroup",
                        "name": "favorite_functionality",
                        "title": "What's the number one thing you look for in a company?",
                        "isRequired": true,
                        "hasOther": true,
                        "choices": [
                            "Name prestige",
                            "Work/life balance",
                            "Newest technology",
                            "Work culture/ammenities",
                            "Location"
                        ],
                        "colCount": 3
                    }, {
                        "type": "comment",
                        "name": "product_improvement",
                        "title": "What additional comments do you have for the ALIGN mentorship app?"
                    }
                ]
            }, {
                "name": "page5",
                "elements": [
                    {
                        "type": "multipletext",
                        "name": "contact_customer",
                        "title": "Want us to follow-up? Leave your name and email here:",
                        "items": [
                            {
                                "name": "Name"
                            }, {
                                "name": "E-mail",
                                "inputType": "email",
                                "validators": [
                                    {
                                        "type": "email"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    };

var surveyRender = !this.state.isCompleted ? (
  <Survey.Survey
    json={json}
    showCompletedPage={false}
    onComplete={this.onCompleteComponent}
  />
) : null

var onSurveyCompletion = this.state.isCompleted ? (
  <div> Thanks for completing the survey! Check your email to see who will be your mentor!</div>
) : null;
  return (
    <div className="App">
<div>
  {surveyRender}
  {onSurveyCompletion}
</div>
    </div>
  );
}
}

export default App;
