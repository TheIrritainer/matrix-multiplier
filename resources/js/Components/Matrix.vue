<script>
import Cell from "./Cell";

export default {

    props: {
        value: {
            type: Array,
            default: [],
        },

        readonly: {
            type: Boolean,
            default: false,
        }

    },
    components: {Cell},
    name: "matrix",
    data() {

        return {
            grid: null,

            colLength: 0,
            rowLength: 0,
        }
    },

    created() {
        this.initGrid();
    },

    methods: {

        initGrid() {
            this.grid = this.value;

            this.rowLength = this.grid.length;
            if (this.rowLength > 0) {
                this.colLength = this.grid[0].length;
            }

        },

        emitGrid() {

            this.$emit('input', this.grid);
        },

        toExcelLetters(number) {

            let colName = ''
            let dividend = Math.floor(Math.abs(number));
            let rest;

            const charA = "A".charCodeAt(0);

            while (dividend > 0) {
                rest = (dividend - 1) % 26;
                colName = String.fromCharCode(charA + rest) + colName;
                dividend = parseInt((dividend - rest) / 26);
            }
            return colName;

        },

        addColumn()
        {
            for(let i in this.grid)
            {
                this.grid[i].push(0);
            }

            this.colLength = this.grid[0].length;
        },

        canRemoveRow() {
            return this.rowLength > 1;
        },

        removeRow()
        {
            this.grid.pop();

            this.rowLength = this.grid.length;
        },

        addRow()
        {
            const newRow = Array(this.colLength).fill(0);

            this.grid.push(newRow);

            this.rowLength = this.grid.length;
        },

        canRemoveColumn()
        {
            return this.colLength > 1;
        },

        removeColumn()
        {
            if (! this.canRemoveColumn()) {
                return;
            }

            for(let i in this.grid) {
                this.grid[i].pop();
            }

            this.colLength = this.grid[0].length;
        }

    },
    watch: {
        grid: {
            deep: true,
            handler: function (newVal, oldVal) {
                if (oldVal !== null) {
                    this.emitGrid();
                }
            },

        }
    }

}
</script>
<template>
    <div>
        <div class="flex-grid">

            <div class="grid-row">
                <div v-if="! readonly">
                    <div class="button-remove-column" :class="{disabled: ! canRemoveColumn()}" @click="removeColumn()"><b-icon pack="fas" icon="minus-circle" ></b-icon></div>
                    <div class="button-add-column"  @click="addColumn()"><b-icon pack="fas" icon="plus-circle"></b-icon></div>
                </div>
                <div class="row-head"></div>
                <div class="row-head" v-for="colNr in colLength"><em>{{ toExcelLetters(colNr) }}</em></div>
            </div>
            <div class="grid-row" v-for="(notUsedRow, rowIndex) in value">

                <div class="row-head">{{ rowIndex + 1 }}</div>
                <div class="row-cell" v-for="(notUsedCol, colIndex) in value[rowIndex]">
                    <cell :readonly="readonly" v-model="grid[rowIndex][colIndex]"/>
                </div>
            </div>
            <div v-if="! readonly" class="grid-row">
                <div class="button-remove-row" :class="{disabled: ! canRemoveRow()}" @click="removeRow()"><b-icon pack="fas" icon="minus-circle" ></b-icon></div>
                <div class="button-add-row"  @click="addRow()"><b-icon pack="fas" icon="plus-circle"></b-icon></div>
            </div>

        </div>
    </div>
</template>

<style scoped>

</style>
