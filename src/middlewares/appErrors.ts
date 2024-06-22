import { Request, Response, NextFunction, RequestHandler } from "express"
import { StatusCodes } from "http-status-codes"

export const clientBadRequestError = async (err: any, _: Request, res: Response, __: NextFunction) => {
  if (err) {
    return res.status(err.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: err.message,
      status: err.status || StatusCodes.INTERNAL_SERVER_ERROR,
    })
  } else {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: "⚠️ Oops! It looks like something went wrong on your end. Please double-check your client-side code and try again! 💻🔍",
      status: StatusCodes.UNPROCESSABLE_ENTITY,
    })
  }
}

export const clientPatheNotFoundError: RequestHandler = (req, res) => {
    return res.status(StatusCodes.NOT_FOUND).json({
      statusCode: 404,
      message: "This path exists by only by faith",
      data: null,
    })
  }
