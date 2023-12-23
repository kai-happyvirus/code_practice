/**
 * Testing try and catch
 */


const errorHandling = () => {

	try {
		const error = throwError()
		console.log(error);	
	} catch (err) {
		console.error(`Error-errorHandling function: ${err}`);
		return err
	}
}

const throwError = () => {
	throw new Error("Make error");
}

const deepError = () => {
	try {
		const testDeepError = errorHandling()
		console.log('testDeepError', testDeepError);
	} catch (error) {
		console.log(`Error-deepError function: ${error}`);
	}
}

// errorHandling()

deepError()