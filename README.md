# lets-Endorse-Backend
## In problem statement the input & output are given as follows
### Input:-
{
"_id" : 456,
"basic" : {
		"address" : {
			"line2" : "37, Vrindavan Colony",
			"city" : "Sonbhadra",
			"district" : "Sonbhadra",
			"state" : "Uttar Pradesh",
			"line1" : "Sector 6A Sonbhadra",
			"country" : "India"
		},
		"employer" : "",
		"altMobileNumber" : "",
		"identityType" : [
			"Aadhaar"
		],
		"source" : "Agent",
		"dob" : "1986-03-03T07:52:43.767Z",
		"gender" : "Male",
		"educationalQualification" : "Post-graduate",
		"specializationOfEducation" : "Commerce",
		"religion" : "Hinduism",
		"category" : "General",
		"pwd" : "",
		"employmentStatus" : "Unemployed",
		"currentAnnualIncome" : "Under INR 25000",
		"experience" : "9 yrs",
		"mobileNumber" : "894xx508xx",
		"name" : "Abhijeet Roy",
		"phase" : "Start-up",
		"pincode" : 231219
	}
}

### Output:-


{
    "0.basic.address.line2": "string",
    "0.basic.address.city": "string",
    "0.basic.address.district": "string",
    "0.basic.address.state": "string",
    "0.basic.address.line1": "string",
    "0.basic.address.country": "string",
    "0.basic.employer": "string",
    "0.basic.identityType.0": "string",
    "0.basic.source": "string",
    "0.basic.gender": "string",
    "0.basic.educationalQualification": "string",
    "0.basic.specializationOfEducation": "string",
    "0.basic.religion": "string",
    "0.basic.category": "string",
    "0.basic.pwd": "string",
    "0.basic.employmentStatus": "string",
    "0.basic.currentAnnualIncome": "string",
    "0.basic.experience": "string",
    "0.basic.mobileNumber": "number",
    "0.basic.name": "string",
    "0.basic.phase": "string",
    "0.basic.pincode": "number",
    "0.createdAt": "number",
    "0.updatedAt": "number",
    "1.basic.address.line2": "string",
    "1.basic.address.city": "string",
    "1.basic.address.district": "string",
    "1.basic.address.state": "string",
    "1.basic.address.line1": "string",
    "1.basic.address.country": "string",
    "1.basic.employer": "string",
    "1.basic.identityType.0": "string",
    "1.basic.source": "string",
    "1.basic.gender": "string",
    "1.basic.educationalQualification": "string",
    "1.basic.specializationOfEducation": "string",
    "1.basic.religion": "string",
    "1.basic.category": "string",
    "1.basic.pwd": "string",
    "1.basic.employmentStatus": "string",
    "1.basic.currentAnnualIncome": "string",
    "1.basic.experience": "string",
    "1.basic.mobileNumber": "number",
    "1.basic.name": "string",
    "1.basic.phase": "string",
    "1.basic.pincode": "number",
    "1.createdAt": "number",
    "1.updatedAt": "number"
}

### About using api or Deployed link:-
I have created a get api and a post api for users. I have created models also but theres a slight diffrence in my Schema for users. In the problem statement "_id" is given and i just replaced it by "id" because as MongoDB will create  "_id" named variable for every document and its value will be unique for every document.

For using this code you have to just clone the Repo and in terminal you have to give command "npm install". After installing you can run a command of "npm start", which wil start the server. if you open the browser and want to see whats the response this code will give, you have to run the localhost on the given port(it will reflect at terminal). For post you just have to open Postman and you can post any document but the document should be according to given Schema.

## Deployed link :- <a href="https://letsendorsee.herokuapp.com/users" target="_blank">Link</a>
