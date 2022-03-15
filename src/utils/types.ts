export type AlertType = {
    message?: string;
    type: 'success' | 'error' | 'warning';
};

export type SelectOptionType = {
    value: string;
    label: string;
};

export interface Book {
    id: string;
    selfLink: string;
    title: string;
    authors?: string[];
    publisher?: string;
    publishedDate: string;
    description?: string;
    pageCount?: number;
    mainCategory?: string;
    categories?: string[];
    averageRating?: number;
    smallThumbnail?: string;
}
