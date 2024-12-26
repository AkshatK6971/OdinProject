/* eslint-disable react/prop-types */
function Personal({onChange, userData}){
    return(
        <div className="personal">
          <h2>Personal Details</h2>
          <div className="input">
            <label name="name">Full Name:</label>
            <input type="text" id="name" placeholder="John Doe" onChange={onChange} value={userData.name}></input>
          </div>
          <div className="input">
            <label name="email">Email:</label>
            <input type="email" id="email" placeholder="john.doe@gmail.com" onChange={onChange} value={userData.email}></input>
          </div>
          <div className="input">
            <label name="phone">Phone Number:</label>
            <input type="number" id="phone" placeholder="1234567890" onChange={onChange} value={userData.phone}></input>
          </div>
          <div className="input">
            <label name="address">Address:</label>
            <input type="text" id="address" placeholder="Nagpur,India" onChange={onChange} value={userData.address}></input>
          </div>
        </div>
    )
}

export default Personal