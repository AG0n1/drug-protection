class User {
    constructor(data) {
        this.name = data.name
        this.second_name = data.second_name
    }

    getData() {
        console.log(this.name)
    }
}

export default User