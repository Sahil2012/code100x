
class Hospital {


	listOfPatients;

	constructor(patients) {
		this.listOfPatients = patients;
	}

	getAllPateints() {
		return this.listOfPatients;
	}

	registerPatient(patient) {
		this.listOfPatients.add(patient);
		return 'Patient registred';
	}

	equals() {
		//return listOfPatients == this.listOfPatients;
	}

}

const h = new Hospital(["Demo"]);

console.log(h.prototype);
