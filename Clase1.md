# Guía de Estudio - Clase 1: Lógica y Operadores

**Módulo:** Fundamentos Algorítmicos 1  
**Programa:** Análisis y Programación de Computadores

## 1. El Algoritmo y la Lógica

### ¿Qué es un Algoritmo?
Es una secuencia lógica, finita y estructurada de instrucciones diseñadas para resolver un problema específico o completar una tarea determinada.

### ¿Qué es la Lógica Computacional?
Es el raciocinio y la disciplina que nos permite ordenar esas instrucciones sin ambigüedades. Es, en esencia, el idioma en el que "piensa" el procesador.

Antes de programar en cualquier código (Python, Java, C++), la computadora exige una lógica impecable. Si las instrucciones mentales o escritas fallan, el código también lo hará.

### Las 3 Reglas de Oro de los Algoritmos
Para que un proceso sea considerado formalmente un algoritmo, debe cumplir tres características inquebrantables:

- **Preciso:** Cada instrucción debe ser clara y puntual. No puede haber dobles interpretaciones. (Ej: "calentar un poco" es incorrecto; "calentar por 2 minutos" es preciso).
- **Definido:** Es totalmente predecible. Si introduces los mismos datos de entrada 100 veces, debes obtener exactamente el mismo resultado 100 veces.
- **Finito:** Debe tener un inicio claro y, obligatoriamente, un final tras un número determinado de pasos. No existen algoritmos infinitos (eso sería un error de programación llamado bucle infinito).

## 2. Familias de Operadores

Los operadores son símbolos especiales que le indican a la computadora qué tipo de cálculo o evaluación debe realizar con los datos (variables y constantes).

### A. Operadores Matemáticos
Realizan operaciones aritméticas básicas y complejas. Su resultado siempre es un número.

| Operación | Símbolo | Descripción | Ejemplo |
|-----------|---------|-------------|---------|
| Suma / Resta | +, - | Operaciones aritméticas estándar. | 10 + 5 = 15 |
| Multiplicación | * | El asterisco reemplaza a la 'x' tradicional. | 4 * 3 = 12 |
| División | / | División exacta (cociente). | 10 / 2 = 5 |
| Módulo | MOD o % | Devuelve el residuo de una división. | 10 MOD 3 = 1 |
| Potenciación | ^ o ** | Eleva un número a la potencia de otro. | 2 ^ 3 = 8 |

### B. Operadores Relacionales
Comparan dos valores. La respuesta a esta comparación NUNCA es un número, siempre es un valor Booleano: Verdadero (True) o Falso (False).

- **Igualdad (==) y Diferencia (!=):** Evalúa si dos datos son exactamente iguales o diferentes. (Ej: 5 == 5 es Verdadero).
- **Mayor (>) y Menor (<):** Establece supremacía de tamaño o valor numérico. (Ej: 10 < 20 es Verdadero).
- **Inclusivos (>=, <=):** Mayor o igual / Menor o igual. Incluye el límite en la evaluación. (Ej: 5 >= 5 es Verdadero).

### C. Operadores Lógicos
Evalúan condiciones booleanas previas (V/F) para determinar si una instrucción final es verdadera o falsa. Son la base de la toma de decisiones.

- **AND (Y):** El operador estricto. Exige que todas las condiciones unidas sean verdaderas. Si tan solo una es falsa, todo es Falso.
- **OR (O):** El operador flexible. Se conforma con que al menos una de las condiciones sea verdadera para dar como resultado Verdadero.
- **NOT (NO):** El operador rebelde. Invierte la realidad booleana. Si algo es verdadero, lo vuelve falso, y viceversa.

## 3. Jerarquía y Prioridad de Ejecución

Cuando la computadora evalúa una expresión matemática y lógica combinada, no lee simplemente de izquierda a derecha. Sigue un estricto orden jerárquico:

1. Paréntesis ( ): Se resuelven desde los más internos hasta los más externos.
2. Potencias ^.
3. Multiplicación *, División /, Módulo MOD (De izquierda a derecha).
4. Sumas + y Restas - (De izquierda a derecha).
5. Operadores Relacionales: >, <, >=, <=, ==, !=
6. Operadores Lógicos: Primero se evalúa el NOT, luego el AND, y por último el OR.

### Ejemplo Práctico de Resolución
Evaluar la expresión: `5 + 4 * 2 > 10 AND 3 != 4`

