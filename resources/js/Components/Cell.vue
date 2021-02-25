<script>
export default {

    props: {
        value: {
            type: Number,
            default: 0,
        }
    },
    name: "cell",
    data() {
        return {
            number: null,
        }
    },

    created() {
        this.initNumber();
    },

    methods: {
        initNumber() {
            this.number = this.value;
        },

        emitValue() {

            const payload = parseFloat(this.number);

            this.$emit('input', payload);

        },
    },
    watch: {
        number(newVal, oldVal)
        {
            if (oldVal !== null)
            {
                this.emitValue();
            }
        }
    }


}
</script>
<template>
    <div class="cell-value">
        <b-field >
            <b-input type="number" v-model="number"  size="is-small" step="0.01" :validation-message="null" >

            </b-input>
        </b-field>
    </div>
</template>

<style scoped>

</style>
