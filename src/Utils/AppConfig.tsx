
class AppConfig {
    // general configuration
    public productsUrl = "";
    public productsImageUrl = "";
}

class DevConfig extends AppConfig {
    // dev configuration
    public productsUrl = "http://localhost:3030/api/products/";
    public productsImageUrl = "http://localhost:3030/api/products/images/";
    public loginUrl = "http://localhost:3030/api/auth/login/";

}

class ProdConfig extends AppConfig {
    // Prod configuration
    public productsUrl = "https://www.northwind/api/products";
    public productsImageUrl = "http://www.northwind/api/products/images/";
    public loginUrl = "http://localhost:3030/api/auth/login/";


}

const appConfig = process.env.NODE_ENV === "development" ? new DevConfig() : new ProdConfig();

export default appConfig;