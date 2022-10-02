import VueGlobalMethods from "@/config/VueGlobalMethods.js";

/* Form Field Previews */
import ArrayFieldPreview from "./ArrayFieldPreview.vue";
import BubblesFieldPreview from "./BubblesFieldPreview.vue";
import DateFieldPreview from "./DateFieldPreview.vue";
import EmailFieldPreview from "./EmailFieldPreview.vue";
import FilesFieldPreview from "./FilesFieldPreview.vue";
import FlagFieldPreview from "./FlagFieldPreview.vue";
import HtmlFieldPreview from "./HtmlFieldPreview.vue";
import ImageFieldPreview from "./ImageFieldPreview.vue";
import PagesFieldPreview from "./PagesFieldPreview.vue";
import TextFieldPreview from "./TextFieldPreview.vue";
import TimeFieldPreview from "./TimeFieldPreview.vue";
import ToggleFieldPreview from "./ToggleFieldPreview.vue";
import UrlFieldPreview from "./UrlFieldPreview.vue";
import UsersFieldPreview from "./UsersFieldPreview.vue";

VueGlobalMethods.component("k-array-field-preview", ArrayFieldPreview);
VueGlobalMethods.component("k-bubbles-field-preview", BubblesFieldPreview);
VueGlobalMethods.component("k-date-field-preview", DateFieldPreview);
VueGlobalMethods.component("k-email-field-preview", EmailFieldPreview);
VueGlobalMethods.component("k-files-field-preview", FilesFieldPreview);
VueGlobalMethods.component("k-flag-field-preview", FlagFieldPreview);
VueGlobalMethods.component("k-html-field-preview", HtmlFieldPreview);
VueGlobalMethods.component("k-image-field-preview", ImageFieldPreview);
VueGlobalMethods.component("k-pages-field-preview", PagesFieldPreview);
VueGlobalMethods.component("k-text-field-preview", TextFieldPreview);
VueGlobalMethods.component("k-toggle-field-preview", ToggleFieldPreview);
VueGlobalMethods.component("k-time-field-preview", TimeFieldPreview);
VueGlobalMethods.component("k-url-field-preview", UrlFieldPreview);
VueGlobalMethods.component("k-users-field-preview", UsersFieldPreview);

/** Extensions **/
VueGlobalMethods.component("k-list-field-preview", HtmlFieldPreview);
VueGlobalMethods.component("k-writer-field-preview", HtmlFieldPreview);

VueGlobalMethods.component("k-checkboxes-field-preview", BubblesFieldPreview);
VueGlobalMethods.component("k-multiselect-field-preview", BubblesFieldPreview);
VueGlobalMethods.component("k-radio-field-preview", BubblesFieldPreview);
VueGlobalMethods.component("k-select-field-preview", BubblesFieldPreview);
VueGlobalMethods.component("k-tags-field-preview", BubblesFieldPreview);
VueGlobalMethods.component("k-toggles-field-preview", BubblesFieldPreview);