- **Paso 1 (Matemáticas):** 5 + (4 * 2) ➔ 5 + 8 ➔ 13
- **Paso 2 (Reemplazo):** La expresión queda así: 13 > 10 AND 3 != 4
- **Paso 3 (Relacionales):** 
  - 13 > 10 ➔ Verdadero
  - 3 != 4 ➔ Verdadero
- **Paso 4 (Lógicos):** Verdadero AND Verdadero
- **Resultado Final:** VERDADERO

## 4. Tablas de Verdad

Las tablas de verdad resumen el comportamiento de los operadores lógicos AND y OR.

### Tabla del AND (Estricto)

| Premisa 1 | Premisa 2 | Resultado |
|-----------|-----------|-----------|
| Verdadero | Verdadero | Verdadero |
| Verdadero | Falso     | Falso     |
| Falso     | Verdadero | Falso     |
| Falso     | Falso     | Falso     |

### Tabla del OR (Flexible)

| Premisa 1 | Premisa 2 | Resultado |
|-----------|-----------|-----------|
| Verdadero | Verdadero | Verdadero |
| Verdadero | Falso     | Verdadero |
| Falso     | Verdadero | Verdadero |
| Falso     | Falso     | Falso     |

## 5. Taller Práctico

### Actividad 1: Algoritmo Lógico (Cajero Automático)
Diseña un algoritmo cualitativo estricto paso a paso para un cajero automático que debe dispensar una cantidad X de dinero solicitada por el usuario.

**Restricciones Críticas:**
- El cajero SOLO tiene billetes de $50, $20 y $10.
- Tu algoritmo debe calcular la menor cantidad de billetes posibles para entregar el monto exacto.
- Debe contemplar excepciones: ¿Qué hacer si el usuario pide un monto que no termina en 0 (ej. $135)? ¿Qué hacer si pide $30?

**Prueba de Fuego:** Haz la prueba de escritorio (simulación manual) con el valor $130. Si tu algoritmo indica "Entregar dos de $50 y uno de $30", fallaste (no hay billetes de $30). Si entra en un bucle infinito, el cajero colapsa.

### Actividad 2: Evaluador Nivel Máster
Aplicando las reglas de prioridad estricta vistas en clase, evalúa las siguientes expresiones anidadas paso a paso hasta determinar su valor Booleano final (Verdadero o Falso). ¡Cuidado con el orden de los Módulos y los NOT!

1. `NOT( (25 MOD 4) * 3 >= 10 ) AND ( 15 / 3 == 5 )`
2. `(100 MOD 7) * 2 != 12 OR NOT( 5 + 3 * 2 <= 11 AND 4^2 == 16 )`
3. `NOT( NOT(8 > 10) AND ( (5*3) MOD 2 == 1 ) ) OR ( 10 == 10.0 )`
4. `(2^3 + 4) / 3 > 3 AND ( NOT(5 == 5) OR (10 MOD 3 == 1) )`

## 6. Herramientas Recomendadas para Practicar

Para poner a prueba tu lógica, realizar pruebas de escritorio automatizadas y escribir tus primeros pseudocódigos, te recomendamos las siguientes plataformas:

- **PSeInt (Software Gratuito):** Es la herramienta académica por excelencia en América Latina para aprender lógica de programación. Te permite escribir pseudocódigo en español, ejecutarlo paso a paso para ver cómo fluye la lógica y generar diagramas de flujo automáticamente.
  - Sitio Oficial para descargar: [pseint.sourceforge.net](https://pseint.sourceforge.net)
- **PSeInt Web (Online):** Si no deseas instalar nada, existen compiladores en línea creados por la comunidad que emulan PSeInt directamente en el navegador web.
  - Alternativa Online: Puedes buscar "PSeInt Web" o usar plataformas como RollApp que virtualizan el programa en tu navegador.
- **Scratch (Web):** Desarrollado por el MIT, es una plataforma web excelente para visualizar la lógica computacional, usar condicionales y ver cómo se ejecutan las instrucciones de manera secuencial mediante un sistema de bloques (ideal antes de pasar al código o pseudocódigo escrito).
  - Sitio Oficial: [scratch.mit.edu](https://scratch.mit.edu)
- **Code.org (Web):** Ofrece "Laboratorios de Código" y retos lógicos directamente en el navegador. Es perfecto para fortalecer el concepto de "secuencia de instrucciones finitas" y condicionales.