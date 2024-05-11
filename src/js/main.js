"use strict";
const bodyWidth = window.innerWidth;
class gridGallery {
    constructor(id, settings) {
        this.id = id;
        this.settings = settings;
    }
    gridGallery() {
        const galleryContainer = document.getElementById(`${this.id}`);
        const items = galleryContainer.querySelectorAll('img');
        if (bodyWidth >= 0) {
            Object.assign(galleryContainer.style, {
                columns: `${this.settings.columns}`,
                gap: `${this.settings.gap}px`,
            }),
                items.forEach(item => {
                    Object.assign(item.style, {
                        marginBottom: `${this.settings.gap}px`,
                        width: '100%',
                        height: 'auto',
                        objectFit: 'fill',
                        display: 'block'
                    });
                });
        }
        const breakpoints = this.settings.responsive;
        for (const key in breakpoints) {
            let point = Number(key);
            if (bodyWidth >= point) {
                Object.assign(galleryContainer.style, {
                    columns: `${breakpoints[point].columns}`,
                    gap: `${breakpoints[point].gap}px`,
                });
                items.forEach(item => {
                    item.style.marginBottom = `${breakpoints[point].gap}px`;
                });
            }
        }
    }
}
