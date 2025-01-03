// validate the email
export const validateEmail = (email) => {
    const regex = /^[^\s@+@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email)
}

// validate the password
export const validatePassword = (password) => {
    if (password.length > 8) {
        return password;
    }
}


