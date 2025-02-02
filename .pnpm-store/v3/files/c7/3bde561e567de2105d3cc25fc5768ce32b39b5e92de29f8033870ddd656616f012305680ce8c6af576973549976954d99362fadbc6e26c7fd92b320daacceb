export class ImgBase extends BaseComponent<any> {
    static get observedAttributes(): string[];
    constructor();
    cssInit$: any;
    /**
     * @param {String} key
     * @returns {any}
     */
    $$(key: string): any;
    /** @param {Object<String, String | Number>} kvObj */
    set$$(kvObj: any): void;
    /**
     * @param {String} key
     * @param {(val: any) => void} kbFn
     */
    sub$$(key: string, kbFn: (val: any) => void): void;
    /**
     * @private
     * @param {String} src
     */
    private _fmtAbs;
    /**
     * Image operations
     *
     * @param {String} [size]
     */
    _getCdnModifiers(size?: string | undefined): string;
    /**
     * @private
     * @param {String} size
     * @returns {any}
     */
    private _getUrlBase;
    /**
     * @private
     * @param {String} url
     * @returns {String}
     */
    private _proxyUrl;
    /**
     * @param {HTMLElement} el
     * @param {Number} [k]
     * @param {Boolean} [wOnly]
     */
    _getElSize(el: HTMLElement, k?: number | undefined, wOnly?: boolean | undefined): string | null;
    /** @param {HTMLImageElement} img */
    _setupEventProxy(img: HTMLImageElement): void;
    /** @type {HTMLImageElement} */
    get img(): HTMLImageElement;
    /** @private */
    private _img;
    get bgSelector(): any;
    initAttributes(): void;
    get breakpoints(): number[] | null;
    /** @param {HTMLElement} el */
    renderBg(el: HTMLElement): void;
    getSrcset(): string;
    getSrc(): any;
    init(): void;
    /**
     * @param {HTMLElement} el
     * @param {() => void} cbkFn
     */
    initIntersection(el: HTMLElement, cbkFn: () => void): void;
    /** @private */
    private _isnObserver;
    /** @private */
    private _observed;
    attributeChangedCallback(name: any, oldVal: any, newVal: any): void;
}
import { BaseComponent } from '@symbiotejs/symbiote';
//# sourceMappingURL=ImgBase.d.ts.map