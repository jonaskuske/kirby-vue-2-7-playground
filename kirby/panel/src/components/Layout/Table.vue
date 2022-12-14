<template>
	<table
		class="k-table"
		:data-disabled="disabled"
		:data-indexed="hasIndexColumn"
	>
		<!-- Header row -->
		<thead>
			<tr>
				<th v-if="hasIndexColumn" data-mobile class="k-table-index-column">
					#
				</th>

				<th
					v-for="(column, columnIndex) in columns"
					:key="columnIndex + '-header'"
					:data-mobile="column.mobile"
					:style="'width:' + width(column.width)"
					class="k-table-column"
					@click="
						onHeader({
							column,
							columnIndex
						})
					"
				>
					<slot
						name="header"
						v-bind="{
							column,
							columnIndex,
							label: label(column, columnIndex)
						}"
					>
						{{ label(column, columnIndex) }}
					</slot>
				</th>

				<th v-if="hasOptions" data-mobile class="k-table-options-column"></th>
			</tr>
		</thead>

		<k-draggable
			:list="values"
			:options="dragOptions"
			:handle="true"
			element="tbody"
			@change="onChange"
			@end="onSort"
		>
			<!-- Empty -->
			<tr v-if="rows.length === 0">
				<td :colspan="columnsCount" class="k-table-empty">
					{{ empty }}
				</td>
			</tr>

			<!-- Rows -->
			<tr v-for="(row, rowIndex) in values" v-else :key="rowIndex">
				<!-- Index & drag handle -->
				<td
					v-if="hasIndexColumn"
					:data-sortable="sortable && row.sortable !== false"
					data-mobile
					class="k-table-index-column"
				>
					<slot
						name="index"
						v-bind="{
							row,
							rowIndex
						}"
					>
						<div class="k-table-index" v-text="index + rowIndex" />
					</slot>

					<k-sort-handle
						v-if="sortable && row.sortable !== false"
						class="k-table-sort-handle"
					/>
				</td>

				<!-- Cell -->
				<k-table-cell
					v-for="(column, columnIndex) in columns"
					:key="rowIndex + '-' + columnIndex"
					:column="column"
					:field="fields[columnIndex]"
					:row="row"
					:mobile="column.mobile"
					:value="row[columnIndex]"
					:style="'width:' + width(column.width)"
					class="k-table-column"
					@click.native="
						onCell({
							row,
							rowIndex,
							column,
							columnIndex
						})
					"
					@input="
						onCellUpdate({
							columnIndex,
							rowIndex,
							value: $event
						})
					"
				/>

				<!-- Options -->
				<td v-if="hasOptions" data-mobile class="k-table-options-column">
					<slot name="options" v-bind="{ row, rowIndex, options }">
						<k-options-dropdown
							:options="row.options || options"
							:text="(row.options || options).length > 1"
							@option="onOption($event, row, rowIndex)"
						/>
					</slot>
				</td>
			</tr>
		</k-draggable>
	</table>
</template>

<script>
/**
 * A simple table component with columns and rows
 * @public
 */
export default {
	inheritAttrs: false,
	props: {
		/**
		 * Configuration which columns to include.
		 * Supported keys: after, before, label, type, width
		 * @example { title: { label: "title", type: "text" } }
		 */
		columns: Object,
		/**
		 * Whether table is disabled
		 */
		disabled: Boolean,
		/**
		 * Optional fields configuration that can be used as columns
		 * (used for our structure field)
		 */
		fields: {
			type: Object,
			default: () => ({})
		},
		/**
		 * Text to be shown when table has no rows
		 */
		empty: String,
		/**
		 * Index number for first row
		 */
		index: {
			type: [Number, Boolean],
			default: 1
		},
		/**
		 * Array of table rows
		 */
		rows: Array,
		/**
		 * What options to include in dropdown
		 */
		options: [Array, Function],
		/**
		 * Whether table is sortable
		 */
		sortable: Boolean
	},
	data() {
		return {
			values: this.rows
		};
	},
	computed: {
		/**
		 * Number of columns
		 * @returns {number}
		 */
		columnsCount() {
			return Object.keys(this.columns).length;
		},
		/**
		 * Config options for `k-draggable`
		 * @returns {Object}
		 */
		dragOptions() {
			return {
				disabled: !this.sortable,
				fallbackClass: "k-table-row-fallback",
				ghostClass: "k-table-row-ghost"
			};
		},
		/**
		 * Whether to show index column
		 * @returns {bool}
		 */
		hasIndexColumn() {
			return this.sortable || this.index !== false;
		},
		/**
		 * Whether to show options column
		 * @returns {bool}
		 */
		hasOptions() {
			return (
				this.options ||
				Object.values(this.values).filter((row) => row.options).length > 0
			);
		}
	},
	watch: {
		rows() {
			this.values = this.rows;
		}
	},
	methods: {
		/**
		 * Checks if specific column is fully empty
		 * @param {number} columnIndex
		 * @returns {bool}
		 */
		isColumnEmpty(columnIndex) {
			return (
				this.rows.filter(
					(row) => this.$helper.object.isEmpty(row[columnIndex]) === false
				).length === 0
			);
		},
		/**
		 * Returns label for a column
		 * @param {Object} column
		 * @param {number} columnIndex
		 * @returns {string}
		 */
		label(column, columnIndex) {
			return column.label || this.$helper.string.ucfirst(columnIndex);
		},
		/**
		 * When the table has been sorted,
		 * emit changed item with event details
		 */
		onChange(event) {
			this.$emit("change", event);
		},
		/**
		 * When a table cell is clicked
		 * @param {mixed} params
		 */
		onCell(params) {
			this.$emit("cell", params);
		},
		/**
		 * When a cell updates (via inline editing)
		 * @param {Object} object with column index, row index and new value
		 */
		onCellUpdate({ columnIndex, rowIndex, value }) {
			this.values[rowIndex][columnIndex] = value;
			this.$emit("input", this.values);
		},
		/**
		 * When a header cell is clicked
		 * @param {mixed} params
		 */
		onHeader(params) {
			this.$emit("header", params);
		},
		/**
		 * When an option from the dropdown is engaged
		 * @param {string} option
		 * @param {Object} row
		 * @param {number} rowIndex
		 */
		onOption(option, row, rowIndex) {
			this.$emit("option", option, row, rowIndex);
		},
		/**
		 * When the table has been sorted,
		 * emit all items in new order
		 */
		onSort() {
			this.$emit("input", this.values);
			this.$emit("sort", this.values);
		},
		/**
		 * Returns width styling based on column fraction
		 * @param {string} fraction
		 */
		width(fraction) {
			if (typeof fraction !== "string") {
				return "auto";
			}

			if (fraction.includes("/") === false) {
				return fraction;
			}

			return this.$helper.ratio(fraction, "auto", false);
		}
	}
};
</script>

