type AppConfig = Readonly<{
  NEXT_PUBLIC_APP_NAME: string;
  NEXT_PUBLIC_CONTACT_EMAIL: string;
  NEXT_PUBLIC_SUPPORT_PHONE: string;
}>;

type PrivateConfig = AppConfig & {
  AMAZON_SECRET: string;
};

type EnvMap = Record<string, string | undefined>;

class Config {
  private _env: EnvMap | null = null;

  private fetchENV(): void {
    this._env = {
      NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
      NEXT_PUBLIC_CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
      NEXT_PUBLIC_SUPPORT_PHONE: process.env.NEXT_PUBLIC_SUPPORT_PHONE,
    };
  }

  private ensureLoaded() {
    if (!this._env) {
      this.fetchENV();
    }
  }

  get<K extends keyof AppConfig>(key: K): AppConfig[K] | undefined {
    if (!key.startsWith('NEXT_PUBLIC')) {
      throw new Error(`Security Risk: Accessing Private ${key} on the client side!`);
    }
    this.ensureLoaded();
    return (this._env?.[key]) as AppConfig[K] | undefined;
  }

  public getServerSide<K extends keyof PrivateConfig>(key: K): PrivateConfig[K] | undefined {
    if (typeof window !== "undefined") {
      throw new Error(`Security Risk: Accessing ${key} on the client side!`);
    }
    this.ensureLoaded();
    return (this._env?.[key]) || process.env[key] as PrivateConfig[K] | undefined;
  }
}

const config = new Config()
export default config;
