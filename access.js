function access(user) {

    if (user.role === "member") {
        return "Member Access Portal";
    }

    if (user.role === "librarian") {
        return "Full Library Control";
    }

    return "Access Denied";

}

module.exports = access;
