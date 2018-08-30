export default abstract class Validator {
    verifyPattern: string[];
    modelToVerify: object;
    constructor(modelToVerify: object, verifyPattern?: string[]);
    setVerifyPattern(pattern: string[]): void;
    verify(): boolean;
}
