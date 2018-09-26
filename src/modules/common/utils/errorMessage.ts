import { HttpStatus } from '@nestjs/common';

export interface IErrorMessage {
    httpStatus: HttpStatus;
    errorCode: number;
    errorMessage: string;
}

export const ErrorMessageConf: {[messageType: string]: IErrorMessage} = {
    'REQ_PARAM_ERR': {
        httpStatus: HttpStatus.BAD_REQUEST,
        errorCode: 4000001,
        errorMessage: '请求参数错误.'
    },
    'USER_AUTH_FAIL': {
        httpStatus: HttpStatus.UNAUTHORIZED,
        errorCode: 4010001,
        errorMessage: '用户认证失败.'
    },
    'USER_NOT_FOUND': {
        httpStatus: HttpStatus.NOT_FOUND,
        errorCode: 4040001,
        errorMessage: '该用户信息未找到.'
    },
}


export class MessageCodeError extends Error {
    public messageCode: number;
    public httpStatus: number;
    public errorMessage: string;

    constructor (messageType: string) {
        super();

        const errMsgConf = this.getMessageFromMessageCode(messageType);
        if (!errMsgConf) throw new Error('Unable to find message code error.');

        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name;
        this.httpStatus = errMsgConf.httpStatus;
        this.messageCode = errMsgConf.errorCode;
        this.errorMessage = errMsgConf.errorMessage;
        this.message = errMsgConf.errorMessage;
    }

    /**
     * @description: Find the error config by the given message code.
     * @param {string} messageCode
     * @return {IErrorMessages}
     */
    private getMessageFromMessageCode (messageCode: string): IErrorMessage {
        let errorMessageConfig: IErrorMessage | undefined;
        Object.keys(ErrorMessageConf).some(key => {
            if (key === messageCode) {
                errorMessageConfig = ErrorMessageConf[key];
                return true;
            }
            return false;
        });

        if (!errorMessageConfig) throw new Error('Unable to find the given message code error.');
        return errorMessageConfig;
    }
}
