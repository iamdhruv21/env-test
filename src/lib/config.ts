export class Config {
  static get(key: string): string | undefined {
    return process.env[key];
  }

  static getRequired(key: string): string {
    const value = this.get(key);
    if (!value) {
      throw new Error(`Environment variable ${key} is missing.`);
    }
    return value;
  }
}
