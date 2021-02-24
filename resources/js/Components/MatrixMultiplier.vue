<script>

import Matrix from "./Matrix";

export default {
    name: "matrix-multiplier",
    components: {Matrix},
    data() {
        return {
            hasError: false,

            leftMatrix: null,
            topMatrix: null,
            resultMatrix: null,


        }

    },

    created() {
        this.initMatrices();
    },

    methods: {
        initMatrices() {
            this.topMatrix = this.createMatrix(3, 3);
            this.leftMatrix = this.createMatrix(3, 3);
        },


        createMatrix(rows, cols) {

            const result = [];
            for(let i = 0; i < rows; ++i)
            {
                let resultRow = [];
                for(let j = 0; j < cols; ++j)
                {
                    resultRow.push(0);
                }

                result.push(resultRow);
            }

            return result;
        },

        multiplyMatrix() {

            const payload = {
                left: this.leftMatrix,
                top: this.topMatrix
            };

            this.hasError = false;
            this.resultMatrix = null;

            axios.post('/api/multiplier', payload).then((response) => {

                this.resultMatrix = response.data.result;

            }).catch((reason) => {
                this.hasError = true;

                this.processErrorResponse(reason.response.data);

            })

        },

        processErrorResponse(responseData)
        {
            let message = responseData.message;

            if (responseData.errors) {
                message += ': ' + this.getFirstExplanation(responseData.errors)
            }

            this.$buefy.toast.open({
                message: message,
                type: 'is-danger'
            });
        },

        getFirstExplanation(errors)
        {
            return errors[Object.keys(errors)[0]];
        }

    },

    watch: {

        leftMatrix: {
            handler: function(newVal, oldVal)
            {
                if (oldVal !== null)
                {
                    this.multiplyMatrix();
                }
            },
            deep: true,
        },


        topMatrix: {
            handler: function(newVal, oldVal)
            {
                if (oldVal !== null)
                {
                    this.multiplyMatrix();
                }
            },
            deep: true,
        },
    }

}
</script>
<template>
    <div>
        <h1> Matrix multiplier</h1>

        <div class="columns matrix-quadrant">
            <div class="column is-6 matrix-cell">
                <img src="/img/morpheus.svg" class="matrix-image"/>
            </div>
            <div class="column is-6 matrix-cell top-matrix">
                <h4>Top matrix</h4>
                <div v-if="topMatrix">
                    <matrix v-model="topMatrix"></matrix>
                </div>

            </div>
        </div>
        <div class="columns matrix-quadrant">
            <div class="column is-6 matrix-cell left-matrix">
                <h4>Left matrix</h4>
                <div v-if="leftMatrix">
                    <matrix v-model="leftMatrix"></matrix>
                </div>


            </div>
            <div class="column is-6 matrix-cell result-matrix ">
                <div v-if="hasError">
                    <img src="/img/robot.svg" class="error-image"/>
                </div>
                <div v-if="resultMatrix">
                    <h4>Result matrix</h4>
                    <matrix v-model="resultMatrix" :readonly="true"></matrix>
                </div>

            </div>

        </div>
    </div>
</template>
<style scoped>

</style>
