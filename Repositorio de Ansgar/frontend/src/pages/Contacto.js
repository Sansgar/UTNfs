import '../styles/Contacto.css';

const ContactoPage = (props) => {
    return (
        <main class="holder contacto">
        <div class="datos">
            <h2>Contacto Rapido</h2>
            <form action="" method="" class="formulario">
                <p>
                    <label for="nombre">Nombre</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="email">Email</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="telefono">Telefono</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="mensaje">Mensaje</label>
                    <textarea name="" cols="30" rows="10"></textarea>
                </p>
                <p>
                    <input type="submit" value="Enviar"/>
                </p>
            </form>
        </div>
        <div class="datos">
            <h2>Otras vias de comunicacion</h2>
            <p>Tambien puede contactarse usando los siguientes medios</p>
            <ul>
                <li>Telefono: 240586421</li>
                <li>Email: contacto@repositoriodeansgar.com.ar</li>
                <li>Facebook:</li>
                <li>Twitter:</li>
            </ul>
        </div>
    </main>
    );
}
export default ContactoPage;