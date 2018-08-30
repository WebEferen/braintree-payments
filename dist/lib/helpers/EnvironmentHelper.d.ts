export default class Environment {
    /**
     * Gets the environment
     * @param {string} environment Environment type: Development | Production | Sandbox | Qa
     */
    static get(environment: string): any;
}
