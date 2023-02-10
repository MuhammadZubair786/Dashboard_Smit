import React,{useEffect, useState} from 'react';
import firebase from '../config/firebase';

import "../App.css"


const Dashboard = () => {

    let [course,setcourse]=useState(0)
    let [std,setstd]=useState(0)


    useEffect(()=>{
        fetchCourse()
        fetchStudents()
    },[])
    
    const fetchCourse=async ()=>{

        await firebase.database().ref('/').child(`Course`).get().then((res) => {
          console.log(res) 
          var data = Object.values(res.val())
          console.log(data)
          setcourse(data.length) 
          
        })

    }

    const  fetchStudents=async ()=>{
        await firebase.database().ref('/').child(`Student`).get().then((res) => {
            console.log(res) 
            var data = Object.values(res.val())
            console.log(data)
            setstd(data.length) 
            
          }) 
    }
    return (
        <div>
            <div className="container">
                <div className="row " style={{margin: 20+"px"}}>
                    <div className="col col-lg-6">
                        <div className="card"  style={{height:100+"px"}}>
                            {/* <img className="card-img-top"
                                style={{ height: 180 + "px"  ,width:300+"px"}}
                                src="https://img.freepik.com/free-vector/businessman-giving-speech_3446-454.jpg?size=338&ext=jpg&ga=GA1.1.1209391547.1676050961&semt=sph" alt="Card image cap" /> */}
                            <div className="card-body">
                                <h5 className="card-title">TOTAL SUBJECTS : {course} </h5>
                                
                            </div>
                        </div>

                    </div>
                    <div className="col col-lg-6">
                        <div className="card" style={{height:100+"px"}} >
                            {/* <img className="card-img-top"
                                style={{ height: 180 + "px" ,width:300+"px"}}
                                src="https://img.freepik.com/premium-vector/cartoon-school-boy-carrying-backpack-waving-hand_29190-4926.jpg?size=338&ext=jpg&ga=GA1.2.1209391547.1676050961&semt=ais" alt="Card image cap" /> */}
                            <div className="card-body">
                                <h5 className="card-title">TOATL STUDENTS : {std} </h5>
                               
                            </div>
                        </div>

                    </div>
                    <div className="col col-lg-6 mt-3">
                        <div className="card" style={{height:100+"px"}} >
                            {/* <img className="card-img-top"
                                style={{ height: 180 + "px" ,width:300+"px"}}
                                src="https://img.freepik.com/premium-vector/cartoon-school-boy-carrying-backpack-waving-hand_29190-4926.jpg?size=338&ext=jpg&ga=GA1.2.1209391547.1676050961&semt=ais" alt="Card image cap" /> */}
                            <div className="card-body">
                                <h5 className="card-title">TOATL STAFF : {10} </h5>
                               
                            </div>
                        </div>

                    </div>
                    

                </div>
                <div className="row">
                    
                </div>
            </div>
        </div>
    );
};

export default Dashboard;