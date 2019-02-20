export const errorMessage = message => {
	return {
		status: false,
		message,
	}
}

export const successMessage = (key, message) => {
	return {
		status: true,
		[key]: message,
	}
}
