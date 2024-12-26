/* eslint-disable react/prop-types */
import React from 'react';

function Education({educationModalOpen, handleEducationOpen, handleEducationClose, handleEducationSave, 
    educationData, handleEducationDelete, editEducationModalOpen, handleEditEducationModalOpen, handleEditEducationModalClose,
    handleEditEducationModalSave, editEducationIndex}){
    return (
        <div className="education">
          <div className="education_heading">
            <h2>Education</h2>
            <button type="submit" onClick={handleEducationOpen}>+</button>
          </div>
          { educationModalOpen && 
            <div className="education_modal">
                <div className="input">
                    <label name="institute">Institute Name:</label>
                    <input type="text" id="institute" placeholder="IIT Delhi"></input>
                </div>
                <div className="input">
                    <label name="degree">Degree:</label>
                    <input type="text" id="degree" placeholder="BTech"></input>
                </div>
                <div className="dates_edu">
                    <div className="input">
                    <label name="startdate_edu">Start Date:</label>
                    <input type="date" id="startdate_edu" placeholder="08/02/2021"></input>
                    </div>
                    <div className="input">
                    <label name="enddate_edu">End Date:</label>
                    <input type="date" id="enddate_edu" placeholder="08/02/2024"></input>
                    </div>
                </div>
                <div className="input">
                    <label name="location_edu">Location:</label>
                    <input type="text" id="location_edu" placeholder="Delhi, India"></input>
                </div>
                <div className="buttons">
                    <button type="submit" onClick={handleEducationSave}>Save</button>
                    <button type="submit" onClick={handleEducationClose}>Cancel</button>
                </div> 
            </div> }

            { editEducationModalOpen && 
            <div className="education_modal">
                <div className="input">
                    <label name="institute">Institute Name:</label>
                    <input type="text" id="institute" placeholder="IIT Delhi" defaultValue={educationData[editEducationIndex].institute}></input>
                </div>
                <div className="input">
                    <label name="degree">Degree:</label>
                    <input type="text" id="degree" placeholder="BTech" defaultValue={educationData[editEducationIndex].degree}></input>
                </div>
                <div className="dates_edu">
                    <div className="input">
                    <label name="startdate_edu">Start Date:</label>
                    <input type="date" id="startdate_edu" placeholder="08/02/2021" defaultValue={educationData[editEducationIndex].startdate_edu.replaceAll("/","-")}></input>
                    </div>
                    <div className="input">
                    <label name="enddate_edu">End Date:</label>
                    <input type="date" id="enddate_edu" placeholder="08/02/2024" defaultValue={educationData[editEducationIndex].enddate_edu.replaceAll("/","-")}></input>
                    </div>
                </div>
                <div className="input">
                    <label name="location_edu">Location:</label>
                    <input type="text" id="location_edu" placeholder="Delhi, India" defaultValue={educationData[editEducationIndex].location_edu}></input>
                </div>
                <div className="buttons">
                    <button type="submit" onClick={handleEditEducationModalSave}>Save</button>
                    <button type="submit" onClick={handleEditEducationModalClose}>Cancel</button>
                </div> 
            </div> }

            <div className="education_items">
            { (!educationModalOpen && !editEducationModalOpen) && 
                
                educationData.map((education, index) => (
                        <React.Fragment key={education.id}>                          
                            <div className={`education_item education_item_${index}`}>
                                <h3>{education.institute}</h3>
                                <div className="icons">
                                    <i className="fa fa-edit" onClick={handleEditEducationModalOpen}></i>
                                    <i className="fa fa-remove" onClick={handleEducationDelete}></i>
                                </div>
                            </div>
                                <hr></hr>
                        </React.Fragment>
                ))
            }
            </div>
        </div> 
    )
}

export default Education