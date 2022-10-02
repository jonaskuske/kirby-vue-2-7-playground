import VueGlobalMethods from "@/config/VueGlobalMethods.js";

// main components
import Block from "./Block.vue";
import Blocks from "./Blocks.vue";

VueGlobalMethods.component("k-block", Block);
VueGlobalMethods.component("k-blocks", Blocks);

// helper components
import BlockFigure from "./BlockFigure.vue";
import BlockOptions from "./BlockOptions.vue";
import BlockSelector from "./BlockSelector.vue";
import BlockTitle from "./BlockTitle.vue";
import BlockType from "./BlockType.vue";

VueGlobalMethods.component("k-block-figure", BlockFigure);
VueGlobalMethods.component("k-block-options", BlockOptions);
VueGlobalMethods.component("k-block-selector", BlockSelector);
VueGlobalMethods.component("k-block-title", BlockTitle);
VueGlobalMethods.component("k-block-type", BlockType);

// block types
const components = import.meta.glob("./Types/*.vue", { eager: true });

Object.keys(components).map((key) => {
	// get name and type by filename
	const name = key.match(/\/([a-zA-Z]*)\.vue/)[1];
	const type = name.toLowerCase();

	// load the component
	let component = components[key].default;

	// extend the component with the block abstract
	component.extends = BlockType;

	// globally define the block type component
	VueGlobalMethods.component("k-block-type-" + type, component);
});
