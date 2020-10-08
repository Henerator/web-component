customElements.define('test-panel',
    class extends HTMLElement {
        constructor() {
            super();

            const template = document.getElementById('test-template');
            const templateContent = template.content;

            const shadowRoot = this.attachShadow({ mode: 'closed' });

            const style = document.createElement('style');
            style.textContent = `
                :host {
                    display: inline-block;
                }
                .container {
                    padding: 15px;
                    background: #f5f5f5;
                    border: 1px solid #e3e3e3;
                }
                .title {
                    display: block;
                    margin-bottom: 10px;
                    font-size: 16px;
                    font-weight: bold;
                }
                .content {
                    padding-left: 10px;
                    font-size: 14px;
                }
            `;

            shadowRoot.appendChild(style);
            shadowRoot.appendChild(templateContent.cloneNode(true));
        }
    }
);
