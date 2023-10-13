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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_ts_1 = require("@injectivelabs/sdk-ts");
const networks_1 = require("@injectivelabs/networks");
const utils_1 = require("@injectivelabs/utils");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
// @ts-ignore
const mappings_json_1 = __importDefault(require("./mappings.json"));
const endpoints = (0, networks_1.getNetworkEndpoints)(networks_1.Network.MainnetK8s);
const chainGrpcStakingApi = new sdk_ts_1.ChainGrpcStakingApi(endpoints.grpc);
const keybaseApi = new utils_1.HttpRestClient('https://keybase.io/_/api/1.0/');
const KEYBASE_SUFFIX = 'user/lookup.json?fields=pictures&key_suffix=';
const existingValidatorToAddressMapFromKeybase = Object.assign({}, JSON.parse(JSON.stringify(mappings_json_1.default))) || {};
/* Cli flags */
const [, , flag] = process.argv;
const cliValidatorAddress = flag && flag.includes('--validator-address') ? flag.split('=')[1] : undefined;
const shouldUpdateAllImages = flag && flag.includes('--update:all');
/* Create validator to identity map */
const fetchValidators = () => __awaiter(void 0, void 0, void 0, function* () {
    const { validators } = yield chainGrpcStakingApi.fetchValidators();
    /* Filter out existing downloaded validator images */
    const filteredValidators = !shouldUpdateAllImages
        ? validators.filter(({ operatorAddress: validatorAddress }) => !Object.keys(existingValidatorToAddressMapFromKeybase).includes(validatorAddress))
        : validators;
    if (filteredValidators.length === 0) {
        return;
    }
    return filteredValidators.reduce((acc, validator) => {
        const { operatorAddress: validatorAddress, description: { identity }, } = validator;
        if (!identity) {
            return Object.assign({}, acc);
        }
        return Object.assign(Object.assign({}, acc), { [validatorAddress]: identity });
    }, {});
});
const fetchLogoUrl = (identity) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    try {
        const response = (yield keybaseApi.get(`${KEYBASE_SUFFIX}${identity}`));
        return (_c = (_b = (_a = response.data) === null || _a === void 0 ? void 0 : _a.them) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.pictures.primary.url;
    }
    catch (e) {
        console.log(e);
        return;
    }
});
/* Create map of validator address to url path of image */
const getLogoPathsMap = () => __awaiter(void 0, void 0, void 0, function* () {
    const validators = yield fetchValidators();
    if (!validators) {
        return;
    }
    return (yield Promise.all(Object.entries(validators).map(([validatorAddress, identifier]) => __awaiter(void 0, void 0, void 0, function* () {
        if (!identifier) {
            return;
        }
        const logoUrl = yield fetchLogoUrl(identifier);
        return { [validatorAddress]: logoUrl };
    })))).filter((validatorAddressToLogoPath) => {
        const [validator] = Object.entries(validatorAddressToLogoPath);
        const [, logoUrl] = validator;
        return logoUrl;
    });
});
/* Helper function to download images to a folder */
const downloadImages = (imageOrigin, imageFolderPath) => __awaiter(void 0, void 0, void 0, function* () {
    const [imageOriginPath, imageOriginSuffix] = imageOrigin.split('.com');
    const imageOriginHttpClient = new utils_1.HttpRestClient(`${imageOriginPath}.com`, {
        responseType: 'stream',
    });
    try {
        const response = (yield imageOriginHttpClient.get(imageOriginSuffix));
        const stream = fs_1.default.createWriteStream(imageFolderPath);
        response.data.pipe(stream);
        stream.on('finish', () => {
            stream.close();
            console.log('Image downloaded successfully');
        });
    }
    catch (e) {
        console.log(e);
        return;
    }
});
/* Download images to validators-logo/images folder */
const queryAndMoveValidatorImages = () => __awaiter(void 0, void 0, void 0, function* () {
    const validatorToLogoPathMap = (yield getLogoPathsMap());
    if (!validatorToLogoPathMap || validatorToLogoPathMap.length === 0) {
        return;
    }
    validatorToLogoPathMap.forEach((validatorAddressToLogoPath) => __awaiter(void 0, void 0, void 0, function* () {
        const [validator] = Object.entries(validatorAddressToLogoPath);
        const [validatorAddress, imageLogoPath] = validator;
        if (!imageLogoPath) {
            return;
        }
        fs_1.default.readFile(imageLogoPath, () => {
            const fileType = imageLogoPath.split('.').pop();
            const validatorFileName = `${validatorAddress}.${fileType}`;
            const outputPath = path_1.default.resolve(process.cwd() + `/src/validators-logo/images/${validatorFileName}`);
            downloadImages(imageLogoPath, outputPath);
        });
    }));
});
/* Create map of validator address to image file name */
const getValidatorNameToImageMap = () => __awaiter(void 0, void 0, void 0, function* () {
    const logoPathsMap = (yield getLogoPathsMap());
    if (!logoPathsMap || logoPathsMap.length === 0) {
        return;
    }
    return logoPathsMap.reduce((acc, validatorToLogoPaths) => {
        const [validator] = Object.entries(validatorToLogoPaths);
        const [validatorAddress, imageLogoPath] = validator;
        if (!imageLogoPath) {
            return Object.assign({}, acc);
        }
        const fileType = imageLogoPath.split('.').pop();
        const validatorFile = `${validatorAddress}.${fileType}`;
        return Object.assign(Object.assign({}, acc), { [validatorAddress]: validatorFile });
    }, {});
});
/* Create map of validator address to image file name to be stored as json */
function createValidatorMapJsonFile(validatorNameToImageMap) {
    if (!validatorNameToImageMap) {
        return;
    }
    const outputPath = path_1.default.resolve(`${process.cwd()}/src/validators-logo/mappings.json`);
    fs_1.default.writeFileSync(outputPath, JSON.stringify(Object.assign(Object.assign({}, existingValidatorToAddressMapFromKeybase), validatorNameToImageMap), null, 2));
}
/* Update a single validator on json map and it's image */
function handleSpecifiedValidatorUpdate() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!cliValidatorAddress) {
            return;
        }
        const validator = yield chainGrpcStakingApi.fetchValidator(cliValidatorAddress);
        const logoUrl = yield fetchLogoUrl(validator.description.identity);
        if (!logoUrl) {
            return;
        }
        const fileType = logoUrl.split('.').pop();
        const validatorFile = `${cliValidatorAddress}.${fileType}`;
        const outputPath = path_1.default.resolve(process.cwd() + `/src/validators-logo/images/${validatorFile}`);
        downloadImages(logoUrl, outputPath);
        createValidatorMapJsonFile({ [cliValidatorAddress]: validatorFile });
    });
}
function handleValidatorLogos() {
    return __awaiter(this, void 0, void 0, function* () {
        if (cliValidatorAddress) {
            return handleSpecifiedValidatorUpdate();
        }
        const validatorNameToImageMap = yield getValidatorNameToImageMap();
        if (!validatorNameToImageMap) {
            return;
        }
        createValidatorMapJsonFile(validatorNameToImageMap);
        queryAndMoveValidatorImages();
    });
}
handleValidatorLogos();
//# sourceMappingURL=index.js.map