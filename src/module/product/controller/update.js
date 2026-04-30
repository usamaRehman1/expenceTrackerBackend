import { updateByID } from "../db/index.js";
import { ENV } from "../../../constant/index.js";

const updateController = async (req, res) => {
    try {
        const { id } = req.params;
        await updateByID(id, req.body)
        return res.status(ENV.STATUS_OK).json({ status: true, message: ENV.UPDATE_DATA_MESSAGE })
    } catch (error) {
        return res.status(ENV.STATUS_BAD_REQUEST).json({ status: false, message: ENV.WRONG_ID_INPUT })
    }
}

export default updateController