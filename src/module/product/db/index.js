import { ENV } from "../../../constant/index.js";
import { ProductModel } from "../model/index.js";

const getAllData = async (condition) => await ProductModel.find(condition);
const addData = async (data, res) => {
    try {
        await ProductModel.create(data);
        return true
    } catch (error) {
        // Mongoose validation error
        if (error.name === "ValidationError") {
            const messages = Object.values(error.errors).map(err => err.message);
            // console.log(messages, "==>  message")
            res.status(ENV.STATUS_BAD_REQUEST).send({ status: false, message: messages.join(", ") });

            return false
        }

        // Other errors
        res.status(ENV.STATUS_INTERNAL_SERVER_ERROR).send({ status: false, message: "Internal Server Error" });

        return false
    }
}
const deleteByID = async (id) => await ProductModel.findByIdAndDelete(id);
const updateByID = async (id, data) => await ProductModel.findByIdAndUpdate(id, data);

export {
    getAllData,
    addData,
    deleteByID,
    updateByID
}