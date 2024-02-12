import BannerThree from "../BannerThree/BannerThree";
import "./AboutUs.css";

const AboutUs = () => {
    return (
        <div className="about_container">
            <BannerThree />
            <section className="textoContainer">
                <div className="primeraSeccion">
                    <p>
                        <strong>En Mahalo,</strong> fusionamos nuestra pasión por el diseño,
                        el deporte y la naturaleza para crear tablas de equilibrio únicas y
                        excepcionales. Nos enorgullece ser amantes del deporte y de las
                        tablas, y esa pasión impulsa cada creación que sale de nuestro taller.
                    </p>
                </div>
                <div className="segundaSeccion">
                    <div>
                        <p className="segundaSeccionp">
                            Permíteme presentarme, <strong>Soy Moisés,</strong> el fundador y
                            mente creativa detrás de Mahalo. Soy un surfista, skater,
                            longboarder y snowboarder, siempre en busca de las mejores olas, las
                            bajadas más emocionantes y los lugares más inspiradores para
                            practicar y mejorar cada deporte.
                            Como estudiante de arquitectura, canalizo mi creatividad en el
                            dibujo y diseño,{" "}
                            <strong>
                                dando vida a cada tabla Mahalo con una perspectiva única.
                            </strong>
                        </p>
                        <p>
                            Este emprendimiento nació en Mar del Plata durante la pandemia,
                            cuando las restricciones nos alejaron de nuestros deportes de tabla.
                            Con la necesidad de mantenernos activos, decidimos crear nuestras
                            propias tablas de equilibrio para entrenar en casa, dando origen a
                            Mahalo.
                        </p>
                    </div>
                </div>
                <div className="terceraSeccion">
                    <img src="/images/gallery/0025.jpg" alt="Imagen de SomosMahalo" />
                </div>
                <div className="cuartaSeccion">
                    <p>
                        Nuestro taller en Mar del Plata es el lugar donde cada tabla Mahalo
                        cobra vida. Aquí, con dedicación y atención al detalle, fabricamos a
                        mano cada pieza, asegurando que cada tabla sea única y de alta calidad.
                    </p>
                    <p>
                        Nuestra misión en Mahalo es ofrecer soluciones creativas para
                        mantenerte activo y conectado con tu pasión por los deportes.
                        Buscamos ser la elección perfecta para aquellos que buscan calidad,
                        autenticidad y rendimiento en cada tabla.
                    </p>
                    <h2>Mahalo no es solo una marca, es una comunidad.</h2>
                    <p>
                        Nos esforzamos por conectar con los amantes de los deportes de
                        tabla, contribuir a nuestra comunidad local y compartir nuestra
                        pasión con el mundo.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;

