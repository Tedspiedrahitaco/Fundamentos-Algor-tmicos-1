# 🖥️ CLASE 4 — Estructura de Casos (SEGÚN / CASE)

**Curso:** Fundamentos Algorítmicos 1  
**Programa:** Análisis y Programación de Computadores  
**Código de guía:** AADS22-01-02  
**Duración de la clase:** ~8 horas (HAT)

---

## 🔁 Recuerdo de la Clase Anterior

Antes de avanzar a la estructura de casos, consolidemos lo aprendido en la **Clase 3**:

| Tema | Puntos clave |
|---|---|
| **Condicional Simple** | `SI condición ENTONCES ... FIN_SI` — Ejecuta un bloque solo si la condición es Verdadera |
| **Condicional Compuesta** | `SI condición ENTONCES ... SINO ... FIN_SI` — Siempre ejecuta uno de dos bloques |
| **Condicionales Anidadas** | SI dentro de otro SI — Permiten clasificar múltiples rangos o condiciones jerarquizadas |
| **Condiciones con AND / OR** | Combinan varias condiciones en una sola expresión lógica |
| **Prueba de escritorio con condicionales** | Rastrear qué bloque se ejecuta para cada posible valor de entrada |
| **Buenas prácticas** | Indentado correcto, cubrir todos los casos, simplificar antes de anidar |

> 💬 **Pregunta de repaso:** En el algoritmo de clasificación de notas (Clase 3), ¿qué clasificación obtiene un estudiante con nota **3.5**? ¿Qué pasa si la condición fuera `> 3.5` en lugar de `>= 3.5`? ¿Cambia el resultado?

---

## 📋 Contenidos de la Clase

