import mustache from 'mustache';

export abstract class PageBaseController {
    abstract templatePath: string;
    abstract title: string;
    abstract menuId: string;
    abstract model: unknown;
    public async toHtmlAsync(): Promise<string> {
        const response = await fetch(`./${this.templatePath}`)
        const template = await response.text();
        const html = mustache.render(template, {
            model: this.model
        });
        return html;
    }
}