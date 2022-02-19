export interface IPin {
    destination: string;
    image: {
        asset: {
            url: string;
        };
    };
    postedBy: {
        image: string;
        userName: string;
        _id: string;
    };
    _id: string;
    save?: {
        _key: string;
        postedBy: {
            image: string;
            userName: string;
            _id: string;
        };
    }[];
    category?: string;
    title?:string;
    about?:string;
    comments?: {
        comment: string;
        _key: string;
        postedBy: {
            image:string;
            _id: string;
            userName: string
        }
    }[];
}

export interface IPins {
    pins: IPin[];
}