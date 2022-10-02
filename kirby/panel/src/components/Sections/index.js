import VueGlobalMethods from "@/config/VueGlobalMethods";
import Sections from "@/components/Sections/Sections.vue";

VueGlobalMethods.component("k-sections", Sections);

/* Section Types */
import FieldsSection from "@/components/Sections/FieldsSection.vue";
import FilesSection from "@/components/Sections/FilesSection.vue";
import InfoSection from "@/components/Sections/InfoSection.vue";
import PagesSection from "@/components/Sections/PagesSection.vue";
import StatsSection from "@/components/Sections/StatsSection.vue";

VueGlobalMethods.component("k-fields-section", FieldsSection);
VueGlobalMethods.component("k-files-section", FilesSection);
VueGlobalMethods.component("k-info-section", InfoSection);
VueGlobalMethods.component("k-pages-section", PagesSection);
VueGlobalMethods.component("k-stats-section", StatsSection);
