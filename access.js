function access(user) {

    if (user.role === "member") {
        return "Member Library Access";
    }

    if (user.role === "librarian") {
        return "Full Library Control";
    }

    return "Access Denied";

}

module.exports = access;
