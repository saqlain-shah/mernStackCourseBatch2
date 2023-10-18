import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

export const verifyToken = (req, res, next) => {

  if (req.cookies.access_token != null) {
    jwt.verify(req.cookies.access_token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        res.send({ isAuthenticated: false })
      }
      next();
    });
  }
  else {
    res.status(401).send({ isAuthenticated: false });
  }

};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized! User"));
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized! Admin"));
    }
  });
};