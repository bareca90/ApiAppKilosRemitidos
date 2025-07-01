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
      return result.recordset;
    } catch (error) {
      console.error("Error en Consulta de el Repository de Data:obtener guias de remision (Waybill)", error); // Registrar el error en la consola
      throw error;
    }
  }
  async updateDateTimeWaybill(nroGuia: string , inicioPesca: string,finPesca: string, fechaCamaroneraPlanta: string, fechaLlegadaCamaronera: string   ): Promise<any> {
    try {
      const pool = await sql.connect(dbConfig);
      const result = await pool
        .request()
        .input("nroGuia", sql.Char, nroGuia)
        .input("inicioPesca", sql.Char, inicioPesca)
        .input("finPesca", sql.Char,finPesca )
        .input("fechaCamaroneraPlanta", sql.Char, fechaCamaroneraPlanta)
        .input("fechaLlegadaCamaronera", sql.Char, fechaLlegadaCamaronera)
        .execute("Sp_App_Cmp_kilos_Remitidos_Guardar_Fechas");
      return result.recordset[0];
    } catch (error) {
      console.error("Error en Consulta de el Repository de Data:obtener guias de remision (Waybill)", error); // Registrar el error en la consola
      throw error;
    }
  }
}
