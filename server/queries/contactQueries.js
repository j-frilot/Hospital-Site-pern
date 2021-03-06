const db = require("../db/dbconfig");

const contactQueries = {
    table: "contact",
    messages: (req, res) => {
        const person_first_name = req.body.person_first_name;
        const person_last_name = req.body.person_last_name;
        const email = req.body.email;
        const message = req.body.message;
        db.query(
            `INSERT INTO contact (person_first_name, person_last_name, email, message) VALUES (?, ?, ?, ?)`,
            [person_first_name, person_last_name, email, message],
            (error, results) => {
                if (err) {
                    console.log("Contact Us Query error!!!:", err);
                } else {
                    console.log(res);
                }
            }
        );
    }
};

module.exports = contactQueries;
