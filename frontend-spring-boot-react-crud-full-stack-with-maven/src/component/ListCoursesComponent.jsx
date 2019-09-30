import React, {Component} from 'react'
import CourseDataService from '../service/CourseDataService';

const INSTRUCTOR = 'in28minutes'

class ListCoursesComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            courses:[],
            message:null
        }
        this.deleteCourseClickled = this.deleteCourseClickled.bind(this)
        this.updateCourseClickled = this.updateCourseClickled.bind(this)
        this.addCourseClicked = this.addCourseClicked.bind(this)
        this.refreshCourses = this.refreshCourses.bind(this)

    }

    ComponentidMount(){
        this.refreshCourses();
    }

    refreshCourses(){
        CourseDataService.retrieveAllCourses(INSTRUCTOR)
            .then(
                response =>{
                    this.setState({courses:response.data})
                }
            )
    }


}