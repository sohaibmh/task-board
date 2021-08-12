// functionality based on a route/request
import ColumnsDAO from "../dao/columnsDAO.js";

export default class ColumnsController {
  static async getColumn(req, res, next) {
    const listing = await ColumnsDAO.getColumnListing();
    let response = { listing };
    res.json(response);
  }
}
