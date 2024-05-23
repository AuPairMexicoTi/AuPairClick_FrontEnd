<template>
    <div class="mt-5 border-top">
        <b-container>
            <b-card class="p-4" border-variant="light">
                <b-row>
                    <!-- Tienes alguna pregunta -->
                    <b-col md="6" class="d-flex flex-column justify-content-center align-items-center"
                        data-aos="fade-right">
                        <div class="question-card p-4 text-center">
                            <h2>{{ $t('questions') }}</h2>
                            <p>
                                <b>{{ $t('teamAupaircl') }}</b> {{ $t('teamContacts') }}</p>
                            <b-button variant="primary" href="/contacto">{{ $t('btnContact') }}</b-button>
                        </div>
                    </b-col>

                    <!-- Filosofía del programa Au Pair -->
                    <b-col md="6" class="d-flex flex-column justify-content-center align-items-center"
                        data-aos="fade-left">
                        <div class="philosophy-card p-4 text-center">
                            <h2>{{$t('filosofy')}}</h2>
                            <strong>{{ $t('requirementsQuestion') }}</strong>
                            <p>
                                {{ $t('aspectsQuestion') }}    
                            </p>
                        </div>
                    </b-col>
                </b-row>
            </b-card>
        </b-container>
    </div>
</template>

<script>

export default {

};
</script>

<style scoped>
.question-card {
    background-color: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 1rem;
}

.philosophy-card {
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 1rem;
}

h2 {
    font-size: 1.75rem;
    font-weight: bold;
    margin-bottom: 1rem;
}

p {
    font-size: 1rem;
    color: #6c757d;
    margin-bottom: 1.5rem;
}

b-button {
    font-size: 1.1rem;
    padding: 0.75rem 1.5rem;
}
</style>