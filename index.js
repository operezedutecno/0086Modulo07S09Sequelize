const conexion = require("./conexion.js");
const Persona = require("./models/Personas.entity.js");



conexion.sync().then(async () => {
    console.log("Conexión a base de datos exitosa");

    // Listar Personas.
    // const personas = await Persona.findAll();
    // console.log({ personas });

    // Registrar Personas.
    // await Persona.create({
    //     rut: '11.111.111-1',
    //     nombre: 'Osman',
    //     apellido: 'Pérez'
    // });

    // Actualizar personas.
    // const persona = await Persona.findByPk(1);
    // persona.apellido = "Pérez M.";
    // persona.save();


    // Eliminar personas.
    const persona = await Persona.findByPk(1);
    await persona.destroy();
})