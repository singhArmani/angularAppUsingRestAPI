
export interface IDetail {
    firstName: string;
    lastName: string;
    age: number;
    sex: string;
    role: string;
}

export class Detail implements IDetail {
    firstName: string;
    lastName: string;
    age: number;
    sex: string;
    role: string;
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
