function createLoginTracker(userInfo) {
    let attemptCount = 0; // this must be OUTSIDE the attemptLogin function

    const attemptLogin = (passwordAttempt) => {
        attemptCount++;

        if (attemptCount > 3) {
            return "Account locked due to too many failed login attempts";
        }

        if (passwordAttempt === userInfo.password) {
            return "Login successful";
        }

        return `Attempt ${attemptCount}: Login failed`;
    };

    return attemptLogin;
}

module.exports = { createLoginTracker };