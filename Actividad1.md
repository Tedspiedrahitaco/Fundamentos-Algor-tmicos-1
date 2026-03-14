Algoritmo CajeroAutomatico
    // Definir las variables que usaremos
    Definir monto, b50, b20, b10, resto Como Entero

    Validar Usuario y contraseña

    Si es valido...
    
    Escribir "Bienvenido. Ingrese el monto a retirar:"
    Leer monto
    
    // Condición Crítica: Verificar si el monto NO es múltiplo de 10
    Si monto MOD 10 <> 0 Entonces
        Escribir "Error: Transacción cancelada."
        Escribir "El cajero solo dispone de billetes de $50, $20 y $10."
        Escribir "Por favor, ingrese un monto terminado en 0 (Ej: $130)."
    SiNo
        // Paso 1: Calcular la máxima cantidad posible de billetes de 50
        b50 <- trunc(monto / 50)
        resto <- monto MOD 50
        
        // Paso 2: Con lo que sobra (resto), calcular los billetes de 20
        b20 <- trunc(resto / 20)
        resto <- resto MOD 20
        
        // Paso 3: Con lo que sobra del paso anterior, calcular billetes de 10
        b10 <- trunc(resto / 10)
        
        // Salida de resultados
        Escribir "Transacción exitosa. Entregando $", monto, ":"
        Escribir "-> Billetes de $50: ", b50
        Escribir "-> Billetes de $20: ", b20
        Escribir "-> Billetes de $10: ", b10
    Fin Si
    
FinAlgoritmo






flowchart TD
    A([Inicio]) --> B[/Leer Monto/]
    B --> C{¿Monto MOD 10 != 0?}
    
    C -- SÍ (Ej: 135) --> D[/Mostrar Error: Monto inválido/]
    D --> I([Fin])
    
    C -- NO (Ej: 130) --> E[B50 = Entero de Monto / 50<br>Resto = Monto MOD 50]
    E --> F[B20 = Entero de Resto / 20<br>Resto = Resto MOD 20]
    F --> G[B10 = Entero de Resto / 10]
    G --> H[/Mostrar: Entregar B50 de $50, B20 de $20, B10 de $10/]
    H --> I([Fin])


    (Óvalo) Inicio: Comienza el diagrama.

(Paralelogramo) Entrada de datos: Leer la variable Monto.

(Rombo) Decisión / Condición: ¿Monto MOD 10 != 0? (¿El monto NO es múltiplo de 10? ej. 135).

Rama SÍ: (Paralelogramo) Mostrar "Error: El cajero solo entrega montos terminados en 0" ➔ Ir a Fin.

Rama NO: Continuar al siguiente paso.

(Rectángulo) Proceso: Calcular billetes de 50.

B50 = Monto / 50 (División entera)

Resto = Monto MOD 50

(Rectángulo) Proceso: Calcular billetes de 20.

B20 = Resto / 20 (División entera)

Resto = Resto MOD 20

(Rectángulo) Proceso: Calcular billetes de 10.

B10 = Resto / 10 (División entera)

(Paralelogramo) Salida de datos: Mostrar "Entregar B50 billetes de $50, B20 de $20 y B10 de $10".

(Óvalo) Fin: Termina el algoritmo.