function access(user) {

    if (user.role === "member") {
        return "Library Entry Allowed";
    }

    if (user.role === "librarian") {
        return "Full Library Control";
    }

    return "Access Restricted";

}

module.exports = access;
