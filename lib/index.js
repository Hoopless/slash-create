"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VERSION = exports.Util = exports.UserFlags = exports.User = exports.SlashCreator = exports.SlashCommand = exports.Server = exports.SequentialBucket = exports.RequestHandler = exports.Permissions = exports.Message = exports.Member = exports.GCFServer = exports.GatewayServer = exports.FastifyServer = exports.ExpressServer = exports.DiscordRESTError = exports.DiscordHTTPError = exports.Creator = exports.Context = exports.Constants = exports.CommandOptionType = exports.CommandContext = exports.Command = exports.BitField = exports.API = void 0;
const Constants = __importStar(require("./constants"));
exports.Constants = Constants;
const Util = __importStar(require("./util"));
exports.Util = Util;
const api_1 = __importDefault(require("./api"));
exports.API = api_1.default;
const bitfield_1 = __importDefault(require("./util/bitfield"));
exports.BitField = bitfield_1.default;
const command_1 = __importDefault(require("./command"));
exports.SlashCommand = command_1.default;
const context_1 = __importDefault(require("./context"));
exports.CommandContext = context_1.default;
const creator_1 = __importDefault(require("./creator"));
exports.SlashCreator = creator_1.default;
const requestHandler_1 = __importDefault(require("./util/requestHandler"));
exports.RequestHandler = requestHandler_1.default;
const sequentialBucket_1 = __importDefault(require("./util/sequentialBucket"));
exports.SequentialBucket = sequentialBucket_1.default;
const server_1 = __importDefault(require("./server"));
exports.Server = server_1.default;
const DiscordHTTPError_1 = __importDefault(require("./errors/DiscordHTTPError"));
exports.DiscordHTTPError = DiscordHTTPError_1.default;
const DiscordRESTError_1 = __importDefault(require("./errors/DiscordRESTError"));
exports.DiscordRESTError = DiscordRESTError_1.default;
const express_1 = __importDefault(require("./servers/express"));
exports.ExpressServer = express_1.default;
const fastify_1 = __importDefault(require("./servers/fastify"));
exports.FastifyServer = fastify_1.default;
const gateway_1 = __importDefault(require("./servers/gateway"));
exports.GatewayServer = gateway_1.default;
const gcf_1 = __importDefault(require("./servers/gcf"));
exports.GCFServer = gcf_1.default;
const member_1 = __importDefault(require("./structures/member"));
exports.Member = member_1.default;
const message_1 = __importDefault(require("./structures/message"));
exports.Message = message_1.default;
const permissions_1 = __importDefault(require("./structures/permissions"));
exports.Permissions = permissions_1.default;
const user_1 = __importDefault(require("./structures/user"));
exports.User = user_1.default;
const userFlags_1 = __importDefault(require("./structures/userFlags"));
exports.UserFlags = userFlags_1.default;
const VERSION = require('../package').version;
exports.VERSION = VERSION;
const CommandOptionType = Constants.CommandOptionType;
exports.CommandOptionType = CommandOptionType;
// Aliases
const Creator = creator_1.default;
exports.Creator = Creator;
const Context = context_1.default;
exports.Context = Context;
const Command = command_1.default;
exports.Command = Command;