class User {
    constructor(id, name, email, password_hash) {
        this._name = name 
        this._id = id 
        this._email = email 
        this._password_hash = password_hash
    };
    
    getId() {
        return this._id;
    }
    
    getName() {
        return this._name;
    }

    getEmail() {
        return this._email;
    }

    getPasswordHash() {
        return this._password_hash;
    }
}

export default User;
