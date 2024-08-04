class localStorageClass{

    set(key: string, value: any) {
        localStorage.setItem(key, value)
    }

    get(key: string) {
        return localStorage.getItem(key)
    }

}
const Local = new localStorageClass()
export default Local 