import sql from "mssql";
import dbConfig from "../../config/dbConfig";

export class DataRepository {
  async getWaybill(option: string): Promise<any> {
    try {
      const pool = await sql.connect(dbConfig);
      const result = await pool
        .request()
        .input("opcion", sql.Char, option)
        .execute("Sp_App_Cmp_kilos_Remitidos_Consulta_Guias");
      return result.recordset[0];
    } catch (error) {
      console.error("Error en Consulta de el Repository de Data:obtener guias de remision (Waybill)", error); // Registrar el error en la consola
      throw error;
    }
  }
}
