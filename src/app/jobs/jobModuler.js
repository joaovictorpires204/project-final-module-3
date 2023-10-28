"use strict";
exports.__esModule = true;
exports.JobModule = void 0;
var jobController_1 = require("./controllers/jobController");
var jobEntity_1 = require("./entities/jobEntity");
var jobRepository_1 = require("./repositories/jobRepository");
var jobService_1 = require("./services/jobService");
var JobModule = /** @class */ (function () {
    function JobModule() {
    }
    JobModule.getInstances = function () {
        var repository = new jobRepository_1.JobRepository(jobEntity_1.Job);
        var service = new jobService_1.JobService(repository);
        var controller = new jobController_1.JobController(service);
        return { controller: controller, repository: repository, service: service };
    };
    return JobModule;
}());
exports.JobModule = JobModule;
