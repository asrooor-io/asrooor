"use strict";
class a3Gallery {
    // Constructor
    constructor(a3GalleryId, settings = {}, breakpoints) {
        this.a3GalleryId = a3GalleryId;
        this.settings = settings;
        console.log(this.breakpoints);
    }
    // Method
    a3GalleryFN() {
        var _a, _b, _c;
        // HTMLElement a3 Gallery Container
        const a3GalleryContainer = document.querySelector(`#${this.a3GalleryId}`);
        // HTMLElement a3 Gallery Item
        const a3GalleryItems = document.querySelectorAll(".a3-gallery__item");
        a3GalleryContainer.style.maxWidth = "auto";
        // Settings
        // a3GalleryContainer.style.columnCount = '4';
        a3GalleryItems.forEach((item) => {
            item.style.display = "flex";
            // HTMLElement a3 Gallery Item in img
            const a3GalleryImg = item.querySelector("img");
            a3GalleryImg.style.height = "auto";
            a3GalleryImg.style.width = "100%";
        });
        // settings style columns
        if ((_a = this.settings) === null || _a === void 0 ? void 0 : _a.columns) {
            a3GalleryContainer.style.columnCount = `${this.settings.columns}`;
        }
        // settings style column width
        if ((_b = this.settings) === null || _b === void 0 ? void 0 : _b.colWidth) {
            a3GalleryContainer.style.columnWidth = `${this.settings.colWidth}px`;
        }
        else {
            a3GalleryContainer.style.columnWidth = "auto";
        }
        // settings style gap
        if ((_c = this.settings) === null || _c === void 0 ? void 0 : _c.gap) {
            a3GalleryContainer.style.gap = `${this.settings.gap}px`;
            a3GalleryItems.forEach((item) => {
                var _a;
                item.style.marginBottom = `${(_a = this.settings) === null || _a === void 0 ? void 0 : _a.gap}px`;
            });
        }
        else {
            a3GalleryContainer.style.gap = "0px";
        }
    }
}
