import React, { useReducer } from 'react';
import pic1 from "./img/arrow-down.svg"
import pic2 from "./img/info-circle-fill.svg"
import pic3 from "./img/check-circle-fill.svg"
import pic4 from "./img/exclamation-triangle-fill.svg"

import './MyComponent.css'
import { Table, Row, Col , Container} from 'react-bootstrap';
const style = { color: "white", fontSize: "1.5em" }

const CLICK_SORT_FIRST_TABLE = "CLICK_SORT_FIRST_TABLE";
const CLICK_SORT_SECOND_TABLE = "CLICK_SORT_SECOND_TABLE";

let str_to_int = {
    check : 0,
    warning : 1,
    not : 2,
    error : 3
}

let obj = {
    DataState:  [
        {
            Subsystem : "Network",
            Status : "Degraded",
            imgInfo : "warning",
            imgSrc : pic4,
        },
        {
            Subsystem : "BIOS/Hardware Health",
            Status : "ok",
            imgInfo: "check",
            imgSrc : pic3,
        },
        {
            Subsystem : "Fan Rendundancy",
            Status : "Rendundancy",
            imgInfo: "check",
            imgSrc : pic3,
        },
        {
            Subsystem : "Agentless Managment Serice",
            Status : "Not available",
            imgInfo: "not",
            imgSrc : pic2,
        },
    ],
  }

const reducer = (state, action) =>{
    let statecopy = {...state};
    debugger;
    switch(action.type){
        case CLICK_SORT_FIRST_TABLE:{
            statecopy.DataState.sort( (a,b) =>{
                if(a.Subsystem.toUpperCase() < b.Subsystem.toUpperCase())
                    return -1;
                else
                    return 1;
            })
            return statecopy;
        }
        case CLICK_SORT_SECOND_TABLE:{
            statecopy.DataState.sort( (a, b) => { return str_to_int[a.imgInfo] - str_to_int[b.imgInfo]})
            return statecopy
        }

        default:
            return statecopy
    }
}

const ContainerDrawTable = () =>{

    const [stateLocale, dispatchLocale] = useReducer(reducer,obj);

    return(
        <DrawTable DataState={stateLocale.DataState} reducer = {dispatchLocale}/>
    )
}

const DrawTable = (props) =>{
    debugger;
    return(
        <table className="table table-borderless">
            <thead>
                <tr className='MyBorder'>
                    <th>
                        <div className="container m-0">
                            <div className="row">
                                <div className="col-auto" onClick = {() => {props.reducer({type: CLICK_SORT_FIRST_TABLE})}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                                    </svg>
                                </div>
                                <div className="col p-0 d-flex align-items-center">
                                    <span>System Diveces</span>
                                </div>
                            </div>
                        </div>
                    </th>
                    <th>
                        <div className="container">
                        <div className="row">
                            <div className="col-auto" onClick={() => {props.reducer({type: CLICK_SORT_SECOND_TABLE})}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                                </svg>
                            </div>
                            <div className="col d-flex align-items-center">
                                <span>Status</span>
                            </div>
                        </div>
                    </div></th>
                </tr>
                </thead>
                <tbody>
                    {
                        props.DataState.map( (el) => {
                            return(
                                <tr>
                                    <td className="w-75 MyVerticalAllign">
                                        <div className="container m-0" > 
                                            <div className="row">
                                                <div className = "col-auto" style={{height: 43, width : 43}}> 
                                                
                                                </div>
                                                <div className = "col d-flex align-items-center text_brek">
                                                    <span>{el.Subsystem}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="w-25 MyVerticalAllign" style={{paddingLeft : 15, paddingRight : 40 }}>
                                        <div className="container m-0">
                                            <div className="row">
                                                <div className = "col-auto d-flex align-items-center">
                                                        <img src={el.imgSrc} height={20} width={20}/>
                                                </div>
                                                <div className = "col d-flex align-items-center text_brek" style={{paddingLeft : 16}}>
                                                    <span>
                                                        {el.Status}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
        </table>
    );
}

export default ContainerDrawTable;
