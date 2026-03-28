# Fundamentos Algorítmicos 1: Guía Técnica de Estudio (Edición Extendida)

Esta guía técnica consolida, expande y detalla los conceptos fundamentales de la programación estructurada (Código AADS22-01-02). Su lectura, asimilación y dominio son obligatorios antes de abordar la evaluación final. El nivel de rigor aquí expuesto corresponde al de futuros profesionales en el desarrollo de software. Se exige precisión absoluta tanto en la sintaxis como en la estructuración lógica de los algoritmos computacionales.

---

## 1. Lógica Computacional y Arquitectura IPO (Input-Process-Output)

El primer paso hacia la ingeniería de software requiere abandonar el pensamiento abstracto y adaptar la mente al modelo de procesamiento computacional. Los sistemas informáticos son máquinas deterministas; no interpretan intenciones, ejecutan instrucciones. Todo sistema se basa en el modelo tridimensional IPO:

### 1.1 El Ciclo de Vida de los Datos
*   **Entrada (Input):** Representa la captura y validación de datos suministrados al sistema. En el mundo real, puede ser un formulario web, las coordenadas GPS de un satélite, o en nuestro caso, la lectura por consola utilizando el comando `Leer`.
*   **Proceso (Process):** La transformación de los datos de entrada a través de cálculos matemáticos, estructuras lógicas, bucles y transacciones en memoria. Aquí reside la "inteligencia" del algoritmo.
*   **Salida (Output):** La proyección del resultado determinista hacia la interfaz del usuario, un archivo de texto o la consola mediante el comando `Escribir`.

**Ejemplo Analítico del Modelo IPO (Cajero Automático):**
*   **Input:** Tarjeta insertada y número PIN (`1234`).
*   **Proceso:** El sistema evalúa el PIN contra la base de datos y calcula si el monto solicitado es menor o igual al saldo disponible.
*   **Output:** Dispensión de dinero en efectivo y un recibo impreso.

### 1.2 Requisitos de un Algoritmo Funcional
1.  **Finitud:** Todo proceso debe converger a un punto de terminación tras un número finito de pasos.
2.  **Determinismo:** Ejecutar un algoritmo bajo las mismas condiciones de entrada debe producir exactamente la misma salida en un cien por ciento de los casos.
3.  **Precisión Secuencial:** El estado de la memoria es alterado paso a paso. Declarar una variable después de intentar usarla causará la caída del sistema (Crash). La cronología de ejecución es vital.

---

## 2. Gestión de Memoria y Arquitectura de Tipos de Datos

En el desarrollo de software, la memoria volátil (RAM) se administra mediante identificadores.

*   **Variables:** Espacios de retención de memoria cuyo valor asignado puede ser reescrito n-cantidad de veces durante la ejecución del proceso. 
*   **Constantes:** Identificadores protegidos en memoria de solo lectura. Su valor es inmutable y modificarlo en tiempo de ejecución resulta en un error de compilación.

Asignar nombres representativos (Convención de nomenclatura) como `sueldo_base` o `total_factura` es una norma de calidad obligatoria. Identificadores abstractos como `x` o `y` son prácticas inaceptables en entornos profesionales.

### 2.1 Tipos de Datos Primitivos Estándar
Cada valor asignado a la memoria requiere especificar qué tipo constructivo tomará, lo cual le indica al compilador el rango de memoria y nivel de bytes a reservar. No es lo mismo reservar memoria para la edad que para el nombre.

1.  **Entero:** Estructura numérica sin componente fraccionario. Se utiliza para contadores e índices (`1`, `-500`, `2048`).
2.  **Real (Flotante):** Estructura numérica con precisión decimal. Crucial para cálculos financieros o medidas científicas (`3.1415`, `-0.50`). En programación estándar, se utiliza el punto `.` como separador decimal.
3.  **Caracter / Cadena:** Estructura secuencial de texto acotadas por comillas. (`"Error del Sistema"`, `"S"`, `"Activo"`).
4.  **Lógico (Booleano):** Representación binaria fundamental operada a 1 bit. Únicamente soporta dos estados absolutos (`Verdadero` o `Falso`).

**Ejemplo de Definición en PSeInt Estricto:**
```pseint
Algoritmo AsignacionDeMemoria
    // Solicitud formal de espacios en RAM al sistema operativo
    Definir edad_usuario Como Entero
    Definir tasa_interes Como Real
    Definir nombre_cliente Como Caracter
    Definir estado_cuenta Como Logico
    
    // Asignación procedimental de valores (Proceso)
    edad_usuario <- 25
    tasa_interes <- 1.15
    nombre_cliente <- "Corporación XYZ"
    estado_cuenta <- Verdadero
FinAlgoritmo
```

