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
  async insertKgSent(nroGuia: string,ciclo: string, anioSiembra: number, lote: number,  ingresoCompra: string , tipoMaterial: string, cantidadMaterial: number, unidadMedida: string, cantidadRemitida: number, gramaje: number,proceso:string ): Promise<any> {  
    try {
      const pool = await sql.connect(dbConfig);
      const result = await pool
        .request()
        .input("nroGuia", sql.Char, nroGuia)
        .input("PxgsCiSie", sql.Char, ciclo)
        .input("PxgsAnSie", sql.Int, anioSiembra)
        .input("PxgsPiscLo", sql.Int, lote)
        .input("PxgsStaIC", sql.Char, ingresoCompra)
        .input("PxgsTipMat", sql.Char, tipoMaterial)
        .input("PxgsCan01", sql.Float, cantidadMaterial)
        .input("PxgsUmedCd", sql.Char, unidadMedida)
        .input("PxgsCanLbs", sql.Float, cantidadRemitida)
        .input("PxgsCanGra", sql.Float, gramaje)
        .input("PxgsDesPro", sql.Char, proceso)
        .execute("Sp_App_Cmp_kilos_Remitidos_Guardar_Kilos");
      return result.recordset[0];
    } catch (error) {
      console.error("Error en Consulta de el Repository de Data:insertar kilos enviados (KgSent)", error); // Registrar el error en la consola
      throw error;
    }   
  }

}
