import { merge } from '../merge';

describe('merge function', () => {
    test('should merge and sort arrays correctly', () => {
        const collection_1 = [9, 7, 5, 3, 1];
        const collection_2 = [2, 4, 6, 8, 10];
        const collection_3 = [0, 11, 12, 13];

        const result = merge(collection_1, collection_2, collection_3);
        expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
    });

    test('should handle empty arrays correctly', () => {
        const collection_1: number[] = [];
        const collection_2 = [1, 2, 3];
        const collection_3 = [4, 5, 6];

        const result = merge(collection_1, collection_2, collection_3);
        expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('should handle arrays with negative numbers correctly', () => {
        const collection_1 = [-1, -2, -3]; // Note the order adjustment for correct descending
        const collection_2 = [0, 1, 2];
        const collection_3 = [3, 4, 5];

        const result = merge(collection_1, collection_2, collection_3);
        expect(result).toEqual([-3, -2, -1, 0, 1, 2, 3, 4, 5]);
    });

    test('should handle mixed arrays correctly', () => {
        const collection_1 = [5, 3, 1];
        const collection_2 = [-2, 0, 2, 4];
        const collection_3 = [-1, 6, 7];

        const result = merge(collection_1, collection_2, collection_3);
        expect(result).toEqual([-2, -1, 0, 1, 2, 3, 4, 5, 6, 7]);
    });
});
