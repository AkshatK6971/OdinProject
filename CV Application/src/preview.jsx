/* eslint-disable react/prop-types */
function Preview({userData, educationData, experienceData}){
    return(
    <div className="preview">
        <div className="preview_resume">
          <div className="personal_preview">
            <h1>{userData.name}</h1>
            <div className="personal_preview_container">
              <div className="with_icon">
                <i className="fa fa-envelope"></i>
                <p>{userData.email}</p>
              </div>
              <div className="with_icon">
                <i className="fa fa-phone"></i>
                <p>{userData.phone}</p>
              </div>
              <div className="with_icon">
                <i className="fa fa-map-marker"></i>
                <p>{userData.address}</p>
              </div>
            </div>
          </div>

          <div className="education_preview">
            <div className="heading">
              <h2>Education</h2>  
            </div>

            {educationData.map((education, index) => (
                <div key={index} className="education_preview_item">
                    <div className="education_preview_container_1">
                      <p>{education.startdate_edu} - {education.enddate_edu}</p>
                      <p>{education.location_edu}</p>
                    </div>
                    <div className="education_preview_container_2">
                      <h3>{education.institute}</h3>
                      <p>{education.degree}</p>
                    </div>
                </div>
                ))
            }
          </div>

          <div className="experience_preview">
            <div className="heading">
              <h2>Professional Experience</h2>
            </div>

            {experienceData.map((experience, index) => (
                <div key={index} className="experience_preview_item">
                    <div className="experience_preview_container_1">
                      <p>{experience.startdate_work} - {experience.enddate_work}</p>
                      <p>{experience.location_work}</p>
                    </div>
                    <div className="experience_preview_container_2">
                      <h3>{experience.company_name}</h3>
                      <p>{experience.position}</p>
                      <p>{experience.description}</p>
                    </div>
                </div>
                ))
            }

          </div>
        </div>
      </div>
)}

export default Preview