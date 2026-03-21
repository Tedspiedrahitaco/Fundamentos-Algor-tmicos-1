# 🖥️ CLASE 3 — Condicionales: Simples, Compuestas, Anidadas y Herramienta Intérprete

**Curso:** Fundamentos Algorítmicos 1  
**Programa:** Análisis y Programación de Computadores  
**Código de guía:** AADS22-01-02  
**Duración de la clase:** ~8 horas (HAT)

---

## 🔁 Recuerdo de la Clase Anterior

Antes de continuar con los condicionales, repasemos los fundamentos vistos en la **Clase 2**:

| Tema | Puntos clave |
|---|---|
| **Modelo E-P-S** | Todo programa sigue el esquema: Entrada → Proceso → Salida |
| **Variables** | Espacio en memoria con nombre y valor variable. Se declaran con tipo de dato |
| **Constantes** | Valor fijo que no cambia durante la ejecución (`CONSTANTE PI = 3.14159`) |
| **Tipos de datos** | Entero, Real, Carácter, Cadena, Booleano |
| **Acumuladores** | Variable que suma valores progresivamente: `total ← total + valor` |
| **Contadores** | Variable que cuenta ocurrencias: `cont ← cont + 1` |
| **Pseudocódigo** | Lenguaje intermedio entre lenguaje natural y lenguaje de programación |
| **Prueba de escritorio** | Rastreo manual del algoritmo para verificar su corrección línea a línea |
| **PSeInt** | Herramienta para escribir y ejecutar pseudocódigo en español |

> 💬 **Pregunta de repaso:** Dado el siguiente fragmento de pseudocódigo, realiza una prueba de escritorio con `x = 5`:
> ```
> y ← x * 3
> z ← y - x + 2
> ESCRIBIR z
> ```
> ¿Qué valor muestra en pantalla?

---

## 📋 Contenidos de la Clase

