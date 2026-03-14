function access(user) {
    if (user.role === "member") {
        return "Library Access Granted";
    }
    return "Access Denied";
}

module.exports = access;
