const PiratesController = require("../controllers/pirates.controller");
module.exports = app => {
    app.get("/api/pirates/all",PiratesController.findAllPirates);
    app.get("/api/pirates/:_id",PiratesController.getSinglePirate);
    app.post("/api/pirates/new",PiratesController.createPirate);
    app.patch("/api/pirates/:_id/update",PiratesController.updatePirate);
    app.delete("/api/pirates/:_id/delete",PiratesController.deletePirate);
}
