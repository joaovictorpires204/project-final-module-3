"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/routes/userRouter.ts
var userRouter_exports = {};
__export(userRouter_exports, {
  userRouter: () => userRouter
});
module.exports = __toCommonJS(userRouter_exports);
var import_express = require("express");

// src/app/users/entities/userEntity.ts
var import_mongoose = __toESM(require("mongoose"));
var UserSchema = new import_mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, reuire: true, unique: true }
  },
  { timestamps: true }
);
var User = import_mongoose.default.model("User", UserSchema);

// src/utils/commmonError/commonError.ts
function commonError(message, status) {
  return {
    error: true,
    status,
    message
  };
}

// src/app/users/repositories/userRepository.ts
var UserRepository = class {
  constructor(model) {
    this.model = model;
  }
  create(data) {
    return __async(this, null, function* () {
      try {
        return this.model.create(data);
      } catch (error) {
        return commonError(error.error, 500);
      }
    });
  }
};

// src/app/users/services/userService.ts
var UserService = class {
  constructor(repository) {
    this.repository = repository;
  }
  create(data) {
    return __async(this, null, function* () {
      try {
        return this.repository.create(data);
      } catch (error) {
        return commonError(error.error, 500);
      }
    });
  }
};

// src/app/users/controllers/userController.ts
var UserController = class {
  constructor(service) {
    this.service = service;
  }
  create(req, res) {
    return __async(this, null, function* () {
      const { body } = req;
    });
  }
};

// src/app/users/userModule.ts
var UserModule = class {
  static getInstance() {
    const repository = new UserRepository(User);
    const service = new UserService(repository);
    const controller2 = new UserController(service);
    return { repository, service, controller: controller2 };
  }
};

// src/routes/userRouter.ts
var userRouter = (0, import_express.Router)();
var { controller } = UserModule.getInstance();
userRouter.post("/users", controller.create.bind(controller));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  userRouter
});
