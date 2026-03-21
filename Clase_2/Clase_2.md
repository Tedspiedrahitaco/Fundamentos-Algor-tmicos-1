# 🖥️ CLASE 2 — Variables, Procesamiento de la Información y Pseudocódigo

**Curso:** Fundamentos Algorítmicos 1  
**Programa:** Análisis y Programación de Computadores  
**Código de guía:** AADS22-01-02  
**Duración de la clase:** ~7 horas (HAT)

---

## 🔁 Recuerdo de la Clase Anterior

Antes de continuar, hagamos un repaso rápido de lo visto en la **Clase 1**:

| Tema | Puntos clave |
|---|---|
| **Lógica y Algoritmos** | Un algoritmo es un conjunto finito, ordenado y no ambiguo de instrucciones para resolver un problema |
| **Tipos de Algoritmos** | Cualitativos (sin cálculos, lenguaje natural) y Cuantitativos (con operaciones matemáticas) |
| **Diagramas de Flujo** | Representación gráfica con símbolos estándar: óvalo (inicio/fin), rectángulo (proceso), rombo (decisión), paralelogramo (E/S) |
| **Operadores** | Matemáticos (`+`,`-`,`*`,`/`,`%`), Relacionales (`>`,`<`,`==`,`!=`), Lógicos (`AND`,`OR`,`NOT`), Asignación (`←`) |
| **Prioridad** | `()` → `^` → `*`,`/`,`%` → `+`,`-` → Relacionales → `NOT` → `AND` → `OR` |
| **Tablas de Verdad** | Herramienta para evaluar todas las combinaciones posibles de condiciones lógicas |

> 💬 **Pregunta rápida de repaso:** ¿Cuál es el resultado de `(3 + 2) * 4 > 18 AND NOT (5 == 3)`? Respóndela en tu cuaderno antes de continuar.

---

## 📋 Contenidos de la Clase

