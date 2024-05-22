<template>
    <b-container class="mt-3">
        <b-row class="features-section-g">
            <b-col md="4" class="text-center">
                <b-icon icon="people" variant="primary" font-scale="3"></b-icon>
                <h4>Encuentra Au Pairs</h4>
                <p>Conecta con au pairs de todo el mundo y vive una experiencia intercultural única.</p>
            </b-col>
            <b-col md="4" class="text-center">
                <b-icon icon="house-door" variant="primary" font-scale="3"></b-icon>
                <h4>Familias Anfitrionas</h4>
                <p>Busca familias anfitrionas que te den la bienvenida y te ofrezcan un hogar en el extranjero.</p>
            </b-col>
            <b-col md="4" class="text-center">
                <b-icon icon="globe" variant="primary" font-scale="3"></b-icon>
                <h4>21 Países</h4>
                <p>Descubre programas de au pair en 21 países diferentes y encuentra el destino perfecto para ti.</p>
            </b-col>

        </b-row>
        <b-row class="feeatures-section-b mt-5">
            <strong style="font-size: 36px;">¿Que obtienes?</strong>
            <b-col cols="6" class="mt-5 ">
                <ul class="mt-3 nav flex-column">
                    <li class="listicon d-flex"> <b-icon icon="check-lg"></b-icon>
                        <p class="ms-3">La seleccón más grande de au pairs y familias de internet</p>
                    </li>
                    <li class="listicon d-flex"><b-icon icon="check-lg"></b-icon>
                        <p class="ms-3">Contacto inmediato despues del registro</p>
                    </li>
                    <li class="listicon d-flex"><b-icon icon="check-lg"></b-icon>
                        <p class="ms-3">Búsqueda facil basada en sus propias preferencias</p>
                    </li>
                </ul>
            </b-col>
            <b-col cols="6" class="mt-5">
                <ul class="mt-3 nav flex-column">
                    <li class="listicon d-flex"> <b-icon icon="check-lg"></b-icon>
                        <p class="ms-3">La seleccón más grande de au pairs y familias de internet</p>
                    </li>
                    <li class="listicon d-flex"><b-icon icon="check-lg"></b-icon>
                        <p class="ms-3">Contacto inmediato despues del registro</p>
                    </li>
                    <li class="listicon d-flex"><b-icon icon="check-lg"></b-icon>
                        <p class="ms-3">Búsqueda facil basada en sus propias preferencias</p>
                    </li>
                </ul>
            </b-col>
        </b-row>
        <b-row class="mt-5">
            <b-col>
                <div>
                    <b-card class="text-center">
                        <div class="">
                            Más de 2,4 millones de clientes han hecho AuPairClick la agencia de au pair más popular y más confiable en Internet.
                        </div>
                    </b-card>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
}
</script>

<style scoped>
.listicon {
    list-style-type: none;
}

.listicon p {
    color: #5A5753;
    font-weight: bold;
}

.features-section-g {
    background-color: #f8f9fa;
    padding: 2rem 0;

}

.features-section-color {
    background-color: #6c757d;
    padding: 2px;
    align-items: center;
}

.features-section-color p {
    color: white;
}

.features-section-b {
    background-color: wheat;
    padding: 2rem 0;
    height: 500px;
    align-items: center;
}

h4 {
    margin-top: 1rem;
    font-weight: semibold;
}

p {
    color: #6c757d;
}
</style>