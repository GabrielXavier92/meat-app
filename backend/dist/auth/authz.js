"use strict";
exports.__esModule = true;
var api_config_1 = require("./../api.config");
var jwt = require("jsonwebtoken");
exports.handleAuthorization = function (req, res, next) {
    var token = extractToken(req);
    if (!token) {
        // caso nao esteja autenticado
        res.setHeader('WWW-Authenticate', 'Bearer token_type="JWT"');
        res.status(401).json({ message: 'Necessario autenticacao' });
    }
    else {
        jwt.verify(token, api_config_1.apiConfig.secret, function (error, decoded) {
            if (decoded) {
                next();
            }
            else {
                res.status(403).json({ message: 'Nao autorizado' });
            }
        });
    }
};
function extractToken(req) {
    var token = undefined;
    if (req.headers && req.headers.authorization) {
        var parts = req.headers.authorization.split(' ');
        if (parts.length === 2 && parts[0] === 'Bearer') {
            token = parts[1];
        }
    }
    return token;
}
