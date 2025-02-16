class Car {
    constructor(id, user_id, car_img, brand, model, status, category, description){ 
        this._id = id;
        this.car_img = car_img;
        this._user_id = user_id;
        this._brand = brand;
        this._model = model;
        this.status = status;
        this.category = category;
        this.description = description
    };
    
    setStatus(status){
        this._status = status;
    };

    setDescription(description){
        this.description = description
    }

    setCar_img(car_img){
        this._car_img = car_img;
    };

    setBrand(brand){
        this._brand = brand;
    };

    setModel(model){
        this._model = model;
    };

    setCategory(category){
        this.category = category;
    };

    setUser_id(user_id){
        this._user_id = user_id;
    };

    getId(){
        return this._id;
    };

    getDescription(){
        return this.description;
    }

    getCar_img(){
        return this.car_img;
    }

    getStatus(){
        return this._status;
    };

    getBrand(){
        return this._brand;
    };

    getModel(){
        return this._model;
    };

    getCategory_id(){
        return this.category;
    };

    getUser_id(){
        return this._user_id;
    };
};

export default Car;
