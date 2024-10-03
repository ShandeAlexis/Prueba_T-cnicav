const ProductsService = require('../service/product.service');
const service = new ProductsService();

const create = async (req, res) => {
    try {
        const response = await service.create(req.body);
        res.status(201).json({
            success: true,
            data: response
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const get = async (req, res) => {
    try {
        const response = await service.find();
        res.json({
            success: true,
            data: response
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await service.findOne(id);
        res.json({
            success: true,
            data: response
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const response = await service.update(id, body);
        res.json({
            success: true,
            data: response
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const _delete = async (req, res) => {
    try {
        const { id } = req.params;
        await service.delete(id);
        res.json({
            success: true,
            message: `Producto con el id: ${id} eliminado exitosamente.`
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    create, get,getById, update , _delete
}