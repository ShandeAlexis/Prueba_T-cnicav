const {models} = require('../libs/sequelize')


class ProductsService {
    constructor(){}

    async find() {
        return await models.Product.findAll();
    }
    async findOne(id) {
        const product = await models.Product.findByPk(id);
        if (!product) {
            throw new Error('Producto no encontrado');
        }
        return product;
    }
    async create(data) {
        const { name, price, stock ,description} = data;
        if (!name || !price || !stock || !description) {
            throw new Error('El nombre, descripcion , precio y el stock son obligatorios.');
        }
        const existingProduct = await models.Product.findOne({
            where: {
                name: name
            }
        });

        if (existingProduct) {
            throw new Error('El nombre del producto debe ser único.');
        }
        if (isNaN(price) || price < 0) {
            throw new Error('El precio debe ser un número positivo.');
        }
        if (!Number.isInteger(stock) || stock < 0) {
            throw new Error('El stock debe ser un número entero positivo.');
        }

        return await models.Product.create(data);
    }
    async update(id, data) {
        const model = await this.findOne(id);
        if (data.price && (isNaN(data.price) || data.price < 0)) {
            throw new Error('El precio debe ser un número positivo.');
        }
        if (data.stock && (!Number.isInteger(data.stock) || data.stock < 0)) {
            throw new Error('El stock debe ser un número entero positivo.');
        }
        await model.update(data);
        return model; 
    }
    async delete(id){
        const model= await this.findOne(id);
        await model.destroy();
        return {
            deleted: true
        };
    }
}

module.exports= ProductsService;