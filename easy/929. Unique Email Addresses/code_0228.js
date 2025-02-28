/**
 * @param {string[]} emails
 * @return {number}
 */
const formatedEmail = function (email) {
    let [local, domain] = email.split('@');
    local = local.split('+')[0].replace(/\./g, '');
    return local + '@' + domain;
};
var numUniqueEmails = function (emails) {
    let set = new Set();
    for (let email of emails) {
        set.add(formatedEmail(email))
    }
    return set.size
};