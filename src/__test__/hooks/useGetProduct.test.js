import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { renderHook } from "@testing-library/react-hooks";
import useGetProducts from "../../hooks/useGetProducts";
import productMock from "../../__mocks__/productMock";


describe("testing get product API", () => {
    const API = 'https://api.escuelajs.co/api/v1/products';
    let mock;

    beforeAll(() => {
        mock = new MockAdapter(axios);
    });

    afterEach(() => {
        mock.reset();
    });

    describe("when API call is successful", () => {
        test('should return users list', async() => {

            mock.onGet(API).reply(200, productMock);
            const { result, waitForNextUpdate } = renderHook(() => useGetProducts(API));
            await waitForNextUpdate();
            expect(mock.history.get[0].url).toEqual(API);
            expect(result.current).toEqual(productMock);

        })

    });

    describe("when API call is unsuccessful", () => {
        test('should return empty product list', async() => {
            mock.onGet(API).networkErrorOnce();
            const { result, waitForNextUpdate } = renderHook(() => useGetProducts(API));
            expect(result.current).toEqual([]);
            await waitForNextUpdate();
            expect(mock.history.get[0].url).toEqual(API);
            expect(result.current).toEqual([]);

        });

    });



});