class Employee {
    constructor (id, name, email, tel, sector) {
        this._id = id 
        this._name = name 
        this._email = email
        this._tel = tel
        this._sector = sector
    };

    setName(name) {
        this._name = name;
    };

    setEmail(email){
        this._email = email;
    };

    setTel(tel){
        this._tel = tel;
    };

    setSector(sector){
        this._sector = sector;
    };

    getId() {
        return this._id;
    };
    
    getName() {
        return this._name;
    };

    getEmail() {
        return this._email;
    };

    getTel(){
        return this._tel;
    };

    getSector(){
        return this._sector;
    };

};

export default Employee