<style>
/** Table Layout **/
.k-table {
	--table-row-height: 38px;
	position: relative;
	table-layout: fixed;
	width: 100%;
	background: var(--color-white);
	font-size: var(--text-sm);
	border-spacing: 0;
	box-shadow: var(--shadow);
	border-radius: var(--rounded);
	font-variant-numeric: tabular-nums;
}

/** Cells **/
.k-table th,
.k-table td {
	height: var(--table-row-height);
	overflow: hidden;
	text-overflow: ellipsis;
	width: 100%;
	border-inline-end: 1px solid var(--color-background);
	line-height: 1.25em;
}

.k-table th:first-child {
	border-start-start-radius: var(--rounded);
}
.k-table th:last-child {
	border-start-end-radius: var(--rounded);
}
.k-table th:last-child,
.k-table td:last-child {
	height: var(--table-row-height);
	border-inline-end: 0;
}

.k-table th,
.k-table tr:not(:last-child) td {
	border-bottom: 1px solid var(--color-background);
}

.k-table td:last-child {
	overflow: visible;
}

[dir="ltr"] .k-table th,
[dir="ltr"] .k-table td {
	border-right: 1px solid var(--color-background);
}

[dir="rtl"] .k-table th,
[dir="rtl"] .k-table td {
	border-left: 1px solid var(--color-background);
}

.k-table tbody tr:hover td {
	background: rgba(239, 239, 239, 0.25);
}

/* Text aligment */
.k-table-column[data-align] {
	text-align: var(--align);
}
.k-table-column[data-align="right"] > .k-input {
	flex-direction: column;
	align-items: flex-end;
}

/** Sticky header **/
.k-table th {
	position: sticky;
	top: 0;
	inset-inline: 0;
	width: 100%;
	padding: 0 0.75rem;
	z-index: 1;
	font-family: var(--font-mono);
	font-size: var(--text-xs);
	font-weight: 400;
	color: var(--color-gray-600);
	background: var(--color-gray-100);
	text-align: start;
}
[dir="ltr"] .k-table th {
	text-align: left;
}

[dir="rtl"] .k-table th {
	text-align: right;
}
.k-table th::after {
	content: "";
	position: absolute;
	top: 100%;
	left: 0;
	right: 0;
	height: 0.5rem;
	background: linear-gradient(to bottom, rgba(#000, 0.05), rgba(#000, 0));
	z-index: 2;
}

.k-table-index,
.k-table .k-sort-handle {
	display: grid;
	place-items: center;
	width: 100%;
	height: var(--table-row-height);
}

/** Sort handle */
.k-table .k-sort-handle,
.k-table tr:hover .k-table-index-column[data-sortable="true"] .k-table-index {
	display: none;
}
.k-table tr:hover .k-sort-handle {
	display: grid !important;
}

.k-table-row-ghost {
	background: var(--color-white);
	box-shadow: rgba(17, 17, 17, 0.25) 0 5px 10px;
	outline: 2px solid var(--color-focus);
	margin-bottom: 2px;
	cursor: grabbing;
	cursor: -moz-grabbing;
	cursor: -webkit-grabbing;
}

.k-table-row-fallback {
	opacity: 0 !important;
}

/** Index column **/
th.k-table-index-column,
td.k-table-index-column,
th.k-table-options-column,
td.k-table-options-column {
	width: var(--table-row-height);
	text-align: center !important;
}
.k-table-index {
	font-size: var(--text-xs);
	color: var(--color-gray-500);
	line-height: 1.1em;
}

/** Empty */
.k-table-empty {
	color: var(--color-gray-600);
	font-size: var(--text-sm);
}

/** Disabled */
[data-disabled="true"] .k-table {
	background: var(--color-background);
}
[data-disabled="true"] .k-table th,
[data-disabled="true"] .k-table td {
	background: var(--color-background);
	border-bottom: 1px solid var(--color-border);
	border-inline-end: 1px solid var(--color-border);
}
[data-disabled="true"] .k-table td:last-child {
	overflow: hidden;
	text-overflow: ellipsis;
}

/** Mobile */
@media screen and (max-width: 65em) {
	.k-table td:not([data-mobile]),
	.k-table th:not([data-mobile]) {
		display: none;
	}
}
</style>
