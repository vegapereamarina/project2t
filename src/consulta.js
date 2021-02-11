/*Enseña el artículo vendido, el cliente, el vendedor, 
la fecha de venta, lo que ha costado en total el producto con IVA y sin IVA, 
ordenado en orden ascendente del precio de cada unidad, que el precio unitario sea mayor que 15, 
menor que 100 y sea a partir del 1 de abril*/
 

db.ventas.aggregate(
    [
        {
            $match: {fechaVenta: {$gt: new Date(2020-04-01)}}
        },{
            $group:{
                _id:{articuloVendido: "$articuloVendido",
                cliente: "$cliente",
                vendedor: "$vendedor",
                fechaVenta: "$fechaVenta"
                },
                ventaPublico: {$sum: {$multiply: ["$precioUnitario", "$númeroUnidades"]}},
                compraEmpresa: {$sum: {$multiply: ["$precioUnitarioCompraEmpresa", "$númeroUnidades"]}}
            }
        },{
            $project:{
                _id: 0,
                articuloVendido: "$_id.articuloVendido",
                cliente: "$_id.cliente",
                vendedor: "$_id.vendedor",
                fechaVenta: "$_id.fechaVenta",
                precioVenta: "$ventaPublico",
                precioVentaIVA: {$multiply: ["$ventaPublico",1.21]}, 
                precioCompraIVA: {$multiply: ["$compraEmpresa",1.21]}
            }
            },{
                $sort:{
                    PrecioUnidad: 1
                }
            },
        {
            $match: {
                  precioUnitario: { $gt: 15, $lt: 100 } 
            }
        }
        

    ]
).pretty()