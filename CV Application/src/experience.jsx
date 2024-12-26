/* eslint-disable react/prop-types */
import React from 'react';

function Experience({experienceModalOpen, handleExperienceOpen, handleExperienceClose, handleExperienceSave, 
    experienceData, handleExperienceDelete, editExperienceModalOpen, handleEditExperienceModalOpen, handleEditExperienceModalClose,
    handleEditExperienceModalSave, editExperienceIndex}){
    return(
        <div className="experience">
          <div className="experience_heading">
            <h2>Experience</h2>
            <button type="submit" onClick={handleExperienceOpen}>+</button>
          </div>

          { experienceModalOpen && 
          <div className="experience_modal">
            <div className="input">
                <label name="company_name">Company Name:</label>
                <input type="text" id="company_name" placeholder="Google"></input>
            </div>
            <div className="input">
                <label name="position">Position Title:</label>
                <input type="text" id="position" placeholder="Web Developer"></input>
            </div>
            <div className="dates_work">
                <div className="input">
                <label name="startdate_work">Start Date:</label>
                <input type="date" id="startdate_work" placeholder="08/02/2021"></input>
                </div>
                <div className="input">
                <label name="enddate_work">End Date:</label>
                <input type="date" id="enddate_work" placeholder="08/02/2024"></input>
                </div>
            </div>
            <div className="input">
                <label name="location_work">Location:</label>
                <input type="text" id="location_work" placeholder="New York City, US"></input>
            </div>
            <div className="input">
                <label name="description">Description:</label>
                <input type="text" id="description" placeholder="Something about your job here."></input>
            </div>
            <div className="buttons">
                <button type="submit" onClick={handleExperienceSave}>Save</button>
                <button type="submit" onClick={handleExperienceClose}>Cancel</button>
            </div>
          </div> }

          { editExperienceModalOpen && 
          <div className="experience_modal">
            <div className="input">
                <label name="company_name">Company Name:</label>
                <input type="text" id="company_name" placeholder="Google" defaultValue={experienceData[editExperienceIndex].company_name}></input>
            </div>
            <div className="input">
                <label name="position">Position Title:</label>
                <input type="text" id="position" placeholder="Web Developer" defaultValue={experienceData[editExperienceIndex].position}></input>
            </div>
            <div className="dates_work">
                <div className="input">
                <label name="startdate_work">Start Date:</label>
                <input type="date" id="startdate_work" placeholder="08/02/2021" defaultValue={experienceData[editExperienceIndex].startdate_work.replaceAll("/","-")}></input>
                </div>
                <div className="input">
                <label name="enddate_work">End Date:</label>
                <input type="date" id="enddate_work" placeholder="08/02/2024" defaultValue={experienceData[editExperienceIndex].enddate_work.replaceAll("/","-")}></input>
                </div>
            </div>
            <div className="input">
                <label name="location_work">Location:</label>
                <input type="text" id="location_work" placeholder="New York City, US" defaultValue={experienceData[editExperienceIndex].location_work}></input>
            </div>
            <div className="input">
                <label name="description">Description:</label>
                <input type="text" id="description" placeholder="Something about your job here." defaultValue={experienceData[editExperienceIndex].description}></input>
            </div>
            <div className="buttons">
                <button type="submit" onClick={handleEditExperienceModalSave}>Save</button>
                <button type="submit" onClick={handleEditExperienceModalClose}>Cancel</button>
            </div>
          </div> }

            <div className="experience_items">
            { (!experienceModalOpen && !editExperienceModalOpen) &&
                experienceData.map((experience, index) => (
                    <React.Fragment key={experience.id}>                          
                        <div className={`experience_item experience_item_${index}`}>
                            <h3>{experience.company_name}</h3>
                            <div className="icons">
                                <i className="fa fa-edit" onClick={handleEditExperienceModalOpen}></i>
                                <i className="fa fa-remove" onClick={handleExperienceDelete}></i>
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

export default Experience