# Taller Final Evaluativo: Fundamentos Algorítmicos 1

**Nivel de Arquitectura Lógica:** Avanzado  
**Modalidad de Ejecución:** Desarrollo Individual  
**Mecanismo de Integración Continua:** Repositorio Documentado en GitHub (Formato Markdown `.md`)

---

## 1. ESPECIFICACIONES TÉCNICAS DE ENTREGA (Requisito Obligatorio)
La recepción de archivos propietarios (`.doc`, `.pdf`) o extensiones locales sueltas (`.psc`) queda terminantemente prohibida en estándares de desarrollo profesional modernos. Para que el commit sea evaluable, el desarrollador deberá cumplir el siguiente flujo de trabajo:

1. Proveer y gestionar un repositorio público en la plataforma **GitHub** bajo la nomenclatura `Fundamentos-Algoritmicos-TallerFinal`.
2. Consolidar el documento principal en el archivo `Solucion_Taller.md`.
3. Implementar **sintaxis Markdown estricta** para las demostraciones teóricas.
4. Para la codificación, inyectar el código fuente crudo de PSeInt utilizando **bloques de código** tipados nativos de la sintaxis MD. (Bloque ` ```pseint `).
5. Adjuntar debajo de cada módulo de código una captura visual de la consola (Terminal) que compruebe la ejecución exitosa del algoritmo. Emplear sintaxis de importación de imagen estándar de Markdown: `![Demostracion 1](ruta_recurso.png)`.
6. Publicar la rama principal y entregar el enlace del repositorio a la plataforma central dentro de la ventana de tiempo estipulada.

---

## SECCIÓN A: Fundamentos Lógicos y Conocimiento Operacional (33%)
*Sustentar la respuesta calculando la jerarquía paso a paso.*

**1. Evaluación de Motor Aritmético (5 puntos)**
Dado el siguiente proceso procedimental en el núcleo procesador de PSeInt:
`resultado <- 5 + 3 * 2 ^ 2 - (10 MOD 3)`
Indique el valor escalar exacto asignado temporalmente a la variable identificadora `resultado`. Documente su trazabilidad matemática preservando estrictamente la jerarquía del compilador.

**2. Álgebra Booleana Operacional (10 puntos)**
Constantes declaradas en el sistema lógico:
`var_A <- Verdadero`, `var_B <- Falso`, `var_C <- Verdadero`
Procese computacionalmente la siguiente estructura booleana y certifique si la salida estricta es `Verdadero` o `Falso`. Emita el registro paso a paso de los operadores:
`resultado_logico <- No(var_A O var_B) Y (var_C Y No(var_B))`

**3. Depuración de Software (Debugging) (18 puntos)**
El bloque algorítmico mostrado abajo se desarrolló para perfilar cadetes de ingreso bajo criterios absolutos (estatura requerida superior a 1.70m y peso menor a 80kg). **El código presenta tres fallas estructurales y semánticas críticas.** Refactorice el algoritmo a su estado optimizado y totalmente funcional.
```pseint
Algoritmo SelectorCandidatos
    Leer estatura_ingresada
    Leer peso_ingresado
    Si estatura_ingresada > 1.70 O peso_ingresado < 80 Entonces
        Escribir "Validación del perfil: Correcta."
    Sino
        Escribir "Validación del perfil: Fallida."
```

---

## SECCIÓN B: Lógica de Rendimiento - Condicionales Anidadas Estructuradas (33%)
*Desarrollar la solución bajo el Perfil Estricto de PSeInt, documentar el algoritmo y registrar la prueba unitaria en consola.*

**Módulo: Sistema de Liquidación de Nómina "TechSolutions Core"**
El departamento de finanzas solicita el desarrollo de un módulo de software que liquide de manera autonómica el salario neto mensual del personal operativo. 

1. El sistema instancia la recolección de `nombre_operador` y `horas_ejecutadas` de la base de datos de tiempos.
2. La tarifa transaccional configurada para uso normal es de `$35,000 COP` por hora cronometrada.
3. El límite en bloque regular es de `160 horas`. Las fracciones de horas documentadas superando este límite gatillan un **recargo del 35%** inyectado a la tarifa principal de ese lote adicional.
4. Tras calcular el ingreso Subtotal A (tarifa normal acumulada + horas extra capitalizadas), se aplican las deducciones legales tributarias según tramos numéricos de ganancia:
    *   Si el Subtotal A es inferior a `$1,500,000`, la deducción aplicada es del **4%** hacia la estructura de salud contributiva.
    *   En niveles entre `$1,500,000` y límite abierto inferior a `$3,000,000`, el descuento sube al **6%** de salud y **2%** de arnés de pensión.
    *   Montos iguales o superiores a `$3,000,000` imponen una deducción de escala fiscal alta: **8%** de salud, **4%** de pensión, y un descuento de fondo solidario especial por **1%**.
5. Emitir un desprendible de pago CLI (Command Line Interface), parametrizando el layout de texto, agrupando resultados en variables de impresión (e.g. Subtotal de Salario Bruto, Total de Retenciones Tributarias, Salario Neto Validado).

---

## SECCIÓN C: Desarrollo de Software - Sistema CASE y Selectores Múltiples (34%)
*El despliegue de validación final. Demostración práctica de estructuras dinámicas de control con menú interactivo de la Guía 01.*

**Módulo: Cajero Automático de Finanzas Cripto**
Arquitecte e implemente un motor algorítmico tipo Cajero Terminal iniciando la cuenta demo con una constante (`saldo_disponible <- 5000.00` USD). 
El bloque central debe renderizar por pantalla el siguiente listado seleccionable e interpretarlo mediante la orden de control `Segun` (Switch):
`=== TERMINAL DE CONEXIÓN CRIPTO ===`
`[1] Consultar estado de cuenta corriente`
`[2] Retiro estricto de fondos USD`
`[3] Ejecutar Orden de Compra de Bitcoin (BTC)`
`[4] Finalizar sesión`

**Mecanismos de Control de Transacción Obligatorios:**
*   **Case 1:** Imprimir una lectura acotada concatenada con texto indicando la variable flotante referenciando el `saldo_disponible`.
*   **Case 2:** Requerir valor de extracción. Lógica central: si el monto solicitado excede a `$5000.00` USD (o el saldo que reste), invocar condicional restrictiva arrojando error informático "EXCEPCIÓN: Flujo de fondos insuficientes en la bóveda actual". Si la validación es congruente, rebajar el estado de la variable principal e informar registro exitoso.
*   **Case 3:** Operador de intercambio financiero. El BTC transa estáticamente a `$60,000.00` USD. Formular y preguntar monto USD destinado a la transacción algorítmica. Previa revisión de saldo favorable, proceder con la división (Inversión asignada / ratio valor referencial BTC). Interceptar y descontar variable, e imprimir el diferencial de BTC adquirido.
*   **Case 4:** Disparar protocolo de cierre.
*   **Case Excepción Residual (De Otro Modo):** Fallback obligado para caracteres perdidos o selecciones de ingreso ilógicas (opciones inexistentes de menú superior a `4`). Controlar la excepción del CLI mostrando "ERROR: Protocolo Inexistente".

*(La integración de capturas del test de flujo comprando capital BTC formará parte integral de la demostración de producto ante QA del curso).*

---
> **Nota de Arquitecto:** Serán consideradas variables huérfanas o no explícitamente parametrizadas al inicio como fallas estructurales. El uso estricto de la cláusula tipada `Definir [X] Como [Tipo]` no es negociable en esta instancia metodológica.
