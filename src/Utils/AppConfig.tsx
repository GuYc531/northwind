
class AppConfig {
    // general configuration
    public productsUrl =""
}

class DevConfig extends AppConfig {
    // dev configuration
    public productsUrl ="https://localhost:3030/api/products";

}

class ProdConfig extends AppConfig {
    // Prod configuration
    public productsUrl ="https://localhost:3030/api/products";

}

const appConfig = process.env.NODE_ENV === "development" ? new DevConfig() : new ProdConfig();

export default appConfig;