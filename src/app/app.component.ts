import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CV - ISC Miguel Villa';

  public cvInfo = {
    alias: 'Miguel villa',
    firstName: 'Miguel angel',
    lastName: 'villa reyes',

    degree: 'Ingeniero en Sistemas Computacionales',

    about: `
    con 6 años de experiencia, actualmente me desempeño como <b>Desarrollador de Software</b>.
    Me gusta la programación, desarrollar proyectos innovadores, de calidad y que aporten valor.
    `,

    resume: `
    <b>Habilidades</b><br>
    - Capacidad analítica y de resolución de problemas, trabajo en equipo, creatividad, adaptabilidad.
    `,

    contactInfo: [
      {
        show: true,
        label: 'LinkedIn',
        icon: 'fa fa-linkedin',
        value: 'Miguel Angel Villa Reyes',
        link: 'https://www.linkedin.com/in/villa-reyes-miguel-angel',
      },
      {
        show: true,
        label: 'Email',
        icon: 'fa fa-at',
        value: 'isc.villa.reyes.miguel@gmail.com',
        link: 'mailto:isc.villa.reyes.miguel@gmail.com',
      },
      {
        show: true,
        label: 'Teléfono',
        icon: 'fa fa-phone',
        value: '(+52) 722 360 9778',
        link: null,
      },
      {
        show: false,
        label: 'Dirección',
        icon: 'fa fa-home',
        value: 'Toluca, Mexico',
        link: null,
      },
      {
        show: true,
        label: 'Github',
        icon: 'fa fa-github',
        value: 'isc.miguelvilla.github.io',
        link: 'https://iscmiguelvilla.github.io/',
      },
    ],
    experience: [
      {
        show: true,
        position: `Desarrollador php`,
        company: `UltraSist - Banobras`,
        location: `CDMX`,
        lapse: `DIC. 2021 - JUL. 2023`,
        description: `Desarrollo de sistema con tecnologías Angular, Laravel, Oracle. Implementación de componentes y servicios en Angular. Revision y mantenimiento de código.`
      },
      {
        show: true,
        position: `Desarrollador NODE`,
        company: `SitDigital - Grupo Modelo`,
        location: `CDMX`,
        lapse: `JUL. 2021 - DIC. 2021`,
        description: `Desarrollo de microservicios y ETLs con NodeJS. Seguimiento de proyectos en Azure y despliegue de aplicaciones en Heroku.`
      },
      // {
      //   show: true,
      //   position: `Desarrollador JAVA`,
      //   company: `BlueTab - BBVA`,
      //   location: `CDMX`,
      //   lapse: `ENE. 2022 - ACTUAL`,
      //   description: `Líder técnico en BBVA, mantenimiento de proyecto Enterprise, actualización de sistema de facturación a versión 4.0.`
      // },
      // {
      //   show: true,
      //   position: `Desarrollador NODE`,
      //   company: `SitDigital - Grupo Modelo`,
      //   location: `CDMX`,
      //   lapse: `JUL. 2021 - ACTUAL`,
      //   description: `Desarrollo de microservicios y ETLs con NodeJS. Seguimiento de proyectos en Azure y despliegue de aplicaciones en Heroku. In-plant en Grupo Modelo.`
      // },
      {
        show: true,
        position: `Desarrollador JAVA`,
        company: `Xideral / Accenture - BBVA`,
        location: `CDMX`,
        lapse: `JUN. 2019 - JUL. 2021`,
        description: `Propuesta y desarrollo de aplicación Java para la generación de código para APIs BBVA. Desarrollo y consumo de APIs REST. Subcontratado con Accenture.`
      },
      {
        show: true,
        position: `Desarrollador JAVA`,
        company: `Manpower / Accenture - HSBC`,
        location: `TOLUCA`,
        lapse: `ENE. 2019 - JUN. 2019`,
        description: `Desarrollo de microservicios con Spring Boot, migración de sistema a Java 8. Manejo de base de datos Oracle. Subcontratado con Accenture.`
      },
      {
        show: true,
        position: `Desarrollador PHP`,
        company: `MTExperts - Olivares & CIA`,
        location: `CDMX`,
        lapse: `MAR. 2018 - DIC. 2018`,
        description: `Migración de sistema desarrollado en scripting a MVC, desarrollo de componentes VueJS e implementación de Eloquent y Blade. Desarrollo de sistema empresarial.`
      },
      {
        show: true,
        position: `Desarrollador WEB`,
        company: `Soluciones TEA`,
        location: `TOLUCA`,
        lapse: `SEPT. 2017 - FEB. 2018`,
        description: `Becario en Soluciones Tecnológicas Aplicadas, como Desarrollador Junior, en proyectos Laravel. Desarrollo de sitios web y sistemas empresariales.`
      }
    ],
    education: [
      {
        show: true,
        level: 'INGENIERÍA',
        graduated: '2013 - 2018',
        degree: 'Ingeniero en Sistemas Computacionales',
        name: 'Instituto Tecnológico de Toluca',
        description: 'Especialidad en Seguridad en Tecnologías de la Información y Comunicación. <i>Cédula profesional: 13420243</i>',
        location: 'toluca',
      },
      {
        show: true,
        level: 'BACHILLERATO',
        graduated: '2010 - 2013',
        degree: 'Profesional Técnico Bachiller en Informática.',
        name: 'Colegio Nacional de Educación Profesional Técnica',
        description: '<i>Cédula profesional: 8253167</i>',
        location: 'toluca',
      }
    ],
    courses: [
      {
        show: true,
        summary: `JAVASCRIPT `,
        name: `JavaScript Algorithms and Data Structures`,
        institution: `FREECODECAMP`,
        year: `2022`,
        description: `JavaScript con ES6, manejo, migración y convivencia de módulos CommonJS y ES Modules, expresiones regulares, Programación orientada a objetos, y programación funcional.`,
      },
      {
        show: true,
        summary: `JUNIT Y MOCKITO`,
        name: `JUnit y Mockito centrado en aplicaciones Spring Boot`,
        institution: `UDEMY`,
        year: `2022`,
        description: `Uso de JUnit 5 y Mockito para pruebas unitarias de aplicaciones de gran envergadura, uso de prácticas testing TDD, y uso de Unit Test para pruebas en Spring Boot.`,
      },
      {
        show: true,
        summary: `JAVA FUNCTIONAL`,
        name: `Programación Funcional con Java SE`,
        institution: `PLATZI`,
        year: `2022`,
        description: `Bases de programación funcional, funciones puras, funciones de orden superior, funciones lambda, interfaces funcionales; function, predicate, consumer, supplier, bi-functions.`,
      },
      {
        show: true,
        summary: `SPRING BOOT`,
        name: `Spring Boot 2 & Spring MVC`,
        institution: `UDEMY`,
        year: `2021`,
        description: `Spring Framework, Spring Boot, Spring Data JPA, Hibernate, Thymeleaf integración con Bootstrap, conexión con bases de datos relacionales H2 y MySQL.`,
      },
      {
        show: true,
        summary: `ANGULAR`,
        name: `Angular: De cero a experto (Angular 10+)`,
        institution: `UDEMY`,
        year: `2021`,
        description: `Base sólida de Angular, TypeScript, conceptos de ECMAScript 6, Aplicaciones básicas en Ionic, componentes, servicios, Directivas, PIPES.`,
      },
      {
        show: true,
        summary: `SCRUM DEVELOPER`,
        name: `Scrum Developer Certified`,
        institution: `SCRUM STUDY`,
        year: `2020`,
        description: `Principios de Scrum, manejo de cambios y riesgos, planificación y estimación de proyectos.`,
      }
    ]
  }
}
