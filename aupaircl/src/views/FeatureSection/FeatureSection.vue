<template>
    <div class="mt-3">
        <section class="features-section-g mt-3">
            <b-row>
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
                    <p>Descubre programas de au pair en 21 países diferentes y encuentra el destino perfecto para ti.
                    </p>
                </b-col>

            </b-row>
        </section>
        <b-container>
            <b-row class="features-section-b mt-3">
            <strong style="font-size: 36px;">¿Qué obtienes?</strong>
            <b-col cols="6" class="mt-3 ms-5">
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
            <b-col cols="5" class="mt-3">
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
        </b-container>

        <b-row class="mt-3 mb-3 features-section-b">
            <b-col>
                <div>
                    <b-card class="text-center">
                        <div class="">
                            Más de 2,4 millones de clientes han hecho AuPairClick la agencia de au pair más popular y
                            más confiable en Internet.
                        </div>
                    </b-card>
                </div>
            </b-col>
        </b-row>
        <FeatureFuction />
        <FeatureIdea />
    </div>
</template>

<script>
import FeatureFuction from '../FeatureFuction/FeatureFuction.vue';
import FeatureIdea from '../FeatureIdea/FeatureIdea.vue';
export default {
    components: {
        FeatureFuction,
        FeatureIdea,
    }
}
</script>

<style scoped>
h4 {
    margin-top: 1rem;
    font-weight: semibold;
}

p {
    color: #6c757d;
}
</style>