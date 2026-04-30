import { ENV } from "../../../constant/index.js";
import { addData } from "../db/index.js";

const postController = async (req, res) => {
    try {
        const productData = await addData(req.body, res)
        // console.log(productData, "==> productData")
        if (productData) {
            return res.status(+ENV.STATUS_OK).json({ status: true, mess: ENV.POST_DATA_MESSAGE });
        }
    } catch (error) {
        return res.status(+ENV.STATUS_BAD_REQUEST).json({ status: false, mess: error.message });
    }
}

export default postController