1. [¿Qué son las Estructuras Condicionales?](#1-qué-son-las-estructuras-condicionales)
2. [Condicional Simple (SI...ENTONCES)](#2-condicional-simple-sientonces)
3. [Condicional Compuesta (SI...ENTONCES...SINO)](#3-condicional-compuesta-sientoncesino)
4. [Condicionales Anidadas](#4-condicionales-anidadas)
5. [Buenas Prácticas con Condicionales](#5-buenas-prácticas-con-condicionales)
6. [🏆 Actividad Integradora (Clases 1, 2 y 3)](#actividad-integradora)

---

## 1. ¿Qué son las Estructuras Condicionales?

Hasta ahora, los algoritmos que hemos diseñado son **secuenciales**: ejecutan todas sus instrucciones en orden, de arriba a abajo, sin omitir ninguna.

Pero la realidad exige **tomar decisiones**. Por ejemplo:
- Si la nota es mayor o igual a 60 → el estudiante **aprueba**; de lo contrario → **reprueba**.
- Si el saldo es suficiente → realiza el pago; si no → muestra un error.

Las **estructuras condicionales** (o de selección) permiten que el algoritmo **evalúe una condición** y elija entre dos o más caminos de ejecución según el resultado (`Verdadero` o `Falso`).

```
         ┌─────────────────┐
         │  CONDICIÓN      │
         └──────┬──────────┘
           V    │    F
    ┌──────▼──┐  │  ┌──────────┐
    │ Bloque  │  │  │ Bloque   │
    │  VERDAD │  │  │  FALSO   │
    └─────────┘  └──┴──────────┘
         │            │
         └────────────┘
              │
         Continúa...
```

---

## 2. Condicional Simple (SI...ENTONCES)

### 2.1 Definición

La **condicional simple** evalúa una condición. Si es **Verdadera**, ejecuta un bloque de instrucciones. Si es **Falsa**, **no hace nada** y el algoritmo continúa con la siguiente instrucción.

### 2.2 Estructura

```
SI <condición> ENTONCES
    // Instrucciones que se ejecutan solo si la condición es Verdadera
FIN_SI
```

### 2.3 Diagrama de Flujo

```
          ┌──────────────┐
          │  condición   │
          └──────┬───────┘
            V    │    F
     ┌──────▼──┐ │
     │  Bloque │ │
     │   SI    │ │
     └──────┬──┘ │
            │    │
            └────┘
                │
           Continúa...
```

### 2.4 Ejemplos

**Ejemplo 1: Verificar si un número es positivo**
```
ALGORITMO NumeroPositivo
  VAR
    numero : REAL
  INICIO
    ESCRIBIR "Ingrese un número: "
    LEER numero
    
    SI numero > 0 ENTONCES
      ESCRIBIR "El número es positivo."
    FIN_SI
    
    ESCRIBIR "Fin del programa."
  FIN
```

**Prueba de escritorio:**

| Instrucción | numero | Pantalla |
|---|---|---|
| LEER numero | **7** | |
| SI 7 > 0 → V | 7 | ✅ Entra al bloque |
| ESCRIBIR | 7 | `"El número es positivo."` |
| ESCRIBIR | 7 | `"Fin del programa."` |

**Ejemplo 2: Descuento por membresía**
```
ALGORITMO DescuentoMembresia
  VAR
    precio       : REAL
    esMiembro    : BOOLEAN
    precioFinal  : REAL
  INICIO
    LEER precio
    LEER esMiembro
    
    precioFinal ← precio
    
    SI esMiembro == Verdadero ENTONCES
      precioFinal ← precio * 0.85    // 15% de descuento
      ESCRIBIR "¡Descuento aplicado!"
    FIN_SI
    
    ESCRIBIR "Precio final: ", precioFinal
  FIN
```

---

## 3. Condicional Compuesta (SI...ENTONCES...SINO)

### 3.1 Definición

La **condicional compuesta** evalúa una condición. Si es **Verdadera**, ejecuta el primer bloque; si es **Falsa**, ejecuta el segundo bloque (`SINO`). Siempre se ejecuta uno de los dos bloques, nunca ambos, nunca ninguno.

### 3.2 Estructura

```
SI <condición> ENTONCES
    // Instrucciones si la condición es Verdadera
SINO
    // Instrucciones si la condición es Falsa
FIN_SI
```

### 3.3 Diagrama de Flujo

```
          ┌──────────────┐
          │  condición   │
          └──────┬───────┘
           V     │     F
     ┌─────▼───┐ │ ┌───▼─────┐
     │ Bloque  │ │ │ Bloque  │
     │   SI    │ │ │  SINO   │
     └─────┬───┘ │ └───┬─────┘
           │     │     │
           └─────┴─────┘
                 │
            Continúa...
```

### 3.4 Ejemplos

**Ejemplo 1: Aprobar o reprobar**
```
ALGORITMO AprobarReprobar
  VAR
    nota    : REAL
    estado  : CADENA
  INICIO
    ESCRIBIR "Ingrese la nota (0-100): "
    LEER nota
    
    SI nota >= 60 ENTONCES
      estado ← "APROBADO"
    SINO
      estado ← "REPROBADO"
    FIN_SI
    
    ESCRIBIR "El estudiante está: ", estado
  FIN
```

**Ejemplo 2: Número par o impar**
```
ALGORITMO ParOImpar
  VAR
    numero : ENTERO
  INICIO
    ESCRIBIR "Ingrese un número entero: "
    LEER numero
    
    SI (numero MOD 2) == 0 ENTONCES
      ESCRIBIR numero, " es PAR"
    SINO
      ESCRIBIR numero, " es IMPAR"
    FIN_SI
  FIN
```

**Ejemplo 3: Mayor de los dos números**
```
ALGORITMO MayorDeDos
  VAR
    a, b  : REAL
    mayor : REAL
  INICIO
    LEER a
    LEER b
    
    SI a > b ENTONCES
      mayor ← a
    SINO
      mayor ← b
    FIN_SI
    
    ESCRIBIR "El mayor es: ", mayor
  FIN
```

---

## 4. Condicionales Anidadas

### 4.1 Definición

Una **condicional anidada** es aquella en la que dentro del bloque `ENTONCES` o `SINO` existe **otra estructura condicional**. Permite evaluar múltiples condiciones relacionadas de manera jerárquica.

### 4.2 Estructura

```
SI <condición1> ENTONCES
    SI <condición2> ENTONCES
        // Bloque A (condición1 V y condición2 V)
    SINO
        // Bloque B (condición1 V y condición2 F)
    FIN_SI
SINO
    SI <condición3> ENTONCES
        // Bloque C (condición1 F y condición3 V)
    SINO
        // Bloque D (ambas falsas)
    FIN_SI
FIN_SI
```

> ⚠️ **Regla de oro del anidamiento:** Cada `SI` debe tener su propio `FIN_SI`. El indentado (sangría) es clave para leer el código correctamente.

### 4.3 Condiciones Compuestas con Operadores Lógicos

Antes de anidar, considera si dos condiciones relacionadas pueden expresarse en una sola línea usando `AND` u `OR`:

```
// Con anidamiento:
SI edad >= 18 ENTONCES
    SI tieneCarnet == Verdadero ENTONCES
        ESCRIBIR "Puede ingresar"
    FIN_SI
FIN_SI

// Con condición compuesta (equivalente, más conciso):
SI (edad >= 18) AND (tieneCarnet == Verdadero) ENTONCES
    ESCRIBIR "Puede ingresar"
FIN_SI
```

### 4.4 Ejemplos

**Ejemplo 1: Clasificar el rendimiento de un estudiante**
```
ALGORITMO ClasificarRendimiento
  VAR
    nota        : REAL
    clasificacion : CADENA
  INICIO
    ESCRIBIR "Ingrese la nota (0-100): "
    LEER nota
    
    SI nota >= 90 ENTONCES
      clasificacion ← "Excelente"
    SINO
      SI nota >= 75 ENTONCES
        clasificacion ← "Bueno"
      SINO
        SI nota >= 60 ENTONCES
          clasificacion ← "Regular (Aprobado)"
        SINO
          clasificacion ← "Insuficiente (Reprobado)"
        FIN_SI
      FIN_SI
    FIN_SI
    
    ESCRIBIR "Clasificación: ", clasificacion
  FIN
```

**Tabla de prueba de escritorio:**

| nota ingresada | ¿nota >= 90? | ¿nota >= 75? | ¿nota >= 60? | clasificacion |
|---|---|---|---|---|
| 95 | ✅ V | — | — | `"Excelente"` |
| 80 | ❌ F | ✅ V | — | `"Bueno"` |
| 65 | ❌ F | ❌ F | ✅ V | `"Regular (Aprobado)"` |
| 45 | ❌ F | ❌ F | ❌ F | `"Insuficiente (Reprobado)"` |

**Ejemplo 2: Calcular tarifa de taxi según horario y distancia**
```
ALGORITMO TarifaTaxi
  VAR
    hora      : ENTERO
    distancia : REAL
    tarifa    : REAL
  INICIO
    ESCRIBIR "Hora del viaje (0-23): "
    LEER hora
    ESCRIBIR "Distancia en km: "
    LEER distancia
    
    SI hora >= 6 AND hora <= 20 ENTONCES
      // Horario diurno
      SI distancia <= 5 ENTONCES
        tarifa ← distancia * 1500
      SINO
        tarifa ← 7500 + (distancia - 5) * 1200
      FIN_SI
    SINO
      // Horario nocturno (recargo del 30%)
      SI distancia <= 5 ENTONCES
        tarifa ← distancia * 1500 * 1.30
      SINO
        tarifa ← (7500 + (distancia - 5) * 1200) * 1.30
      FIN_SI
    FIN_SI
    
    ESCRIBIR "Tarifa del viaje: $", tarifa
  FIN
```

---

## 5. Buenas Prácticas con Condicionales

1. **Simplifica antes de anidar:** Usa `AND`/`OR` cuando sea posible en lugar de múltiples `SI` anidados.
2. **Respeta el indentado:** Cada nivel de anidamiento debe tener una sangría adicional.
3. **Cubre todos los casos:** Piensa en todos los posibles valores de entrada y cómo los maneja tu algoritmo.
4. **Nombra bien las variables booleanas:** `esValido`, `tieneDescuento`, `estaActivo` son claras.
5. **Prueba siempre con datos límite:** El valor exacto de la condición (ej: exactamente 60 si el límite es `>= 60`).

---

## 🏆 Actividad Integradora

> ### ⚡ RETO MAESTRO — "Sistema de Evaluación Académica"
> **Tiempo estimado:** 120-150 minutos  
> **Modalidad:** Individual  
> **Nivel:** ⭐⭐⭐⭐ Alto

Esta actividad recopila y aplica **todos los conocimientos adquiridos en las clases 1, 2 y 3**:  
Lógica → Variables → Tipos de datos → Pseudocódigo → Prueba de escritorio → Condicionales simples, compuestas y anidadas.

---

### 📌 Contexto del Problema

Eres el programador del **Sistema de Evaluación del SENA**. Debes diseñar un algoritmo completo que procese la información de un aprendiz y genere un reporte de su rendimiento académico.

---

### 🎯 FASE 1 — Recolección y Validación de Datos *(25 min)*

El sistema debe:
1. Solicitar el **nombre completo** del aprendiz.
2. Solicitar su **número de ficha** (entero positivo).
3. Solicitar **3 notas cuantitativas** (entre 0,0 y 5,0).
4. **Validar formato:** Si alguna nota es menor que 0 o mayor que 5, el sistema debe mostrar un error indicando cuál nota es inválida (de lo contrario, continúa). *(Usar condicional simple para cada nota)*.

**Escribe el pseudocódigo de esta fase con declaración completa de variables y sus tipos.**

---

### 🎯 FASE 2 — Cálculo del Promedio y Estad. *(25 min)*

Con las 3 notas válidas, el algoritmo debe:
1. Calcular el **promedio** de las 3 notas.
2. Calcular la **nota mayor** entre las tres.
3. Calcular la **nota menor** entre las tres.
4. Usar un **acumulador** para calcular la suma y un **contador** para las notas que sean superiores a 4.0.

**Realiza la prueba de escritorio completa** con los siguientes datos:  
`nota1 = 3.8`, `nota2 = 4.5`, `nota3 = 4.1`

---

### 🎯 FASE 3 — Clasificación del Aprendiz *(35 min)*

Usando condicionales, determina:

**a) Estado académico** (condicional compuesta):
- Si el promedio es `>= 3.5` → `"APROBADO"`
- Si no → `"REPROBADO"`

**b) Nivel de desempeño** (condicional anidada con al menos 4 niveles):
- `>= 4.8` → `"SOBRESALIENTE - Candidato a Beca"`
- `>= 4.0` → `"EXCELENTE - Felicitaciones"`
- `>= 3.5` → `"BUENO - Sigue adelante"`
- `>= 3.0` → `"REGULAR - Necesita mejorar"`
- `< 3.0`  → `"DEFICIENTE - Requiere refuerzo urgente"`

**c) Recomendación especial** (condición compuesta con AND/OR):
- Si el promedio es `>= 4.5` Y tiene más de 2 notas superiores a 4.0 → Mostrar: `"¡Recomendado para Monitor de Grupo!"`
- Si el promedio es `< 3.5` U alguna nota es inferior a 3.0 → Mostrar: `"Requiere plan de mejoramiento."`

---

### 🎯 FASE 4 — Reporte Final *(20 min)*

El algoritmo debe mostrar en pantalla un reporte estructurado como este:

```
╔══════════════════════════════════════════╗
║         REPORTE ACADÉMICO - SENA         ║
╠══════════════════════════════════════════╣
║ Nombre:       [nombre del aprendiz]      ║
║ Ficha:        [número de ficha]          ║
╠══════════════════════════════════════════╣
║ Nota 1:       [X.X]                      ║
║ Nota 2:       [X.X]                      ║
║ Nota 3:       [X.X]                      ║
║                                          ║
║ Suma Total:   [X.X]                      ║
║ Promedio:     [X.XX]                     ║
║ Nota Mayor:   [X.X]                      ║
║ Nota Menor:   [X.X]                      ║
║ Notas > 4.0:  [N]                        ║
╠══════════════════════════════════════════╣
║ Estado:       [APROBADO / REPROBADO]     ║
║ Desempeño:    [Nivel]                    ║
║ Observación:  [Recomendación]            ║
╚══════════════════════════════════════════╝
```

---

### 🎯 FASE 5 — Implementación en PSeInt y Evaluación Técnica *(20 min)*

1. Implementa el algoritmo completo en **PSeInt**.
2. Ejecuta con al menos **3 conjuntos de datos distintos** que prueben todos los caminos posibles del algoritmo.
3. Captura pantalla de cada ejecución.
4. Responde en tu cuaderno:
   - ¿Cuántos caminos de ejecución posibles tiene tu algoritmo? ¿Por qué?
   - ¿Qué sucede si las 3 notas son iguales? ¿Tu algoritmo lo maneja correctamente?
   - ¿Podrías reescribir alguna de tus condicionales anidadas usando operadores AND/OR? Muestra el ejemplo.

---

### 📊 Rúbrica de Evaluación

| Criterio | Puntos |
|---|---|
| Declaración correcta de variables y tipos | 10 |
| Validación de notas (Fase 1) correcta | 15 |
| Cálculo de promedio, mayor, menor y acumuladores (Fase 2) | 15 |
| Prueba de escritorio completa y sin errores (Fase 2) | 10 |
| Condicionales compuestas correctas (Fase 3a y 3c) | 15 |
| Condicionales anidadas correctas con los 5 niveles (Fase 3b) | 15 |
| Reporte formateado correctamente (Fase 4) | 10 |
| Implementación funcional en PSeInt con 3 pruebas (Fase 5) | 10 |
| **TOTAL** | **100** |

---

> 🏅 **Bonus (+5 puntos):** Modifica el algoritmo para que procese **3 aprendices** consecutivos (3 veces el proceso completo) y al final muestre cuál de los tres obtuvo el mayor promedio.

---

> 📝 **Nota del Docente:** Esta actividad integradora está diseñada para que el estudiante demuestre dominio completo de los fundamentos algorítmicos. El nivel de exigencia es alto: las fases 3 y 5 (análisis de caminos y reflexión técnica) son las que diferencian un desempeño básico de uno sobresaliente. Proporcione retroalimentación detallada sobre la calidad del pseudocódigo y la corrección de las condicionales anidadas.
