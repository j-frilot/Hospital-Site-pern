const express = require("express");
const router = express.Router();
// const { physicianQueries: query } = require("../queries/Query");
const db = require("../db/dbconfig");

//    3000/api/physicians

// all of the physicians  :3000/api/physicians
router.get("/", async (req, res) => {
    const allPhysicians = await db.query("SELECT * FROM physicians");
    console.log(allPhysicians);

    // query.findAll(res, query.table);
});

// find by id  ${PORT}api/physicians/5
router.get("/:id", async (req, res) => {
    const physicianId = await db.query(
        `SELECT * FROM physicians WHERE physicians_id = ?`,
        [id]
    );
    console.log(physicianId);
    // query.findById(res, query.table, req.params.id);
});

// filter names  ${PORT/api/physicians/filter/'letters'
router.get("/filter/:str", async (req, res) => {
    const filter = await db.query(
        `SELECT *  FROM physicians WHERE (first_name LIKE CONCAT('%', ? , '%')) OR (last_name LIKE CONCAT('%', ? , '%'))`,
        [str, str]
    );
    console.log(filter);

    // query.filterName(res, req.params.str);
});
module.exports = router;
