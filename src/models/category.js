class Category {
    constructor (id, name, daily_rate) {
        this._id = id 
        this._name = name 
        this._daily_rate = daily_rate
    };

    setName(name) {
        this._name = name 
    };

    getId() {
        return this._id;
    };
    
    getName() {
        return this._name;
    };

    getDailyRate() {
        return this._daily_rate
    };
};

export default Category
