function updateRecords(records, id , prop ,value) {
	if (prop!="tracks" && value != "") { //Evalua que no se ingrese prop = track y el valor no sea un string vacio
		records[id][prop] = value; //Si prop existe o no existe, se creará o actualizara con value
		}	

	else if (prop === "tracks" && value !="") {
		if (records[id].hasOwnProperty(prop)) {
			records[id][prop].push(value);
	    }
	    else {
	    	records[id][prop] = [value];
	    }
	}

	else {
		delete records[id][prop];

	}

	

return records;

}
		
