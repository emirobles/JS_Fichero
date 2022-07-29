// Clase constructora de la ficha personal, dentro se incluyen métodos
class Ficha{
    constructor(nombre, apellido, mascota, libros){
        this.nombre = nombre
        this.apellido = apellido
        this.mascota = mascota
        this.libros = libros

    }

    // método para armar nombre completo
    getFullName() {
        return `${this.nombre} ${this.apellido}`
    }

    // método para agregar 1 mascota
    addMascotas(mascota) {        
        this.mascota.push(mascota)
        return this.mascota
    }

    // método para contar cantidad de mascotas
    countMascotas() {        
        return this.mascota.length        
    }

    // método para construir objeto de libro con titulo y autor
    addBook(titulo, autor) {        
        const newLibro = {
            titulo: titulo,
            autor: autor,
        }
        this.libros.push(newLibro)
        return this.libros
    }

    // método para traer solo los títulos de los libros.
    getBookNames() {       
        return [...this.libros].map(titulo => titulo.titulo)
    }
}

// nueva ficha creada
const ficha = new Ficha('Emilce', 'Robles', ['gato', 'canario'], [{ titulo: 'La espada de bambu', autor: 'Shunhei Fujisawa' }, { titulo: 'El jardín del samurai', autor: 'Gail Tsukiyama' }])


// Salidas de resultados
console.log(ficha)
console.log(ficha.getFullName())
console.log(ficha.addMascotas('perro'))
console.log(ficha.countMascotas())
console.log(ficha.addBook('Silencio', 'Shusaku Endo'))
console.log(ficha.getBookNames())

document.write(ficha.getFullName())
document.write(`</br>` +`Mascotas que tiene: ${ficha.mascota}` + `</br>`)
document.write(`Los demás resultados se muestran por consola`)






