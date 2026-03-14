function access(user) {

    if (user.type === "member") {
        return "Library Entry Allowed";
    }

    return "Access Restricted";

}

module.exports = access;
