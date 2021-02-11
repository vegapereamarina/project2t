db.ventas.drop()

db.ventas.insertMany([
    {_id: 1, articuloVendido: "Sudadera Star Wars", precioUnitario: 52, númeroUnidades: 700, fechaVenta: new Date("2020-01-07"), precioUnitarioCompraEmpresa: 40, cliente: "Amazon", vendedor: "Javier Ruiz"},
    {_id: 2, articuloVendido: "Mochila Star Wars", precioUnitario: 36, númeroUnidades: 300, fechaVenta: new Date("2020-10-12"), precioUnitarioCompraEmpresa: 29, cliente: "Johns", vendedor: "Andrea Hidalgo"},
    {_id: 3, articuloVendido: "Riñonera Mickie Mouse", precioUnitario: 24, númeroUnidades: 250, fechaVenta : new Date("2020-11-27"), precioUnitarioCompraEmpresa: 20, cliente: "Amazon", vendedor: "Javier Ruiz"},
    {_id: 4, articuloVendido: "Mochila Micki Mouse", precioUnitario: 30, númeroUnidades: 400, fechaVenta: new Date("2020-09-29"), precioUnitarioCompraEmpresa: 25, cliente: "Juanito Perez", vendedor: "Nuria Prieto"},
    {_id: 5, articuloVendido: "Abalorio Blancanieves", precioUnitario: 15, númeroUnidades: 500, fechaVenta: new Date("2020-09-06"), precioUnitarioCompraEmpresa: 10, cliente: "Manolo Suarez", vendedor: "Javier Ruiz"},
    {_id: 6, articuloVendido: "Abalorio La Dama y El Vagabundo", precioUnitario: 15, númeroUnidades: 500, fechaVenta: new Date("2020-09-23"), precioUnitarioCompraEmpresa: 10, cliente: "Flash", vendedor: "Marta Alfonso"},
    {_id: 7, articuloVendido: "Chaqueta National Geographic", precioUnitario: 365, númeroUnidades: 500, fechaVenta: new Date("2020-11-10"), precioUnitarioCompraEmpresa: 295, cliente: "Amazon", vendedor: "Andrea Hidalgo"},
    {_id: 8, articuloVendido: "Reloj Marvel", precioUnitario: 35.90, númeroUnidades: 300, fechaVenta: new Date("2020-11-05"), precioUnitarioCompraEmpresa: 30, cliente: "Amazon", vendedor: "Javier Ruiz"},
    {_id: 9, articuloVendido: "Escudo Capitán América", precioUnitario: 25, númeroUnidades: 400, fechaVenta: new Date("2020-12-06"), precioUnitarioCompraEmpresa: 20, cliente: "Toy r us", vendedor: "Fernando Cardoso"},
    {_id: 10, articuloVendido: "Sudadera Winnie de Pooh", precioUnitario: 42.50, númeroUnidades: 800, fechaVenta: new Date("2020-07-01"), precioUnitarioCompraEmpresa: 30, cliente: "Johns", vendedor: "David Rodriguez"},
    {_id: 11, articuloVendido: "Tetera Sra.Pots", precioUnitario: 35, númeroUnidades: 1100, fechaVenta: new Date("2020-04-24"), precioUnitarioCompraEmpresa: 25, cliente: "Amazon", vendedor: "Judith"},
    {_id: 12, articuloVendido: "Campana Vidrio Rosa", precioUnitario: 70, númeroUnidades: 1200, fechaVenta: new Date("2020-06-06"), precioUnitarioCompraEmpresa: 60, cliente: "Toy r us", vendedor: "Miriam Fernandez"},
    {_id: 13, articuloVendido: "Adorno BabyYoda", precioUnitario: 21, númeroUnidades: 800, fechaVenta: new Date("2020-08-09"), precioUnitarioCompraEmpresa: 15, cliente: "Martas", vendedor: "David Balboa"},
    {_id: 14, articuloVendido: "Llaves apertura Disney", precioUnitario: 40, númeroUnidades: 500, fechaVenta: new Date("2020-11-08"), precioUnitarioCompraEmpresa: 30, cliente: "Amazon", vendedor: "Marina Rodríguez"},
    {_id: 16, articuloVendido: "Taza Chip", precioUnitario: 21, númeroUnidades: 900, fechaVenta: new Date("2020-12-24"), precioUnitarioCompraEmpresa: 17, cliente: "Toy r Us", vendedor: "Laura Delgado"},
    {_id: 17, articuloVendido: "Taza Marvel", precioUnitario: 15, númeroUnidades: 1000, fechaVenta: new Date("2020-02-09"), precioUnitarioCompraEmpresa: 9, cliente: "Martas", vendedor: "Carlos Aberto"},
    {_id: 18, articuloVendido: "Funko Miles Morales", precioUnitario: 45, númeroUnidades: 400, fechaVenta: new Date("2020-01-21"), precioUnitarioCompraEmpresa: 40, cliente: "Amazom", vendedor: "Rocío Parra"},
    {_id: 19, articuloVendido: "Funko Viuda Negra", precioUnitario: 15, númeroUnidades: 300, fechaVenta: new Date("2020-12-06"), precioUnitarioCompraEmpresa: 10, cliente: "Johns", vendedor: "Abril Parra"},
    {_id: 20, articuloVendido: "Control Remoto Rayo Mcqueen", precioUnitario: 26, númeroUnidades: 600, fechaVenta: new Date("2020-11-06"), precioUnitarioCompraEmpresa: 20, cliente: "Super López", vendedor: "Noelia Fernandez"},
    {_id: 21, articuloVendido: "Plataforma Pizza Planet", precioUnitario: 40, númeroUnidades: 800, fechaVenta: new Date("2020-03-06"), precioUnitarioCompraEmpresa: 32, cliente: "Amazon", vendedor: "Nuria Japón"},
    {_id: 22, articuloVendido: "Coches Francesco Bernoulli", precioUnitario: 23, númeroUnidades: 900, fechaVenta: new Date("2020-10-10"), precioUnitarioCompraEmpresa: 20, cliente: "Johns", vendedor: "Marta Ozuna"},
    {_id: 23, articuloVendido: "Figuritas Coco", precioUnitario: 36, númeroUnidades: 1300, fechaVenta: new Date("2020-02-02"), precioUnitarioCompraEmpresa: 30, cliente: "Johns", vendedor: "Daniel Perea"},
    {_id: 24, articuloVendido: "Woody", precioUnitario: 35, númeroUnidades: 1800, fechaVenta: new Date("2020-12-06"), precioUnitarioCompraEmpresa: 27, cliente: "Amazon", vendedor: "Fernando Cardoso"},
    {_id: 25, articuloVendido: "Peluche Perdigón", precioUnitario: 31, númeroUnidades: 700, fechaVenta: new Date("2020-11-07"), precioUnitarioCompraEmpresa: 22, cliente: "Super Lopez", vendedor: "Fernando Cardoso"},

])