---

## 3. Precedencia Matemática y Lógica Booleana

Las fallas críticas en los motores de software financiero moderno frecuentemente ocurren por negligencia de los desarrolladores frente al cálculo discreto.

### 3.1 Jerarquía Operacional (Matemáticas Aritméticas)
Las expresiones aritméticas no se procesan linealmente de izquierda a derecha; obedecen al estándar jerárquico global de ejecución:
1.  `()` Paréntesis: Anulan cualquier jerarquía e imponen su propia prioridad. Las funciones internas se calculan primero.
2.  `^` Potenciación (Radicación).
3.  `*`, `/`, `MOD` Multiplicación, División y Módulo (Residuo divisional).
4.  `+`, `-` Suma y Resta.

**Análisis de Ejemplo:**
`resultado <- 5 + 3 * 2`
Si procesas de izquierda a derecha (incorrectamente): 5+3=8, 8*2 = 16.
Procesamiento jerárquico computacional (correcto): 3*2 = 6, 6+5 = **11**.

### 3.2 Operadores Lógicos y Tablas de Verdad
La toma de decisiones de software se nutre fundamentalmente de evaluaciones booleanas (Álgebra de Boole).
*   **Y (AND / &) - Operador Inclusivo Estricto:** Requiere que todas las condiciones anexas sean evaluadas a `Verdadero`. Si una sola es falsa, el bloque en general retorna `Falso`.
    *   *Uso Técnico:* Verificación de credenciales (P. ej., `Si usuario == "admin" Y contrasena == "123"`).
*   **O (OR / |) - Operador Permisivo:** Retorna `Verdadero` si al menos un operando de la cadena evaluada es `Verdadero`.
    *   *Uso Técnico:* Múltiples factores de activación (P. ej., `Si sensor_humo == Verdadero O temperatura_celsius > 80`).
*   **NO (NOT / ~) - Inversor Lógico Unario:** Invierte el estatus del operando. Un `Verdadero` será interpretado como `Falso`.

---

## 4. Pseudocódigo Estricto y Paradigma Secuencial

Durante esta guía hemos trabajado sobre el "Perfil Estricto" del entorno PSeInt. Este perfil previene malas prácticas forzando explícitamente el tipeo de datos al principio del programa y sancionando operaciones sin instanciamiento previo.

**Demostración de Arquitectura Secuencial Estándar:**
```pseint
Algoritmo CalculadoraImpuestos
    // 1. Instanciación en Memoria [Definición estricta]
    Definir monto_factura Como Real
    Definir porcentaje_iva Como Real
    Definir total_impuestos, gran_total Como Real

    // 2. Modelo de Entrada de Datos a Sistema
    Escribir "Terminal POS: Ingrese monto bruto facturado (COP):"
    Leer monto_factura
    Escribir "Terminal POS: Ingrese porcentaje IVA local (Ej: 19):"
    Leer porcentaje_iva

    // 3. Proceso de Cálculo (Transformación)
    total_impuestos <- monto_factura * (porcentaje_iva / 100)
    gran_total <- monto_factura + total_impuestos

    // 4. Salida Estandarizada hacia Usuario
    Escribir "--------------------------------"
    Escribir "Reporte de Cálculo Fiscal:"
    Escribir "Subtotal Base:  $", monto_factura
    Escribir "Carga de Impuesto: $", total_impuestos
    Escribir "TOTAL A FACTURAR:  $", gran_total
    Escribir "--------------------------------"
FinAlgoritmo
```

---

## 5. Control de Flujo: Arquitectura de Condicionales y Enrutamiento Funcional

El verdadero poder de la ingeniería de software reside en delegar autonómicamente la toma de decisiones dinámicas basadas en los resultados del flujo de datos. Para ello implementamos la bifurcación condicional.

### 5.1 Estructura Condicional Simple (Si... Entonces / If)
Representa una vía alterna. Permite que el compilador intercepte y ejecute un bloque encapsulado de rutinas exclusivamente si una evaluación booleana resulta en `Verdadero`. Si resulta ser falsa, la ejecución omite ese bloque.

