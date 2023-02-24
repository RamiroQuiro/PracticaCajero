import { getConecction, querys } from "../../database/index"

export default async function handle(req,res){
  const pool =await getConecction()
  const {recordset}=await pool.request().query(querys.getAllProduct)

  res.json(recordset)

}