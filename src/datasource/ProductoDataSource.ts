import { producto } from "../data";

export default class ProductoDataSource {

    productoByID(id: string) {
        return (
            producto.length > 0
            ? producto.find((item: any) => item.id === id)
            : new Object()
        )
    }

    listarProductos() {
        return (
            producto.length > 0
            ? producto
            : new Array()
        )        
    }
}