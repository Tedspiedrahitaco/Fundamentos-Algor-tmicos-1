# 🖥️ CLASE 1 — Introducción a la Lógica, Algoritmos y Operadores

**Curso:** Fundamentos Algorítmicos 1  
**Programa:** Análisis y Programación de Computadores  
**Código de guía:** AADS22-01-02  
**Duración de la clase:** ~7 horas (HAT)

---

## 📋 Contenidos de la Clase

1. [Lógica y Algoritmos](#1-lógica-y-algoritmos)
2. [Tipos de Algoritmos](#2-tipos-de-algoritmos)
3. [Características de un Algoritmo](#3-características-de-un-algoritmo)
4. [Diagramas de Flujo y Representaciones](#4-diagramas-de-flujo-y-representaciones)
5. [Operadores](#5-operadores)
6. [Prioridad de las Operaciones](#6-prioridad-de-las-operaciones)
7. [Tablas de Verdad](#7-tablas-de-verdad)
8. [🎯 Actividad de Clase](#actividad-de-clase)

---

## 1. Lógica y Algoritmos

### ¿Qué es la Lógica?

La **lógica** es la disciplina que estudia la forma correcta de razonar y de argumentar. En el contexto de la programación y la informática, la lógica nos permite ordenar y estructurar el pensamiento para resolver problemas de manera sistemática.

> 💡 **Piénsalo así:** Antes de escribir una sola línea de código, necesitas pensar claramente en *qué* debes hacer y *en qué orden* debes hacerlo. Eso es lógica.

### ¿Qué es un Algoritmo?

Un **algoritmo** es un conjunto finito, ordenado y no ambiguo de instrucciones o pasos que permiten resolver un problema o realizar una tarea específica.

**Características clave de la definición:**
- **Finito:** Tiene un inicio y un fin claros. No puede ejecutarse indefinidamente.
- **Ordenado:** Los pasos siguen una secuencia lógica y determinada.
- **No ambiguo:** Cada instrucción es precisa y clara; no da lugar a interpretaciones distintas.

**Ejemplo cotidiano — Algoritmo para preparar una taza de café:**
```
INICIO
  1. Llenar la cafetera con agua.
  2. Agregar el café molido al filtro.
  3. Encender la cafetera.
  4. Esperar a que el café esté listo.
  5. Servir el café en una taza.
FIN
```
Observa que si cambias el orden de los pasos (por ejemplo, encender la cafetera antes de agregar el agua), el resultado no será el esperado. Esto demuestra la importancia del **orden** en un algoritmo.

---

## 2. Tipos de Algoritmos

Los algoritmos se clasifican en dos grandes grupos según la naturaleza de los datos con los que trabajan:

### 2.1 Algoritmos Cualitativos

Son aquellos que describen pasos o instrucciones usando **lenguaje natural**, sin involucrar cálculos matemáticos. Se basan en decisiones de tipo lógico o descriptivo.

**Ejemplos:**
- Instrucciones para cambiar una llanta.
- Pasos para matricularse en una institución educativa.
- Receta de cocina.

**Ejercicio de interpretación — Algoritmo: "Cruzar la calle":**
```
INICIO
  1. Acércate al borde del andén.
  2. Observa si el semáforo está en rojo para los vehículos.
  3. SI el semáforo está en rojo → avanza por la cebra peatonal.
     SI NO → espera hasta que el semáforo cambie a rojo.
  4. Llega al otro lado de la calle.
FIN
```

### 2.2 Algoritmos Cuantitativos

Son aquellos que involucran **operaciones matemáticas** y manejo numérico de datos. La mayoría de los algoritmos computacionales son de este tipo.

**Ejemplos:**
- Calcular el promedio de notas de un estudiante.
- Determinar si un número es par o impar.
- Calcular el cambio en una caja registradora.

**Ejemplo — Algoritmo: "Calcular el área de un rectángulo":**
```
INICIO
  1. Leer el valor de la base (b).
  2. Leer el valor de la altura (h).
  3. Calcular: área = b × h
  4. Mostrar el resultado del área.
FIN
```

### Secuencias e Interpretación

Una **secuencia** en un algoritmo es la ejecución de instrucciones en el orden exacto en que están escritas, una tras otra, sin saltos ni repeticiones (por ahora). Es la estructura más básica:

```
Instrucción 1
Instrucción 2
Instrucción 3
...
```

La **interpretación** de un algoritmo consiste en leer y entender cada paso para predecir qué resultado producirá. Esta habilidad es fundamental para detectar errores lógicos antes de programar.

---

## 3. Características de un Algoritmo

Un algoritmo bien diseñado debe cumplir con estas propiedades:

| Característica | Descripción | Ejemplo de violación |
|---|---|---|
| **Finitud** | Debe terminar en algún momento | Un bucle que nunca se detiene |
| **Definición** | Cada paso debe estar definido con precisión | "Mezcla un poco de todo" |
| **Entrada** | Puede tener cero o más datos de entrada | Calcular sin pedir ningún valor |
| **Salida** | Debe producir al menos un resultado | Un proceso que no muestra nada |
| **Eficacia** | Cada operación debe ser realizable y útil | Dividir por cero |

---

## 4. Diagramas de Flujo y Representaciones

Un **diagrama de flujo** es la representación gráfica de un algoritmo mediante símbolos estándar conectados por flechas que indican la dirección del flujo de datos.

### 4.1 Símbolos Estándar (ISO)

| Símbolo | Forma | Uso |
|---|---|---|
| **Inicio / Fin** | Óvalo / Elipse | Marca el comienzo o el final del algoritmo |
| **Proceso** | Rectángulo | Representa una operación o cálculo (ej: `área = b × h`) |
| **Decisión** | Rombo | Plantea una condición (Sí/No, Verdadero/Falso) |
| **Entrada/Salida** | Paralelogramo | Leer un dato del usuario o mostrar un resultado |
| **Conector** | Círculo | Une partes del diagrama para evitar flechas cruzadas |
| **Flecha** | → | Indica el orden/flujo entre los pasos |

### 4.2 Ejemplo: Diagrama de flujo para calcular el área de un rectángulo

```
       ┌──────────┐
       │  INICIO  │
       └────┬─────┘
            │
      ┌─────▼──────┐
      │  Leer b, h │
      └─────┬──────┘
            │
      ┌─────▼──────────┐
      │ área = b × h   │
      └─────┬──────────┘
            │
      ┌─────▼──────────────┐
      │ Mostrar "área =...",│
      └─────┬──────────────┘
            │
       ┌────▼─────┐
       │   FIN    │
       └──────────┘
```

### 4.3 Tipos de Diagramas para Representar Algoritmos

- **Diagramas de flujo:** Son los más formales y utilizan símbolos estándar ISO. Ideales para documentación técnica.
- **Diagramas en bloques (DFD):** Representan el flujo de datos entre procesos a un nivel más abstracto. Populares en análisis de sistemas.
- **Diagramas libres (Nassi-Shneiderman):** Estructuras de caja anidadas que usan solo rectángulos. Eliminan las flechas y enfatizan la estructura.

---

## 5. Operadores

Los **operadores** son símbolos que indican al computador qué operación debe realizar con los datos. Se clasifican en cuatro grupos:

### 5.1 Operadores Matemáticos (Aritméticos)

Se utilizan para realizar cálculos numéricos.

| Operador | Operación | Ejemplo | Resultado |
|---|---|---|---|
| `+` | Suma | `10 + 3` | `13` |
| `-` | Resta | `10 - 3` | `7` |
| `*` | Multiplicación | `10 * 3` | `30` |
| `/` | División | `10 / 4` | `2.5` |
| `%` o `MOD` | Módulo (resto) | `10 MOD 3` | `1` |
| `^` o `**` | Potencia | `2 ^ 3` | `8` |

> ⚠️ El operador **módulo** (`MOD`) devuelve el **residuo** de una división entera. Es muy útil para saber si un número es par (`n MOD 2 = 0`) o impar (`n MOD 2 ≠ 0`).

### 5.2 Operadores Relacionales (de Comparación)

Comparan dos valores y producen un resultado **booleano**: `Verdadero (V)` o `Falso (F)`.

| Operador | Significado | Ejemplo | Resultado |
|---|---|---|---|
| `>` | Mayor que | `5 > 3` | `Verdadero` |
| `<` | Menor que | `5 < 3` | `Falso` |
| `>=` | Mayor o igual que | `5 >= 5` | `Verdadero` |
| `<=` | Menor o igual que | `4 <= 3` | `Falso` |
| `==` | Igual a | `5 == 5` | `Verdadero` |
| `!=` o `<>` | Diferente de | `5 != 3` | `Verdadero` |

### 5.3 Operadores Lógicos

Se usan para combinar o negar condiciones.

| Operador | Equivalente | Descripción |
|---|---|---|
| `AND` o `Y` | ∧ | Verdadero **solo si ambas** condiciones son verdaderas |
| `OR` o `O` | ∨ | Verdadero si **al menos una** condición es verdadera |
| `NOT` o `NO` | ¬ | **Niega** el valor de una condición |

**Ejemplos:**
```
(5 > 3) AND (10 < 20)   →  V AND V  =  Verdadero
(5 > 3) AND (10 > 20)   →  V AND F  =  Falso
(5 > 3) OR  (10 > 20)   →  V OR  F  =  Verdadero
NOT (5 > 3)              →  NOT V    =  Falso
```

### 5.4 Operador de Asignación

Asigna un **valor** a una variable. En pseudocódigo se usa frecuentemente `←` o `:=`.

```
edad ← 20         // La variable 'edad' almacena el valor 20
suma ← a + b      // La variable 'suma' almacena el resultado de a + b
```

---

## 6. Prioridad de las Operaciones

Cuando una expresión contiene múltiples operadores, el computador los evalúa en un orden específico (igual que en matemáticas):

| Prioridad | Operador | Descripción |
|---|---|---|
| 1° (más alta) | `()` | Paréntesis — se evalúan primero |
| 2° | `^` / `**` | Potencia |
| 3° | `*`, `/`, `%` | Multiplicación, División, Módulo |
| 4° | `+`, `-` | Suma, Resta |
| 5° | `>`, `<`, `>=`, `<=`, `==`, `!=` | Relacionales |
| 6° | `NOT` | Negación lógica |
| 7° | `AND` | Conjunción lógica |
| 8° (más baja) | `OR` | Disyunción lógica |

**Regla de igualdad:** Si dos operadores tienen la misma prioridad, se evalúan de **izquierda a derecha**.

**Ejemplo resuelto:**
```
Expresión:  3 + 4 * 2 ^ 2 - (6 / 3)

Paso 1: Paréntesis       →  3 + 4 * 2 ^ 2 - 2
Paso 2: Potencia         →  3 + 4 * 4 - 2
Paso 3: Multiplicación   →  3 + 16 - 2
Paso 4: Suma/Resta       →  17
```

---

## 7. Tablas de Verdad

Las **tablas de verdad** son herramientas que nos permiten analizar el resultado de una expresión lógica evaluando **todas las combinaciones posibles** de sus variables booleanas (V/F).

### 7.1 Tabla del operador AND (Y - Conjunción)

| A | B | A AND B |
|:---:|:---:|:---:|
| V | V | **V** |
| V | F | F |
| F | V | F |
| F | F | F |

> 🔑 **Regla:** AND es Verdadero **solo** cuando **ambos** valores son Verdaderos.

### 7.2 Tabla del operador OR (O - Disyunción)

| A | B | A OR B |
|:---:|:---:|:---:|
| V | V | **V** |
| V | F | **V** |
| F | V | **V** |
| F | F | F |

> 🔑 **Regla:** OR es Falso **solo** cuando **ambos** valores son Falsos.

### 7.3 Tabla del operador NOT (NO - Negación)

| A | NOT A |
|:---:|:---:|
| V | **F** |
| F | **V** |

> 🔑 **Regla:** NOT invierte siempre el valor original.

### 7.4 Ejemplo: Tabla de verdad compuesta

Evalúa la expresión: `(A AND B) OR (NOT C)`

| A | B | C | A AND B | NOT C | (A AND B) OR (NOT C) |
|:---:|:---:|:---:|:---:|:---:|:---:|
| V | V | V | V | F | **V** |
| V | V | F | V | V | **V** |
| V | F | V | F | F | **F** |
| V | F | F | F | V | **V** |
| F | V | V | F | F | **F** |
| F | V | F | F | V | **V** |
| F | F | V | F | F | **F** |
| F | F | F | F | V | **V** |

---

## 🎯 Actividad de Clase

### Actividad 1A — Algoritmos Cualitativos en Diagrama de Flujo
**Tiempo estimado:** 60 minutos | **Modalidad:** Individual o parejas

**Instrucciones:**

1. **Parte 1 (20 min) — Escritura de algoritmo:**  
   Elige UNO de los siguientes escenarios y escribe el algoritmo completo en lenguaje natural con al menos 8 pasos ordenados:
   - Proceso de inscripción a un curso en línea.
   - Preparación para salir de casa en la mañana (trabajo/estudio).
   - Comprar un producto en una tienda virtual.

2. **Parte 2 (25 min) — Diagrama de flujo:**  
   Convierte tu algoritmo escrito en la Parte 1 en un **diagrama de flujo** utilizando los símbolos estándar. Dibújalo a mano en papel o en una herramienta digital (draw.io, Lucidchart).  
   - Debe incluir: Inicio, al menos 2 entradas, 2 procesos, 1 decisión (Sí/No) y Fin.

3. **Parte 3 (15 min) — Operadores y Tablas de Verdad:**  
   Resuelve los siguientes ejercicios:

   **a)** Calcula el resultado paso a paso (muestra cada paso):
   ```
   Resultado = ((8 + 2) * 3 - 5) / (2 ^ 2 + 1)
   ```

   **b)** Construye la tabla de verdad completa para la expresión:
   ```
   (A OR B) AND (NOT A OR C)
   ```
   *(Recuerda: debes evaluar todas las combinaciones de V/F para A, B y C = 8 filas)*

   **c)** Determina si la siguiente afirmación es Verdadera o Falsa y justifica:
   ```
   Si: edad = 17, tienePermiso = Verdadero
   Expresión: (edad >= 18) OR tienePermiso
   ```

**Entrega:** Al finalizar, socializa un ejercicio con el grupo. El docente seleccionará al azar a 2 estudiantes para exponer.

---

> 📝 **Nota del Docente:** Esta clase sienta las bases conceptuales del curso. Es fundamental que los estudiantes comprendan la diferencia entre algoritmos cualitativos y cuantitativos, y que puedan evaluar expresiones con operadores antes de avanzar al pseudocódigo. Refuerce con ejemplos cotidianos.
