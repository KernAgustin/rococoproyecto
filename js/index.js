let Pedido ='';
const listMacetas =[];
let busqueda=[]

class Product {
 constructor(code,name,precio,categoria,descripcion,imagen) {
        this.code = code;
        this.name = name;
        this.precio = precio;
        this.categoria=categoria;
        this.descripcion=descripcion;
        this.imagen=imagen;
    }
}

class CarritoDeCompras {
    constructor() {
        this.productos = []
        this.name = ''
    }
    setName(value) {
        this.name = value
    }
   
    addProduct(product) {
        this.productos.push(product)
    }

    vaciarCarrito() {
        this.productos = [];
    }
}

const cliente = new CarritoDeCompras();

let cantidad = JSON.parse(localStorage.getItem('CantidadProductos'));
if (cantidad == 0 || cantidad == null ) cantidad = 0 
var x = document.getElementById("ContadorCarrito");
x.innerHTML = parseInt(cantidad);


const almacenados = JSON.parse(localStorage.getItem("listaMacetas"));

const CarritoNav = document.getElementById('carrito')

console.dir(CarritoNav)

if (almacenados !=null && almacenados.length!=0) {
        for (const objeto of almacenados)
              {          
                cliente.addProduct(objeto)                   
              }
  }
  else
  {
                    CarritoNav.disabled=true
  }

  const fetchLocalData = () => {
	fetch('../data.json').then((response) =>response.json())
	.then((result)=>{
		listaDeProductos(result.productos)

	}).catch((err)=>{
		console.error(err)
	})
	}

const listaDeProductos = (body) =>{
	body.forEach((producto) => {
        listMacetas.push (new Product(producto.code, producto.name, producto.precio, producto.categoria, producto.descripcion,producto.imagen))                
        maceta01 = listMacetas.filter((el) => el.categoria.includes('MACETA 01'))
        maceta02 = listMacetas.filter((el) => el.categoria.includes('MACETA 02'))
        maceta03 = listMacetas.filter((el) => el.categoria.includes('MACETA 03'))
        maceta04 = listMacetas.filter((el) => el.categoria.includes('MACETA 04'))
        maceta05 = listMacetas.filter((el) => el.categoria.includes('MACETA 05'))
        maceta06 = listMacetas.filter((el) => el.categoria.includes('MACETA 06'))
        maceta07 = listMacetas.filter((el) => el.categoria.includes('MACETA 07'))
        maceta08 = listMacetas.filter((el) => el.categoria.includes('MACETA 08'))
        maceta09 = listMacetas.filter((el) => el.categoria.includes('MACETA 09'))
        maceta10 = listMacetas.filter((el) => el.categoria.includes('MACETA 10'))
        mostrarProductos(listMacetas)
	})
}

fetchLocalData()

const option = document.getElementById("option");

option.addEventListener("click", () => {
     switch (option.value){
            case "opt1":
                mostrarProductos(listMacetas)
                break;
            case "opt2":
                mostrarProductos(maceta01)
                break;
            case "opt3":
                mostrarProductos(maceta02)
                break;
            case "opt4":
                mostrarProductos(maceta03)
                break;
            case "opt5":
                mostrarProductos(maceta04)
                break;
            case "opt6":
                mostrarProductos(maceta05)
                break;
            case "opt7":
                mostrarProductos(maceta06)
                break;
            case "opt8":
                mostrarProductos(maceta07)
                break;
            case "opt9":
                mostrarProductos(maceta08)
                break;
            case "opt10":
                mostrarProductos(maceta09)
                break;
            case "opt11":
                mostrarProductos(maceta10)
                break;
            default:
                mostrarProductos(listMacetas)
                break;
        }
    })   

mostrarProductos(listMacetas)

function mostrarProductos(array) {
let mostrarTodo = document.getElementById('mostrarTodo')

mostrarTodo.innerHTML = ''
        array.forEach((product) => {     
                        const tr = document.createElement('div')
                        tr.classList.add('col', 'mb-5')
                       const Content = `
                            <div class="card">
                                <img class="card-img-top" src=${product.imagen} alt="..." />
                                <div class="card-body p-4">
                                    <div class="text-center">
                                        <h5 class="fw-bolder">${product.name}</h5>
                                       $ ${product.precio}
                                    </div>
                                </div>
                                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div class="text-center">
                                        <button class="btn btn-outline-dark mt-auto">Comprar</button>
                                    </div>
                                </div>
                            </div>
                          `
                        tr.innerHTML = Content;

                        tr.addEventListener("click",()=>{ agregarCarrito(product) } ) 
                            
                        mostrarTodo.appendChild(tr)
    })
}

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

function agregarCarrito(producto) {

    cliente.addProduct(producto) ; 

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
      })
      Toast.fire({
        icon: 'success',
        title: 'Se ha agregado al carrito'
      }) 

    guardarLocal("listaMacetas", JSON.stringify(cliente.productos));

    CarritoNav.disabled=false

    var x = document.getElementById("ContadorCarrito");
    x.innerHTML = parseInt(x.innerHTML)+1;
    localStorage.setItem("CantidadProductos",JSON.stringify(parseInt(x.innerHTML)))
}

Search.onkeydown = () => { onkeydown
                    let mostrarTodo = document.getElementById('mostrarTodo')

                    mostrarTodo.innerHTML = ''

                        var input, filter, a, txtValue;
                        input = document.getElementById("Search")
                        filter = input.value.toUpperCase();

                            filter == '' && mostrarProductos(listMacetas)  

                        for (let i = 0; i < listMacetas.length; i++) {
                            a=listMacetas[i].name
                            txtValue=a
                            
                        txtValue.toUpperCase().indexOf(filter) > -1 && busqueda.push (listMacetas[i]) }
                        mostrarProductos(busqueda)
        
                        busqueda=[]
}