1. [Limitaciones de las Condicionales Anidadas](#1-limitaciones-de-las-condicionales-anidadas)
2. [Estructura de Casos: SEGÚN (CASE/SWITCH)](#2-estructura-de-casos-según-caseswitch)
3. [Características y Reglas del SEGÚN](#3-características-y-reglas-del-según)
4. [Comparación: SEGÚN vs. Condicionales Anidadas](#4-comparación-según-vs-condicionales-anidadas)
5. [Ejemplos Avanzados](#5-ejemplos-avanzados)
6. [Diagrama de Flujo del SEGÚN](#6-diagrama-de-flujo-del-según)
7. [🎯 Actividad Evaluativa Final](#actividad-evaluativa-final)

---

## 1. Limitaciones de las Condicionales Anidadas

Imagina que debes crear un menú con 7 opciones usando condicionales anidadas:

```
SI opcion == 1 ENTONCES
  ESCRIBIR "Opción 1"
SINO
  SI opcion == 2 ENTONCES
    ESCRIBIR "Opción 2"
  SINO
    SI opcion == 3 ENTONCES
      ESCRIBIR "Opción 3"
    SINO
      SI opcion == 4 ENTONCES
        ... (siguen más niveles)
```

Este código se vuelve:
- 🔴 **Difícil de leer:** Muchos niveles de indentado.
- 🔴 **Propenso a errores:** Es fácil olvidar un `FIN_SI`.
- 🔴 **Difícil de mantener:** Agregar u quitar una opción implica reestructurar todo.

Para este problema existe una solución más elegante: la **estructura de casos**.

---

## 2. Estructura de Casos: SEGÚN (CASE/SWITCH)

### 2.1 Definición

La **estructura de casos** (llamada `SEGÚN`, `CASE` o `SWITCH` según el lenguaje) es una estructura de selección múltiple que evalúa el **valor exacto de una variable** y ejecuta el bloque de instrucciones correspondiente al caso que coincida.

> 💡 **Cuándo usar SEGÚN:** Cuando una variable puede tomar varios valores **específicos** (enteros, caracteres o cadenas cortas) y cada uno requiere una acción diferente.

### 2.2 Estructura General

```
SEGÚN <variable> HACER
  CASO valor1:
    // Instrucciones para el caso 1
  CASO valor2:
    // Instrucciones para el caso 2
  CASO valor3:
    // Instrucciones para el caso 3
  ...
  DE_OTRO_MODO:
    // Instrucciones si ningún caso coincide (opcional pero recomendado)
FIN_SEGÚN
```

| Componente | Función |
|---|---|
| `SEGÚN <variable>` | Indica qué variable se va a evaluar |
| `CASO valor:` | Define un valor específico a comparar |
| `DE_OTRO_MODO:` | Bloque que se ejecuta si ningún caso coincidió (equivale al `SINO` final) |
| `FIN_SEGÚN` | Cierra la estructura |

### 2.3 Equivalencia en lenguajes reales

| Pseudocódigo | PSeInt | Java / C | Python |
|---|---|---|---|
| `SEGÚN` | `Segun` | `switch` | `match` (v3.10+) |
| `CASO` | `1:`, `2:` | `case 1:` | `case 1:` |
| `DE_OTRO_MODO` | `De Otro Modo` | `default:` | `case _:` |

---

## 3. Características y Reglas del SEGÚN

1. **Solo compara valores exactos:** No se pueden usar rangos ni condiciones (`mayor que`, `menor o igual`) directamente en los casos. Para rangos, sigue siendo mejor usar condicionales anidadas.
2. **La variable evaluada debe ser de tipo discreto:** Funciona con `ENTERO`, `CARACTER` y `CADENA`. No es adecuado para `REAL`.
3. **Solo un caso se ejecuta:** Una vez que coincide un caso, se ejecuta su bloque y la estructura termina.
4. **`DE_OTRO_MODO` es opcional pero recomendado:** Captura cualquier valor inválido o no contemplado.
5. **Un caso puede agrupar varios valores:** Dependiendo del lenguaje/herramienta, es posible poner `CASO 1, 2:` para ejecutar el mismo bloque con dos valores distintos.

---

## 4. Comparación: SEGÚN vs. Condicionales Anidadas

### Problema: Mostrar el nombre del día según su número (1 al 7)

**Con condicionales anidadas (⚠️ verboso):**
```
SI dia == 1 ENTONCES
  ESCRIBIR "Lunes"
SINO
  SI dia == 2 ENTONCES
    ESCRIBIR "Martes"
  SINO
    SI dia == 3 ENTONCES
      ESCRIBIR "Miércoles"
    SINO
      ...
    FIN_SI
  FIN_SI
FIN_SI
```

**Con SEGÚN (✅ limpio y legible):**
```
SEGÚN dia HACER
  CASO 1: ESCRIBIR "Lunes"
  CASO 2: ESCRIBIR "Martes"
  CASO 3: ESCRIBIR "Miércoles"
  CASO 4: ESCRIBIR "Jueves"
  CASO 5: ESCRIBIR "Viernes"
  CASO 6: ESCRIBIR "Sábado"
  CASO 7: ESCRIBIR "Domingo"
  DE_OTRO_MODO: ESCRIBIR "Número de día inválido (debe ser 1-7)"
FIN_SEGÚN
```

---

## 5. Ejemplos Avanzados

### Ejemplo 1: Calculadora de operaciones básicas

```
ALGORITMO Calculadora
  VAR
    a, b, resultado : REAL
    operacion       : ENTERO
    valido          : BOOLEANO
  INICIO
    ESCRIBIR "Ingrese el primer número: "
    LEER a
    ESCRIBIR "Ingrese el segundo número: "
    LEER b
    
    ESCRIBIR "Seleccione la operación:"
    ESCRIBIR "  1 → Suma"
    ESCRIBIR "  2 → Resta"
    ESCRIBIR "  3 → Multiplicación"
    ESCRIBIR "  4 → División"
    LEER operacion
    
    valido ← Verdadero
    
    SEGÚN operacion HACER
      CASO 1:
        resultado ← a + b
        ESCRIBIR a, " + ", b, " = ", resultado
      CASO 2:
        resultado ← a - b
        ESCRIBIR a, " - ", b, " = ", resultado
      CASO 3:
        resultado ← a * b
        ESCRIBIR a, " × ", b, " = ", resultado
      CASO 4:
        SI b == 0 ENTONCES
          ESCRIBIR "Error: No se puede dividir por cero."
          valido ← Falso
        SINO
          resultado ← a / b
          ESCRIBIR a, " ÷ ", b, " = ", resultado
        FIN_SI
      DE_OTRO_MODO:
        ESCRIBIR "Opción inválida. Seleccione entre 1 y 4."
        valido ← Falso
    FIN_SEGÚN
  FIN
```

> 🔍 **Observa:** En el `CASO 4` hay una condicional anidada dentro del caso para manejar la división por cero. Las estructuras se pueden **combinar** libremente.

**Prueba de escritorio:**

| a | b | operacion | Caso ejecutado | Pantalla |
|---|---|---|---|---|
| 10 | 5 | 1 | CASO 1 | `10 + 5 = 15` |
| 10 | 5 | 3 | CASO 3 | `10 × 5 = 50` |
| 10 | 0 | 4 | CASO 4 → SI b==0 → V | `"Error: No se puede dividir por cero."` |
| 10 | 5 | 7 | DE_OTRO_MODO | `"Opción inválida..."` |

---

### Ejemplo 2: Sistema de clasificación de productos por código

```
ALGORITMO ClasificacionProducto
  VAR
    codigoCategoria : CARACTER
    nombreCategoria  : CADENA
    precio           : REAL
    stockUnidades    : ENTERO
  INICIO
    ESCRIBIR "Ingrese el código de categoría (A/B/C/D/E): "
    LEER codigoCategoria
    ESCRIBIR "Ingrese el precio del producto: "
    LEER precio
    ESCRIBIR "Ingrese las unidades en stock: "
    LEER stockUnidades
    
    SEGÚN codigoCategoria HACER
      CASO 'A':
        nombreCategoria ← "Electrónica Premium"
        SI precio < 500000 ENTONCES
          ESCRIBIR "⚠️ Precio inusualmente bajo para Electrónica Premium."
        FIN_SI
      CASO 'B':
        nombreCategoria ← "Electrodomésticos"
      CASO 'C':
        nombreCategoria ← "Ropa y Accesorios"
      CASO 'D':
        nombreCategoria ← "Alimentos y Bebidas"
        SI stockUnidades < 10 ENTONCES
          ESCRIBIR "🔔 Alerta: Stock bajo en Alimentos. Reabastecer pronto."
        FIN_SI
      CASO 'E':
        nombreCategoria ← "Libros y Papelería"
      DE_OTRO_MODO:
        nombreCategoria ← "Categoría Desconocida"
        ESCRIBIR "❌ El código '", codigoCategoria, "' no es válido."
    FIN_SEGÚN
    
    ESCRIBIR "─────────────────────────────────"
    ESCRIBIR "Categoría:  ", nombreCategoria
    ESCRIBIR "Precio:     $", precio
    ESCRIBIR "Stock:      ", stockUnidades, " unidades"
  FIN
```

---

### Ejemplo 3: Menú de sistema con SEGÚN + condicionales combinadas

```
ALGORITMO MenuSistema
  VAR
    opcion    : ENTERO
    usuario   : CADENA
    saldoCuenta : REAL
    monto       : REAL
  
  INICIO
    ESCRIBIR "Bienvenido al Sistema Bancario"
    ESCRIBIR "Ingrese su nombre de usuario: "
    LEER usuario
    saldoCuenta ← 500000    // Saldo inicial de ejemplo
    
    ESCRIBIR ""
    ESCRIBIR "=== MENÚ PRINCIPAL, ", usuario, " ==="
    ESCRIBIR "1. Consultar saldo"
    ESCRIBIR "2. Depositar"
    ESCRIBIR "3. Retirar"
    ESCRIBIR "4. Salir"
    LEER opcion
    
    SEGÚN opcion HACER
      CASO 1:
        ESCRIBIR "Su saldo actual es: $", saldoCuenta
      
      CASO 2:
        ESCRIBIR "Ingrese el monto a depositar: "
        LEER monto
        SI monto > 0 ENTONCES
          saldoCuenta ← saldoCuenta + monto
          ESCRIBIR "✅ Depósito exitoso. Nuevo saldo: $", saldoCuenta
        SINO
          ESCRIBIR "❌ El monto debe ser mayor a cero."
        FIN_SI
      
      CASO 3:
        ESCRIBIR "Ingrese el monto a retirar: "
        LEER monto
        SI monto <= 0 ENTONCES
          ESCRIBIR "❌ El monto debe ser mayor a cero."
        SINO
          SI monto > saldoCuenta ENTONCES
            ESCRIBIR "❌ Saldo insuficiente. Disponible: $", saldoCuenta
          SINO
            saldoCuenta ← saldoCuenta - monto
            ESCRIBIR "✅ Retiro exitoso. Nuevo saldo: $", saldoCuenta
          FIN_SI
        FIN_SI
      
      CASO 4:
        ESCRIBIR "Sesión cerrada. ¡Hasta pronto, ", usuario, "!"
      
      DE_OTRO_MODO:
        ESCRIBIR "❌ Opción inválida. Seleccione entre 1 y 4."
    FIN_SEGÚN
  FIN
```

---

## 6. Diagrama de Flujo del SEGÚN

```
             ┌──────────────────────────┐
             │  Evaluar valor variable  │
             └───────────┬──────────────┘
                         │
         ┌───────────────┼───────────────┐
         │               │               │
   ┌─────▼─────┐   ┌─────▼─────┐  ┌─────▼────────┐
   │ ¿== val1? │   │ ¿== val2? │  │ ¿== val3?    │
   └─────┬─────┘   └─────┬─────┘  └─────┬─────────┘
         │ V             │ V             │ V
   ┌─────▼─────┐   ┌─────▼─────┐  ┌─────▼─────────┐
   │ Bloque 1  │   │ Bloque 2  │  │  Bloque 3     │
   └─────┬─────┘   └─────┬─────┘  └─────┬─────────┘
         │               │               │
         └───────────────┴───────────────┘
                         │
                  (si ninguno coincide)
                   ┌─────▼─────┐
                   │DE_OTRO_   │
                   │MODO       │
                   └─────┬─────┘
                         │
                    Continúa...
```

---

## 🎯 Actividad Evaluativa Final

### 📋 EVALUACIÓN PRODUCTO — "Estructuras Condicionales y CASE"
**Tiempo estimado:** 120 minutos · **Modalidad:** Individual · **Nivel:** ⭐⭐⭐⭐⭐ Evaluativo

Esta evaluación es el **cierre del curso** y mide los resultados de aprendizaje de la guía AADS22-01-02.

---

### 🎯 PUNTO 1 — Estructura SEGÚN con menú de conversiones *(25 puntos)*

Diseña un algoritmo en pseudocódigo (e impleméntalo en PSeInt) que presente un **menú de conversiones de unidades**:

```
=== CONVERTIDOR UNIVERSAL ===
1. Kilómetros a Millas     (1 km = 0.621371 mi)
2. Kilogramos a Libras     (1 kg = 2.20462 lb)
3. Grados Celsius a Kelvin (K = °C + 273.15)
4. Litros a Galones        (1 L = 0.264172 gal)
5. Horas a Minutos y Segundos
0. Salir
```

**Requisitos:**
- Usa estructura `SEGÚN` para el menú.
- Solicita el valor a convertir dentro de cada caso.
- Muestra el resultado con exactamente 4 decimales y las unidades correspondientes.
- El caso `0` muestra un mensaje de despedida.
- `DE_OTRO_MODO` indica que la opción no existe.
- Realiza **prueba de escritorio** para las opciones 2 y 5.

---

### 🎯 PUNTO 2 — Combinación SEGÚN + Condicionales *(35 puntos)*

Una empresa de transporte cobra según la categoría del vehículo y la distancia recorrida:

**Tabla de tarifas base por km:**

| Categoría | Descripción | Tarifa/km |
|---|---|---|
| 1 | Motocicleta | $200 |
| 2 | Automóvil | $350 |
| 3 | Camioneta | $500 |
| 4 | Bus / Van | $800 |

**Reglas adicionales (usar condicionales dentro de los casos):**
- Si la distancia supera los **100 km**, aplicar un **descuento del 15%** sobre el total.
- Si la distancia supera los **200 km**, el descuento sube al **25%**.
- Un **cargo extra de $5.000** se aplica si el viaje es en horario nocturno (hora entre 20:00 y 05:59).

**El algoritmo debe:**
1. Solicitar: categoría del vehículo, distancia (km), hora del viaje (0-23).
2. Calcular la tarifa base usando `SEGÚN`.
3. Aplicar descuentos y cargos con condicionales.
4. Mostrar la liquidación detallada: tarifa base, descuento, recargo nocturno y **total a pagar**.
5. Realizar prueba de escritorio con: `categoría=2, distancia=150, hora=22`.

---

### 🎯 PUNTO 3 — Análisis Crítico *(20 puntos, respuesta escrita en cuaderno)*

Responde con argumentos técnicos:

**a)** ¿Por qué NO es posible usar la estructura `SEGÚN` para verificar si una nota es mayor o igual a 3.5? ¿Qué estructura usarías en su lugar y por qué?

**b)** Dado el siguiente fragmento de código, encuentra el error lógico y corrígelo. Explica qué consecuencia tiene el error:
```
ALGORITMO MayorDeTres
  VAR a, b, c : ENTERO
  INICIO
    LEER a
    LEER b
    LEER c
    
    SI a > b ENTONCES
      ESCRIBIR "El mayor es: ", a
    SINO
      SI b > c ENTONCES
        ESCRIBIR "El mayor es: ", b
      SINO
        ESCRIBIR "El mayor es: ", c
      FIN_SI
    FIN_SI
  FIN
```
**Pista:** Prueba con `a=5, b=3, c=8`. ¿Qué muestra el algoritmo? ¿Qué debería mostrar?

**c)** Explica con un ejemplo propio cuándo es mejor usar `SEGÚN` en lugar de condicionales anidadas y cuándo es al revés. Da un caso para cada uno.

---

### 🎯 PUNTO 4 — Proyecto Integrador Mini *(20 puntos)*

Diseña e implementa en PSeInt el siguiente sistema completo:

**"Sistema de Registro de Aprendices — SENA"**

El sistema debe:
1. Solicitar nombre del aprendiz.
2. Solicitar el número de ficha del programa:
   - Ficha `1` → `"Análisis y Programación de Computadores"`
   - Ficha `2` → `"Diseño Gráfico"`
   - Ficha `3` → `"Gestión Empresarial"`
   - Ficha `4` → `"Electricidad Industrial"`
   - Otro → `"Programa no registrado"`
3. Solicitar **2 notas cuantitativas** (escala 0.0 a 5.0).
4. Calcular el promedio.
5. Determinar el estado con condicional compuesta (aprobado si promedio `>= 3.5`).
6. Clasificar en nivel de desempeño con condicional anidada (4 niveles mínimo).
7. Mostrar el reporte completo incluyendo el **nombre del programa** (obtenido del `SEGÚN`).

**Entrega:** Pseudocódigo + implementación funcional en PSeInt + **3 ejecuciones de prueba** con imagenes/capturas.

---

### 📊 Rúbrica de la Evaluación Final

| Punto | Criterio | Valor |
|---|---|---|
| **1** | SEGÚN correcto con 5 casos + DE_OTRO_MODO | 10 |
| **1** | Cálculos correctos y formato de salida | 10 |
| **1** | Prueba de escritorio completa y sin errores | 5 |
| **2** | SEGÚN con tarifas correctas por categoría | 15 |
| **2** | Condicionales de descuento y recargo correctas | 15 |
| **2** | Liquidación detallada y prueba de escritorio | 5 |
| **3a** | Argumento técnico claro y correcto | 7 |
| **3b** | Error identificado + corrección + explicación | 7 |
| **3c** | Ejemplos propios claros y pertinentes | 6 |
| **4** | Sistema completo con SEGÚN + anidadas + notas | 15 |
| **4** | 3 pruebas funcionales en PSeInt | 5 |
| | **TOTAL** | **100** |

---

> 🏅 **Bonus (+5 puntos):** En el Punto 2, modifica el sistema para que también calcule el número de **días estimados del viaje** si la velocidad promedio del vehículo es de 80 km/h y el conductor maneja máximo 8 horas diarias. Muestra: `"Duración estimada: X días y Y horas"`.

---

> 📝 **Nota del Docente:** Esta evaluación de producto cierra el ciclo completo de la guía AADS22-01-02. El Punto 3 es deliberadamente de reflexión crítica: evalúa comprensión profunda más allá de la mecánica. El Punto 4 requiere integrar todos los elementos del curso. Revise especialmente la coherencia entre el pseudocódigo y la implementación en PSeInt y la calidad de los datos de prueba.
