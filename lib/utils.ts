import * as qs from 'query-string';

export const formatPrice = (price: number) => {
    return new Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD' }).format(price)
}

export const stringToCoordinate = (coord: string) => {
    return parseFloat(coord.replace(/^([^,]+),/, "$1.").replace(",", ""))
}

export class LinkCreator {
    static query(object: Record<string, any>) {
        return qs.stringify(object);
    }
    static toQuery(object: Record<string, any>, path = "/") {
        const query = this.query(object);
        return path + '?' + query;
    }
}