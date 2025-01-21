class Category {
    constructor (id, name, daily_rate) {
        this._id = id 
        this._name = name 
        this._daily_rate = daily_rate
    };

    
    setId(id) {
        this._id = id 
    };

    setName(name) {
        this._name = name 
    };

    setDailyRate(daily_rate) {
        this._daily_rate = daily_rate 
    }

    getId() {
        return this._id;
    }
    
    getName() {
        return this._name;
    }

    getDailyRate(daily_rate) {
        return this.daily_rate
    }
}

export default Category
