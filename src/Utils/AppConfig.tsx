
class AppConfig {
    // general configuration
}

class DevConfig extends AppConfig {
    // dev configuration
}

class ProdConfig extends AppConfig {
    // Prod configuration
}

const appConfig = process.env.NODE_ENV === "development" ? new DevConfig() : new ProdConfig();

export default appConfig;