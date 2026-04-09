// type AppConfig = Readonly<{
//
// }>

class Config {
  get(key: string): string | undefined {
    return process.env[key];
  }

  getRequired(key: string): string {
    const value = this.get(key);
    if (!value) {
      throw new Error(`Environment variable ${key} is missing.`);
    }
    return value;
  }
}

const config = new Config()
export default config;
