import React from "react";
import './questions.css'

function Questions(){
    return(
        <div className="container_main">
            <div className="accordion" id="accordionPanelsStayOpenExample">

                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        <strong>¿El balanceboard viene con garantía?</strong></button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                    <div className="accordion-body">
                        <strong>Así es, durante un periodo de 3 meses sin costo adicional para el cliente</strong> en caso de algún defecto o rotura de la misma por falla de fábrica durante el periodo de garantía, nos comprometemos a reemplazar el producto por un nuevo modelo.
                    </div>
                    </div>
                </div>
                
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        <strong>¿Hacen envíos a todo el país?</strong>
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo"className="accordion-collapse collapse">
                        <div className="accordion-body">
                        <strong>Así es, realizamos envíos a todo el país por medio de vía cargo</strong>, aunque si lo prefiere puede visitar nuestro taller en Punta Mogotes para tener un acercamiento más cercano con nuestras tablas, donde podrá ver a detalle nuestros modelos y diseños.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        <strong>¿Cuáles son los métodos de pago?</strong>
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree"className="accordion-collapse collapse">
                        <div className="accordion-body">
                        <strong>Aceptamos pagos en efectivo, transferencias</strong> y también ofrecemos la opción de pago a través de Mercado Pago. Con esta última opción, tienes la flexibilidad de elegir cuotas según tus necesidades.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                        <strong>¿Las tablas son totalmente personalizables?</strong>
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFour"className="accordion-collapse collapse">
                        <div className="accordion-body">
                        <strong>¡Por supuesto!</strong>, ofrecemos la opción de personalizar las tablas según tus preferencias. Puedes elegir tu propio diseño para que tu tabla sea única. <strong>El proceso de personalización suele tomar alrededor de 4 días hábiles</strong>, asegurando que recibas un producto adaptado a tus gustos de manera rápida y eficiente.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                        <strong>¿Cuánto peso puede soportar la tabla?</strong>
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFive"className="accordion-collapse collapse">
                        <div className="accordion-body">
                        Nuestras tablas están diseñadas para ser capaces de soportar hasta <strong>180 kilogramos sin problemas</strong>, incluso permite la participación de dos personas simultáneamente, sin embargo se recomienda precaución.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
                        <strong>¿Debo retirar mi tabla?</strong>
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseSix"className="accordion-collapse collapse">
                        <div className="accordion-body">
                        <strong>No es necesario, ofrecemos envíos sin cargo en Mar del Plata. Pero si desea acercarse personalmente puede venir a nuestro taller en Punta Mogote,</strong> donde podrá recibir asesoramiento adicional, ver diferentes modelos, probar nuestras tablas y tomar su decisión.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="false" aria-controls="panelsStayOpen-collapseSeven">
                        <strong>¿Hay precauciones a tener en cuenta en el uso de la tabla con los niños?</strong>
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseSeven"className="accordion-collapse collapse">
                        <div className="accordion-body">
                        <strong>Si es su primera vez con una balanceboard</strong>se recomienda que al comenzar use calzado adecuado, evitar movimientos bruscos para evitar accidentes, sujetarse de una superficie firme. <strong>Si es usado por niños, usar bajo la supervisión de un adulto.</strong>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEight" aria-expanded="false" aria-controls="panelsStayOpen-collapseEight">
                        <strong>¿Hay alguna diferencia entre las tablas o sus medidas?</strong>
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseEight"className="accordion-collapse collapse">
                        <div className="accordion-body">
                        <strong>No hay diferencia en la resistencia de una tabla y otra</strong>, todas diseñadas para ofrecer la misma experiencia de alta calidad. <strong>Las distintas formas que ofrecemos son principalmente estéticas.</strong> Todas comparten las dimensiones de 30 cm de ancho y 70 cm de largo, permitiéndote elegir la tabla que se adapte mejor a tus preferencias visuales sin comprometer la calidad de tu entrenamiento.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseNine" aria-expanded="false" aria-controls="panelsStayOpen-collapseNine">
                        <strong>¿De qué material está hecho nuestras tablas?</strong>
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseNine" className="accordion-collapse collapse">
                        <div className="accordion-body">
                        <strong>Nuestras tablas están construidas con madera multilaminada, similar a la utilizada en la fabricación de skateboards</strong>, ofreciendo una resistencia excepcional. Este material proporciona durabilidad y estabilidad durante el uso. El rollo, empleado es de polipropileno de 5,3 mm de espesor y 110 mm de diámetro, asegurando un rendimiento óptimo y una experiencia de deslizamiento suave.
                        </div>
                    </div>
                </div>  
            
                
            </div>
        </div>
    )
}

export default Questions;