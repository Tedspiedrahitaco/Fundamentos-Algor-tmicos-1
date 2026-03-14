# Tarea Práctica 1: Lógica, Operadores y tu primer Commit

**Módulo:** Fundamentos Algorítmicos 1  
**Modalidad:** Trabajo Independiente (HTI)  
**Formato de Entrega:** Repositorio de GitHub

## PARTE 1: La Misión Lógica (Escape Room)

Para esta tarea, no usarás ningún lenguaje de programación todavía. Tu objetivo es utilizar la lógica pura y las reglas de prioridad que vimos en clase para resolver los siguientes dos retos.

### Reto A: El Algoritmo de la Bóveda

Estás atrapado en una bóveda. Tienes frente a ti un panel con 3 interruptores (A, B y C) y una puerta electrónica.  
Escribe un algoritmo cualitativo (paso a paso) para abrir la puerta sabiendo que las reglas del sistema son:

- El interruptor A enciende la energía principal, pero hace sonar una alarma si B está encendido.
- El interruptor C apaga la alarma, pero solo funciona si A ya está encendido.
- La puerta solo se abre si A y B están encendidos, y la alarma está apagada.
- Todos los interruptores inician apagados.

Escribe la secuencia exacta (paso 1, paso 2...) que debes realizar para salir sin que la alarma quede sonando.

### Reto B: Desactivando el Sistema (Evaluación)

El sistema central te pide que introduzcas la contraseña final. La contraseña es el resultado Booleano (Verdadero o Falso) de la siguiente expresión.

Resuélvela paso a paso (mostrando el proceso, no solo el resultado final) aplicando la jerarquía de operadores:

`NOT( (15 MOD 4) + 2 == 5 ) OR ( 10 * 2 > 15 AND NOT(8 / 4 <= 1) )`

## PARTE 2: Guía de Entrega (Git y GitHub)

Como futuros desarrolladores, su portafolio en GitHub es su currículum. A partir de hoy, todas las tareas se entregarán por este medio. Sigue estos pasos cuidadosamente:

### Pre-requisitos

- Crea una cuenta gratuita en [GitHub.com](https://github.com).
- Descarga e instala Git en tu computadora (acepta las opciones por defecto durante la instalación).

### Paso 1: Crear tu repositorio en la nube

1. Entra a tu cuenta de GitHub.
2. Arriba a la derecha, haz clic en el botón + y selecciona "New repository".
3. Nombra tu repositorio como: `fundamentos-algoritmicos-tarea1`.
4. Ponlo en Public.
5. Marca la casilla "Add a README file" (¡Muy importante!).
6. Haz clic en el botón verde "Create repository".

### Paso 2: Clonar el repositorio a tu computadora (git clone)

Clonar significa descargar una copia vinculada de tu repositorio en la nube a tu equipo local.

1. En la página de tu nuevo repositorio en GitHub, haz clic en el botón verde "<> Code" y copia la URL (termina en .git).
2. Abre la terminal de tu computadora (Símbolo del sistema, PowerShell, o Git Bash).
3. Navega hasta la carpeta donde quieres guardar tu tarea (ej. `cd Documentos`).
4. Ejecuta el comando de clonación pegando tu URL:

   ```
   git clone https://github.com/TU_USUARIO/fundamentos-algoritmicos-tarea1.git
   ```

5. Entra a la carpeta que se acaba de crear:

   ```
   cd fundamentos-algoritmicos-tarea1
   ```

### Paso 3: Crear tu tarea

Dentro de esa carpeta en tu computadora, crea un archivo de texto llamado `solucion_tarea1.txt` (o `.md` si prefieres).  
Escribe allí las respuestas del Reto A y Reto B de la Parte 1. Guarda el archivo.

### Paso 4: Preparar los archivos (git add)

Ahora debemos decirle a Git que hemos creado un archivo nuevo y queremos prepararlo para subirlo. En tu terminal, asegúrate de estar dentro de la carpeta del proyecto y ejecuta:

```
git add .
```

(Nota: El punto `.` significa "agrega todos los archivos modificados o nuevos en esta carpeta").

### Paso 5: Guardar los cambios (git commit)

Un commit es como tomarle una fotografía a tu proyecto en este momento exacto. Debemos ponerle un mensaje descriptivo a esa "fotografía":

```
git commit -m "Agrego la solucion a los retos logicos de la tarea 1"
```

### Paso 6: Subir a GitHub (git push)

Tus cambios están guardados en tu computadora, pero aún no están en la nube. Para empujarlos a tu repositorio en GitHub, ejecuta:

```
git push origin main
```

(Nota: Si tu rama principal se llama `master` en lugar de `main`, el comando será `git push origin master`).

¡Listo!

Ve a tu navegador, recarga la página de tu repositorio en GitHub y verás tu archivo `solucion_tarea1.txt` subido.  
Para entregar tu tarea, simplemente envíale el enlace (URL) de tu repositorio en GitHub.