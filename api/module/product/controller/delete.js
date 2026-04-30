import { ENV } from "../../../constant/index.js";
import { deleteByID } from "../db/index.js";

const deleteController = async (req, res) => {
    try {
        // console.log(req.params, "===> params")
        const { id } = req.params;
        await deleteByID(id)
        return res.status(+ENV.STATUS_OK).json({ status: true, message : ENV.DELETE_DATA_MESSAGE})
    } catch (error) {
        return res.status(+ENV.STATUS_BAD_REQUEST).json({ status: false, message: ENV.WRONG_ID_INPUT })
    }
}

export default deleteController