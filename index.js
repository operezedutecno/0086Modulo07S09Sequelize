const conexion = require("./conexion.js");
const Persona = require("./models/Personas.entity.js");



conexion.sync({ alter: true }).then(async () => {
    console.log("Conexión a base de datos exitosa");

    // Listar Personas.
    // const personas = await Persona.findAll();
    // console.log(personas);

    // Buscar una persona.
    // const persona = await Persona.findByPk(1);
    // console.log(persona);


    // Buscar personas con filtros.
    // const personas = await Persona.findAll({
    //     where: {
    //         rut: "11.111.111-1"
    //     }
    // })
    const persona = await Persona.findOne({
        order: [
            ["rut", "DESC"]
        ]
    });
    console.log(persona);

    // Registrar Personas.
    // await Persona.create({
    //     rut: '11.111.111-1',
    //     nombre: 'Osman',
    //     apellido: 'Pérez'
    // });
    // await Persona.create({
    //     rut: '22.222.222-2',
    //     nombre: 'María',
    //     apellido: 'González'
    // });

    // Actualizar personas.
    // const persona = await Persona.findByPk(1);
    // persona.apellido = "Pérez M.";
    // persona.save();


    // Eliminar personas.
    // const persona = await Persona.findByPk(1);
    // await persona.destroy();
})