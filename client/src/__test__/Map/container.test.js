import { mapStateToProps, mapDispatchToProps } from '../../components/Map/container';

const initialState = {
    map: {
        locations: [],
        center: [],
        allBusinesses: [],
        zoom: [14],
        mapStyle: {
            flex: 1,
            width: "100vw",
            height: "100vh",
            position: "fixed",
            top: 0,
            left: 0
        },
        permission: false,
        loading: false,
        compact: false,
    },
    business: {
        id: null,
        name: "",
        coordinates: {},
        photos: [],
        distance: null,
        r_id: null,
        items: [],
        showModal: false
    }
}

describe('Map Contianer', () => {

    it('should return expected state when passed in expectedState' , () => {
        const expectedState = {
            locations: [],
            allBusinesses: [],
            center: [],
            zoom: [14],
            mapStyle: {
                flex: 1,
                width: "100vw",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: 0
            },
            permission: false,
            name: "",
            compact: false,
        }
        expect(mapStateToProps(initialState)).toEqual(expectedState);
    });

    it('should return expected state when no values passed in' , () => {
        const expectedState = {
            locations: [],
            allBusinesses: [],
            center: [],
            zoom: [],
            mapStyle: {},
            permission: false,
            name: "",
            compact: false,
        }
        expect(mapStateToProps()).toEqual(expectedState);
    });

    it('should return correct actions', () => {
        const dispatch = jest.fn();
        const response = mapDispatchToProps(dispatch)

        expect("getLocations" in response).toBe(true);
        expect("getItems" in response).toBe(true);
        expect("setCenter" in response).toBe(true);
        expect("setShowModal" in response).toBe(true);
        expect("setLoading" in response).toBe(true);
        expect("setPermission" in response).toBe(true);
    });
});