**Ejemplo Implementado:**
```pseint
    Escribir "Lectura de temperatura de núcleo del Servidor 1:"
    Leer temperatura_server
    
    // Condición unilineal simple
    Si temperatura_server >= 90.5 Entonces
        Escribir ">> ALERTA CRÍTICA: Encender ventiladores de contingencia."
        Escribir ">> ALERTA CRÍTICA: Notificar SysAdmin por correo."
    FinSi
    
    Escribir "El monitoreo de red continúa habitualmente."
```

### 5.2 Estructura Condicional Compuesta (Bifurcación Excluyente / If-Else)
Genera rutas de ejecución estrictamente excluyentes. El árbol de proceso tomará incondicionalmente el bloque *Principal* si la afirmación es `Verdadera`. Si falla (`Falso`), derivará incondicionalmente al bloque *Sino*, garantizando una respuesta para rechazos.

**Ejemplo Implementado:**
```pseint
    Definir nivel_acceso Como Entero
    Escribir "Intranet Corporativa: Digite su nivel de ID:"
    Leer nivel_acceso
    
    // Bifurcación Compuesta
    Si nivel_acceso >= 5 Entonces
        Escribir "[+] Autenticación validada. Tiene acceso a la bóveda."
    Sino
        Escribir "[-] Error de privilegios. Conexión rechazada. Protocolo registrado."
    FinSi
```

### 5.3 Estructuras Condicionales Anidadas (Recursividad Lógica Condicionada)
A mayor complejidad en la ingeniería requerida, mayor capa de condicionales. El anidamiento permite subejecutar evaluación dentro de procesos previamente validados. Su arquitectura requiere estricta indentación (sangría derecha) para mitigar vulnerabilidades lógicas o dificultad de lectura.

**Ejemplo Implementado (Rangos Continuos):**
```pseint
    Definir puntaje_score Como Real
    Escribir "Motor de Calificación de Conductores - Digite puntuación (0.0 - 5.0):"
    Leer puntaje_score
    
    // Evaluación en Cascada Anidada
    Si puntaje_score >= 4.8 Entonces
        Escribir "Rango A: Socio Premium. Obtiene bonus del 20%."
    Sino
        Si puntaje_score >= 4.0 Entonces
            Escribir "Rango B: Conductor Destacado. Mantiene tarifa habitual."
        Sino
            Si puntaje_score >= 3.0 Entonces
                Escribir "Rango C: En Observación. Suspender comisiones transitorias."
            Sino
                Escribir "Rango D: Riesgo Alto. Desvincular de la plataforma."
            FinSi
        FinSi
    FinSi
```
> **Norma Arquitectónica:** Observe cómo cada declaración `Si` inicializada exige, sin excepción, el correspondiente cierre `FinSi` colocado perpendicularmente sobre la vertical de apertura original. 

### 5.4 Estructura Múltiple de Selección (SEGÚN / Switch-Case)
Esta estructura es la optimización sintáctica y de rendimiento por excelencia orientada a reemplazar condicionales anidados monolíticos, siempre y cuando aplique la regla general: **Se evalúan valores literales y constantes, no rangos lógicos (> ni <).**

El flujo tomará acción saltando directamente al caso (`Case`) concordante ahorrando tiempos de validación en cadena (ideal para desarrollar sistemas que emulen jerarquías fijas, APIs o CLI interactivos).

**Ejemplo Implementado (Sistema Interactivo de Menú):**
```pseint
Algoritmo ConsolaBancaria
    Definir comando_usuario Como Entero
    
    Escribir "=== TÉRMINO BANCARIO PRINCIPAL ==="
    Escribir "1. Ejecutar Transferencia Monetaria ACH"
    Escribir "2. Comprar Certificado a Término Fijo (CDT)"
    Escribir "3. Mostrar Estado de Extractos Crediticios"
    Escribir "0. Cerrar Conexión Segura"
    Escribir "Su Selección: "
    Leer comando_usuario
    
    Segun comando_usuario Hacer
        1:
            Escribir "Inicializando pasarela externa ACH..."
            // Sub-rutina asilada para transferencia
        2:
            Escribir "Despliegue de tasas de interés anual para CDT..."
        3:
            Escribir "Conectando al buró local de base de datos SQL..."
        0:
            Escribir "Finalizando Tokens de Conexión... Sistema Cerrado."
        De Otro Modo:
            Escribir "Excepción del Sistema: Código de comando no mapeado. Aborte."
    FinSegun
FinAlgoritmo
```

> La correcta implementación de las estructuras modulares cubiertas en este documento consolidan el cimiento inquebrantable que diferencia al desarrollador de software profesional del redactor básico de código. Domine esta lógica antes de avanzar estructuralmente.
