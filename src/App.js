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
                        "title": "Have you recommended the product to anyone?",
                        "choices": ["Yes", "No"]
                    }
                ]
            }, {
                "name": "page4",
                "elements": [
                    {
                        "type": "rating",
                        "name": "nps_score",
                        "title": "How likely are you to recommend the product to a friend or\ncolleague? ",
                        "isRequired": true,
                        "rateMin": 0,
                        "rateMax": 10,
                        "minRateDescription": "Most unlikely",
                        "maxRateDescription": "Most likely"
                    }, {
                        "type": "radiogroup",
                        "name": "favorite_functionality",
                        "title": "What's your favorite functionality / add-on for the product?",
                        "hasOther": true,
                        "choices": [
                            "Feature 1",
                            "Feature 2",
                            "Feature 3",
                            "Feature 4",
                            "Feature 5",
                            "Feature 6"
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
  <div> Thanks for completing Monish's survey</div>
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
