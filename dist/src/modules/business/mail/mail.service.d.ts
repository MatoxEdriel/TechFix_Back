export declare class MailService {
    private transporter;
    constructor();
    sendOtp(email: string, code: string): Promise<boolean>;
}
