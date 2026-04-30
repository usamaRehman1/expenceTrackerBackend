import { ENV } from "../../../constant/index.js";
import { getAllData } from "../db/index.js";

const getController = async (req, res) => {
    try {
        // console.log(req.query, "=> query")
        const data = await getAllData(req.query)

        // if (req.query && data.length == 0) {
        //     return res.status(ENV.STATUS_NOT_FOUND).send({ status: true, message: ENV.POST_DATA_MESSAGE });
        //     return errorResponse(ENV.STATUS_NOT_FOUND, "User Not Found", res)
        // }
        return res.status(+ENV.STATUS_OK).send({ status: true, message: "Data Get Sucessfully", data: data });

        // return successResponse(ENV.STATUS_OK, "users Get Sucessfully", data, res)
    } catch (error) {
        return res.status(+ENV.STATUS_BAD_REQUEST).send({ status: true, message: error.message });
    }
}

export default getController