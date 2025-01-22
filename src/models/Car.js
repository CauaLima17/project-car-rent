class Car{
    constructor(id, is_rented, brand, model, category_id, user_id){ 
        this._id = id 
        this._is_rented = is_rented
        this._brand = brand 
        this._model = model
        this._category_id = category_id
        this._user_id = user_id
    };
    
    setIs_rented(is_rented){
        this._is_rented = is_rented;
    };

    setBrand(brand){
        this._brand = brand;
    };

    setModel(model){
        this._model = model;
    };

    setCategory_id(category_id){
        this._category_id = category_id;
    };

    setUser_id(user_id){
        this._user_id = user_id;
    };

    getId(){
        return this._id;
    };

    getIs_rented(){
        return this._is_rented;
    };

    getBrand(){
        return this._brand;
    };

    getModel(){
        return this._model;
    };

    getCategory_id(){
        return this._category_id;
    };

    getUser_id(){
        return this._user_id;
    };
};

export default Car;
