export interface Destination {
    id: number;
    name: string;
    image: string;
}

export interface DestinationResponse {
    status: string;
    count: number;
    data: Destination[];
}