1. [Procesamiento de la Información](#1-procesamiento-de-la-información)
2. [Variables y Constantes](#2-variables-y-constantes)
3. [Tipos de Datos](#3-tipos-de-datos)
4. [Acumuladores y Contadores](#4-acumuladores-y-contadores)
5. [Datos de Entrada, Proceso y Salida](#5-datos-de-entrada-proceso-y-salida)
6. [Pseudocódigo](#6-pseudocódigo)
7. [Prueba de Escritorio](#7-prueba-de-escritorio)
8. [Herramienta Intérprete de Pseudocódigo (PSeInt)](#8-herramienta-intérprete-de-pseudocódigo-pseint)
9. [🎯 Actividad de Clase](#actividad-de-clase)

---

## 1. Procesamiento de la Información

El **procesamiento de la información** es el núcleo de todo programa. Todo sistema computacional, sin importar su complejidad, sigue el mismo modelo básico:

```
ENTRADA  ──▶  PROCESO  ──▶  SALIDA
  (Datos)      (Algoritmo)    (Resultados)
```

| Etapa | Descripción | Ejemplos |
|---|---|---|
| **Entrada** | Datos que el usuario o sistema suministra | Edad, nombre, precio, temperatura |
| **Proceso** | Operaciones y transformaciones sobre los datos | Cálculos, comparaciones, asignaciones |
| **Salida** | Resultados que el algoritmo produce | Promedio, mensaje, valor calculado |

**Ejemplo del modelo:**
- **Entrada:** Dos números `a` y `b`
- **Proceso:** Calcular la suma `resultado = a + b`
- **Salida:** Mostrar `"La suma es: [resultado]"`

---

## 2. Variables y Constantes

### 2.1 Variable

Una **variable** es un espacio en la memoria del computador que tiene un **nombre** y almacena un **valor que puede cambiar** durante la ejecución del algoritmo.

**Analogía:** Imagina una variable como una caja etiquetada. La etiqueta es el nombre de la variable y el contenido de la caja es el valor.

```
 ┌─────────────┐
 │  edad = 20  │   ← La caja se llama "edad" y contiene el valor 20
 └─────────────┘
```

**Reglas para nombrar variables:**
- ✅ Deben comenzar con una **letra** (no con número ni símbolo)
- ✅ Pueden contener letras, números y guión bajo `_`
- ✅ No deben tener espacios (`nombreCompleto`, no `nombre completo`)
- ✅ No deben ser palabras reservadas (`SI`, `ENTONCES`, `LEER`, etc.)
- ✅ Deben ser **descriptivos** del dato que almacenan

| Nombre válido | Nombre inválido | Razón del error |
|---|---|---|
| `edad` | `1edad` | Empieza con número |
| `nombreEstudiante` | `nombre estudiante` | Tiene espacio |
| `promedioFinal` | `promedio-final` | Usa guión simple |
| `totalVentas` | `SI` | Es palabra reservada |

### 2.2 Constante

Una **constante** es un espacio en memoria cuyo valor se establece una vez y **NO cambia** durante la ejecución del algoritmo.

```
CONSTANTE PI = 3.14159
CONSTANTE IVA = 0.19
CONSTANTE NOMBRE_EMPRESA = "SENA"
```

**¿Cuándo usar constante?** Cuando el valor es fijo y conocido de antemano (PI, IVA, velocidad de la luz, número de días en una semana).

### 2.3 Diferencia entre Variable y Constante

| Aspecto | Variable | Constante |
|---|---|---|
| **Valor** | Puede cambiar | No cambia nunca |
| **Declaración** | `VAR nombre : tipo` | `CONSTANTE NOMBRE = valor` |
| **Uso** | Datos dinámicos | Valores fijos del problema |

---

## 3. Tipos de Datos

Cada variable o constante debe tener un **tipo de dato** que define qué clase de información puede almacenar:

| Tipo | Descripción | Ejemplos |
|---|---|---|
| **Entero** (`INTEGER`) | Números sin decimales | `-10`, `0`, `25`, `1000` |
| **Real / Flotante** (`REAL`) | Números con decimales | `3.14`, `-0.5`, `100.75` |
| **Carácter** (`CHAR`) | Un solo símbolo | `'A'`, `'z'`, `'9'` |
| **Cadena** (`STRING`) | Texto (secuencia de caracteres) | `"Hola"`, `"Juan Pérez"` |
| **Booleano** (`BOOLEAN`) | Solo dos valores posibles | `Verdadero`, `Falso` |

**Ejemplo de declaración de variables con tipos:**
```
VAR
  nombre     : STRING
  edad       : INTEGER
  promedio   : REAL
  aprobado   : BOOLEAN
  inicial    : CHAR
```

### ¿Por qué importa el tipo de dato?

Porque define qué operaciones son válidas sobre el dato:
- Con enteros y reales puedes sumar, restar, dividir.
- Con cadenas puedes concatenar (`"Hola" + " Mundo"` = `"Hola Mundo"`).
- Con booleanos puedes usar AND, OR, NOT.

---

## 4. Acumuladores y Contadores

### 4.1 Acumulador

Un **acumulador** es una variable que **acumula (suma) valores** de manera progresiva. Se inicializa en `0` antes de usarse.

**Ejemplo:** Sumar las notas de 3 exámenes:
```
suma ← 0
suma ← suma + nota1    // suma = 0 + 85 = 85
suma ← suma + nota2    // suma = 85 + 90 = 175
suma ← suma + nota3    // suma = 175 + 70 = 245
```

> 🔑 La clave de un acumulador es que siempre se asigna así: `acumulador ← acumulador + nuevoValor`

### 4.2 Contador

Un **contador** es una variable que **lleva la cuenta** de cuántas veces ocurre algo. Generalmente se incrementa de **1 en 1** y se inicializa en `0`.

**Ejemplo:** Contar cuántos estudiantes aprobaron:
```
totalAprobados ← 0
SI nota1 >= 60 ENTONCES totalAprobados ← totalAprobados + 1
SI nota2 >= 60 ENTONCES totalAprobados ← totalAprobados + 1
SI nota3 >= 60 ENTONCES totalAprobados ← totalAprobados + 1
```

| Concepto | Propósito | Inicialización | Incremento típico |
|---|---|---|---|
| **Acumulador** | Sumar valores sucesivos | `acum ← 0` | `acum ← acum + valor` |
| **Contador** | Contar ocurrencias | `cont ← 0` | `cont ← cont + 1` |

---

## 5. Datos de Entrada, Proceso y Salida

En pseudocódigo, las instrucciones para manejar E/S son:

| Operación | Instrucción en Pseudocódigo | Descripción |
|---|---|---|
| **Entrada** | `LEER variable` | El usuario ingresa un dato que se almacena en la variable |
| **Salida** | `ESCRIBIR "texto"` o `MOSTRAR variable` | Muestra información en pantalla |
| **Asignación** | `variable ← expresión` | Guarda el resultado de una expresión en la variable |

---

## 6. Pseudocódigo

### 6.1 ¿Qué es el Pseudocódigo?

El **pseudocódigo** es una forma de representar un algoritmo usando un **lenguaje intermedio** entre el lenguaje natural (español) y el lenguaje de programación. Permite diseñar la lógica del programa sin preocuparse por la sintaxis exacta de un lenguaje específico.

> 💡 **Ventaja:** Puedes enfocarte en resolver el problema lógicamente antes de preocuparte por cómo escribirlo en Python, Java, C, etc.

### 6.2 Estructura General del Pseudocódigo

```
ALGORITMO NombreDelAlgoritmo

  // Declaración de variables y constantes
  VAR
    variable1 : TIPO
    variable2 : TIPO
  
  INICIO
    // Instrucciones
    LEER variable1
    variable2 ← variable1 * 2
    ESCRIBIR "El resultado es: ", variable2
  FIN
```

### 6.3 Palabras Reservadas Comunes

| Palabra | Uso |
|---|---|
| `ALGORITMO` | Encabezado del algoritmo |
| `VAR` | Sección de declaración de variables |
| `INICIO` / `FIN` | Delimitan el cuerpo principal |
| `LEER` | Entrada de datos |
| `ESCRIBIR` / `MOSTRAR` | Salida de datos |
| `SI...ENTONCES...SINO` | Condicional (se verá en Clase 3) |
| `←` o `:=` | Operador de asignación |

### 6.4 Ejemplos de Algoritmos en Pseudocódigo

**Ejemplo 1: Calcular el área de un triángulo**
```
ALGORITMO AreaTriangulo

  VAR
    base   : REAL
    altura : REAL
    area   : REAL
  
  INICIO
    ESCRIBIR "Ingrese la base del triángulo: "
    LEER base
    ESCRIBIR "Ingrese la altura del triángulo: "
    LEER altura
    
    area ← (base * altura) / 2
    
    ESCRIBIR "El área del triángulo es: ", area
  FIN
```

**Ejemplo 2: Calcular el promedio de 3 notas**
```
ALGORITMO CalcularPromedio

  VAR
    nota1, nota2, nota3 : REAL
    suma, promedio       : REAL
  
  INICIO
    ESCRIBIR "Ingrese la nota 1: "
    LEER nota1
    ESCRIBIR "Ingrese la nota 2: "
    LEER nota2
    ESCRIBIR "Ingrese la nota 3: "
    LEER nota3
    
    suma     ← nota1 + nota2 + nota3
    promedio ← suma / 3
    
    ESCRIBIR "El promedio es: ", promedio
  FIN
```

**Ejemplo 3: Calcular el salario neto**
```
ALGORITMO SalarioNeto

  CONSTANTE PORCENTAJE_DESCUENTO = 0.08
  
  VAR
    salarioBruto   : REAL
    descuento      : REAL
    salarioNeto    : REAL
  
  INICIO
    ESCRIBIR "Ingrese el salario bruto: "
    LEER salarioBruto
    
    descuento   ← salarioBruto * PORCENTAJE_DESCUENTO
    salarioNeto ← salarioBruto - descuento
    
    ESCRIBIR "Descuento aplicado: ", descuento
    ESCRIBIR "Salario neto: ", salarioNeto
  FIN
```

---

## 7. Prueba de Escritorio

### 7.1 ¿Qué es una Prueba de Escritorio?

La **prueba de escritorio** (o trazado de algoritmo) es el proceso de **simular manualmente la ejecución** de un algoritmo paso a paso, llevando registro del valor de cada variable en cada instrucción. Permite detectar errores lógicos **antes** de ejecutar el programa en un computador.

### 7.2 ¿Cómo hacer una Prueba de Escritorio?

1. Dibuja una **tabla** con una columna por cada variable del algoritmo.
2. Lee el pseudocódigo instrucción por instrucción.
3. En cada instrucción, **actualiza** la tabla con los nuevos valores.
4. Al final, verifica si la salida es la esperada.

### 7.3 Ejemplo: Prueba de escritorio para el promedio de 3 notas

**Datos de entrada:** `nota1 = 80`, `nota2 = 90`, `nota3 = 70`

| Instrucción | nota1 | nota2 | nota3 | suma | promedio | Pantalla |
|---|---|---|---|---|---|---|
| Inicio | - | - | - | - | - | |
| LEER nota1 | **80** | - | - | - | - | |
| LEER nota2 | 80 | **90** | - | - | - | |
| LEER nota3 | 80 | 90 | **70** | - | - | |
| suma ← nota1+nota2+nota3 | 80 | 90 | 70 | **240** | - | |
| promedio ← suma / 3 | 80 | 90 | 70 | 240 | **80.0** | |
| ESCRIBIR promedio | 80 | 90 | 70 | 240 | 80.0 | `"El promedio es: 80.0"` |

✅ El resultado es correcto: `(80 + 90 + 70) / 3 = 80.0`

---

## 8. Herramienta Intérprete de Pseudocódigo (PSeInt)

### 8.1 ¿Qué es PSeInt?

**PSeInt** (Pseudo Intérprete) es una herramienta gratuita y de código abierto que permite **escribir y ejecutar pseudocódigo** en español. Es ideal para aprender los fundamentos de la programación sin la complejidad de un lenguaje real.

### 8.2 Descarga e Instalación

1. Visita: [https://pseint.sourceforge.net/](https://pseint.sourceforge.net/)
2. Descarga el instalador para tu sistema operativo (Windows/Linux/Mac).
3. Ejecuta el instalador y acepta la configuración predeterminada.
4. Abre PSeInt desde el menú de inicio.

### 8.3 Interfaz de PSeInt

```
┌──────────────────────────────────────────────────────────┐
│  [Barra de herramientas: Nuevo | Abrir | Guardar | ▶ ]  │
├────────────────────────────┬─────────────────────────────┤
│                            │                             │
│  Panel de edición          │  Panel de diagramas         │
│  (aquí escribes el         │  (generado automáticamente) │
│   pseudocódigo)            │                             │
│                            │                             │
├────────────────────────────┴─────────────────────────────┤
│  Consola de ejecución (aquí se muestran los resultados)  │
└──────────────────────────────────────────────────────────┘
```

### 8.4 Tu Primer Programa en PSeInt

Escribe esto en el editor y presiona ▶ (Ejecutar):

```
Algoritmo MiPrimerPrograma
  Definir nombre Como Cadena
  Definir edad Como Entero
  
  Escribir "¿Cuál es tu nombre?"
  Leer nombre
  Escribir "¿Cuántos años tienes?"
  Leer edad
  
  Escribir "Hola, ", nombre, "! Tienes ", edad, " años."
FinAlgoritmo
```

> ⚠️ **Nota:** PSeInt usa `Definir variable Como Tipo` en lugar de `VAR variable : Tipo`. Ambas son notaciones de pseudocódigo; la sintaxis exacta puede variar según la herramienta.

---

## 🎯 Actividad de Clase

### Actividad 2A — Pseudocódigo y Prueba de Escritorio
**Tiempo estimado:** 90 minutos | **Modalidad:** Individual

**Instrucciones:**

Para cada uno de los siguientes problemas debes:
- ✅ Escribir el pseudocódigo completo (con declaración de variables y tipos).
- ✅ Realizar la prueba de escritorio con los datos de prueba indicados.
- ✅ Implementarlo en PSeInt y ejecutarlo.

---

**Problema 1 — Conversión de temperatura** *(30 min)*  
Diseña un algoritmo que convierta una temperatura en grados Celsius a Fahrenheit.  
Fórmula: `F = (C × 9/5) + 32`  
**Datos de prueba:** `C = 0`, `C = 100`, `C = 37`  
**Salida esperada:** Mostrar el valor convertido con la unidad (`"XX °C equivale a XX.XX °F"`)

---

**Problema 2 — Factura de compra** *(35 min)*  
Diseña un algoritmo que calcule el valor total de una compra:
- El usuario ingresa el nombre del producto, el precio unitario y la cantidad.
- El algoritmo calcula el subtotal (`precio × cantidad`).
- Se aplica un descuento del 10% si el subtotal supera $100.000.
- Al subtotal con descuento (si aplica) se le agrega el IVA del 19%.
- El algoritmo muestra: nombre del producto, subtotal, descuento aplicado, IVA y **total a pagar**.

**Datos de prueba:** `"Audífonos"`, precio = `$85.000`, cantidad = `2`

---

**Problema 3 — Acumulador y contador** *(25 min)*  
Diseña un algoritmo que:
- Lea 5 números enteros del usuario.
- Calcule la **suma total** (usando un acumulador).
- Cuente **cuántos de esos números son positivos** (usando un contador).
- Muestre la suma y la cantidad de positivos.

**Datos de prueba:** `10, -3, 7, -1, 4`  
**Salida esperada:** `"Suma total: 17"` y `"Números positivos: 3"`

---

> 📝 **Criterios de evaluación:**  
> - Variables correctamente declaradas con su tipo: 25%  
> - Lógica del pseudocódigo sin errores: 40%  
> - Prueba de escritorio completa y correcta: 20%  
> - Implementación funcional en PSeInt: 15%

---

> 📝 **Nota del Docente:** Enfatice la diferencia entre variable y constante con ejemplos reales. La prueba de escritorio es la habilidad más importante de esta clase: el estudiante que aprende a trazar un algoritmo a mano raramente comete errores de lógica al programar. Dedique tiempo suficiente a esta técnica antes de pasar a PSeInt.
