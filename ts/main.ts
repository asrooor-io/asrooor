class a3Gallery {
  // Attributes
  a3GalleryId: string;
  settings?: {
    gap?: number;
    colWidth?: number;
    columns?: number;
  };
  breakpoints?: {
    "480": {
      columns: 3;
      gap: 5;
    };
  };
  // Constructor
  constructor(
    a3GalleryId: string,
    settings: { gap?: number; colWidth?: number; columns?: number } = {},
    breakpoints: {
      string: {
        columns: number;
        gap: number;
      };
    }
  ) {
    this.a3GalleryId = a3GalleryId;
    this.settings = settings;
    console.log(this.breakpoints);
  }
  // Method
  a3GalleryFN(): void {
    // HTMLElement a3 Gallery Container
    const a3GalleryContainer = document.querySelector(
      `#${this.a3GalleryId}`
    ) as HTMLElement;

    // HTMLElement a3 Gallery Item
    const a3GalleryItems: NodeListOf<HTMLElement> =
      document.querySelectorAll(".a3-gallery__item");
    a3GalleryContainer.style.maxWidth = "auto";

    // Settings
    // a3GalleryContainer.style.columnCount = '4';
    a3GalleryItems.forEach((item: HTMLElement) => {
      item.style.display = "flex";

      // HTMLElement a3 Gallery Item in img
      const a3GalleryImg = item.querySelector("img") as HTMLElement;
      a3GalleryImg.style.height = "auto";
      a3GalleryImg.style.width = "100%";
    });
    // settings style columns
    if (this.settings?.columns) {
      a3GalleryContainer.style.columnCount = `${this.settings.columns}`;
    }
    // settings style column width
    if (this.settings?.colWidth) {
      a3GalleryContainer.style.columnWidth = `${this.settings.colWidth}px`;
    } else {
      a3GalleryContainer.style.columnWidth = "auto";
    }
    // settings style gap
    if (this.settings?.gap) {
      a3GalleryContainer.style.gap = `${this.settings.gap}px`;
      a3GalleryItems.forEach((item: HTMLElement) => {
        item.style.marginBottom = `${this.settings?.gap}px`;
      });
    } else {
      a3GalleryContainer.style.gap = "0px";
    }
  }
}
