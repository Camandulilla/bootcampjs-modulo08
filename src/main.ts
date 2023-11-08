type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Paciente {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Paciente[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 180,
    especialidad: "Pediatra",
    edad: 11,
  },
];

let nombrePacientes: string = "";

//Queremos extraer la lista de paciente que están asignados a la especialidad de Pediatría
const obtenPacientesAsignadosAPediatria = (lista: Paciente[]): Paciente[] => {
  let listaPacientes: Paciente[] = [];
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].especialidad === "Pediatra") {
      listaPacientes.push(pacientes[i]);
      nombrePacientes += lista[i].nombre + "|";
    }
  }

  return listaPacientes;
};

console.log(obtenPacientesAsignadosAPediatria(pacientes), nombrePacientes);

//Queremos extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  lista: Paciente[]
): Paciente[] => {
  let listaPacientes: Paciente[] = [];
  nombrePacientes = "";

  for (let i = 0; i < lista.length; i++) {
    if (lista[i].especialidad === "Pediatra" && lista[i].edad < 10) {
      listaPacientes.push(pacientes[i]);
      nombrePacientes += lista[i].nombre + "|";
    }
  }

  return listaPacientes;
};

console.log(
  obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes),
  nombrePacientes
);

//Queremos activar el protocolo de urgencia si cualquier de los pacientes tiene un ritmo cardíaco superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados.
const activarProtocoloUrgencia = (lista: Paciente[]): boolean => {
  let activarProctolo = false;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].frecuenciaCardiaca > 100 && lista[i].temperatura > 39) {
      activarProctolo = true;
      console.log("🚨🚨🚨 ACTIVAMOS EL PROTOCOLO DE URGENCIA!!!! 🚨🚨🚨");
      break;
    }
  }
  return activarProctolo;
};

//SE HA MODIFICADO LA FRECUENTACIA CARDÍACA DEL ULTIMO PACIENTE PARA QUE CUMPLIERA AL MENOS 1 LA CONDICIÓN Y SALTE LA FUNCIÓN.
activarProtocoloUrgencia(pacientes);

//El pediatra no puede atender hoy a los pacientes, queremos reasignar los pacientes asignados a la especialidad de pediatría a la de medico de familia.
const reasignaPacientesAMedicoFamilia = (lista: Paciente[]): Paciente[] => {
  let i = 0;
  nombrePacientes = "";

  while (i < lista.length) {
    if (lista[i].especialidad === "Pediatra") {
      lista[i].especialidad = "Medico de familia";
      nombrePacientes += lista[i].nombre + "|";
    }
    i++;
  }
  return lista;
};

reasignaPacientesAMedicoFamilia(pacientes);
console.log(
  `Pacientes reasignados a Mediaco de familia: 
    ${nombrePacientes} `
);

//Queremos saber si podemos mandar al Pediatra a casa (si no tiene pacientes asignados), comprobar si en la lista hay algún paciente asignado a pediatría
const HayPacientesDePediatria = (lista: Paciente[]): boolean => {
  let i = 0;
  let hayPacientes = false;

  while (i < lista.length) {
    if (lista[i].especialidad === "Pediatra") {
      hayPacientes = true;
    }
    i++;
  }
  return hayPacientes;
};

console.log(
  `¿¿Hay pacientes para Pediatría?? ${HayPacientesDePediatria(pacientes)}`
);
