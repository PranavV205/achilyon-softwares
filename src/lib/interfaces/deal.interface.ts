export interface Deal {
    id: number;
    title: string;
    tag: string;
    days: number;
    from: number;
    priceOriginal: number;
    start: string;
    route: string;
    image: string;
}

export interface DealResponse {
    status: string;
    count: number;
    data: Deal[];
}