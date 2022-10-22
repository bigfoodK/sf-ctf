/* tslint:disable */
/* eslint-disable */
/**
 * SF CTF apis
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface GetRequestDto
 */
export interface GetRequestDto {
    /**
     * 
     * @type {string}
     * @memberof GetRequestDto
     */
    'accessToken': string;
    /**
     * 
     * @type {string}
     * @memberof GetRequestDto
     */
    'fileId': string;
}
/**
 * 
 * @export
 * @interface GetResponseDto
 */
export interface GetResponseDto {
    /**
     * 
     * @type {string}
     * @memberof GetResponseDto
     */
    'presignedUrl': string;
}
/**
 * 
 * @export
 * @interface LoginRequestDto
 */
export interface LoginRequestDto {
    /**
     * 
     * @type {string}
     * @memberof LoginRequestDto
     */
    'username': string;
    /**
     * 
     * @type {string}
     * @memberof LoginRequestDto
     */
    'password': string;
}
/**
 * 
 * @export
 * @interface LoginResponseDto
 */
export interface LoginResponseDto {
    /**
     * 
     * @type {string}
     * @memberof LoginResponseDto
     */
    'accessToken': string;
}
/**
 * 
 * @export
 * @interface PutRequestDto
 */
export interface PutRequestDto {
    /**
     * 
     * @type {string}
     * @memberof PutRequestDto
     */
    'accessToken': string;
}
/**
 * 
 * @export
 * @interface PutResponseDto
 */
export interface PutResponseDto {
    /**
     * 
     * @type {string}
     * @memberof PutResponseDto
     */
    'fileId': string;
    /**
     * 
     * @type {string}
     * @memberof PutResponseDto
     */
    'presignedUrl': string;
}
/**
 * 
 * @export
 * @interface RegisterRequestDto
 */
export interface RegisterRequestDto {
    /**
     * 
     * @type {string}
     * @memberof RegisterRequestDto
     */
    'username': string;
    /**
     * 
     * @type {string}
     * @memberof RegisterRequestDto
     */
    'email': string;
    /**
     * 
     * @type {string}
     * @memberof RegisterRequestDto
     */
    'password': string;
    /**
     * 
     * @type {string}
     * @memberof RegisterRequestDto
     */
    'nickname': string;
    /**
     * 
     * @type {boolean}
     * @memberof RegisterRequestDto
     */
    'isAdmin': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RegisterRequestDto
     */
    'isBanned': boolean;
    /**
     * 
     * @type {string}
     * @memberof RegisterRequestDto
     */
    'section': RegisterRequestDtoSectionEnum;
}

export const RegisterRequestDtoSectionEnum = {
    Security: 'Security',
    Software: 'Software',
    SecurityFirst: 'SecurityFirst'
} as const;

export type RegisterRequestDtoSectionEnum = typeof RegisterRequestDtoSectionEnum[keyof typeof RegisterRequestDtoSectionEnum];


/**
 * FileApi - axios parameter creator
 * @export
 */
export const FileApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {GetRequestDto} getRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fileControllerGet: async (getRequestDto: GetRequestDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'getRequestDto' is not null or undefined
            assertParamExists('fileControllerGet', 'getRequestDto', getRequestDto)
            const localVarPath = `/api/file/get`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(getRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {PutRequestDto} putRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fileControllerPut: async (putRequestDto: PutRequestDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'putRequestDto' is not null or undefined
            assertParamExists('fileControllerPut', 'putRequestDto', putRequestDto)
            const localVarPath = `/api/file/put`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(putRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * FileApi - functional programming interface
 * @export
 */
export const FileApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FileApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {GetRequestDto} getRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async fileControllerGet(getRequestDto: GetRequestDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetResponseDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fileControllerGet(getRequestDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {PutRequestDto} putRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async fileControllerPut(putRequestDto: PutRequestDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PutResponseDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fileControllerPut(putRequestDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * FileApi - factory interface
 * @export
 */
export const FileApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FileApiFp(configuration)
    return {
        /**
         * 
         * @param {GetRequestDto} getRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fileControllerGet(getRequestDto: GetRequestDto, options?: any): AxiosPromise<GetResponseDto> {
            return localVarFp.fileControllerGet(getRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {PutRequestDto} putRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fileControllerPut(putRequestDto: PutRequestDto, options?: any): AxiosPromise<PutResponseDto> {
            return localVarFp.fileControllerPut(putRequestDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * FileApi - object-oriented interface
 * @export
 * @class FileApi
 * @extends {BaseAPI}
 */
export class FileApi extends BaseAPI {
    /**
     * 
     * @param {GetRequestDto} getRequestDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FileApi
     */
    public fileControllerGet(getRequestDto: GetRequestDto, options?: AxiosRequestConfig) {
        return FileApiFp(this.configuration).fileControllerGet(getRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {PutRequestDto} putRequestDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FileApi
     */
    public fileControllerPut(putRequestDto: PutRequestDto, options?: AxiosRequestConfig) {
        return FileApiFp(this.configuration).fileControllerPut(putRequestDto, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * UserApi - axios parameter creator
 * @export
 */
export const UserApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersControllerFindAll: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/user`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {LoginRequestDto} loginRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersControllerLogin: async (loginRequestDto: LoginRequestDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'loginRequestDto' is not null or undefined
            assertParamExists('usersControllerLogin', 'loginRequestDto', loginRequestDto)
            const localVarPath = `/api/user/login`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(loginRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {RegisterRequestDto} registerRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersControllerRegister: async (registerRequestDto: RegisterRequestDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'registerRequestDto' is not null or undefined
            assertParamExists('usersControllerRegister', 'registerRequestDto', registerRequestDto)
            const localVarPath = `/api/user/register`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(registerRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UserApi - functional programming interface
 * @export
 */
export const UserApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UserApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async usersControllerFindAll(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.usersControllerFindAll(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {LoginRequestDto} loginRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async usersControllerLogin(loginRequestDto: LoginRequestDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LoginResponseDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.usersControllerLogin(loginRequestDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {RegisterRequestDto} registerRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async usersControllerRegister(registerRequestDto: RegisterRequestDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.usersControllerRegister(registerRequestDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UserApi - factory interface
 * @export
 */
export const UserApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UserApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersControllerFindAll(options?: any): AxiosPromise<void> {
            return localVarFp.usersControllerFindAll(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {LoginRequestDto} loginRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersControllerLogin(loginRequestDto: LoginRequestDto, options?: any): AxiosPromise<LoginResponseDto> {
            return localVarFp.usersControllerLogin(loginRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {RegisterRequestDto} registerRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersControllerRegister(registerRequestDto: RegisterRequestDto, options?: any): AxiosPromise<void> {
            return localVarFp.usersControllerRegister(registerRequestDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UserApi - object-oriented interface
 * @export
 * @class UserApi
 * @extends {BaseAPI}
 */
export class UserApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public usersControllerFindAll(options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).usersControllerFindAll(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {LoginRequestDto} loginRequestDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public usersControllerLogin(loginRequestDto: LoginRequestDto, options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).usersControllerLogin(loginRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {RegisterRequestDto} registerRequestDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public usersControllerRegister(registerRequestDto: RegisterRequestDto, options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).usersControllerRegister(registerRequestDto, options).then((request) => request(this.axios, this.basePath));
    }
}


