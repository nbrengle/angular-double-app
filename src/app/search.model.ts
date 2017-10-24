export class Search {
    text: string;
    timestamp: Date;

    constructor(text: string) {
        this.text = text;
        this.timestamp = new Date();
    }
}
