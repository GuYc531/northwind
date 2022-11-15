import { Notyf} from "notyf";


class NotifyService {
    private notfy = new Notyf({
        duration: 3000,
        dismissible: true,
        position: {x:"center", y:"center"}
    });

    public success(message: string): void {
        this.notfy.success(message);
    }

    public error(err: any): void {
        const message = this.getError(err);
        this.notfy.error(message);
    }

    private getError(err: any): string {

        if (typeof err === "string") return err;

        if (typeof err.response?.data === "string") return err.response.data;

        if (Array.isArray(err.response?.data === "string")) return err.response.data[0];
        
        if (typeof err.message === "string") return err.message;

        return "some error, try again later";
    }
}

const notifyService = new NotifyService();

export default notifyService;