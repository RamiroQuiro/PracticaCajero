export const querys= {
    getAllProduct:'SELECT * FROM Cajeros',
    getInsertRegistro: "INSERT INTO Gabetass (cantidadBilletes,valorNominal) VALUES (@cantidadBilletes,@valorNominal)",
    queryById:'SELECT * FROM cajeros WHERE idCajero = @id',
    queryGabetasIdCajeto:'SELECT * FROM  gabetass  where idCajero=@id',
    queryUPDATEGabetas:'UPDATE [registrobilletes].[dbo].[gabetass]  set cantidadBilletes=@cantidadBilletes,valorNominal=@valorNominal where idGabeta=@idGabeta'
}