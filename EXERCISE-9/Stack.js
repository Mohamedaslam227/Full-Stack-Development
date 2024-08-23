"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var process_1 = require("process");
var readline = require("readline");
var Stack = /** @class */ (function () {
    function Stack() {
        this.stack = [];
    }
    Stack.prototype.Push = function (value) {
        this.stack.push(value);
    };
    Stack.prototype.isEmpty = function () {
        return this.stack.length === 0;
    };
    Stack.prototype.Pop = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        else {
            this.stack.pop();
        }
    };
    Stack.prototype.Print = function () {
        console.log("Stack: ".concat(this.stack));
    };
    return Stack;
}());
function Input(prompt) {
    return __awaiter(this, void 0, void 0, function () {
        var r1;
        return __generator(this, function (_a) {
            r1 = readline.createInterface({
                input: process_1.stdin,
                output: process_1.stdout,
            });
            return [2 /*return*/, new Promise(function (resolve) { r1.question(prompt, function (ans) { resolve(ans); }); })];
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var s, n, _a, val, x;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    s = new Stack();
                    _b.label = 1;
                case 1:
                    if (!true) return [3 /*break*/, 11];
                    console.log("******STACK OPERATIONS******");
                    console.log("1.Push an element onto the stack.");
                    console.log("2.Pop an element from stack.");
                    console.log("3.Check for Empty Stack");
                    console.log("4.Print Elements");
                    console.log("5.Exit");
                    return [4 /*yield*/, Input("Enter Your Choice: ")];
                case 2:
                    n = _b.sent();
                    _a = n;
                    switch (_a) {
                        case '1': return [3 /*break*/, 3];
                        case '2': return [3 /*break*/, 5];
                        case '3': return [3 /*break*/, 6];
                        case '4': return [3 /*break*/, 7];
                        case '5': return [3 /*break*/, 8];
                    }
                    return [3 /*break*/, 9];
                case 3: return [4 /*yield*/, Input("Enter value: ")];
                case 4:
                    val = _b.sent();
                    s.Push(Number(val));
                    return [3 /*break*/, 10];
                case 5:
                    x = s.Pop();
                    if (x === undefined) {
                        console.log('The stack is empty');
                    }
                    else {
                        console.log("".concat(x, " is value poped from stack"));
                    }
                    return [3 /*break*/, 10];
                case 6:
                    if (s.isEmpty()) {
                        console.log("Empty Stack :(");
                    }
                    else {
                        console.log("Stack has some values ");
                    }
                    return [3 /*break*/, 10];
                case 7:
                    s.Print();
                    return [3 /*break*/, 10];
                case 8: return [2 /*return*/];
                case 9:
                    console.log("Invalid option");
                    _b.label = 10;
                case 10: return [3 /*break*/, 1];
                case 11: return [2 /*return*/];
            }
        });
    });
}
main();
