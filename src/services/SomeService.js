class SomeService {
    getNumber() {
        return Promise.resolve({
            data: 6,
        });
    }
}

export default new SomeService();
