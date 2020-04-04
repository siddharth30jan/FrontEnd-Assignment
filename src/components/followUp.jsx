import React from 'react'

const followUp=()=>{
    return(
        <div id="content" className="p-4 p-md-5 pt-5">
				<h3 className="mb-4" style={{color: '#6E7AFA', textAlign: 'center'}}>Follow Up</h3>
				<p style={{fontWeight: 'bold',color: 'black'}}>Submit the follow up form below: </p>
				<form id = "testingEligibilityForm">
					<p>Personal Info:</p>
					
					<input type="text" id="fname" name="fname" className="formFields"  placeholder="First Name"/><br/>
					
					<input type="text" id="lname" name="lname" className="formFields"  placeholder="Last Name"/><br/>
					
					<input type="number" id="Age" name="lname" className="formFields"  placeholder="Age" style={{width: '85px'}}/>
					
					&nbsp;
					&nbsp;
					&nbsp;
					&nbsp;

					<select id="cars" name="cars">
						<option value="volvo">Volvo</option>
						<option value="saab">Saab</option>
						<option value="fiat">Fiat</option>
						<option value="audi">Audi</option>
					</select>
					<br/>
					<input type="email" id="emailid" name="emailid" className="formFields"  placeholder="Email"/><br/>
					<input type="text" id="address" name="address" className="formFields"  placeholder="Address"/><br/>
					<input type="text" id="city" name="city" className="formFields"  placeholder="City"/><br/>
					<input type="text" id="region" name="region" className="formFields"  placeholder="Region"/><br/>
					<input type="text" id="state" name="state" className="formFields"  placeholder="State"/><br/>
					<input type="number" id="pincode" name="pincode" className="formFields"  placeholder="Pincode"/><br/>
					
				</form>
				<br/>
			
				<form id = "testingEligibilityForm">
					<p>Symptoms:</p>
	
					<input type="number" id="temp" name="temp" className="formFields" style={{width: '85px'}} placeholder="Temperature in &#8457"/><br/>
				
					
					<label className="container">Fever
						<input type="checkbox" checked="checked"/>
						<span className="checkmark"></span>
					</label>
					<label className="container">Running Nose
						<input type="checkbox"/>
						<span className="checkmark"></span>
					</label>
					<label className="container">Wet Cough
						<input type="checkbox"/>
						<span className="checkmark"></span>
					</label>
					<label className="container">Dry Cough
						<input type="checkbox"/>
						<span className="checkmark"></span>
					</label>
					<label className="container">Difficulty Breathing
						<input type="checkbox"/>
						<span className="checkmark"></span>
					</label>

				</form>
				<div className="newButton" style={{align: 'center'}}><button type="button" className="btn btn-light buttonMy">Submit</button></div>
			</div>
    )
}


export default followUp